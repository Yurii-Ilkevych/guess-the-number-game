import { getPoints } from "../../working-with-memory";
import "./swiper-for-gift"
import { setCounterGift} from "../../working-with-memory";
import { getCounterGift } from "../../working-with-memory";
import { getFavoriteThingWord } from "../../working-with-memory";
import { searchImages } from "../api/api-pixabey";
import { setGift } from "../../working-with-memory";
import { getGift } from "../../working-with-memory";
import { enableGiftNotification } from "../notification/notification";
import { swiper } from "./swiper-for-gift";
const btnClouse = document.querySelector(".gift-btn-clouse");
const backdrop = document.querySelector(".backdrop");
const btnGetGift = document.querySelector(".btn-get-a-gift")
const swiperWraper = document.querySelector(".swiper-wrapper")
const coutGiftsTxt = document.querySelector(".txt-count-gifts-number")

export const COUNTPOINTS = 30

async function counterGifts(){
  let counterWithMemory = getCounterGift()
  const counter = getPoints() / COUNTPOINTS

  if(Math.trunc(counter) > counterWithMemory){
    setCounterGift(Math.trunc(counter))
    await getGiftAndAddToMemory()
    const gift = getGift()
    enableGiftNotification(gift.length)
  }
}

btnGetGift.addEventListener("click",hundlerModal)

if(Number(getPoints()) >= COUNTPOINTS){
    btnGetGift.disabled = false
    counterGifts()
}

export function  enabledBtnGetGift(){
    if(Number(getPoints()) >= COUNTPOINTS){
        btnGetGift.disabled = false
        counterGifts()
    }   
}

function hundlerModal(event) {
  backdrop.classList.toggle("is-hidden");
  switchEvent(event.target.classList.value);
}

function switchEvent(classTargetBtn) {
  if (classTargetBtn === "gift-btn-clouse") {
    btnClouse.removeEventListener("click", hundlerModal);
    btnGetGift.addEventListener("click", hundlerModal);
    setTimeout(() => {
      swiper.removeAllSlides()
    }, 500);
  } else {
    btnGetGift.removeEventListener("click", hundlerModal);
    btnClouse.addEventListener("click", hundlerModal);
    createBlockGifts(getGift())
  }
}
async function getGiftAndAddToMemory(){
  try {
    const result = await searchImages(getFavoriteThingWord())
    const url = result.hits[generateNumber()].webformatURL
    const alt = result.hits[generateNumber()].tags
    setGift(url, alt)
  } catch (error) {
    console.log(error)
  }

}

function generateNumber() {
  return Math.floor(
    Math.random() * (19 - 0 + 1)
  ) + 0
}

function createBlockGifts(arrGift){
    const murcup = arrGift.map(el => `<div class="swiper-slide gift-slide"><img class="gift-image" src="${el.url}" alt="${el.alt}"></div>`)
    coutGiftsTxt.textContent = murcup.length
    swiper.appendSlide(murcup)
    //swiperWraper.innerHTML =  murcup.join("")
}