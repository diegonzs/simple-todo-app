import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Nombre } from '../components/nombre/nombre'

const Home: NextPage = () => {
  return (
    <div>
      <h1 className={styles.title}>Hola Mundo!!</h1>
      <Nombre nombre={true} />
      <Link href="/personal-page">personal page sin reload :)</Link>
      <br />
      <Link href="/p/diegonzs">ir a la pagina del usuario</Link>
    </div>
  )
}

export default Home
