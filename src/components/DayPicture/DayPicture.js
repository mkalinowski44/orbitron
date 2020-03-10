import React from 'react'
import axios from 'axios'
import styles from './DayPicture.module.scss'
import { NASA_API_KEY } from '../../config'
import Context from '../../Context'

// Test
import bg_image from '../../assets/images/Background.png'

class DayPicture extends React.Component {
   state = {
      image: bg_image,
      title: 'Demo'
   }

   getImageOfTheDay() {
      axios.get('https://api.nasa.gov/planetary/apod', {
         params: {
            api_key: NASA_API_KEY
         }
      })
      .then(response => {
         this.setState({
            image: response.data.url,
            title: response.data.title,
         })
      })
   }

   render() {
      // this.getImageOfTheDay()

      return (
         <Context.Consumer>
            {context => {
               return (
                  <img
                     alt={this.state.title}
                     src={this.state.image}
                     className={context.showRecords ? styles.dayPictureDarken : styles.dayPicture}
                  />
               )
            }}
         </Context.Consumer>
      )
   }
}

export default DayPicture