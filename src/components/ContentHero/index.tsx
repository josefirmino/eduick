import styles from './styles.module.scss'
import { motion } from 'framer-motion'
import { RadioBtn } from '../RadioButton'

export function ContentHero(){

  return(
    <>
    <section className={styles.sHero}>
      <div className={styles.container}>
        <div className={styles.image}>
        <motion.div
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 3,
              y: { type: "spring", stiffness: 0 },
              default: { duration: 2 },
            }}
          >
          <img src="/images/shape.svg" alt="Illustration" className={styles.shape} />
          </motion.div>
          <motion.div
            animate={{ x: 0 }}
            transition={{ from: 50, duration: 1 }}
          >
          <img src="/images/shape2.svg" alt="Illustration" className={styles.shape2} />
          </motion.div>
          <motion.div
            animate={{ x: 0 }}
            transition={{ from: -50, duration: 1 }}
          >
            <img src="/images/image.png" alt="Illustration" className={styles.shapeImg} />
          </motion.div>
          <img src="/images/detail-2.svg" alt="Illustration" className={styles.detail} />

          <img src="/images/shape3.svg" alt="Illustration" className={styles.shape3} />

        </div>
        <div className={styles.text}>
            <h1>
              Find your <br/>
              <span>best teacher</span>
            </h1>
            <p>
            Whether you are a student trying to find your ideal private language teachers/tutors or a teacher trying to find great students for your customized private lessons!
            </p>

              <input
                type="text"
                placeholder="Type here what are you looking for"
                className={styles.inputText}
              />

              <div className={styles.bottomForm}>
                <div className={styles.choice}>
                  <RadioBtn />
                </div>

                <button className={styles.btnSearch}>
                  Search
                </button>
              </div>
        </div>
        <div className={styles.imageDetail}>
          <img src="/images/detail.svg" alt="Illustration" />
        </div>
      </div>
    </section>
    <section className={styles.footer}>
    </section>
    </>
  )
}