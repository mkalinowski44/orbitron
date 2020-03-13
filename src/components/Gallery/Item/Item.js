import React from 'react'
import styles from './Item.module.scss'
import Loader from '../../Loader/Loader'
import Context from '../../../Context'
import {Link} from 'react-router-dom'

import soundImg from '../../../assets/images/Sound.svg'
import videoOverlayImg from '../../../assets/images/Video overlay.svg'

class Item extends React.Component {
   state = {
      data: null,
      imageLoaded: false,
      type: null,
      thumbnail: null
   }

   componentDidMount() {
      this.setState({
         data: this.props.data
      }, () => {
         if(this.state.data.links) {
            const previewImage = new Image()
            previewImage.src = this.state.data.links[0].href
            previewImage.onload = () => {
               this.setState({
                  imageLoaded: true,
                  type: this.state.data.data[0].media_type,
                  thumbnail: previewImage.src
               })
            }
         }
         else if(this.state.data.data && this.state.data.data[0].media_type === 'audio') {
            this.setState({
               imageLoaded: true,
               type: 'audio',
               thumbnail: soundImg
            })
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
         <Context.Consumer>
            {context => (
               <div className={styles.wrapper}>
                  <div className={styles.content}>
                     {this.state.imageLoaded ? (
                        <Link
                           to={"/" + context.path[0] + '/' + this.state.data.data[0].nasa_id}
                           className={styles.link}
                           onClick={() => context.setShowRecords(true)}
                        >
                           <figure className={styles.figure}>
                              <img
                                 src={this.state.thumbnail}
                                 alt={this.state.data.data[0].title}
                                 className={styles.image}
                              />
                              {this.state.type === 'video' && <img className={styles.overlay} src={videoOverlayImg} alt="" />}
                              <figcaption className={styles.figcaption}>
                                 <div className={styles.caption}>
                                    {this.state.data.data[0].title}
                                 </div>
                              </figcaption>
                           </figure>
                           <div className={styles.border}></div>
                        </Link>
                     ) : (
                        <Loader />
                     )}
                  </div>
               </div>
            )}
         </Context.Consumer>
      )
   }
}

export default Item