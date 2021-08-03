import Head from 'next/head'

import GlobalStyle from '../styles/global'

// Components
import { Header } from '../components/Landing/Header'
import { ContentHero } from '../components/Landing/ContentHero'

export default function Home() {

  return (
    <>

      <GlobalStyle/>
      <Head>
        <title>Home | Eduick</title>
      </Head>

      <Header />
      <ContentHero />

    </>
  )
}
