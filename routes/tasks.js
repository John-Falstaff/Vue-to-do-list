const { Router } = require('express')
const router = Router()
const Tasks = require('../models/Tasks')

router.get('/', async (req, res) => {
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

router.post('/edit', async (req, res) => {
  await Tasks.update(req.body)
  res.redirect('/tasks')
})

router.delete('/delete/:id', async (req, res) => {
  const tasks = await Tasks.remove(req.params.id)
  res.status(200).json(tasks)
})


module.exports = router