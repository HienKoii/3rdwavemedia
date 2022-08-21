const menuTheme = document.querySelector('.controls__color')
function handleClickMenu() {
    menuTheme.classList.toggle('open')
}


const changeThemes = document.querySelectorAll('.js-theme')
const panelColorItems = document.querySelectorAll('.controls__color--item')
panelColorItems.forEach((item) => {
const attTheme = item.getAttribute('theme')
    item.style.backgroundColor = attTheme
    item.addEventListener('click', ()=> {
        document.querySelector('.controls__color--item.active').classList.remove('active')
        item.classList.add('active')
        changeThemes.forEach((item) => {
            item.style.backgroundColor = attTheme
        })
    })
})

const listBtn = document.querySelectorAll('.btn')
const btnActives = document.querySelector('.btn.active')
const clientItems = document.querySelectorAll('.section__item')
clientItems.forEach((clientItem, index) => {
    const AttClientItem = clientItem.getAttribute('client')
    listBtn.forEach((item, index) => {
        item.addEventListener('click', () => {
            const btnActives = document.querySelector('.btn.active')
            btnActives.classList.remove('active')
            item.classList.add('active')
            if(index === 0) {
                clientItem.style.display = 'block'
            } else if (index === 1 && AttClientItem !=  'angular') {
                clientItem.style.display = 'none'
            } else if (index === 2 && AttClientItem != 'react') {
                clientItem.style.display = 'none'
            } else if (index === 3 && AttClientItem != 'django-python') {
                clientItem.style.display = 'none'
            }
        })
    })
  
})
