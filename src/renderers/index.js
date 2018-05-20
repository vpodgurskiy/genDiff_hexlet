import renderOfTree from './renderTree';
import renderOfPlain from './renderPlain';
import renderOfJSON from './renderJSON';

const typeOfRenderers = {
  tree: renderOfTree,
  plain: renderOfPlain,
  json: renderOfJSON,
};

const renderOfData = (ast, type) => {
  const render = typeOfRenderers[type];
  return render(ast);
};

export default renderOfData;
