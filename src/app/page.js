'use client'
import Link from 'next/link';//importing link for navigation between pages
import styles from './styles/Home.module.css'//importing styles
export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Next.js App!</h1>
      <nav className={styles.nav}>
        <Link href="/">Home</Link> 
        <Link href="/Counter">Counter</Link>
        <Link href='/Form'>Form</Link>
      </nav>
    </div>
  );
}