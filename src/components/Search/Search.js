import React from 'react'
import styles from './Search.module.scss'
import Context from '../../Context'

class Search extends React.Component {
   render() {
      return (
         <Context.Consumer>
            {context => (
               <div className={context.showRecords ? styles.wrapperSmall : styles.wrapper}>
                  <input
                     type="search"
                     className={styles.input}
                     placeholder="Search..."
                  />
                  <div className={styles.searchLine}></div>
               </div>
            )}
         </Context.Consumer>
      )
   }
}

export default Search