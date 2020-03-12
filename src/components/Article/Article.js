import React from 'react'
import styles from './Article.module.scss'
import Context from '../../Context'

class Article extends React.Component {
   render() {
      return (
         <Context.Consumer>
            {context => (
               <div className={context.articleData ? styles.wrapper : styles.wrapperHidden}>
                  <div className={styles.imageLayer}>

                  </div>
                  <div className={styles.infoLayer}>

                  </div>
               </div>
            )}
         </Context.Consumer>
      )
   }
}

export default Article