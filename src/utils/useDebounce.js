
import { useEffect, useRef } from 'react'

/**
 *
 *
 * @param {*} fn 回调函数
 * @param {number} [ms=30] 时间间隔
 * @param {*} [deps=[]] 依赖性数组
 * @return {*} 防抖
 */

const useDebounce = (fn, ms = 30, deps = []) => {
  let timeout = useRef()
  useEffect(() => {
    if (timeout.current) {
      clearTimeout(timeout.current)
    }
    timeout.current = setTimeout(() => {
      fn()
    }, ms)
  }, deps)
  const cancel = () => {
    clearTimeout(timeout.current)
    timeout = null
  }
  return [cancel]
}

export default useDebounce
