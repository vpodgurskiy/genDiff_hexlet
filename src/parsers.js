import ini from 'ini';
import { safeLoad } from 'js-yaml';

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

export default getParser;
