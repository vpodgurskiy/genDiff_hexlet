import renderOfTree from './renderTree';
import renderOfPlain from './renderPlain';
import renderOfJSON from './renderJSON';

const typeOfRenders = {
  tree: renderOfTree,
  plain: renderOfPlain,
  json: renderOfJSON,
};

const renderOfData = (ast, type) => {
  const render = typeOfRenders[type];
  return render(ast);
};

export default renderOfData;
