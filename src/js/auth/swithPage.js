import { getUser } from "../working-with-memory"

export function switchPage(){

if(getUser() === null && window.location.pathname.includes("game.html")){
  
window.location.href = "/"
}else if(getUser() !== null && !window.location.pathname.includes("game.html")){
window.location.href = "/game.html"
}
}