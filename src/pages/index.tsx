import Head from 'next/head'

// Components
import { Header } from '../components/Landing/Header'
import { ContentHero } from '../components/Landing/ContentHero'

export default function Home() {

  return (
    <>
      <Head>
        <title>Home | Eduick</title>
      </Head>

      <Header />
      <ContentHero />

    </>
  )
}
