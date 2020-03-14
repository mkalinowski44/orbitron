import React from 'react'
import styles from './NasaLink.module.scss'
import NasaLogo from '../../../assets/images/Nasa logo.png'

const NasaLink = ({isOpen, showNavigationFn}) => (
   <div className={styles.wrapper}>
      <a
         className={styles.link}
         href="https://www.nasa.gov/"
         target="_blank"
         rel="noopener noreferrer"
      >
         <img src={NasaLogo} className={styles.logo} alt="Nasa Logo" />
      </a>
      {!isOpen && (
         <button
            className={styles.showNav}
            onClick={() => showNavigationFn()}
         >
            <i className="material-icons">
               more_vert
            </i>
         </button>
      )}
   </div>
)

export default NasaLink