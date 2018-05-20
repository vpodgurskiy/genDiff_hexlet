export default (ast) => {
  const iter = (data, spaceCount) => {
    const indent = ' '.repeat(spaceCount);
    const indentForValue = ' '.repeat(spaceCount + 6);
    const indentForBrace = ' '.repeat(spaceCount + 2);
    const indentForObject = ' '.repeat(spaceCount + 4);

    const objectToString = (obj) => {
      const keys = Object.keys(obj);
      const arr = keys.map(c => (obj[c] instanceof Object ? objectToString(obj[c]) : `${c}: ${obj[c]}`));
      return arr.join(`\n ${indentForObject} `);
    };

    const constructStringOfValue = (value) => {
      const objectValue = `{\n${indentForValue}${objectToString(value)}\n${indentForBrace}}`;
      const simpleValue = `${value}`;
      return value instanceof Object ? objectValue : simpleValue;
    };

    const constructStringOfNode = {
      children: node => `${indent}  ${node.key}: {\n${iter(node.value, spaceCount + 4)}\n${indentForBrace}}`,
      removed: node => `${indent}- ${node.key}: ${constructStringOfValue(node.value)}`,
      added: node => `${indent}+ ${node.key}: ${constructStringOfValue(node.value)}`,
      changed: node => [`${indent}+ ${node.key}: ${constructStringOfValue(node.newValue)}\n${indent}- ${node.key}: ${constructStringOfValue(node.oldValue)}`],
      matched: node => `${indent}  ${node.key}: ${constructStringOfValue(node.value)}`,
    };

    const getNodeString = node => constructStringOfNode[node.type](node);

    const arr = data.map(c => getNodeString(c));

    return arr.join('\n');
  };
  const renderedData = `{\n${iter(ast, 2)}\n}`;
  return renderedData;
};
