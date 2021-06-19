const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.render('delete', {
    title: "del task"
  })
})

module.exports = router