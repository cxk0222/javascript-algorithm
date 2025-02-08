export function factorialIterative(number) {
  if (number < 0) return
  let total = 1
  for (let i = number; i > 0; i--) {
    total = total * i
  }
  return total
}

export function factorial(number) {
  if (number === 0 || number === 1) {
    return 1
  } else {
    return number * factorial(number - 1)
  }
}