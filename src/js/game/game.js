import "./play-guess-the-number/logic-game"
import "./play-guess-the-number/work-points.js"
import "./play-guess-the-number/button-play-again.js"
import "./play-guess-the-number/work-with-gift.js"
import "./api/api-pixabey.js"
import { switchPage } from "../auth/swithPage.js";
import { getUser } from "../working-with-memory";
import { allClearlocalStorage } from "../working-with-memory";
const btnExit = document.querySelector(".btnExit")
const greetField = document.querySelector(".greet-field")
btnExit.addEventListener("click", logOut);

switchPage()

function logOut(){
    btnExit.removeEventListener("click", logOut);
    allClearlocalStorage()
    switchPage()
}
greetUser()

function greetUser(){
    greetField.textContent = `( "${getUser().name}" )`
}









