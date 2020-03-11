import React from 'react';
import styles from './Index.module.scss'
import Context from './Context'
import {
   BrowserRouter as Router,
   Switch,
   Route
} from "react-router-dom"

import DayPicture from './components/DayPicture/DayPicture'
import Navigation from './components/Navigation/Navigation'
import Search from './components/Search/Search'
import Content from './components/Content/Content'
import ToTop from './components/ToTop/ToTop'

import Earth from './views/Earth'
import Mars from './views/Mars'
import Asteroids from './views/Asteroids'
import Exoplanets from './views/Exoplanets'

class App extends React.Component {
   state = {
      showRecords: window.location.pathname === '/' ? false : true,
      waitRender: false,
      scrollTop: 0
   }

   componentDidMount() {
      window.addEventListener('scroll', (e) => {

         // console.log('scroll')
         this.debounce(() => {
            this.setState({
               scrollTop: window.scrollY
            })
         }, 300)
      })
   }

   debounce(func, wait) {
      if(this.debounceTimeout) {
         clearTimeout(this.debounceTimeout)
      }
      this.debounceTimeout = setTimeout(() => {
         func()
      }, wait)
   }

   setShowRecords(value) {
      if(this.state.showRecords === false && value === true) {
         this.setState({
            showRecords: true,
            waitRender: true
         }, () => {
            setTimeout(() => {
               this.setState({
                  waitRender: false
               })
            }, 450)
         })
      } else {
         this.setState({
            showRecords: value
         })
      }
   }

   render() {
      const contextData = {
         ...this.state,
         setShowRecords: this.setShowRecords.bind(this)
      }

      return (
         <Router onChange={this.setRoute}>
            <Context.Provider value={contextData}>
               <div className={this.state.showRecords ? styles.wrapper : styles.wrapperNoScroll}>
                  <DayPicture />
                  <Navigation />
                  <Search />
                  <Content>
                     <Switch>
                        <Route path="/earth">
                           <Earth />
                        </Route>
                        <Route path="/mars">
                           <Mars />
                        </Route>
                        <Route path="/asteroids">
                           <Asteroids />
                        </Route>
                        <Route path="/exoplanets">
                           <Exoplanets />
                        </Route>
                     </Switch>
                  </Content>
                  <ToTop />
               </div>
            </Context.Provider>
         </Router>
      )
   }
}

export default App