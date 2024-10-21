import { saveStartNumber } from "../../working-with-memory";
import { getStartNumber } from "../../working-with-memory";
import { saveMurcupButtons } from "../../working-with-memory";
import { getMurcupButtons } from "../../working-with-memory";
import { generateNumber } from "./work-with-the-intended-number";
import { setIntendedNumber } from "../../working-with-memory";
import { animationClickFalse } from "./animations";
import { animationClickTrue } from "./animations";
import { auditIntendedNumber } from "./work-with-the-intended-number";
import { addBtnPlayAgain } from "./button-play-again";
import { btnPlayAgain } from "./button-play-again";
import { setTxtContent } from "../../working-with-memory";
import { workWithPoints } from "./work-points";
import { numberValidator } from "../../validators/validations";
export const formStart = document.querySelector(".form-game-start");
export const formPlay = document.querySelector(".form-play");
export const btnGetGift = document.querySelector(".btn-get-a-gift")
const formPlayTittle = document.querySelector(".form-play-tittle");
formStart.addEventListener("submit", getStartValueAndCreateGame);
formPlay.addEventListener("click", delegationBtns);
if (getStartNumber() !== null) {
  formStart.classList.add("not-active");
}

if(!formStart.classList.contains("not-active")){
    btnPlayAgain.classList.add("not-active")
    btnGetGift.classList.add("not-active")
}else{
    btnPlayAgain.classList.remove("not-active")
    btnGetGift.classList.remove("not-active")
}

function removeOrAddBtn(){
    if(!formStart.classList.contains("not-active")){
        btnPlayAgain.classList.add("not-active")
        btnGetGift.classList.add("not-active")
    }else{

        btnPlayAgain.classList.remove("not-active")
        btnGetGift.classList.remove("not-active")
    }  
}


if (formPlayTittle.textContent === "" && getStartNumber() !== null) {
  addFormPlayTittle(getStartNumber());
  addButtons();
  formPlay.classList.remove("not-active")
}



function getStartValueAndCreateGame(event) {
  event.preventDefault();
  const { from, to } = event.target.elements;
  const fromNamber = Number(from.value)
  const toNamber = Number(to.value)
  if (numberValidator(fromNamber,toNamber)) {
   return;
  }
  saveStartNumber({ from: fromNamber, to: toNamber });
  formStart.classList.add("not-active");
  formPlay.classList.remove("not-active")
  addFormPlayTittle(getStartNumber());
  createButtons(getStartNumber());
  setIntendedNumber(generateNumber());
  removeOrAddBtn()
}



async function delegationBtns(event) {
  event.preventDefault();
  const allButtons = [...event.currentTarget]

  if (event.currentTarget === event.target) {
    return;
  }
  event.target.disabled = true;
  if(auditIntendedNumber(Number(event.target.textContent))){
    await animationClickTrue(event.target) 
   const addDisabled = await disabledButtons(allButtons)
    saveMurcupButtons(addDisabled)
    workWithPoints()
    setTxtContent()
    addBtnPlayAgain()
  }else{
    await animationClickFalse(event.target);
  }
  saveMurcupButtons(createMurcupArray(event.target));
}

async function disabledButtons(allButtons){
const result = await Promise.all(allButtons.map(async el=>{
    el.disabled = true
    if(!el.classList.contains("click-btn-number-green") && !el.classList.contains("click-btn-number-red") ){
       await animationClickFalse(el)
        el.classList.add("click-btn-number-red")
        return el.outerHTML
    }
    return el.outerHTML
})).catch(console.log.bind(console));
return result
}

function createMurcupArray(target){   
    return getMurcupButtons().map((element, index, array) => {
        if (element.includes(`>${target.textContent}<`)) {
          return (array[index] = target.outerHTML);
        }
        return element;
      });
}

export function addFormPlayTittle(numbers) {
    if(numbers){
      formPlayTittle.classList.remove("not-active");
        formPlayTittle.textContent = `Select the intended number from ${numbers.from} to ${numbers.to}`;
    }else{
        formPlayTittle.textContent = ""
        formPlayTittle.classList.add("not-active");
    }

}

function createButtons(numbers) {
  let murcup = "";
  let murcupArray = [];
  for (let index = numbers.from; index <= numbers.to; index++) {
    murcup = document.createElement("button");
    murcup.classList.add(`btn-number`);
    murcup.textContent = index;
    murcupArray.push(murcup.outerHTML);
  }
  saveMurcupButtons(murcupArray);
  addButtons();
}
function addButtons() {
    getMurcupButtons().forEach((element) => {
      formPlay.insertAdjacentHTML("beforeend", element);
    });

}
