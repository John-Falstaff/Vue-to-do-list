// tasks page del function

let del_btn = document.querySelectorAll('.del_btn')
let task = document.querySelectorAll('.task')

del_btn.forEach((item, index) => {
  item.onclick = (e) => {
    e.preventDefault()
    task[index].classList.add('hide')
    setTimeout(() => {
      task[index].classList.add('del')
    }, 900)
  }
})


// delete task script

const deleteTask = document.querySelectorAll('.tasks_box')

deleteTask.forEach(item => {
  if (item) {
    item.addEventListener('click', (event) => {

      if (event.target.classList.contains('delete_task')) {

        const id = event.target.dataset.id

        fetch('/tasks/delete/' + id, {
          method: 'delete'
        }).then(res => res.json())
          .then(curTasks => {
            console.log(curTasks)
          })
      }
    })
  }
})

