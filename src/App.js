import React from 'react';
import styles from './Index.module.scss'
import { BrowserRouter as Router } from "react-router-dom"
import Context from './Context'

import DayPicture from './components/DayPicture/DayPicture'
import Navigation from './components/Navigation/Navigation'
import Search from './components/Search/Search'

class App extends React.Component {
   state = {
      showRecords: window.location.pathname === '/' ? false : true
   }

   setShowRecords(value) {
      this.setState({
         showRecords: value
      })
   }

   render() {

      const contextData = {
         ...this.state,
         setShowRecords: this.setShowRecords.bind(this)
      }

      return (
         <Router onChange={this.setRoute}>
            <Context.Provider value={contextData}>
               <div className={styles.wrapper}>
                  <DayPicture />
                  <Navigation />
                  <Search />
               </div>
            </Context.Provider>
         </Router>
      )
   }
}

export default App