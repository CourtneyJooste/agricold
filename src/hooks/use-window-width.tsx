import React, { useState, useEffect } from 'react'

export const useWindowWidth = () => {

  const [ width, setWidth ] = useState<number>(window.innerWidth)

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return [
    width,
    setWidth,
  ] as const;
}

export default useWindowWidth
