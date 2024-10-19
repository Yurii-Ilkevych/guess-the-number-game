
export function swithLogIn(isLogin) {
  if (isLogin !== null) {
    setTimeout(() => {
      window.location.href = "/game.html";
    }, 500);
  }else if(isLogin === null && window.location.pathname === "/"){
    return
  }else{
    window.location.href = "/"
  }
}
