import "./play-guess-the-number/logic-game"
import "./play-guess-the-number/work-points.js"
import "./play-guess-the-number/button-play-again.js"
import "./play-guess-the-number/work-with-gift.js"
import "./api/api-pixabey.js"
import { swithLogIn } from "../auth/swithLogIn.js";
import { getUser } from "../working-with-memory";
import { allClearlocalStorage } from "../working-with-memory";
const btnExit = document.querySelector(".btnExit")
const greetField = document.querySelector(".greet-field")

btnExit.addEventListener("click", logOut);
if(getUser() === null &&  window.location.pathname === "/game.html"){
window.location.href = "/"
}
function logOut(){
    btnExit.removeEventListener("click", logOut);
    allClearlocalStorage()
    swithLogIn(getUser())

}
greetUser()

function greetUser(){
    greetField.textContent = `( "${getUser().name}" )`
}









