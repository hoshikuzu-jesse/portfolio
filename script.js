document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const close = document.querySelector('.close');

    document.querySelectorAll('.gallery img').forEach(image => {
        image.addEventListener('click', function () {
            modalImg.src = this.src;
            modal.classList.add('show');
            setTimeout(function () {
                modal.classList.add('again');
            }, 1)
        });
    });

    close.addEventListener('click', function () {
        modal.classList.remove('show', 'again');
    });


    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.remove('show', 'again');
        }
    });
});

function copyTwitter() {
    const check = document.querySelector('#check');
    var copyTextTwitter = document.getElementById("copyTwitter");

    copyTextTwitter.select();
    copyTextTwitter.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyTextTwitter.value);

    setTimeout(function () {
        check.textContent = "done_all";
        setTimeout(function () {
            check.textContent = "content_copy";
        }, 1000)
    })
}

function copyDiscord() {
    const check2 = document.querySelector('#check2');
    var copyTextDiscord = document.getElementById("copyDiscord");

    copyTextDiscord.select();
    copyTextDiscord.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyTextDiscord.value);

    setTimeout(function () {
        check2.textContent = "done_all";
        setTimeout(function () {
            check2.textContent = "content_copy";
        }, 1000)
    })
}


const darkMode = document.querySelector('.dark-mode-button');
var switchSun = document.getElementById('sun');
var switchMoon = document.getElementById('moon');

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode-variables');

    if(switchSun.innerHTML == "dark_mode") {
        switchSun.innerHTML= "light_mode";
        switchMoon.innerHTML= "dark_mode";
    } else {
        switchSun.innerHTML = "dark_mode"
        switchMoon.innerHTML = "light_mode"
    }
})

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    
    document.body.classList.toggle('dark-mode-variables');

    if(switchSun.innerHTML == "dark_mode") {
        switchSun.innerHTML= "light_mode";
        switchMoon.innerHTML= "dark_mode";
    } else {
        switchSun.innerHTML = "dark_mode"
        switchMoon.innerHTML = "light_mode"
    }
}

const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn')
const outside = document.getElementById('home')

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';

})

