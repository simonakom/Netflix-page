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

const signInModal = document.getElementById("signInModal");
const signInButton = document.getElementById("signInButton");

// Function to show the modal
function showSignInModal() {
    signInModal.showModal();
}

signInButton.addEventListener("click", showSignInModal);
