import { setPoints } from "../../working-with-memory";
import { getPoints } from "../../working-with-memory";
import { getStartNumber } from "../../working-with-memory";
import { enabledBtnGetGift } from "./work-with-gift";
import { COUNTPOINTS } from "./work-with-gift";
const pointsTextContent = document.querySelector(".points-text-content")
const pointsField = document.querySelector(".txt-about-gift-span")
createTxtNeedPoints()

if(document.location.pathname === "/game.html"){
    createTxtContentPoints()
}

function createTxtNeedPoints(){
    pointsField.textContent = COUNTPOINTS 
}


function createTxtContentPoints(){
    if(getPoints() !== null){
        pointsTextContent.textContent = getPoints()
    }else{pointsTextContent.textContent = 0}
}

export function workWithPoints(){
    let startNumber = ((Number(getStartNumber().to) - Number(getStartNumber().from))/ 10 + 0.1).toFixed(2)
    let currentPoints = Number(getPoints())
    if(currentPoints){
        setPoints(currentPoints += Number(startNumber))
        createTxtContentPoints()
    }else{
        setPoints(Number(startNumber))
        createTxtContentPoints()
    }
    enabledBtnGetGift()
}