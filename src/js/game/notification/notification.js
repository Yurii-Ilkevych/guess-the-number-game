import swal from 'sweetalert';
import { allClearlocalStorage } from '../../working-with-memory';
import { switchPage } from '../../auth/swithPage';
const header = document.querySelector("header")
const backdrop = document.querySelector(".backdrop");
export function failedWordNotification(){
    swal({
        title: "The word horrible write something normal",
        icon: "error",
      });
}

export async function greetWithSuccessfullRegistrationNotification(name){
  header.style.display = "none"
  backdrop.classList.toggle("is-hidden")
 await swal({
    title: `Congratulations ${name} on successful registration`,
    icon: "success",
  });
}

export function enableGiftNotification(number){
  swal({
    title: `I congratulate you on the available Gain in quantity ${number}`,
    icon: "success",
  });
}

export function warningNotification(sentece){
  console.log(111)
  swal({
    title: `${sentece}`,
    icon: "warning",
  });
}

export async function sureDellAccount(){
  swal({
    title: "Are you sure?",
    text: "The account will be permanently deleted!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then(async (willDelete) => {
    if (willDelete) {
      allClearlocalStorage()
      await swal("The account has been deleted!", {
        icon: "success",
      }
    );
    switchPage()
    } else {
      swal("The account was not deleted");
    }
  });
}