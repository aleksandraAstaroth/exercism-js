/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export function cookingStatus(remainingTimeInMinutes) {
  return remainingTimeInMinutes === 0 ? "Lasagna is done." : !remainingTimeInMinutes ? "You forgot to set the timer." : "Not done, please wait."
}
export function preparationTime(layersArray, preparationTimeInMinutes = 2) {
    return layersArray.length * preparationTimeInMinutes
}
export function quantities(layersArray) {
    let noodlesInGram = 0
    let sauceInLitres = 0 
    for (let i = 0; i < layersArray.length; i++) {
        if (layersArray[i] == "noodles") {noodlesInGram += 50}
        if (layersArray[i] == "sauce") {sauceInLitres += 0.2}
    } 
    return {noodles: noodlesInGram, sauce: sauceInLitres}
}
export function addSecretIngredient(friendsList, myList) {
   myList.push(friendsList[friendsList.length - 1])
}


export function scaleRecipe(recipe, desiredNumberOfPortions) {
  let originalNumberOfPortions = 2
  function calculateFactor(desiredNumberOfPortions) {
  return desiredNumberOfPortions / originalNumberOfPortions
}

 let targetObject = {}
 let newRecipe = Object.assign(targetObject, recipe)
for (const ingredient in newRecipe) {
      newRecipe[ingredient] *= calculateFactor(desiredNumberOfPortions)
}
return newRecipe
}