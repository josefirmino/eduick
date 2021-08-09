// Default
import React, { useState } from 'react'
import Image from 'next/image'

// Styles
import styles from './styles.module.scss'

// Components
import { MenuModal } from './MenuModal/index'

// Images
import iconHamburger from '../../../../../public/images/menu-hamburger.svg'

export function MenuMobile(){
  const [showModal, setShowModal ] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return(
    <>
    <div className={styles.menuMobile}>
      <a href="#" onClick={openModal}>
        <Image src={iconHamburger} alt="Icone menu" />
      </a>
    </div>
      <MenuModal 
      showModal={showModal}
      setShowModal={setShowModal}
    />
    </>
  )
}