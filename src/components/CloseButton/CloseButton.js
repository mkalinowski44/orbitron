import React from 'react'
import styles from './CloseButton.module.scss'

const CloseButton = ({...props}) => (
   <button className={styles.wrapper} {...props}>
      <i className="material-icons">
         close
      </i>
   </button>
)

export default CloseButton