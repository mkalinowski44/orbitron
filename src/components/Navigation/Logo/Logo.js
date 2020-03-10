import React from 'react'
import styles from './Logo.module.scss'
import LogoImage from '../../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import Context from '../../../Context'

const Logo = () => (
   <Context.Consumer>
      {context => (
         <Link
            to="/"
            className={styles.wrapper}
            onClick={() => context.setShowRecords(false)}
         >
            <img src={LogoImage} alt="Orbitron Logo" className={styles.logo} />
         </Link>
      )}
   </Context.Consumer>
)

export default Logo