const { Router } = require('express')
const router = Router()
const Tasks = require('../models/Tasks')

router.get('/', (req, res) => {
  res.render('index', {
    title: 'To Do App',
  })
})

router.post('/', async (req, res, next) => {
  const name = req.body.name
  const task = req.body.task
  const Todo = await new Tasks(name, task)

  if (name !== '' && task !== '') {
    Todo.save()
    res.redirect('/')
  } else {
    res.redirect('/')
  }
  next()
})

module.exports = router