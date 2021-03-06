const fetch = require('node-fetch')
const querystring = require('querystring')

module.exports.fetchImage = tag => new Promise((resolve, reject) => {
  const query = querystring.stringify({
    tag,
    api_key: process.env.GIPHY_API_KEY,
  })
  const url = `https://api.giphy.com/v1/gifs/random?${query}`
  const fetchPersonalized = fetch(url)

  /** @namespace json.data.images.fixed_height.url */
  fetchPersonalized
    .then(response => response.json())
    .then(json => resolve(json.data.images.fixed_height.url))
    .catch(error => reject(error))
})
