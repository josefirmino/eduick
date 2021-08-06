import { useSession } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

import { Modal } from '../../Landing/Header/SignInButton/Modal'

export function DashboardMenu(){
  const [session] = useSession()
  const [showModal, setShowModal ] = useState(false)
  
  
  const openModal = () => {
    setShowModal(prev => !prev)
  }
  
  const [open, setOpen] = useState(true)
  
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)
  const onClick = () => setShowMobileMenu(true)
 
  return(
    <>
    <Menu>
      <Container>
          <Logo>
            <img src="/images/lading-detail.svg" alt="" className="detail" />

            <Link href="/" prefetch>
              <img src="/images/logo.svg" alt="" className="logo" />
            </Link>
            <a href="#">My Classes</a>
          </Logo>
        <Profile>
          <button>change to teacher mode</button>
          <ProfileImg>
            <a onClick={()=>setShowMobileMenu(!showMobileMenu)} >
              <img src={showMobileMenu ? '/images/icons/arrow-chevron-down.svg' : '/images/icons/arrow-chevron-up.svg'} className="iconMobile" />
            </a>
            <a onClick={openModal}>
              <img src={session.user.image} alt="" />
            </a>
          </ProfileImg>
        </Profile>
      </Container>
    </Menu>
    { showMobileMenu ? (
      <MobileMenu>
       <div className="mobileContent">
         <p>Change to teacher mode</p>
         <img src="/images/icons/arrow-short_right.svg" alt="" />
       </div>
     </MobileMenu>
    ) : null }
    <Modal 
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </>
    
  )
}

const Menu = styled.header`
  position: fixed;
  z-index: 2;
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
  cursor: pointer;
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
      display: none;
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
  display: flex;
  img{
    width: 100%;
    border-radius: 50%;
    max-width: 3.4rem;
    margin-left: 2.8rem;
  }
  .iconMobile{
    display: none;
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
  @media (max-width:480px){
    .iconMobile{
      display: block;
    }
  }
`
const MobileMenu = styled.div`
  display: none;
  @media (max-width:480px){
    position: fixed;
    width: 100%;
    height: 100vh;
    margin-top: 6.4rem;
    max-height: 100%;
    display: flex;
    z-index: 2;
    background: rgba(255, 255, 255, 0.8);
    .mobileContent{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      padding: 2.8rem;
      width: 100%;
      height: 5.8rem;
      z-index:2;
      p{
        font-weight: bold;
        font-size: 1.1rem;
        line-height: 1.5rem;
        text-align: center;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        color: #7A57FD;
      }
    }
  }
`