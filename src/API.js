import axios from 'axios'

export function getCollection(query, callbackFn) {
   axios.get('https://images-api.nasa.gov/search?q=' + query)
   .then(res => {
      callbackFn(res.data.collection)
   })
}