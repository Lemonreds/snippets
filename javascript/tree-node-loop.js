const root = [
  { key: '1', children: [] },
  { key: '2', children: [{ key: '2-2', children: [] }] },
  { key: '3', children: [] },
];

const loop = (tree, key, nodes, isRoot = true) => {
  for (const node of tree) {
    if (node.key === key) {
      node.children = nodes;
      return tree;
    }
    if (Array.isArray(node.children)) {
      const rets = loop(node.children, key, nodes, false);
      if (rets) {
        return tree;
      }
    }
  }
  return isRoot ? tree : null;
};

const test = loop(root, '2-2', [{ key: '2-2-2', children: [] }]);
console.log(test);
