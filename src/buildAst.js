import _ from 'lodash';

const buildAst = (fileContent1, fileContent2) => {
  const keys1 = Object.keys(fileContent1);
  const keys2 = Object.keys(fileContent2);
  const allKeys = _.union(keys1, keys2);
  const ast = allKeys.map((element) => {
    if (_.isObject(fileContent1[element]) && _.isObject(fileContent2[element])) {
      return {
        key: element,
        type: 'children',
        children: buildAst(fileContent1[element], fileContent2[element]),
      };
    }
    if (!_.has(fileContent1, element)) {
      return {
        key: element,
        type: 'added',
        oldValue: fileContent1[element],
        newValue: fileContent2[element],
      };
    }
    if (!_.has(fileContent2, element)) {
      return {
        key: element,
        type: 'removed',
        oldValue: fileContent1[element],
        newValue: '',
      };
    }
    if (fileContent1[element] === fileContent2[element]) {
      return {
        key: element,
        type: 'matched',
        value: fileContent2[element],
      };
    }
    return {
      key: element,
      type: 'changed',
      oldValue: fileContent1[element],
      newValue: fileContent2[element],
    };
  });
  return ast;
};
export default buildAst;
