import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Styles
import styles from './styles.module.scss'

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      { showModal && (
        <motion.div className={styles.backdrop}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
         
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal;