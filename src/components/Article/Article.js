import React from 'react'
import styles from './Article.module.scss'
import Context from '../../Context'
import ArticleItem from './ArticleItem/ArticleItem'
import Separator from '../Separator/Separator'
import BackButton from './BackButton/BackButton'
import Preview from './Preview/Preview'
import Loader from '../Loader/Loader'

const Article = () => (
   <Context.Consumer>
      {context => (
         <div className={context.articleData !== null ? styles.wrapper : styles.wrapperHidden}>
            {context.articleLoading === true && (
               <div className={styles.loaderContainer}>
                  <Loader />
               </div>
            )}
            <div className={styles.imageLayer}>
               <Preview previewData={context.previewData} loading={context.previewLoading} />
            </div>
            <div className={styles.infoLayer}>
               <div className={styles.headerContainer}>
                  <h1 className={styles.header}>Assets</h1>
                  <h2 className={styles.subheader}>NASA ID: {decodeURI(context.path[1])}</h2>
               </div>
               <div className={styles.separatorWrapper}>
                  <Separator />
               </div>

               {context.articleData && context.articleData.items.map((item, i) => (
                  <ArticleItem link={item.href} key={i} />
               ))}
            </div>

            <BackButton hidden={context.articleData ? false : true}/>
         </div>
      )}
   </Context.Consumer>
)

export default Article