import genDiff from '../src';

const result = '';

const before = '__tests__/__fixtures__/before.json';
const after = '__tests__/__fixtures__/after.json';

test('genDiff', () => {
  expect(genDiff(before, after)).toBe(result);
});
