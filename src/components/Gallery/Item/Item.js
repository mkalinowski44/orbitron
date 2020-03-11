import React from 'react'
import styles from './Item.module.scss'
import Loader from '../../Loader/Loader'

class Item extends React.Component {
   state = {
      data: null,
      imageLoaded: false
   }

   componentDidMount() {
      this.setState({
         data: this.props.data
      }, () => {
         const previewImage = new Image()
         previewImage.src = this.state.data.links[0].href
         previewImage.onload = () => {
            this.setState({
               imageLoaded: true
            })

            console.log(this.state)
         }
      })
   }

   handleLoadImage() {
      this.setState({
         imageLoaded: true
      })
   }

   render() {
      return (
         <div className={styles.wrapper}>
            <div className={styles.content}>
               {this.state.imageLoaded ? (
                  <>
                     <figure className={styles.figure}>
                        <img
                           src={this.state.data.links[0].href}
                           alt={this.state.data.data[0].title}
                           className={styles.image}
                        />
                        <figcaption className={styles.figcaption}>
                           <div className={styles.caption}>
                              {this.state.data.data[0].title}
                           </div>
                        </figcaption>
                     </figure>
                     <div className={styles.border}></div>
                  </>
               ) : (
                  <Loader />
               )}
            </div>
         </div>
      )
   }
}

export default Item