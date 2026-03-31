# NPM Publishing Instructions

## Prerequisites

1. **NPM Account**: Make sure you have an npm account
   - Sign up at: https://www.npmjs.com/signup
   - Or login: `npm login`

2. **Package Name**: Verify the package name `node-cs2` is available
   - Check: https://www.npmjs.com/package/node-cs2
   - If taken, you may need to use a scoped package: `@yourusername/node-cs2`

## Pre-Publishing Checklist

### 1. Update Version Number

```bash
# Check current version in package.json
cat package.json | grep version

# Update version (choose one):
# Patch version (bug fixes): 2.0.1 -> 2.0.2
# Minor version (new features): 2.0.1 -> 2.1.0
# Major version (breaking changes): 2.0.1 -> 3.0.0
```

**Recommended**: Since we added new features (crate opening, sticker/patch/keychain operations), use a **minor version bump**:

- Current: `2.1.0`
- New: `2.2.0` (new features: crate opening, sticker operations, patch operations, keychain operations)

### 2. Update package.json Version

Edit `package.json` and change:

```json
"version": "2.2.0"
```

### 3. Update Description (Optional)

You can update the description to reflect new features:

```json
"description": "Modern CS2/CS:GO Game Coordinator integration with latest GameTracking-CS2 protobuf definitions. Includes support for highlight_reel, wrapped_sticker, variations, Promise-based API, crate opening, sticker/patch/keychain operations, and all modern CS2 fields."
```

### 4. Test Locally

```bash
# Make sure everything works
npm test  # if you have tests
node -e "require('./index.js')"  # basic syntax check
```

### 5. Check Files to Publish

Verify the `files` array in `package.json` includes all necessary files:

```json
"files": [
  "index.js",
  "handlers.js",
  "enums.js",
  "language.js",
  "protobufs/generated/",
  "README.md",
  "LICENSE"
]
```

## Publishing Steps

### Step 1: Login to NPM

```bash
npm login
# Enter your username, password, and email
# If you have 2FA enabled, enter the OTP
```

### Step 2: Verify You're Logged In

```bash
npm whoami
# Should display your npm username
```

### Step 3: Check Package Name Availability

```bash
npm view node-cs2
# If it shows package info, the name is taken
# If it shows 404, the name is available
```

### Step 4: Build/Prepare (if needed)

```bash
# Regenerate protobufs (if you updated .proto files)
npm run generate-protos

# Make sure generated files are up to date
ls protobufs/generated/
```

### Step 5: Dry Run (Test without publishing)

```bash
npm publish --dry-run
# This shows what would be published without actually publishing
```

### Step 6: Publish to NPM

```bash
# Publish to npm
npm publish

# If using a scoped package (e.g., @yourusername/node-cs2):
npm publish --access public
```

### Step 7: Verify Publication

```bash
# Check if package is published
npm view node-cs2

# Or visit: https://www.npmjs.com/package/node-cs2
```

## Post-Publishing

### 1. Create Git Tag (Recommended)

```bash
# Tag the release
git tag v2.2.0
git push origin v2.2.0

# Or with message
git tag -a v2.2.0 -m "Release v2.2.0: Added crate opening, sticker/patch/keychain operations"
git push origin v2.2.0
```

### 2. Update GitHub Release (if applicable)

- Go to your GitHub repository
- Create a new release
- Tag: `v2.2.0`
- Title: `v2.2.0 - Crate Opening & Item Customization Operations`
- Description: List of changes

### 3. Update README (if needed)

- Add changelog section
- Update version badges if applicable

## Troubleshooting

### Error: "You do not have permission to publish"

- Make sure you're logged in: `npm whoami`
- Check if package name is taken by someone else
- Use a scoped package: `@yourusername/node-cs2`

### Error: "Package name already exists"

- The package name `node-cs2` might be taken
- Options:
  1. Use a scoped package: `@yourusername/node-cs2`
  2. Contact the owner of `node-cs2` (if it exists)
  3. Use a different name

### Error: "Invalid package.json"

- Check JSON syntax: `node -e "JSON.parse(require('fs').readFileSync('package.json'))"`
- Verify all required fields are present

### Error: "Files array is missing required files"

- Check the `files` array in `package.json`
- Make sure all necessary files are listed

## Version Bump Guide

- **Patch** (2.0.1 → 2.0.2): Bug fixes, no new features
- **Minor** (2.0.1 → 2.1.0): New features, backward compatible
- **Major** (2.0.1 → 3.0.0): Breaking changes

**For this release**: Use **Minor** (2.2.0) because:

- ✅ Added crate opening functionality (new feature)
- ✅ Added sticker operations (new features)
- ✅ Added patch operations (new features)
- ✅ Added keychain operations (new features)
- ✅ All changes are backward compatible

## Quick Command Reference

```bash
# Login
npm login

# Check current user
npm whoami

# Check package
npm view node-cs2

# Dry run
npm publish --dry-run

# Publish
npm publish

# Update version (using npm)
npm version patch   # 2.0.1 -> 2.0.2
npm version minor   # 2.0.1 -> 2.1.0
npm version major   # 2.0.1 -> 3.0.0
```

## Notes

- **First time publishing?** Make sure the package name is unique
- **Scoped packages** require `--access public` flag
- **2FA enabled?** You'll need to enter OTP during login
- **Private packages** require a paid npm account
