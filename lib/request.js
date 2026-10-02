'use strict';

class RequestError extends Error {
	constructor(code, message, uncertain = false) {
		super(message);
		this.name = 'RequestError';
		this.code = code;
		this.uncertain = uncertain;
	}
}

// One active request per correlation key. Subscribe before sending, including
// transports that deliver a response synchronously from sendToGC.
function request(client, options, callback) {
	client._requestQueues = client._requestQueues || new Map();
	client._pendingRequests = client._pendingRequests || new Set();
	client._uncertainKeys = client._uncertainKeys || new Set();
	const promise = new Promise((resolve, reject) => {
		let done = false;
		let sent = false;
		let started = false;
		let timer;
		const queue = client._requestQueues.get(options.key) || [];
		client._requestQueues.set(options.key, queue);
		const finish = (error, value) => {
			if (done) return;
			done = true;
			clearTimeout(timer);
			client.removeListener(options.event, listener);
			client._pendingRequests.delete(cancel);
			if (error && sent) client._uncertainKeys.add(options.key);
			queue.splice(queue.indexOf(start), 1);
			if (!queue.length) client._requestQueues.delete(options.key);
			// Do not install the next listener within the current event dispatch.
			else queueMicrotask(queue[0]);
			if (callback) callback(error || null, value);
			else if (error) reject(error);
			else resolve(value);
		};
		const cancel = (code) =>
			finish(new RequestError(code, `Request ${code.toLowerCase()}`, sent && !!options.mutation));
		const listener = (...args) => {
			if (!options.match || options.match(...args)) finish(null, options.map ? options.map(...args) : args[0]);
		};
		const start = () => {
			if (done || started) return;
			started = true;
			if (client._disposed) return cancel('DISPOSED');
			if (client._uncertainKeys.has(options.key)) return cancel('UNCERTAIN_PREVIOUS_RESULT');
			client.on(options.event, listener);
			timer = setTimeout(() => {
				finish(new RequestError('TIMEOUT', options.message, sent && !!options.mutation));
				if (options.onTimeout) options.onTimeout();
			}, options.timeout);
			try {
				sent = true;
				if (options.send() === false) {
					sent = false;
					cancel('NOT_CONNECTED');
				}
			} catch (error) {
				finish(new RequestError('SEND_FAILED', error.message, !!options.mutation));
			}
		};
		queue.push(start);
		client._pendingRequests.add(cancel);
		if (queue.length === 1) start();
	});
	return callback ? undefined : promise;
}

module.exports = { request, RequestError };
