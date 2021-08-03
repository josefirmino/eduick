import { AppProps } from 'next/app'

import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (

    <NextAuthProvider session={pageProps.session}>
      <Component {...pageProps} />
    </NextAuthProvider>

  )
}

export default MyApp
