import React, { useState, useEffect, useRef } from 'react'

const Counter = ({ bodyFat, bodyFatLoad }) => {
  const [count, setCount] = useState(null)
  const ref = useRef(0)

  const accumulator = bodyFat / 200

  const updateCounterState = () => {
    if (ref.current < bodyFat) {
      const result = Math.ceil(ref.current + accumulator)
      if (result > bodyFat) return setCount(bodyFat)
      setCount(result)
      ref.current = result
    }
    setTimeout(updateCounterState, 100)
  }



  useEffect(() => {
    let isMounted = true
    if (isMounted) {
      updateCounterState()
    }
    return () => {
      isMounted = false
    }
  }, [bodyFat])

  if (count === bodyFat) bodyFatLoad(true)

  return (
    <div className="counter">
      {count} %
    </div>
  )
}

export default Counter