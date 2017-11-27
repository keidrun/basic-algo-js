// return all prime numbers
const sieveOfEratosthenes = n => {
  const primes = [];
  for (let i = 0; i <= n; i++) {
    primes[i] = true;
  }

  primes[0] = primes[1] = false;
  for (let i = 2; i < Math.sqrt(n); i++) {
    for (let j = 2; j * i < primes.length; j++) {
      primes[i * j] = false;
    }
  }

  return primes.reduce((resultNums, isPrime, num) => {
    if (isPrime) resultNums.push(num);
    return resultNums;
  }, []);
};

module.exports = sieveOfEratosthenes;
