import React from 'react';
import styles from './Index.module.scss'
import Context from './Context'
import { debounce } from './Utils'
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
// import Article from './components/Article/Article'

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
      articleData: 1,
      searchPhrase: '',
      path: ['', '']
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
      this.setPath()
   }

   openArticle(data) {
      this.setState({
         articleData: data
      })
      window.classList.add('noScroll')
   }

   closeArticle() {
      this.setState({
         articleData: null
      })
      window.classList.remove('noScroll')
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
         this.setState({
            path: window.location.pathname.split('/')
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
                        <Route exact path="/earth" children={<RenderGallery searchValue="earth" title="Earth" />} />
                        <Route exact path="/mars" children={<RenderGallery searchValue="mars" title="Mars" />} />
                        <Route exact path="/asteroids" children={<RenderGallery searchValue="asteroids" title="Asteroids" />} />
                        <Route exact path="/exoplanets" children={<RenderGallery searchValue="exoplanets" title="Exoplanets" />} />
                        <Route path="/:search" children={<RenderGallery />} />
                     </Switch>
                  </Content>
                  <ToTop />
                  {/* <Article data={this.state.articleData} /> */}
               </div>
            </Context.Provider>
         </Router>
      )
   }
}

export default App