import { useSession } from 'next-auth/client'
import styled from 'styled-components'

export function DashboardMenu(){
  const [session] = useSession()
  return(
    <Menu>
      <Container>
        <Logo>
          <img src="/images/lading-detail.svg" alt="" className="detail" />
          <img src="/images/logo.svg" alt="" className="logo" />
          <a href="#">My Classes</a>
        </Logo>
        <Profile>
          <button>change to teacher mode</button>
          <ProfileImg>
            <a href="#">
              <img src={session.user.image} alt="" />
            </a>
          </ProfileImg>
        </Profile>
      </Container>
    </Menu>
  )
}

const Menu = styled.header`
  height: 6.4rem;
  width: 100%;
  background: #7A57FD;
  box-shadow: 4px 2px 14px rgba(0, 0, 0, 0.05);
  display: flex;
  padding: 2rem;
`

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1140px;
  padding: 0 .5rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  .detail{
    position: absolute;
    left: -9.1rem;
    top: -0.7rem;
  }
  .logo{
    width: 100%;
    max-width: 13.3rem;
  }
  a{
    margin-left: 4.8rem;
    font-size: 1.4rem;
    line-height: 1.9rem;
    letter-spacing: -0.02em;
    color: #FFFFFF;
  }
  
  @media (max-width:480px){
    a{
      display: none
    }
  }
`

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button{
    background-color: rgba(33, 14, 100, 0.3);
    border-radius: 4px;
    padding: 1rem 1.7rem;

    font-weight: bold;
    font-size: 1.1rem;
    line-height: 1.5rem;
    text-align: center;
    letter-spacing: -0.02em;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  @media (max-width:480px){
    button{
      display: none;
    }
  }
`
const ProfileImg = styled.div`
  position: relative;
  img{
    width: 100%;
    border-radius: 50%;
    max-width: 3.4rem;
    margin-left: 2.8rem;
    
  }
  &:before{
    content: "";
    position: absolute;
    width: 0.96rem;
    height: 0.96rem;
    background-color: #FFD74F;
    z-index: 2;
    border-radius: 50%;
    top: -3px;
    right: -3px;
  }
`