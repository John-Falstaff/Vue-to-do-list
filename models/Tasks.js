const fs = require('fs')
const path = require('path')
const { v4: uuid } = require('uuid')


class Tasks {
  constructor(name, task) {
    this.name = name
    this.task = task
    this.id = uuid()
  }

  toJSON() {
    return {
      name: this.name,
      task: this.task,
      id: this.id
    }
  }

  static async update(task) {
    const todos = await Tasks.getAll()

    const idx = todos.findIndex(t => t.id === task.id)
    todos[idx] = task

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'todoTasks.json'),
        JSON.stringify(todos),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve()
          }
        }
      )
    })
  }


  async save() {
    const tasks = await Tasks.getAll()
    tasks.push(this.toJSON())

    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'todoTasks.json'),
        JSON.stringify(tasks),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(tasks)
          }
        }
      )
    })
  }


  static getAll() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, '..', 'data', 'todoTasks.json'),
        'utf-8',
        (err, content) => {
          if (err) {
            reject(err)
          } else {
            resolve(JSON.parse(content))
          }
        }
      )
    })
  }

  static async getById(id) {
    const todos = await Tasks.getAll()
    return todos.find(t => t.id === id)
  }


  static async remove(id) {
    const todos = await Tasks.getAll()

    // const idx = todos.findIndex(d => d.id !== id)
    // const curTodos = todos[idx]
    const result = todos.filter(d => d.id !== id)


    return new Promise((resolve, reject) => {
      fs.writeFile(
        path.join(__dirname, '..', 'data', 'todoTasks.json'),
        JSON.stringify(result),
        (err) => {
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        }
      )
    })
  }
}

module.exports = Tasks