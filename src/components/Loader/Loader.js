import React from 'react'
import styles from './Loader.module.scss'

const Loader = () => (
   <div className={styles.wrapper}>
      <div className={styles.circle}></div>
      <div className={styles.label}>
         Loading...
      </div>
   </div>
)

export default Loader