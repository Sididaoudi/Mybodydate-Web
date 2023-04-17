/* Credit animation */

// const playButton = document.getElementById('play-button');
// const creditVideo = document.getElementById('credit-video');

// playButton.addEventListener('click', function () {
//     creditVideo.play();
// });

/* Logo animation */


/* Email format Validation */

function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email)) {
        return true;
    } else {
        alert("Adresse e-mail invalide");
        return false;
    }
}

/* Select size */
const sizeSelect = document.getElementById('sizeSelect');

for (let i = 140; i <= 230; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i + ' cm';
    sizeSelect.appendChild(option);
}

/* Captcha */

var captcha = {
    generateCode: function () {
        var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var code = "";
        for (var i = 0; i < 6; i++) {
            var rand = Math.floor(Math.random() * chars.length);
            code += chars[rand];
        }
        return code;
    },
    refresh: function () {
        var captchaImage = document.getElementById("captcha-image");
        captchaImage.innerHTML = this.generateCode();
    },
    init: function () {
        this.refresh();
        var refreshButton = document.getElementById("refresh-captcha");
        refreshButton.addEventListener("click", function () {
            captcha.refresh();
        });
    }
};
captcha.init();

