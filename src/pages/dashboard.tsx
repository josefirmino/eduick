import { useSession } from 'next-auth/client'

// Components
import { DashboardMenu } from '../components/Dashboard/Header'
import { Content } from '../components/Dashboard/BannerHero'


export default function Dashboard(){
  const [session] = useSession()

  return session ? (
    <>
      <DashboardMenu />
      <Content />
    </>
  ) : (
    <>
      <h1>Sign in with you social account </h1>
    </>
  )
}