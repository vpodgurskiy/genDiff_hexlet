install: instal-deps install-flow
	npm install

instal-deps:
	npm install

install-flow:
	npm run flow-typed install

start:
	npm run babel-node -- src/bin/gendiff.js

publish:
	npm publish

lint:
	npm run eslint .

check-types:
	npm run flow

build:
	npm run-script build

test:
	npm test

debug-tree:
	npm run babel-node -- src/bin/gendiff.js --format tree __tests__/__fixtures__/beforeOfTree.json __tests__/__fixtures__/after.json

debug-plain:
	npm run babel-node -- src/bin/gendiff.js --format plain __tests__/__fixtures__/beforeOfTree.json __tests__/__fixtures__/afterOfTree.json

watch:
	npm test -- --watch

watchAll:
	npm test -- --watchAll
