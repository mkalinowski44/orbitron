import React from 'react'
import styles from './Gallery.module.scss'
import Item from './Item/Item'

const Gallery = ({items}) => (
   <div className={styles.wrapper}>
      {items.map(item => (
         <Item data={item} key={item.data[0].nasa_id} />
      ))}
   </div>
)

export default Gallery

