import React from 'react'
import styles from './ToTop.module.scss'
import Context from '../../Context'

const ToTop = () => (
   <Context.Consumer>
      {context => (
         <button
            type="button"
            className={context.scrollTop > 400 ? styles.button : styles.buttonHidden}
            onClick={() => {
               window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
         >
            <i className="material-icons">
               arrow_upward
            </i>
         </button>
      )}
   </Context.Consumer>

)

export default ToTop