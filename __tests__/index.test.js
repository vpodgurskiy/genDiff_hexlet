import fs from 'fs';
import genDiff from '../src';

const result = fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf8');

const fileBeforeJSON = '__tests__/__fixtures__/before.json';
const fileAfterJSON = '__tests__/__fixtures__/after.json';

test('genDiff for JSON', () => {
  expect(genDiff(fileBeforeJSON, fileAfterJSON)).toBe(result);
});

const fileBeforeYML = '__tests__/__fixtures__/before.json';
const fileAfterYML = '__tests__/__fixtures__/after.json';

test('genDiff for YML', () => {
  expect(genDiff(fileBeforeYML, fileAfterYML)).toBe(result);
});
