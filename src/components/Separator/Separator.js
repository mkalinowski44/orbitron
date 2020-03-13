import React from 'react'
import styles from './Separator.module.scss'
import separatorImage from '../../assets/images/Separator.svg'

const Separator = () => (
   <img className={styles.separator} alt="" src={separatorImage} />
)

export default Separator