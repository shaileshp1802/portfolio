var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}


var sidemenu = document.getElementById('sidemenu');

var window_width = window.innerWidth;

console.log(window_width);

function openmenu() {
    sidemenu.style.right = '0';
    sidemenu.style.display = 'flex';
    sidemenu.style.flexDirection = 'column';
}

function closemenu() {
    sidemenu.style.right = '-300px';
    // sidemenu.style.display = 'none';
}


// const cursor = document.querySelector(".cursor");

// document.addEventListener('mousemove', customCursor);

// function customCursor(e) {
//     cursor.style.top = e.pageY + 'px';
//     cursor.style.left = e.pageX + 'px';
//     console.log(e);
// }