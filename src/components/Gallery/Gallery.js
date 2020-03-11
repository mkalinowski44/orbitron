import React from 'react'
import styles from './Gallery.module.scss'
import Item from './Item/Item'
import Context from '../../Context'

const Gallery = ({items}) => (
   <Context.Consumer>
      {context => (
         <>
            {context.waitRender === false && (
               <div className={styles.wrapper}>
                  {items.map(item => (
                     <Item data={item} key={item.data[0].nasa_id} />
                  ))}
               </div>
            )}
         </>
      )}
   </Context.Consumer>

)

export default Gallery

