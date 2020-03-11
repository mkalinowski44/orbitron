import React from 'react'
import styles from './View.module.scss'
import { getCollection } from '../API'

import Header from '../components/Header/Header'
import Gallery from '../components/Gallery/Gallery'
import Loader from '../components/Loader/Loader'

class Exoplanets extends React.Component {
   state = {
      data: null
   }

   componentDidMount() {
      if(this.state.data === null) {
         getCollection('exoplanets', data => {
            this.setState({
               data: data
            })
         })
      }
   }

   render(){
      return (
         <div className={styles.wrapper}>
            <Header>
               Exoplanets
            </Header>
            {this.state.data !== null ? (
               <Gallery items={this.state.data.items} />
            ) : (
               <Loader />
            )}
         </div>
      )
   }
}

export default Exoplanets