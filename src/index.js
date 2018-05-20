import fs from 'fs';
import path from 'path';
import getParser from './parsers';
import buildAST from './buildAst';
import renderOfData from './renderers';

const parseFile = (pathFile) => {
  const configPath = pathFile;
  const ext = path.extname(configPath);
  const data = fs.readFileSync(configPath, 'utf8');
  const parse = getParser(ext);
  const config = parse(data);
  return config;
};

const genDiff = (pathFileBefore, pathFileAfter, type) => {
  const fileContent1 = parseFile(pathFileBefore);
  const fileContent2 = parseFile(pathFileAfter);

  const ast = buildAST(fileContent1, fileContent2);
  const result = renderOfData(ast, type);

  return result;
};

export default genDiff;
