//Default
import Image from 'next/image'

// Styles
import styles from './styles.module.scss'

// Components
import { SignInButton } from './SignInButton'
import { MenuMobile } from './MenuMobile'

// Images
import logo from '../../../../public/images/logo.svg'

export function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <MenuMobile />
          <a href="#">
            <Image src={logo} alt="Logo Eduick" />
          </a>

          <nav>
          <ul>
            <li>
              <a href="#">
                How it works
              </a>
            </li>
            <li>
              <a href="#">
                About Us
              </a>
            </li>
          </ul>
        </nav>
        </div>

        <SignInButton />
      </div>
    </header>
  )
}