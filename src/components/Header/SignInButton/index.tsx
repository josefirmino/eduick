import styles from './styles.module.scss'
import React, { useState } from 'react'
import { Modal } from './Modal/index'

export function SignInButton(){
  const [showModal, setShowModal ] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <>
    <button 
      type="button"
      className={styles.btnPrimary}
      onClick={openModal}
    >
      Get Started

    </button>
          <Modal 
          showModal={showModal}
          setShowModal={setShowModal}
        />
    </>
  ) 
}