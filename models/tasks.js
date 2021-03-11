const fs = require('fs')
const path = require('path')
const {v4: uuid} = require('uuid')


class Tasks {
  constructor(name, task) {
    this.name = name
    this.task = task
    this.id = uuid()
  }
  
  toJSON () {
    return {
      name: this.name,
      task: this.task,
      id: this.id
    }
  }
  
  async save() {
    const tasks = await Tasks.getAll()
    tasks.push(this.toJSON())
    
    return new Promise( (resolve, reject) => {
     fs.writeFile(
      path.join(__dirname, '..', 'data', 'todoTasks.json'),
       JSON.stringify(tasks),
       (err) => {
        if(err) {
          reject(err)
        } else {
          resolve()
        }
       }
     )
    })
  }
  
  // static delete() {
  //   return new Promise((resolve, reject ) => {
  //     fs.writeFile(
  //       path.join(__dirname, '..', 'data', 'todoTasks.json'),
  //       JSON.stringify()
  //     )
  //   })
  // }
  
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
  
  static async getById() {
    const todos = await Tasks.getAll()
    return todos.find(t => t.id === this.id)
  }

}



module.exports = Tasks