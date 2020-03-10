import React from 'react'
import styles from './NavItem.module.scss'
import { NavLink } from 'react-router-dom'
import Context from '../../../../Context'

const NavItem = ({ children, path }) => (
   <Context.Consumer>
      {context => (
         <li className={styles.wrapper}>
            <NavLink
               className={styles.link}
               activeClassName={styles.linkActive}
               to={path}
               onClick={() => context.setShowRecords(true)}
            >
               {children}
            </NavLink>
         </li>
      )}
   </Context.Consumer>

)

export default NavItem