import { getUser } from "../working-with-memory"
const baseUrl = document.querySelector("base").baseURI

export function switchPage(){
  console.log()
if(getUser() === null && window.location.pathname.includes("game.html")){
 
window.location.href = baseUrl
}else if(getUser() !== null && !window.location.pathname.includes("game.html")){
window.location.href = baseUrl + "game.html"
}
}