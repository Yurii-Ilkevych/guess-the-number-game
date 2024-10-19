const KEY = "35606750-af8374c970d110a408f6cc0ed"
const baseUrl = "https://pixabay.com/api/?"
const params = new URLSearchParams({
    image_type: "photo",
    order: "popular",
    orientation: "horizontal"

}).toString()




export async function searchImages(word,page=1) {
    const result = await fetch(`${baseUrl}key=${KEY}&q=${word}&${params}&page=${page}`)

    const body = await result.json()

    return body
    
}


export async function checkValidSearch(word) {
    try {
    const result = await searchImages(word)
    if(result.totalHits > 20){
        return true
    }
    return false
    } catch (error) {
        console.log(error)
    } 
}
