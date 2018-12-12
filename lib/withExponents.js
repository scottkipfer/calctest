const ExponentFunctions = {
  pow : (a, b) => 
    Math.pow(a, b),
  multiplyExp : ([a,b], [c,d]) => 
    Math.pow(a,b) * Math.pow(c,d),
  divideExp : ([a,b], [c,d]) => 
    Math.pow(c,d) ? Math.pow(a,b) / Math.pow(c,d) : NaN,
}

module.exports = withExponents = el => {
  Object.assign(el, ExponentFunctions)
}