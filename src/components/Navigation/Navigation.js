import React from 'react'
import styles from './Navigation.module.scss'
import Logo from './Logo/Logo'
import NavList from './NavList/NavList'
import NasaLink from './NasaLink/NasaLink'

class Navigation  extends React.Component {
   state = {
      isOpen: false
   }

   showNavigation() {
      this.setState({
         isOpen: true
      })
   }

   hideNavigation() {
      console.log('test')
      this.setState({
         isOpen: false
      })
   }

   render() {
      return (
         <div className={styles.wrapper}>
            <Logo />
            <NavList isOpen={this.state.isOpen} hideNavigationFn={this.hideNavigation.bind(this)} />
            <NasaLink isOpen={this.state.isOpen} showNavigationFn={this.showNavigation.bind(this)} />
         </div>
      )
   }
}

export default Navigation