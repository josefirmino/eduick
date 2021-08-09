// Default
import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import Image from 'next/image'

// Styles
import styled from 'styled-components'

// Icons
import { MdClose } from 'react-icons/md'

// Components
import { SignInButton } from '../../SignInButton'

//Images
import logo from '../../../../../../public/images/logo.svg'

export const MenuModal = ({ showModal, setShowModal }) => {
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

  return (
    
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContentTop>
                <Image src={logo} alt="Logo Eduick" />
              </ModalContentTop>
              <ModalContent>
                <a href="#">How it works</a>
                <a href="#">About Us</a>
                <SignInButton />
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh !important;
  background: rgba(33, 14, 100, 0.8);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #200E64;
  border-radius: 4px;
  z-index: 10;
  padding: 2.4rem;
`;

const ModalContentTop = styled.div`
  display: flex;
  max-width: 109px;
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  > a{
    font-size: 2.1rem;
    line-height: 2.9rem;
    text-align: center;
    letter-spacing: -0.02em;
    color: var(--white);
    &:not(:last-child){
      margin-bottom: 1.5rem;
    }
  }
  > button{
    margin-top: 5.9rem;
    width: 100%;
  }
`

const BaseCloseModalButton = styled.div`
  position: absolute;
  top: .65rem;
  right: .3rem;
  height: 5.1rem;
  width: 5.1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 10;
  color: #fff;
`;