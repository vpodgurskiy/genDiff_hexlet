import ini from 'ini';
import fs from 'fs';
import { safeLoad } from 'js-yaml';
import path from 'path';

const parsers = {
  '.json': JSON.parse,
  '.yaml': safeLoad,
  '.yml': safeLoad,
  '.ini': ini.parse,
};

const getParser = format => (data) => {
  const parse = parsers[format];
  if (!parse) {
    throw new Error(`unkown format: ${format}`);
  }
  return parse(data);
};

const parseFile = (pathFile) => {
  const configPath = pathFile;
  const ext = path.extname(configPath);
  const data = fs.readFileSync(configPath, 'utf8');
  const parse = getParser(ext);
  const config = parse(data);
  return config;
};

export { getParser, parseFile };
