'use client'
import { useState } from 'react';// importing use state from react
import styles from '../styles/Form.module.css'
import Link from 'next/link';// importing link for navigation between pages

export default function Form() {//Function for Form Submission
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
     <Link href="/">Home</Link>
      <h1>Form</h1>
      {submitted ? (
        <p>Thank you, {name}, for submitting the form!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}