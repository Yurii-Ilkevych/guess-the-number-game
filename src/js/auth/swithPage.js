import { getUser } from "../working-with-memory"
const baseUrl = document.querySelector("base").baseURI

export function switchPage(){
  if(getUser() === null && window.location.pathname.includes("game.html")){
   
  window.location.hostname === "localhost" ? window.location.href = "/":window.location.href = baseUrl
  }else if(getUser() !== null && !window.location.pathname.includes("game.html")){
    console.log(window.location.hostname === "localhost")
    window.location.hostname === "localhost" ? window.location.href = "/game.html": window.location.href = baseUrl + "game.html"
  }
  }