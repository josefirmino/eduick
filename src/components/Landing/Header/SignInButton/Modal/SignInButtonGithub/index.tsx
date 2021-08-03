import { signIn, signOut ,useSession } from 'next-auth/client'

export function SignInButtonGithub(){
  const [session] = useSession()

  return session ? (
    <>
    <style jsx>{`
      div{
        background-color: rgba(255, 255, 255, 0.061);
        display: flex;
        margin-top: 1rem;
        border-radius: 5px;
        padding: 1rem;
      }
      div > div{
        display: flex;
        flex-direction: column;
        background: transparent;
      }
      div > div > span{
        margin-left: 2rem;
        font-family: 'Open Sans', sans-serif;
        color: #fff;
      }
      div h1{
        margin-left: 2rem;
        font-family: 'Open Sans', sans-serif;
        font-weight: 700;
        font-size: 2.4rem;
      }
      img{
        border-radius: 50%;
        width: 20%;
      }
      button{
        background-color: #FF4F4F;
        color: #fff;
        
      }
      button:last-child:before{
        color: #fff !important;
        filter: brightness(1000%);
      }
    `}</style>

    <label htmlFor="">You are logging in with</label>
    <div>
      <img src={session.user.image} alt="" />
      <div>
        <h1>{session.user.name}</h1>
        <span>{session.user.email}</span>
      </div>
    </div>
    <button 
      type="button"
      onClick={() => signOut()}
    >
      Sign Out (X)
    </button>
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