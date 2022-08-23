const button = document.querySelector('button')
const headline = document.querySelector('h1')
const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.modal-button')

console.log(modal)


button.addEventListener('click', () => {
    modal.classList.add('visabillity')
})


modalButton.addEventListener('click', () => {
    modal.classList.remove('visabillity')
})