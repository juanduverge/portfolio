
AOS.init({
    duration: 3000
});


const header__movile = document.getElementById('header__movile');
const header__nav = document.getElementById('header__nav');

header__movile.addEventListener('click', () => {
    header__nav.classList.toggle('header__nav-show');
});



const button = document.getElementById('go-top__img')

function scrollFunction() {
    if (document.documentElement.scrollTop > 200) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

window.onscroll = function () { scrollFunction() };


const form = document.getElementById('form');
const mailto = document.getElementById('mailto');

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'))
    mailto.setAttribute('href', `mailto:juanmanuelduverge@gmail.com?subject=${form.get('subject')} ${form.get('name')}&body=${form.get('message')}`)
    mailto.click()
}