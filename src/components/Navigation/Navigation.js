import React from 'react'
import styles from './Navigation.module.scss'
import Logo from './Logo/Logo'
import NavList from './NavList/NavList'
import NasaLink from './NasaLink/NasaLink'

const Navigation = () => (
   <div className={styles.wrapper}>
      <Logo />
      <NavList />
      <NasaLink />
   </div>
)

export default Navigation