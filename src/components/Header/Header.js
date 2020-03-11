import React from 'react'
import styles from './Header.module.scss'
import SeparatorImg from '../../assets/images/Separator.svg'

const Header = ({children}) => (
   <div className={styles.wrapper}>
      <h1 className={styles.header}>
         {children}
      </h1>
      <img
         src={SeparatorImg}
         alt=""
         className={styles.separator}
      />
   </div>
)

export default Header