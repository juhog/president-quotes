const whatDoesTrumpThink = require('../services/whatDoesTrumpThink')

exports.mainPage = (req, res) => {
  res.render('main')
}

exports.mainPageSubmit = (req, res, next) => {
  const { name } = req.body
  const fetchQuote = whatDoesTrumpThink.fetchQuote(name)

  fetchQuote
    .then((result) => {
      res.render('quote', {
        nickname: result.nickname,
        message: result.message,
      })
    })
    .catch((error) => {
      next(error)
    })
}
