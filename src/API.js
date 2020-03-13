import axios from 'axios'

export function getCollection(query, callbackFn) {
   axios.get('https://images-api.nasa.gov/search?q=' + query)
   .then(res => {
      callbackFn(res.data.collection)
   })
}

export function getAsset(nasa_id, callbackFn) {
   axios.get('https://images-api.nasa.gov/asset/' + nasa_id)
   .then(res => {
      callbackFn(res.data.collection)
   })
}

export function getPreviewData(link, callbackFn) {
   link = link.replace('http', 'https')
   axios.get(link)
   .then(res => {
      callbackFn(res)
   })
   .catch(error => {
      callbackFn(false)
   })
}