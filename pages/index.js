import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Question from '@/component/Question'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.mainContainer}>
        <div className={styles.activist}>
          <Image src='/Protester.png' height={400} width={200} alt='protester' />
        </div>

        <Question />
      </div>

    </>
  )
}