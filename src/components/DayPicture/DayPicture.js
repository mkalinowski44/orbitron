import React from 'react'
import axios from 'axios'
import styles from './DayPicture.module.scss'
import { NASA_API_KEY } from '../../config'
import Context from '../../Context'

// Test
import bg_image from '../../assets/images/Background.png'

class DayPicture extends React.Component {
   state = {
      image: null,
      title: 'Demo',
      imageLoading: true
   }

   componentDidMount() {
      axios.get('https://api.nasa.gov/planetary/apod', {
         params: {
            api_key: NASA_API_KEY
         }
      })
      .then(response => {
         this.setState({
            image: response.data.url,
            title: response.data.title,
         }, () => {
            this.loadImage()
         })
      })
      .catch(error => {
         this.setState({
            image: bg_image,
            title: 'Orbitron',
         }, () => {
            this.loadImage()
         })
      })
   }

   loadImage() {
      const image = new Image()
      image.src = this.state.image
      image.onload = () => {
         this.setState({
            imageLoading: false
         })
      }
   }

   render() {
      return (
         <Context.Consumer>
            {context => {
               return (
                  <>
                  {this.state.imageLoading === false && (
                     <>
                        <img
                           alt={this.state.title}
                           src={this.state.image}
                           className={styles.dayPicture}
                        />
                        <div className={context.showRecords === true ? styles.darkOverlayActive : styles.darkOverlay}></div>
                     </>
                  )}
                  </>
               )
            }}
         </Context.Consumer>
      )
   }
}

export default DayPicture