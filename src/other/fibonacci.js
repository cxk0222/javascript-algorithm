export function fibonacciIterative(n) {
  if (n < 1) return 0
  if (n <= 2) return 1

  let fibNMinus2 = 0
  let fibNMinus1 = 1
  let fibN
  for (let i = 2; i <= n; i++) {
    fibN = fibNMinus1 + fibNMinus2
    fibNMinus2 = fibNMinus1
    fibNMinus1 = fibN
  }
  return fibN
}

export function fibonacci(n) {
  if (n < 1) return 0
  if (n <= 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 2)
}

export function fibonacciMemorization(n) {
  const memo = [0, 1]
  const fibonacci = (n) => {
    if (memo[n] != null) return memo[n]
    return memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
  }
  return fibonacci(n)
}