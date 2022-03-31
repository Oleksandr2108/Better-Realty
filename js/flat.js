const btn = document.getElementById('btn')
const ul = document.getElementById('ul')
const li = document.getElementById('li')
const number = document.getElementById('num')


const lin = document.querySelectorAll('.li');
const ull = document.querySelectorAll('.ul');

for (let lin of ull) {
    lin.onclick = function clickLink() {
        number.innerHTML = event.target.dataset.num
        ul.classList.remove('active')
    }
};

btn.addEventListener('click', () => {
    ul.classList.toggle('active')
})






