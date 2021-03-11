const {Router} = require('express')
const router = Router()
const Tasks = require('../models/tasks')

router.get('/',  (req, res) => {
  res.render('index', {
    title: 'To Do App',
  })
})

router.post('/', async (req, res) => {
  const name = req.body.name
  const task = req.body.task
  const Todo = await new Tasks(name, task)
  
  if (name !== '' && task !== '') {
    Todo.save()
    res.redirect('/tasks')
  } else {
    res.redirect('/')
  }
  
})

module.exports = router