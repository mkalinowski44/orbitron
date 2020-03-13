import React from 'react'
import styles from './Header.module.scss'
import Separator from '../Separator/Separator'

const Header = ({children}) => (
   <div className={styles.wrapper}>
      <h1 className={styles.header}>
         {children}
      </h1>
      <Separator />
   </div>
)

export default Header