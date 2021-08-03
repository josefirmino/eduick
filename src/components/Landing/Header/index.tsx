// Styles
import styles from './styles.module.scss'

// Components
import { SignInButton } from './SignInButton'
import { MenuMobile } from './MenuMobile'

export function Header(){
  return(
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <MenuMobile />
          <a href="#">
            <img src="/images/logo.svg" alt="Logo Eduick" />
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