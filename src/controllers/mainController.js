const whatDoesTrumpThink = require('../services/whatDoesTrumpThink')
const giphy = require('../services/giphy')

exports.mainPage = (req, res) => {
  res.render('main')
}

exports.mainPageSubmit = (req, res, next) => {
  const { name } = req.body
  const fetchQuote = whatDoesTrumpThink.fetchQuote(name)
  const fetchImage = giphy.fetchImage('trump')

  fetchImage
    .then(result => result)

  fetchQuote
    .then(result => result)

  Promise.all([fetchImage, fetchQuote])
    .then(([value1, value2]) => {
      res.render('quote', {
        nickname: value2.nickname,
        message: value2.message,
        image_url: value1,
      })
    })
    .catch(error => next(error))
}
