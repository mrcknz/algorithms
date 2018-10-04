function divisors (num, n = 2, res = []) {
  return n === num ?
    !res.length ?
      n + ' is prime' :
      res :
    num % n === 0 ?
      divisors(num, n+1, [...res, n]) :
      divisors(num, n+1, [...res]);
}

console.log(divisors(18));