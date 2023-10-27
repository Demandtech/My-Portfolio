export function debounce(func, delay) {
  let timer
  return function (...args) {
   clearTimeout(timer)
   console.log(args)
    timer = setTimeout(() => {
      func(...args)
    }, delay)
  }
}
