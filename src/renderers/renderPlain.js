
const constructStringOfValue = value => (value instanceof Object ? 'complex value' : `'${value}'`);

export default (ast) => {
  const iter = (data, pathToKey) => {
    const constructStringOfNode = {
      nested: node => iter(node.children, `${pathToKey}${node.key}.`),
      removed: node => `Property '${pathToKey}${node.key}' was removed`,
      added: node => `Property '${pathToKey}${node.key}' was added with value: ${constructStringOfValue(node.newValue)}`,
      changed: node => `Property '${pathToKey}${node.key}' was updated. From ${constructStringOfValue(node.oldValue)} to ${constructStringOfValue(node.newValue)}`,
    };

    const getNodeString = node => constructStringOfNode[node.type](node);

    const arr = data.filter(({ type }) => type !== 'matched').map(c => getNodeString(c));

    return arr.join('\n');
  };
  const renderedData = iter(ast, '');
  return renderedData;
};

