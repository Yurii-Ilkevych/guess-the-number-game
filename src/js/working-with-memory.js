const ISUSER = "user";
const STARTNUMBER = "startNumber";
const MURCUPBUTTONS = "murcupButtons";
const INTENDEDNUMBER = "intendedNumber";
const POINTS = "points";
const TXTCONTENTPLAYAGAIN = "txtContentPlayAgain";
const FAVORITETHIGWORD = "favoriteThingWord"
const COUNTERGIFT = "counterGift"
const GIFT = "gift"

export function getUser() {
  return JSON.parse(localStorage.getItem(ISUSER));
}

export function setUser(name, word) {
  localStorage.setItem(ISUSER, JSON.stringify({ name: name, favorite: word }));
}

export function saveStartNumber(item) {
  localStorage.setItem(STARTNUMBER, JSON.stringify(item));
}

export function getStartNumber() {
  return JSON.parse(localStorage.getItem(STARTNUMBER));
}

export function allClearlocalStorage() {
  localStorage.clear();
}

export function saveMurcupButtons(murcupArray) {
  try {
    localStorage.setItem(MURCUPBUTTONS, JSON.stringify(murcupArray));
  } catch (error) {
    console.log(error);
  }
}

export function getMurcupButtons() {
  try {
    return JSON.parse(localStorage.getItem(MURCUPBUTTONS));
  } catch (error) {
    console.log(error);
  }
}

export function setIntendedNumber(number) {
  localStorage.setItem(INTENDEDNUMBER, number * 222 + 333);
}

export function getIntendedNumber() {
  return (JSON.parse(localStorage.getItem(INTENDEDNUMBER)) - 333) / 222;
}

export function setPoints(points) {
  localStorage.setItem(POINTS, points.toFixed(2));
}

export function getPoints() {
  return JSON.parse(localStorage.getItem(POINTS));
}

export function startOverMemory() {
  localStorage.removeItem(STARTNUMBER);
  localStorage.removeItem(MURCUPBUTTONS);
  localStorage.removeItem(INTENDEDNUMBER);
  localStorage.removeItem(TXTCONTENTPLAYAGAIN);
}

export function setTxtContent() {
  localStorage.setItem(TXTCONTENTPLAYAGAIN, "Play Again");
}

export function getTxtContent() {
  return localStorage.getItem(TXTCONTENTPLAYAGAIN);
}

export function setFavoriteThingWord(word){
localStorage.setItem(FAVORITETHIGWORD, word)
}

export function getFavoriteThingWord(){
return localStorage.getItem(FAVORITETHIGWORD)
}

export function setCounterGift(counter){
    localStorage.setItem(COUNTERGIFT, counter)
}

export function getCounterGift(){
    return JSON.parse(localStorage.getItem(COUNTERGIFT)) 
}

export function setGift(url, alt){
    const gift = JSON.parse(localStorage.getItem(GIFT))
    if(!gift){
        localStorage.setItem(GIFT, JSON.stringify([{ url: url, alt: alt }]));
        return
    }
    localStorage.setItem(GIFT, JSON.stringify([...gift, { url: url, alt: alt }]));
}

export function getGift(){
    return JSON.parse(localStorage.getItem(GIFT))
}