'use strict';
const fs = require('fs');
const path = require('path');
const pb = require('protobufjs');
const root = new pb.Root();
root.resolvePath = (_, file) =>
	path.join(
		__dirname,
		'../protobufs',
		path.basename(file) === 'descriptor.proto' ? 'google/protobuf/descriptor.proto' : path.basename(file)
	);
root
	.loadSync(
		['cstrike15_gcmessages.proto', 'gcsdk_gcmessages.proto', 'base_gcmessages.proto', 'econ_gcmessages.proto'],
		{ keepCase: true }
	)
	.resolveAll();
const schema = {};
function visit(type) {
	const name = type.fullName.slice(1);
	if (schema[name]) return name;
	const fields = (schema[name] = {});
	for (const field of type.fieldsArray) {
		const nested = field.resolvedType instanceof pb.Type ? visit(field.resolvedType) : null;
		const wire =
			nested || ['string', 'bytes'].includes(field.type)
				? 2
				: ['double', 'fixed64', 'sfixed64'].includes(field.type)
					? 1
					: ['float', 'fixed32', 'sfixed32'].includes(field.type)
						? 5
						: 0;
		fields[field.id] = [wire, nested, !!field.repeated && wire !== 2, field.type];
	}
	return name;
}
const source = ['../handlers.js', '../lib/inspect-link.js']
	.map((file) => fs.readFileSync(path.join(__dirname, file), 'utf8'))
	.join('\n')
	.replace(/\/\*[\s\S]*?\*\//g, '');
for (const match of source.matchAll(/decodeProto\(Protos\.(\w+)/g)) visit(root.lookupType(match[1]));
fs.writeFileSync(path.join(__dirname, '../lib/wire-schema.json'), JSON.stringify(schema) + '\n');
