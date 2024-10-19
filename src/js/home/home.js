import { setUser } from "../working-with-memory";
import { switchPage } from "../auth/swithPage";
import { animalOrFavoritesValidator } from "../validators/validations";
import { checkValidSearch } from "../game/api/api-pixabey";
import { setFavoriteThingWord } from "../working-with-memory";
import { failedWordNotification } from "../game/notification/notification";
import { greetWithSuccessfullRegistrationNotification } from "../game/notification/notification";
 switchPage()

async function getUserValue(event) {
    event.preventDefault();
    const { username, animalOrFavoretes } = event.target.elements;
    if(!animalOrFavoritesValidator(animalOrFavoretes.value)){
        console.log("The animal or object does not exist or we do not know about its existence")
        return
    }
    const validAnimalOrFavoretes = await checkValidSearch(animalOrFavoretes.value)
    if(!validAnimalOrFavoretes){
      failedWordNotification()
      return
    }
    
    setFavoriteThingWord(animalOrFavoretes.value)
    setUser(username.value, animalOrFavoritesValidator(animalOrFavoretes.value));
    formSubmit.reset();
    formSubmit.removeEventListener("submit", getUserValue)
    
    await greetWithSuccessfullRegistrationNotification(username.value)
    switchPage()
  }


const formSubmit = document.querySelector(".form-modal-prewiev");
formSubmit.addEventListener("submit", getUserValue)


