import { startOverMemory } from "../../working-with-memory"
import { formPlay } from "./logic-game"
import { formStart } from "./logic-game"
import { getTxtContent } from "../../working-with-memory"
import { addFormPlayTittle } from "./logic-game"
import { getStartNumber } from "../../working-with-memory"
const btnGetGift = document.querySelector(".btn-get-a-gift")
export const btnPlayAgain = document.querySelector(".play-again-btn")
btnPlayAgain.addEventListener("click",startOver)

if(getTxtContent()){
    addBtnPlayAgain() 
}

export function addBtnPlayAgain(){
    btnPlayAgain.textContent = getTxtContent()

}

export function startOver(){
    startOverMemory()
    formStart.classList.remove("not-active");
    formPlay.classList.add("not-active")
    formPlay.innerHTML = ""
    btnPlayAgain.classList.add("not-active")
    btnGetGift.classList.add("not-active")
    addFormPlayTittle(getStartNumber());
}