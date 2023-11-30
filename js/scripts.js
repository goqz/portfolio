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