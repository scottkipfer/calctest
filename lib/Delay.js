module.exports = delay = (duration, obj, method, args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      obj[method] 
      ? resolve(obj[method](...args))
      : reject("method does not exist")
    }, duration);
  });
}