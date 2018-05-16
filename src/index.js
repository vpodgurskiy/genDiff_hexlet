import fs from 'fs';
import _ from 'lodash';
import YAML from 'js-yaml';
import path from 'path';
import ini from 'ini';

const pathStructure = {
  '.json': file => JSON.parse(file),
  '.yml': file => YAML.safeLoad(file),
  '.ini': file => ini.parse(file),
};

const parseAdapter = (file) => {
  const pathFile = path.extname(file);
  const parseFunction = pathStructure[pathFile];
  return parseFunction(fs.readFileSync(file, 'utf8'));
};

const genDiff = (fileBefore, fileAfter) => {
  const file1 = parseAdapter(fileBefore);
  const file2 = parseAdapter(fileAfter);
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
