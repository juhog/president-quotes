const express = require('express')
const mainController = require('../controllers/mainController')

const mainRouter = express.Router()

mainRouter.route('/')
  .get(mainController.mainPage)
  .post(mainController.mainPageSubmit)

module.exports = mainRouter
