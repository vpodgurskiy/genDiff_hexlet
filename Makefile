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