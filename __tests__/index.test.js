import fs from 'fs';
import genDiff from '../src';

const result = fs.readFileSync('__tests__/__fixtures__/result.txt', 'utf8');

const before = '__tests__/__fixtures__/before.json';
const after = '__tests__/__fixtures__/after.json';

test('genDiff', () => {
  expect(genDiff(before, after)).toBe(result);
});
