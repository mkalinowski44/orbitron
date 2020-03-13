import React from 'react'
import styles from './Article.module.scss'
import Context from '../../Context'
import ArticleItem from './ArticleItem/ArticleItem'
import Separator from '../Separator/Separator'
import BackButton from './BackButton/BackButton'

class Article extends React.Component {
   

   render() {
      return (
         <Context.Consumer>
            {context => (
               <div className={context.articleData !== null ? styles.wrapper : styles.wrapperHidden}>
                  <div className={styles.imageLayer}>

                  </div>
                  <div className={styles.infoLayer}>
                     <h1 className={styles.header}>Assets</h1>
                     <h2 className={styles.subheader}>NASA ID: {decodeURI(context.path[1])}</h2>
                     <Separator />

                     {context.articleData && context.articleData.items.map((item, i) => (
                        <ArticleItem link={item.href} key={i} />
                     ))}
                  </div>

                  <BackButton hidden={context.articleData ? false : true}/>
               </div>
            )}
         </Context.Consumer>
      )
   }
}

export default Article