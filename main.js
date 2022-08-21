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

const btnFilter = document.querySelectorAll('.btn')
const sectionItem = document.querySelectorAll('.section__item')

btnFilter.forEach((btn) => {
    const nameFilter = btn.getAttribute('data-filter')
    console.log(nameFilter);
    btn.addEventListener('click', ()=> {
        document.querySelector('.btn.active').classList.remove('active')
        btn.classList.add('active')
        sectionItem.forEach((sections) => {
            const getfilterData = sections.getAttribute('class')
            const filterData = getfilterData.indexOf(nameFilter)
            if(filterData <= 1) {
                sections.style.display ="none"
            } else if(filterData >= 1 ){
                sections.style.display ="block"
                sections.style.transition ="ease-in .5s"
            }
        })
    })
})
