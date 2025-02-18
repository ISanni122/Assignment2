'use client'
import { useState } from 'react';//importing use state from react
import styles from '../styles/Counter.module.css'
import Link from 'next/link';//importing link for navigation between pages

export default function Counter() {//Function for counting with 1 increment and 1 decrement
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}