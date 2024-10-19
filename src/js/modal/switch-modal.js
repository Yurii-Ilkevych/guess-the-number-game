const btnClouse = document.querySelector(".preview-btn-clouse");
const btnOpen = document.querySelector(".preview-btn-open");
const backdrop = document.querySelector(".backdrop");

btnOpen.addEventListener("click", hundlerModal);

function hundlerModal(event) {
  backdrop.classList.toggle("is-hidden");
  switchEvent(event.target.classList.value);
}

function switchEvent(classTargetBtn) {
  if (classTargetBtn === "preview-btn-clouse") {
    btnClouse.removeEventListener("click", hundlerModal);
    btnOpen.addEventListener("click", hundlerModal);
  } else {
    btnOpen.removeEventListener("click", hundlerModal);
    btnClouse.addEventListener("click", hundlerModal);
  }
}