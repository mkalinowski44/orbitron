import React from 'react'
import styles from './Gallery.module.scss'
import Item from './Item/Item'
import Context from '../../Context'
import { getCollection } from '../../API'

import Header from '../Header/Header'
import Loader from '../Loader/Loader'

class Gallery extends React.Component {
   state = {
      data: null,
   }

   componentDidMount() {
      this.getData()
   }

   componentDidUpdate(prevProps) {
      if (prevProps.search !== this.props.search) {
         this.getData()
      }
    }

   getData() {
      this.setState({
         data: null
      }, () => {
         getCollection(this.props.search, data => {
            this.setState({
               data: data
            })
         })
      })
   }

   render(){
      return (
         <div className={styles.wrapper}>
            <Header>
               {this.props.title}
            </Header>
            {this.state.data !== null ? (
               <Context.Consumer>
                  {context => (
                     <>
                        {context.waitRender === false && (
                           <div className={styles.gallery}>
                              {this.state.data.items.map(item => (
                                 <Item data={item} key={item.data[0].nasa_id} />
                              ))}
                           </div>
                        )}
                     </>
                  )}
               </Context.Consumer>
            ) : (
               <Loader />
            )}
         </div>
      )
   }
}

export default Gallery

