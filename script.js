// accordion
const accordion = document.querySelectorAll (".accordion")

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function(){ 
        this.classList.toggle("active") 

        const description = this.nextElementSibling

        if (description.style.maxHeight) {
            description.style.maxHeight = null;
        } else { 
            description.style.maxHeight = description.scrollHeight + "px";
        }
    })
}

// modal window functions
const signInButton = document.getElementById("signInButton");
const signInModal = document.getElementById("signInModal");
const closeButton = document.getElementById("closeButton");

function showSignInModal() {
    signInModal.showModal();
    document.body.classList.add('dialog-opened');
    document.body.style.overflow = 'hidden'; // Disable scrolling
}
signInButton.addEventListener("click", showSignInModal);
function closeSignInModal() {
    signInModal.close();
    document.body.classList.remove('dialog-opened');
    document.body.style.overflow = 'auto'; // Enable scrolling
}
closeButton.addEventListener("click", closeSignInModal);

// Close modal when "Escape" key is pressed
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeSignInModal();
    }
});

// "learn more" expandable
function toggleAdditionalInfo() {
    const learnMoreInfo = document.getElementById("learnMoreInfo");
    const additionalInfo = document.getElementById("additionalInfo");

    if (additionalInfo.style.display === "none") {
        additionalInfo.style.display = "block";
        learnMoreInfo.style.display = "none";
    } else {
        additionalInfo.style.display = "none";
        learnMoreInfo.style.display = "inline"; 
    }
}


