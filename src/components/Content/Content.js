import React from 'react'
import styles from './Content.module.scss'
import Context from '../../Context'

const Content = ({children}) => (
   <Context.Consumer>
      {context => (
         <>
            <div className={context.showRecords ? styles.wrapper : styles.wrapperHidden}>
               {children}
            </div>
            <div className={context.showRecords ? styles.flares : styles.flaresHidden}>
               <div className={styles.leftEffect}></div>
               <div className={styles.separator}></div>
               <div className={styles.rightEffect}></div>
            </div>
         </>
      )}
   </Context.Consumer>
)

export default Content