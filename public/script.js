// tasks page del function
let del_btn = document.querySelector('.del_btn')
let task = document.querySelector('.task')
del_btn.onclick = (e) => {
  e.preventDefault()
  task.classList.add('hide')
  setTimeout(() => task.classList.add('del'), 900)
}