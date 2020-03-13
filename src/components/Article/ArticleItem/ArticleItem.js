import React from 'react'
import styles from './ArticleItem.module.scss'
import Loader from '../../Loader/Loader'

import SoundImg from '../../../assets/images/Sound.svg'
import VideoImg from '../../../assets/images/Video overlay.svg'
import CodeImg from '../../../assets/images/Code.svg'

class ArticleItem extends React.Component {
   state = {
      href: this.props.link,
      image: this.props.link,
      type: null,
      imageLoading: false
   }

   componentDidMount() {
      const ext = this.props.link.split('.').pop()
      if(ext === 'png' || ext === 'jpg' || ext === 'jpeg' || ext === 'svg') {
         this.setState({
            type: 'img',
            imageLoading: true
         })

         const img = new Image()
         img.src = this.props.link
         img.onload = () => {
            this.setState({
               imageLoading: false
            })
         }
      }
      if(ext === 'mp3' || ext === 'm4a') {
         this.setState({
            image: SoundImg,
            type: 'audio'
         })
      }
      else if(ext === 'mp4' || ext === 'mov' || ext === 'avi') {
         this.setState({
            image: VideoImg,
            type: 'video'
         })
      }
      else if(ext === 'json') {
         this.setState({
            image: CodeImg,
            type: 'pre'
         })
      }
   }

   render() {
      return (
         <>
         {this.state.type !== null && (
            <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
               {this.state.imageLoading === false ? (
                  <img
                     alt=""
                     src={this.state.image}
                     className={styles.image}
                  />
               ) : (
                  <Loader />
               )}
            </div>
            <div className={styles.shadow}></div>
            </div>
         )}
         </>
      )
   }
}

export default ArticleItem