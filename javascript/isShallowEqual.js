const isShallowEqual = (a, b) => {
  return Object.keys(a).every((key) => {
    if (a[key] instanceof Function && b[key] instanceof Function) return true;
    if (a[key] !== b[key]) return false;
    return true;
  });
};
