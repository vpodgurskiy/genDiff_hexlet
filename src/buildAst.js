import _ from 'lodash';

const buildAst = (file1, file2) => {
  const keys1 = Object.keys(file1);
  const keys2 = Object.keys(file2);
  const allKeys = _.union(keys1, keys2);
  const ast = allKeys.map((element) => {
    if (_.isObject(file1[element]) && _.isObject(file2[element])) {
      return {
        key: element,
        type: 'children',
        children: buildAst(file1[element], file2[element]),
      };
    }
    if (!_.has(file1, element)) {
      return {
        key: element,
        type: 'added',
        oldValue: file1[element],
        newValue: file2[element],
      };
    }
    if (!_.has(file2, element)) {
      return {
        key: element,
        type: 'removed',
        oldValue: file1[element],
        newValue: '',
      };
    }
    if (file1[element] === file2[element]) {
      return {
        key: element,
        type: 'matched',
        value: file2[element],
      };
    }
    return {
      key: element,
      type: 'changed',
      oldValue: file1[element],
      newValue: file2[element],
    };
  });
  return ast;
};
export default buildAst;
