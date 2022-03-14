function queue(arr) {
  const res = [];
  let sequence = Promise.resolve();
  arr.forEach((item) => {
    sequence = sequence.then(item).then((data) => {
      res.push(data);
      return res;
    });
  });
  return sequence;
}
