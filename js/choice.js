// Choice

const btnChoice = document.getElementById('block-btn')
const list = document.getElementById('block-list')
const li = document.getElementById('li')
const number = document.getElementById('block-num')


const item = document.querySelectorAll('.block-item');
const ul = document.querySelectorAll('.block-list');


for (let item of ul) {
    item.onclick = function clickLink() {
        let text = event.target.dataset.num;
        if (text !== undefined) {
            number.innerHTML = text;
        }
        list.classList.remove('active')
        btnChoice.classList.remove('active')

    }
};

btnChoice.addEventListener('click', () => {
    list.classList.toggle('active')
    btnChoice.classList.toggle('active')
});
