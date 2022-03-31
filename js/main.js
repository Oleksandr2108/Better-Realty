// Modal Window

const btnOpen = document.getElementById('menu-btn');
const modal = document.getElementById('wrapper-modal');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('close-modal');

btnOpen.addEventListener('click', function () {
    modal.classList.add('active');
})

function closeModal() {
    modal.classList.remove('active')
};


overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);


// Hamburger

const mobileMenu = document.getElementById('hamburger')
const menu = document.querySelector('.menu')
mobileMenu.addEventListener('click', function () {
    menu.classList.toggle('active')
})

// Parallax


function parallax(e) {
    this.querySelectorAll('.offer-img').forEach(img => {
        let speed = img.getAttribute('data-speed');
        img.style.transform = `translateX(${e.clientX * speed / 7000}px)translateY(${e.clientY * speed / 7000}px)`;

    });
}

document.addEventListener('mousemove', parallax);







// Validade


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);

                form.reset();
            } else {
                alert("Помилка")
            }

        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                } else if (input.getAttribute("type" == "text")) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }

    }

    function formAddError(input) {
        input.parentElement.classList.add('error')
        input.classList.add('error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('error')
        input.classList.remove('error')
    }

    // foo tel 

    function telTest(input) {
        return /^[0-9]+$/.test(input.value);
    }

})

document.addEventListener('DOMContentLoaded', function () {
    const form2 = document.getElementById('form-second');
    form2.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        let error = formValidate(form2);

        let formData = new FormData(form2);

        if (error === 0) {
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);

                form2.reset();
            } else {
                alert("Помилка")
            }

        }
    }

    function formValidate(form2) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                } else if (input.getAttribute("type" == "text")) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }
            }
            return error;
        }

    }

    function formAddError(input) {
        input.parentElement.classList.add('error')
        input.classList.add('error')
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('error')
        input.classList.remove('error')
    }

    // foo tel 

    function telTest(input) {
        return /^[0-9]+$/.test(input.value);
    }

})




