const { Router } = require('express')
const router = Router()
// const Task = require('../models/Tasks')

router.get('/', (req, res) => {
  res.render('edit', {
    title: "edit task"
  })
})

module.exports = router