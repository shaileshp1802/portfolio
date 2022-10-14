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


// const cursor = document.querySelector(".cursor");

// document.addEventListener('mousemove', customCursor);

// function customCursor(e) {
//     cursor.style.top = e.pageY + 'px';
//     cursor.style.left = e.pageX + 'px';
//     console.log(e);
// }