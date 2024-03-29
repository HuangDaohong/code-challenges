Promise.resolve = function (data) {
  if (data instanceof Promise) {
    return data;
  }
  return new Promise((resolve) => {
    resolve(data);
  });
};