const pow = (a, b) => Math.pow(a, b);
const multiplyExp = ([a, b], [c, d]) => Math.pow(a, b) * Math.pow(c, d);
const divideExp = ([a, b], [c, d]) => Math.pow(c,d) ? Math.pow(a,b) / Math.pow(c,d) : NaN;

module.exports = withExponents = obj => {
  Object.assign(obj, {
    pow, multiplyExp, divideExp
  })
}