export const getCategoryQuery = (search: string): string => {
  const queryString = search.split('?')[1]
  const firstParam = queryString?.split('&')[0]
  return firstParam ?? ''
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DebouncedFunction<T extends unknown[]> = (...args: T) => void

export const debounce = <T extends unknown[]>(
  func: DebouncedFunction<T>,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout> | null = null

  return (...args: T) => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func(...args)
      timer = null
    }, delay)
  }
}
