import React from 'react'
import styles from './NavList.module.scss'
import NavItem from './NavItem/NavItem'
import CloseButton from '../../CloseButton/CloseButton'

const NavList = ({isOpen, hideNavigationFn}) => (
   <nav className={isOpen ? styles.wrapperOpen : styles.wrapper}>
      <div className={styles.navGradient}></div>

      <div className={styles.closeWrapper}>
         <CloseButton
            onClick={() => hideNavigationFn()}
         />
      </div>

      <ul className={styles.list}>
         <NavItem path="/earth">Earth</NavItem>
         <NavItem path="/mars">Mars</NavItem>
         <NavItem path="/asteroids">Asteroids</NavItem>
         <NavItem path="/exoplanets">Exoplanets</NavItem>
         <NavItem path="/orbitron">Orbitron.</NavItem>
      </ul>
   </nav>
)

export default NavList