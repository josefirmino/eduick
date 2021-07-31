import Head from 'next/head'

// Components
import { Header } from '../components/Header'
import { ContentHero } from '../components/ContentHero'

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
