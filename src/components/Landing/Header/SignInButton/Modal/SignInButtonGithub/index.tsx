// Default
import { signIn, signOut ,useSession } from 'next-auth/client'

// Styles
import styled from 'styled-components'

export function SignInButtonGithub(){
  const [session] = useSession()

  return session ? (
    <>

    <label htmlFor="">You are logging in with</label>
    <GithubProfile>
      <img src={session.user.image} alt="" />
      <div className="infos">
        <h1>{session.user.name}</h1>
        <span>{session.user.email}</span>
      </div>
    </GithubProfile>
    <BtnSignOut 
      type="button"
      onClick={() => signOut()}
    >
    Sign Out
    </BtnSignOut>
    </>
  ) : (
    <>
    <label htmlFor="">Sign in with you social account</label>
    <button 
      type="button"
      onClick={() => signIn('github')}
    >
      Sing in with GitHub
    </button>
    </>
  )
}


const GithubProfile = styled.div`
  background-color: rgba(255, 255, 255, 0.061);
  display: flex;
  margin-top: 1rem;
  border-radius: 5px;
  padding: 1rem;
  .infos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
      margin-left: 2rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: 700;
      font-size: 2.4rem;
    }

    span{
      margin-left: 2rem;
      font-family: 'Open Sans', sans-serif;
      color: #fff;
    }
  }
  img{
    border-radius: 50%;
    width: 20%;
  }
`;

const BtnSignOut = styled.button`
  background-color: #FF4F4F !important;
  color: #fff !important;
  &:last-child:before{
    color: #fff !important;
    filter: brightness(1000%);
  }
`