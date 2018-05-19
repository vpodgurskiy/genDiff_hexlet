import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import getParser from './parsers';

const parseFile = (pathFile) => {
  const configPath = pathFile;
  const ext = path.extname(configPath);
  const data = fs.readFileSync(configPath, 'utf8');
  const parse = getParser(ext);
  const config = parse(data);
  return config;
};

const genDiff = (pathFileBefore, pathFileAfter) => {
  const file1 = parseFile(pathFileBefore);
  const file2 = parseFile(pathFileAfter);

  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);

  const allKeys = _.union(keys1, keys2);

  const arr = allKeys.reduce((acc, c) => {
    if (_.has(file1, c) && _.has(file2, c)) {
      if (file1[c] === file2[c]) {
        return acc.concat(`    ${c}: ${file2[c]}`);
      }
      return acc.concat(`  + ${c}: ${file2[c]}`, `  - ${c}: ${file1[c]}`);
    } else if (_.has(file1, c) && !_.has(file2, c)) {
      return acc.concat(`  - ${c}: ${file1[c]}`);
    } else if (!_.has(file1, c) && _.has(file2, c)) {
      return acc.concat(`  + ${c}: ${file2[c]}`);
    }
    return acc;
  }, []);

  const result = `{\n${arr.join('\n')}\n}`;

  return result;
};

export default genDiff;
