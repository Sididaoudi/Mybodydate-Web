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

/* first name */

const firstNameInput = document.getElementById("firstNameInput");
const congratsText = document.querySelector("#congrats .title2");

congratsText.textContent = congratsText.textContent.replace("_Prénom_", firstNameInput.value);
