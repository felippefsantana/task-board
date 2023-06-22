import React from 'react'

// Styles CSS
import styles from '../styles/Modal.module.css';

interface Props {
  children: React.ReactNode;
}

const Modal = ({ children }: Props) => {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Texto do modal</h2>
        { children }
      </div>
    </div>
  )
}

export default Modal