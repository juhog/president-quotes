const fetch = require('node-fetch')
const querystring = require('querystring')

module.exports.fetchQuote = name => new Promise((resolve, reject) => {
  const query = querystring.stringify({ q: name })
  const url = `https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?${query}`
  const fetchPersonalized = fetch(url)

  fetchPersonalized
    .then(response => response.json())
    .then((json) => {
      resolve({
        nickname: json.nickname,
        message: json.message,
      })
    })
    .catch((error) => {
      reject(error)
    })
})

// /** @namespace json.nickname */
// /** @namespace json.message */
