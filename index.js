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



const scriptURL = "https://script.google.com/macros/s/AKfycbz_xBtXoZMXs4poKZjvddP5uCMtp-1Ez-XledvsRJFkOmwYX3HzpOzwsXlEYKTuKvLtEw/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = 'Message Sent <i class="fa-solid fa-check">'
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.log('Error!', error.message))
})

const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        toTop.classList.add('active');
    }
    else{
        toTop.classList.remove('active');
    }
})



// var sidemenu = document.getElementById('sidemenu');

// var window_width = window.innerWidth;

// console.log(window_width);

// function openmenu() {
//     sidemenu.style.right = '0';
//     sidemenu.style.display = 'flex';
//     sidemenu.style.flexDirection = 'column';
// }

// function closemenu() {
//     sidemenu.style.right = '-300px';
//     // sidemenu.style.display = 'none';
// }


// const cursor = document.querySelector(".cursor");

// document.addEventListener('mousemove', customCursor);

// function customCursor(e) {
//     cursor.style.top = e.pageY + 'px';
//     cursor.style.left = e.pageX + 'px';
//     console.log(e);
// }