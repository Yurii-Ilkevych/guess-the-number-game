import { warningNotification } from "../game/notification/notification";

export function numberValidator(fromNamber, toNamber){
    if (fromNamber >= toNamber) {
        warningNotification("the 'to' number must be greater than the 'from' number")
        return true;
      } else if (
       fromNamber + 1 === toNamber ||
       fromNamber + 2 === toNamber
      ) {
        warningNotification("the number 'from' must be at least 3 more than the number 'to'")
        return true;
      }
}

export function animalOrFavoritesValidator(word){

  if(word.length !== 0){
    return word
  }else{
    return false
  }

}