// ---------------------------------
// FUNCTIONS -----------------------
// ---------------------------------

// Function that generates a random number between 1 and 100.
function generateNumber() {
    var number = Math.floor(Math.random() * 100 + 1);
    return number;
}

// Function that launchs a loader.
function launchLoader() {
    var getP2 = document.getElementById("generated-number");
    getP2.innerHTML = "";
    getP2.innerHTML = '<svg id="loader" viewBox="0 0 340 340"> <circle cx="170" cy="170" r="160"/> <circle cx="170" cy="170" r="135"/> <circle cx="170" cy="170" r="110"/> <circle cx="170" cy="170" r="85"/> </svg>';
}

// Function that check the key pressed.
function checkKeyPressed() {

}

// Function that launch the treatment 
function treatment() {
    // Switch
    if (active === true) {
        return;
    } else {
        active = true;
    }
}



// ---------------------------------
// VARIABLES -----------------------
// ---------------------------------

// Variable to get the HTML button.
var generateButton = document.getElementById("generate-button");

// Variable for the state of the treatment.
var active = false;

// ---------------------------------
// LISTENERS ------------------------
// ---------------------------------

generateButton.addEventListener("click", treatment);

window.addEventListener("keydown", checkKeyPressed);