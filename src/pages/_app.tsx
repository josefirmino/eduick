import { AppProps } from 'next/app'
import GlobalStyle from '../styles/global'

import { Provider as NextAuthProvider } from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <GlobalStyle />
      <Component {...pageProps} />
    </NextAuthProvider>
  )
}

export default MyApp
