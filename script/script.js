/* Credit animation */

const playButton = document.getElementById('play-button');
const creditVideo = document.getElementById('credit-video');

playButton.addEventListener('click', function () {
    creditVideo.play();
});



/* Email format Validation */

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value)) {
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

