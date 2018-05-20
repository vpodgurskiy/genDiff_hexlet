import fs from 'fs';
import path from 'path';
import getParser from './parsers';
import buildAST from './buildAst';
import renderOfData from './renders';

const parseFile = (pathFile) => {
  const configPath = pathFile;
  const ext = path.extname(configPath);
  const data = fs.readFileSync(configPath, 'utf8');
  const parse = getParser(ext);
  const config = parse(data);
  return config;
};

const genDiff = (pathFileBefore, pathFileAfter, type) => {
  const file1 = parseFile(pathFileBefore);
  const file2 = parseFile(pathFileAfter);

  const ast = buildAST(file1, file2);
  const result = renderOfData(ast, type);

  return result;
};

export default genDiff;
