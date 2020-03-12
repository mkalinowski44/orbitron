import React from 'react'
import styles from './Search.module.scss'
import Context from '../../Context'
import {debounce} from '../../Utils'
import {
   Redirect
} from "react-router-dom"

class Search extends React.Component {
   handleInputChange(event, context) {
      let value = event.target.value
      debounce(() => {
         if(value.length > 2) {
            context.setSearchPhrase(value)
            context.setShowRecords(true)
         } else {
            context.setSearchPhrase('')
         }
      }, 1000)
   }

   keyPressed(event, context) {
      if (event.key === "Enter") {
         context.setSearchPhrase('')
         this.handleInputChange(event, context)
      }
    }

   render() {
      return (
         <Context.Consumer>
            {context => (
               <div className={context.showRecords ? styles.wrapperSmall : styles.wrapper}>
                  <input
                     type="search"
                     className={styles.input}
                     placeholder="Search..."
                     onChange={(e) => this.handleInputChange(e, context)}
                     onKeyPress={(e) => this.keyPressed(e, context)}
                  />
                  <div className={styles.searchLine}></div>
                  {context.searchPhrase && <Redirect to={'/' + context.searchPhrase} />}
               </div>
            )}
         </Context.Consumer>
      )
   }
}

export default Search