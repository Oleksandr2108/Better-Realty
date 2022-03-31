// Modal Window



const btnContact = document.getElementById('btn-contact')

btnContact.addEventListener('click', function () {
    modal.classList.add('active');
});


btnOpen.addEventListener('click', function () {
    modal.classList.add('active');
})

function closeModal() {
    modal.classList.remove('active')
};


overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);
