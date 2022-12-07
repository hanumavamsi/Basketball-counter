let homePoints = document.getElementById("home-score-div")
let guestPoints = document.getElementById("guest-score-div")

function add1Home(){
    homePoints.textContent = Math.floor(homePoints.textContent) + 1 
} 
function add2Home(){
    homePoints.textContent = Math.floor(homePoints.textContent) + 2 
} function add3Home(){
    homePoints.textContent = Math.floor(homePoints.textContent) + 3  
} 
function add1Guest(){
    guestPoints.textContent = Math.floor(guestPoints.textContent) + 1
} function add2Guest(){
     guestPoints.textContent = Math.floor(guestPoints.textContent) + 2
} function add3Guest(){
     guestPoints.textContent = Math.floor(guestPoints.textContent) + 3 
} 
