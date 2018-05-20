import fs from 'fs';
import genDiff from '../src';

const result = '__tests__/__fixtures__/result.txt';
const resultOfTree = '__tests__/__fixtures__/resultOfTree.txt';
const resultOfPlain = '__tests__/__fixtures__/resultOfPlain.txt';

const renderTypeTree = 'tree';
const renderTypePlain = 'plain';

const pathToFileBeforeJSON = '__tests__/__fixtures__/before.json';
const pathToFileAfterJSON = '__tests__/__fixtures__/after.json';

test('genDiff renderTree for JSON', () => {
  expect(genDiff(pathToFileBeforeJSON, pathToFileAfterJSON, renderTypeTree)).toBe(fs.readFileSync(result, 'utf8'));
});

const pathToFileBeforeYML = '__tests__/__fixtures__/before.yml';
const pathToFileAfterYML = '__tests__/__fixtures__/after.yml';

test('genDiff renderTree for YML', () => {
  expect(genDiff(pathToFileBeforeYML, pathToFileAfterYML, renderTypeTree)).toBe(fs.readFileSync(result, 'utf8'));
});

const pathToFileBeforeINI = '__tests__/__fixtures__/before.ini';
const pathToFileAfterINI = '__tests__/__fixtures__/after.ini';

test('genDiff renderTree for INI', () => {
  expect(genDiff(pathToFileBeforeINI, pathToFileAfterINI, renderTypeTree)).toBe(fs.readFileSync(result, 'utf8'));
});

const pathToFileBeforeTreeJSON = '__tests__/__fixtures__/beforeOfTree.json';
const pathToFileAfterTreeJSON = '__tests__/__fixtures__/afterOfTree.json';

test('genDiff renderTree for of tree for JSON', () => {
  expect(genDiff(pathToFileBeforeTreeJSON, pathToFileAfterTreeJSON, renderTypeTree)).toBe(fs.readFileSync(resultOfTree, 'utf8'));
});

test('genDiff renderPlain for of tree for JSON', () => {
  expect(genDiff(pathToFileBeforeTreeJSON, pathToFileAfterTreeJSON, renderTypePlain)).toBe(fs.readFileSync(resultOfPlain, 'utf8'));
});

const pathToFileBeforeTreeYML = '__tests__/__fixtures__/beforeOfTree.yml';
const pathToFileAfterTreeYML = '__tests__/__fixtures__/afterOfTree.yml';

test('genDiff renderTree for of tree for YML', () => {
  expect(genDiff(pathToFileBeforeTreeYML, pathToFileAfterTreeYML, renderTypeTree)).toBe(fs.readFileSync(resultOfTree, 'utf8'));
});

test('genDiff renderPlain for of tree for YML', () => {
  expect(genDiff(pathToFileBeforeTreeYML, pathToFileAfterTreeYML, renderTypePlain)).toBe(fs.readFileSync(resultOfPlain, 'utf8'));
});

const pathToFileBeforeTreeINI = '__tests__/__fixtures__/beforeOfTree.ini';
const pathToFileAfterTreeINI = '__tests__/__fixtures__/afterOfTree.ini';

test('genDiff renderTree for of tree for INI', () => {
  expect(genDiff(pathToFileBeforeTreeINI, pathToFileAfterTreeINI, renderTypeTree)).toBe(fs.readFileSync(resultOfTree, 'utf8'));
});

test('genDiff renderPlain for of tree for INI', () => {
  expect(genDiff(pathToFileBeforeTreeINI, pathToFileAfterTreeINI, renderTypePlain)).toBe(fs.readFileSync(resultOfPlain, 'utf8'));
});
