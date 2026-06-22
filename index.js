let homeEl = document.getElementById("home_score");
let homeScore = 0;
function homeaddone() {
    homeScore += 1;
    homeEl.textContent = homeScore;
}
function homeaddtwo() {
    homeScore += 2;
    homeEl.textContent = homeScore;
}
function homeaddthree() {
    homeScore += 3;
    homeEl.textContent = homeScore;
}
let guestEl = document.getElementById("guest_score");
let guestScore = 0;
function guestaddone() {
    guestScore += 1;
    guestEl.textContent = guestScore;
}
function guestaddtwo() {
    guestScore += 2;
    guestEl.textContent = guestScore;
}
function guestaddthree() {
    guestScore += 3;
    guestEl.textContent = guestScore;
}