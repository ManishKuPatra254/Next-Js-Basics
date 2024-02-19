'use client' // only use in upper part of the component
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { Fragment, useState } from 'react'
import Link from 'next/link' // a link page in next.js
import { useRouter } from 'next/navigation';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const route = useRouter()
  const [name, setName] = useState('Manish')
  function allalert() {
    alert('I am new to Next Js');
    setName('Anish')
  }
  return (
    <Fragment>
      <main className={styles.main}>
        <h1>Home Page of {name}</h1>
        <button onClick={() => allalert()}>Click Here</button>
        <Handle />
        <Link href={'/login'}>Go to login page</Link>
        <button className={styles.btn1} onClick={() => route.push('/login')}>Go to login page</button>
        <button className={styles.btn1} onClick={() => route.push('/about')}>Go to about page</button>
      </main>
    </Fragment>
  )
}


function Handle() {
  return (
    <Fragment>
      <h2>Hello Manish Kumar Patra</h2>
    </Fragment>
  )
}