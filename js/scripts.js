/** Highlighting menu elements while scrolling */

const topMenu = document.querySelector('#menu')
const menuItems = document.querySelectorAll(".menu-item");
const scrollItems = document.querySelectorAll( ".mainPage" );

window.addEventListener( "scroll", function () {
    const container = document.querySelector('#mainContainer')
    
    let fromTop = window.scrollY+150
    let cur = [];

    [...scrollItems].map( function(item) {    
        if (item.offsetTop < fromTop) {
            cur.push( item );
        }
    } )

    cur = cur[cur.length - 1]
    let id = cur.dataset.id
    menuItems.forEach( function ( elem, index ) {
        elem.classList.remove('menu-item-active')
    })     
    menuItems[id-1].classList.add('menu-item-active')
    }
)

const escapeCheck = (e) => {
    if(e.keyCode === 27) {
        projectsWindows.forEach(item => {
            if(!item.classList.contains('project-not-active')){
                item.classList.add('project-not-active')
            }
        })
    }
}

/** Projects */

const projectsBtns = document.querySelectorAll('.project-link')
const projectsWindows = document.querySelectorAll('.project-window-outer')
const projectsClose = document.querySelectorAll('.project-window-close')

const showProject = (e) => {
    projectsWindows[e.target.dataset.id-1].classList.remove('project-not-active')
}

const hideProject = (e) => {
    projectsWindows[e.target.dataset.id-1].classList.add('project-not-active')
}

projectsBtns.forEach(element => {
    element.addEventListener('click', showProject)
});

projectsWindows.forEach(element => {
    element.addEventListener('click', hideProject)
})

projectsClose.forEach(element => {
    element.addEventListener('click', hideProject)
})

document.addEventListener('keyup', escapeCheck)