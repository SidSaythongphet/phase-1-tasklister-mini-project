document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    addTask(e.target['new-task-description'].value)
    form.reset()
  })
});


function addTask(task) {
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.textContent = 'X'
  li.textContent = `${task} `
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  btn.addEventListener('click', () => {
    li.remove()
  })
}
