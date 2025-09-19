import React, { useState } from 'react'

export default function Register() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </div>
  )
}
