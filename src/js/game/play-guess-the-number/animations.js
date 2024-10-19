export async function animationClickFalse(target){
    return new Promise((resolve)=>{
     target.classList.add("click-btn-number-false")
 setTimeout(() => {
     target.classList.remove("click-btn-number-false")
     target.classList.add("click-btn-number-red")
     resolve()
 }, 500);
    })
 
 }


 export async function animationClickTrue(target){
    return new Promise((resolve)=>{
     target.classList.add("click-btn-number-true")
 setTimeout(() => {
     target.classList.remove("click-btn-number-true")
     target.classList.add("click-btn-number-green")
     resolve()
 }, 500);
    })
 
 }