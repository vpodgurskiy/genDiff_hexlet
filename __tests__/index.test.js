import fs from 'fs';
import genDiff from '../src';

const result = '__tests__/__fixtures__/result.txt';

const pathToFileBeforeJSON = '__tests__/__fixtures__/before.json';
const pathToFileAfterJSON = '__tests__/__fixtures__/after.json';

test('genDiff for JSON', () => {
  expect(genDiff(pathToFileBeforeJSON, pathToFileAfterJSON)).toBe(fs.readFileSync(result, 'utf8'));
});

const pathToFileBeforeYML = '__tests__/__fixtures__/before.yml';
const pathToFileAfterYML = '__tests__/__fixtures__/after.yml';

test('genDiff for YML', () => {
  expect(genDiff(pathToFileBeforeYML, pathToFileAfterYML)).toBe(fs.readFileSync(result, 'utf8'));
});

const pathToFileBeforeINI = '__tests__/__fixtures__/before.ini';
const pathToFileAfterINI = '__tests__/__fixtures__/after.ini';

test('genDiff for INI', () => {
  expect(genDiff(pathToFileBeforeINI, pathToFileAfterINI)).toBe(fs.readFileSync(result, 'utf8'));
});

const resultOfTree = '__tests__/__fixtures__/resultOfTree.txt';

const pathToFileBeforeTreeJSON = '__tests__/__fixtures__/beforeOfTree.json';
const pathToFileAfterTreeJSON = '__tests__/__fixtures__/afterOfTree.json';

test('genDiff for of tree for JSON', () => {
  expect(genDiff(pathToFileBeforeTreeJSON, pathToFileAfterTreeJSON)).toBe(fs.readFileSync(resultOfTree, 'utf8'));
});

const pathToFileBeforeTreeYML = '__tests__/__fixtures__/beforeOfTree.yml';
const pathToFileAfterTreeYML = '__tests__/__fixtures__/afterOfTree.yml';

test('genDiff for of tree for YML', () => {
  expect(genDiff(pathToFileBeforeTreeYML, pathToFileAfterTreeYML)).toBe(fs.readFileSync(resultOfTree, 'utf8'));
});

const pathToFileBeforeTreeINI = '__tests__/__fixtures__/beforeOfTree.ini';
const pathToFileAfterTreeINI = '__tests__/__fixtures__/afterOfTree.ini';

test('genDiff for of tree for INI', () => {
  expect(genDiff(pathToFileBeforeTreeINI, pathToFileAfterTreeINI)).toBe(fs.readFileSync(resultOfTree, 'utf8'));
});
