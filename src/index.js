import fs from 'fs';
import _ from 'lodash';

const genDiff = (pathToFile1, pathToFile2) => {
  const file1 = JSON.parse(fs.readFileSync(pathToFile1, 'utf8'));
  const file2 = JSON.parse(fs.readFileSync(pathToFile2, 'utf8'));
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const allKeys = _.union(keys1, keys2);
  const acc = [];
  for (let i = 0; i < allKeys.length; i += 1) {
    const c = allKeys[i];
    if (_.has(file1, c) && _.has(file2, c)) {
      if (file1[c] === file2[c]) {
        acc.push(`    ${c}: ${file2[c]}`);
      } else {
        acc.push(`  + ${c}: ${file2[c]}`, `  - ${c}: ${file1[c]}`);
      }
    } else if (_.has(file1, c) && !_.has(file2, c)) {
      acc.push(`  - ${c}: ${file1[c]}`);
    } else if (!_.has(file1, c) && _.has(file2, c)) {
      acc.push(`  + ${c}: ${file2[c]}`);
    }
  }
  const result = `{\n${acc.join('\n')}\n}`;
  console.log(result);
  return result;
};

export default genDiff;
