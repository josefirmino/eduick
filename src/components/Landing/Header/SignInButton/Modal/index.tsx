import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useSession } from 'next-auth/client'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'

import { SignInButtonGithub } from './SignInButtonGithub'


export const Modal = ({ showModal, setShowModal }) => {
  const [session] = useSession()
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false)
    }
  }

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed')
      }
    },
    [setShowModal, showModal]
  )

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    },
    [keyPress]
  )
  
  const [show, setShow] = useState(true)
  const InputType = show? `password`:`text`

  return session ? (
    
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                <ModalContentButtons>
                
                <SignInButtonGithub/>
                </ModalContentButtons>
              </ModalContent>
              <BaseCloseModalButton>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </BaseCloseModalButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  ) : (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                <h1>Get Started
                <span>Just Login?</span></h1>
                <ModalContentInputs>
                  <ModalInputs>
                  <label htmlFor="">Username:</label>
                  <input
                  type="text"
                  />
                  </ModalInputs>

                  <ModalInputs>
                  <label htmlFor="">Password:</label>
                  <input
                  type={InputType}
                  />
                  {
                    show?<PasswordMask onClick={()=>setShow(!show)} />:<PasswordMaskShow onClick={()=>setShow(!show)}/>
                  }
                  </ModalInputs>
                </ModalContentInputs>
                <ModalContentButtons>
                <button>Login</button>
                <hr/>
                <SignInButtonGithub/>
                </ModalContentButtons>
              </ModalContent>
              <BaseCloseModalButton>
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </BaseCloseModalButton>
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  )
}

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(33, 14, 100, 0.8);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 52.5rem;  
  background: #6A40E4;
  border-radius: 4px;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  padding: 4rem;

  @media(max-width: 600px) {
    width: 100%;
  }
  @media(max-width: 480px) {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  width: 100%;
  @media(max-width: 480px) {
    width: 100%;
    height: 90vh;
    justify-content: center;
    align-items: center;
  }
  h1{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 3.4rem;
    line-height: 118.5%;
    letter-spacing: -0.06em;
    color: var(--white);

    span{
      font-family: 'Poppins', sans-serif;
      display: block;
      font-weight: bold;
      font-size: 3.8rem;
      line-height: 118.5%;
      letter-spacing: -0.02em;
      text-transform: uppercase;

      color: #FFEAA4;
    }
  }
  
`;

const ModalContentButtons = styled.div`
  hr{
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-top: 2.35rem;
    margin-bottom: 1.05rem;
  }
  label{
    font-size: 16px;
    line-height: 191.68%;
    color: var(--white);

  }
  button {
    width: 100%;
    height: 48px;
    background: var(--brand-yellow-light);
    border-radius: 4px;
    margin-top: 27px;

    font-weight: bold;
    font-size: 1.4rem;
    line-height: 191.68%;
    text-transform: uppercase;
    color: #744FF4;
    &:not(:last-child){
      margin-right: 1%;
    }
    &:last-child{
      margin-top: 0.8rem;
      
      &:before{
        content: "";
        width: 24px;
        height: 24px;
        background:url('/images/icons/github.svg') no-repeat center center;
        position: absolute;
        margin-left: -2.5rem;
      }
    }
  }

`

const ModalContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.8rem;
  label{
    font-size: 1.6rem;
    line-height: 191.68%;
    color: #FFFFFF;
  }
  input{
    background: #7955E8;
    border: 1px solid #A68EEF;
    box-sizing: border-box;
    border-radius: 4px;
    height: 56px;
    color: var(--white);
    width: 100%;
    padding: 2rem;
    transition: all .3s;
    margin-top: .5rem;
    &::placeholder{
      color: var(--white);
    }
    &:focus{
      box-shadow: 0 0 0 0;
      outline: 0;
      color: var(--white);
      border: 1px solid rgba(255, 234, 164, 0.5);
    }
  }
`

const ModalInputs = styled.div`
  position: relative;
  &:not(:last-child){
    margin-bottom: 16px;
  }
`

const PasswordMask = styled.a`
  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background:url('/images/icons/icon-eye.svg') no-repeat center center;
    position: absolute;
    bottom: 1.5rem;
    right: 1.8rem;
    margin-left: -2.5px;
  }
`

const PasswordMaskShow = styled.a`
  &:before {
    content: "";
    width: 24px;
    height: 24px;
    background:url('/images/icons/icon-eye-show.svg') no-repeat center center;
    position: absolute;
    bottom: 1.5rem;
    right: 1.8rem;
    margin-left: -2.5px;
  }
`

const BaseCloseModalButton = styled.div`
  position: absolute;
  top: -2.5rem;
  right: -2.1rem;
  border-radius: 50%;
  background-color: #200E64;
  height: 5.1rem;
  width: 5.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width: 480px) {
    top: 1.5rem;
    right: 1.5rem;
  }
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 10;
  color: #fff;
  stroke-width: 1px !important;
`;