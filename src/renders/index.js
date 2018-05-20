import renderOfTree from './renderTree';
import renderOfPlain from './renderPlain';

const typeOfRenders = {
  tree: renderOfTree,
  plain: renderOfPlain,
};

const renderOfData = (ast, type) => {
  const render = typeOfRenders[type];
  return render(ast);
};

export default renderOfData;
