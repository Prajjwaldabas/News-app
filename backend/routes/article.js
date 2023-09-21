const express = require('express')
const {saveArticle,removeArticle,getSaves} = require('../controllers/articleController')
const Middleware = require('../middleware/middleware')
const router = express.Router()


router.get('/saved',Middleware.authenticateToken,getSaves)

router.post('/save',Middleware.authenticateToken,saveArticle)

router.post('/remove',Middleware.authenticateToken,removeArticle)




module.exports = router;