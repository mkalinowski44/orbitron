import React from 'react'
import styles from './NavList.module.scss'
import NavItem from './NavItem/NavItem'

const NavList = () => (
   <nav className={styles.wrapper}>
      <div className={styles.navGradient}></div>
      <ul className={styles.list}>
         <NavItem path="/earth">Earth</NavItem>
         <NavItem path="/mars">Mars</NavItem>
         <NavItem path="/asteroids">Asteroids</NavItem>
         <NavItem path="/exoplanets">Exoplanets</NavItem>
      </ul>
   </nav>
)

export default NavList