const express = require('express')
const exspHbs = require('express-handlebars')
const homeRouter = require('../routes/home')
const tasksRouter = require('../routes/tasks')
const editRouter = require('../routes/edit')

const app = express()
const hbs = exspHbs.create({
  defaultLayout: "main",
  extname: "hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRouter)
app.use('/tasks', tasksRouter)
app.use('/edit', editRouter)

const PORT = process.env.port || 4000
app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))