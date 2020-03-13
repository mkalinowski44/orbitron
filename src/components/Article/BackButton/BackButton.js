import React from 'react'
import styles from './BackButton.module.scss'
import {Link} from 'react-router-dom'
import Context from '../../../Context'

const BackButton = ({hidden}) => (
   <Context.Consumer>
      {context => (
         <Link
            to={'/' + context.path[0]}
            className={hidden === true ? styles.buttonHidden : styles.button}
            onClick={() => context.closeArticle()}
         >
            <i className="material-icons">close</i>
         </Link>
      )}
   </Context.Consumer>

)

export default BackButton