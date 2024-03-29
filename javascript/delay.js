const delay = (callback, timeout) =>
  new Promise(resolve => {
    setTimeout(() => resolve(callback()), timeout);
  });
