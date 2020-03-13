import React from 'react'
import styles from './Preview.module.scss'
import Loader from '../../Loader/Loader'

class Preview extends React.Component {
   render() {
      return (
         <div className={styles.wrapper}>
            {this.props.loading === false ? (
               <>
                  {this.props.previewData !== null && this.props.previewData.previewType === 'img' && (
                     <img
                        alt=""
                        className={styles.image}
                        src={this.props.previewData.previewSrc}
                     />
                  )}
                  {this.props.previewData !== null && this.props.previewData.previewType === 'video' && (
                     <video
                        className={styles.video}
                        src={this.props.previewData.previewSrc}
                        controls
                        autoPlay
                     >
                        Your browser does not support the video tag.
                     </video>
                  )}
                  {this.props.previewData !== null && this.props.previewData.previewType === 'audio' && (
                     <audio
                        className={styles.audio}
                        src={this.props.previewData.previewSrc}
                        controls
                        autoPlay
                     >
                        Your browser does not support the video tag.
                     </audio>
                  )}
                  {this.props.previewData !== null && this.props.previewData.previewType === 'json' && (
                     <pre className={styles.pre}>
                        {this.props.previewData.previewSrc !== false ? (
                           <>{JSON.stringify(this.props.previewData.previewSrc, null, '    ')}</>
                        ) : (
                           <>Error: Cannot access data</>
                        )}
                     </pre>
                  )}
               </>
            ) : (
               <Loader />
            )}

         </div>
      )
   }
}

export default Preview