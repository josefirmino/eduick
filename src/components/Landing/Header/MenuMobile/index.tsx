import styles from './styles.module.scss'
import React, { useState } from 'react'
import { MenuModal } from './MenuModal/index'

export function MenuMobile(){
  const [showModal, setShowModal ] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return(
    <>
    <div className={styles.menuMobile}>
      <a href="#" onClick={openModal}>
        <img src="/images/menu-hamburger.svg" alt="" />
      </a>
    </div>
      <MenuModal 
      showModal={showModal}
      setShowModal={setShowModal}
    />
    </>
  )
}