const {Router} = require('express')
const router = Router()
const Tasks = require('../models/tasks')

router.get('/',  async (req,res) => {
  const todos = await Tasks.getAll()
  
  res.render('tasks', {
    title: "All tasks",
    todos
  })
})

router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }
  const todos = await Tasks.getById(req.params.id)
  
  res.render('edit', {
    title: "task edit",
    todos
  })
})



module.exports = router