import React from 'react'
import styles from './NasaLink.module.scss'
import NasaLogo from '../../../assets/images/Nasa logo.png'

const NasaLink = () => (
   <div className={styles.wrapper}>
      <a
         className={styles.link}
         href="https://www.nasa.gov/"
         target="_blank"
         rel="noopener noreferrer"
      >
         <img src={NasaLogo} className={styles.logo} alt="Nasa Logo" />
      </a>
   </div>
)

export default NasaLink