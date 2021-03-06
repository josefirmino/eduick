import { useSession } from 'next-auth/client'
import GlobalStyleDashboard from '../styles/dashboard-global'

// Components
import Head from 'next/head'
import { DashboardMenu } from '../components/Dashboard/Header'
import { Content } from '../components/Dashboard/Content'
import { GithubLogin } from '../components/Dashboard/Login'


export default function Dashboard(){
  const [session] = useSession()

  return session ? (
    <>
      <GlobalStyleDashboard/>
      <Head>
        <title>Dashboard | Eduick</title>
      </Head>
      
      <DashboardMenu />
      <Content />
    </>
  ) : (
    <GithubLogin/>
  )
}