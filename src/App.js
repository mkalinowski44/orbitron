import React from 'react';
import styles from './css/Index.module.scss'
import Context from './Context'
import { debounce } from './Utils'
import { getAsset } from './API'
import {
   BrowserRouter as Router,
   useParams,
   Switch,
   Route
} from "react-router-dom"

import DayPicture from './components/DayPicture/DayPicture'
import Navigation from './components/Navigation/Navigation'
import Search from './components/Search/Search'
import Content from './components/Content/Content'
import ToTop from './components/ToTop/ToTop'
import Gallery from './components/Gallery/Gallery'
import Article from './components/Article/Article'

const RenderGallery = ({searchValue, title}) => {
   let {search} = useParams()
   if(searchValue) {
      search = searchValue
   }

   let titleValue = title || 'Search: ' + search

   return (
      <Gallery search={search} title={titleValue} />
   )
}

class App extends React.Component {
   state = {
      showRecords: window.location.pathname === '/' ? false : true,
      waitRender: false,
      scrollTop: 0,
      articleData: null,
      searchPhrase: '',
      path: ['']
   }

   setSearchPhrase(phrase) {
      this.setState({
         searchPhrase: phrase
      })
   }

   componentDidMount() {
      window.addEventListener('scroll', (e) => {
         debounce(() => {
            this.setState({
               scrollTop: window.scrollY
            })
         }, 300)
      })
      window.addEventListener('mouseup', (e) => {
         if(e.button === 3 || e.button === 4) {
            setTimeout(() => {
               this.setPath()
            }, 10)
         }
      })

      this.setPath()
   }

   getArticleData(nasa_id) {
      getAsset(nasa_id, data => {
         this.setState({
            articleData: data,
         })
      })
   }

   openArticle() {
      this.getArticleData(this.state.path[1])
      document.getElementsByTagName('body')[0].classList.add(styles.noScroll)
   }

   closeArticle() {
      this.setState({
         articleData: null
      })
      document.getElementsByTagName('body')[0].classList.remove(styles.noScroll)
   }

   setShowRecords(value) {
      if(this.state.showRecords === false && value === true) {
         this.setState({
            showRecords: true,
            waitRender: true
         }, () => {
            setTimeout(() => {
               this.setState({
                  waitRender: false
               })
            }, 450)
         })
      } else {
         this.setState({
            showRecords: value
         })
      }
      this.setPath()

   }

   setPath() {
      setTimeout(() => {
         let path = window.location.pathname.split('/');

         let filtered = path.filter(el => {
            return el !== ''
         })

         this.setState({
            path: filtered
         }, () => {
            if(filtered.length === 2) {
               this.openArticle()
            } else {
               this.closeArticle()
            }
         })
      },0)
   }

   render() {
      const contextData = {
         ...this.state,
         setShowRecords: this.setShowRecords.bind(this),
         openArticle: this.openArticle.bind(this),
         closeArticle: this.closeArticle.bind(this),
         setSearchPhrase: this.setSearchPhrase.bind(this)
      }

      return (
         <Router onChange={this.setRoute}>
            <Context.Provider value={contextData}>
               <div className={this.state.showRecords ? styles.wrapper : styles.wrapperNoScroll}>
                  <DayPicture />
                  <Navigation />
                  <Search />
                  <Content>
                     <Switch>
                        <Route path="/earth" children={<RenderGallery searchValue="earth" title="Earth" />} />
                        <Route path="/mars" children={<RenderGallery searchValue="mars" title="Mars" />} />
                        <Route path="/asteroids" children={<RenderGallery searchValue="asteroids" title="Asteroids" />} />
                        <Route path="/exoplanets" children={<RenderGallery searchValue="exoplanets" title="Exoplanets" />} />
                        <Route path="/:search" children={<RenderGallery />} />
                     </Switch>
                  </Content>
                  <ToTop />
                  <Article />
               </div>
            </Context.Provider>
         </Router>
      )
   }
}

export default App