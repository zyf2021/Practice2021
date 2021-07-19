const {Router} = require('express')
const config = require('config')
//const shortid = require('shortid')
const User = require('../models/User')
const auth = require('../middleware/auth.middleware')
const router = Router()
//var ObjectID = require('mongodb').ObjectID

router.post('/main', auth, async (req, res) => {
    const baseUrl = config.get('baseUrl')
    const {date} = req.body //получение данных с client

  })
  
  router.get('/', auth, async (req, res) => {
    try {
      const users = await User.find({id: req.user_token.userId })
      res.json(users)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })
  
  router.get('/:id', auth, async (req, res) => {
    try {
      const user = await User.findById(req.params.id)
      res.json(user)
    } catch (e) {
      res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
  })

module.exports = router