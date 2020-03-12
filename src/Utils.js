var debounceTimeout = null

export function debounce(func, wait) {
   if(debounceTimeout) {
      clearTimeout(debounceTimeout)
   }
   debounceTimeout = setTimeout(() => {
      func()
   }, wait)
}