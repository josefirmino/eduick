import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

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
  height: 47.9rem;  
  background: #6A40E4;
  border-radius: 4px;
  z-index: 10;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  padding: 4rem;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  width: 100%;
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
  label{
    font-size: 1.6rem;
    line-height: 191.68%;
    color: #FFFFFF;
    margin-bottom: .5rem;
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
    &::placeholder{
      color: var(--white);
    }
    &:focus{
      box-shadow: 0 0 0 0;
      outline: 0;
      color: var(--white);
      border: 1px solid rgba(255, 234, 164, 0.5);
    }
    &:not(:last-child){
      margin-bottom: 16px;
    }
  }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const ModalContentInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.8rem;
`;

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
`

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 24px;
  height: 24px;
  z-index: 10;
  color: #fff;
  stroke-width: 1px !important;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef()

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

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
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress)
      return () => document.removeEventListener('keydown', keyPress)
    },
    [keyPress]
  );

  return (
    
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper>
              <ModalContent>
                <h1>Get Started
                <span>Just Login?</span></h1>
                <ModalContentInputs>
                  <label htmlFor="">Username:</label>
                  <input
                  type="text"
                  />
                  <label htmlFor="">Username:</label>
                  <input
                  type="password"
                  />
                </ModalContentInputs>
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