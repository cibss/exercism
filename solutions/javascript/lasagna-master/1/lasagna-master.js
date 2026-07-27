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

export function cookingStatus(time) {  
  if (time === 0) {
    return "Lasagna is done.";
  }

  if (time === undefined || time === null) {
    return "You forgot to set the timer.";
  }

  return "Not done, please wait.";
};

export function preparationTime(layers, time) {
  if (time === undefined || time === null) {
    return layers.length * 2;
  }
  
  return layers.length * time;
};

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  layers.map((item) => {
    if (item === "noodles") {
      noodles += 50;
    }

    if (item === "sauce") {
      sauce += 0.2
    }
  })

  return {
    noodles,
    sauce
  }
};

export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
};

export function scaleRecipe(recipe, portion) {
  const scaled = {};
  const factor = portion / 2;

  for (const ingredient in recipe) {
    scaled[ingredient] = recipe[ingredient] * factor;
  }

  return scaled;
}

