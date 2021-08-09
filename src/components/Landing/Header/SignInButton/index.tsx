// Default
import React, { useState } from 'react'
import { useSession } from 'next-auth/client'
import Link from 'next/link'

// Styles
import styles from './styles.module.scss'

// Components
import { Modal } from './Modal/index'

export function SignInButton(){
  const [session] = useSession()

  const [showModal, setShowModal ] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  } 

  return session ? (
    <>
      <Link href="/courses" prefetch>
        <button type="button" className={styles.btnPrimary}>
          Dashboard
        </button>
      </Link>
    </>
  ) : (
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