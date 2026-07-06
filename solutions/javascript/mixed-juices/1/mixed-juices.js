// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  const wedgesCut = (size) => {
    switch(size) {
      case 'small':
        return 6;
      case 'medium':
        return 8;
      case 'large': 
        return 10;
      default:
        return 0;
    }
  }

  let start = 0;
  let end = limes.length - 1
  let wedges = 0;
  let countLime = 0;

  if (limes.length === 0) return 0;

  while (start <= end) {
    if (wedges === wedgesNeeded || wedges >= wedgesNeeded) {
      return countLime
    } else if (wedges <= wedgesNeeded && start === end) {
      return limes.length;
    } else {
      wedges += wedgesCut(limes[start])
      countLime++
      start++
    }
  }
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  const orderTime = [];

  for (let item of orders) {
    orderTime.push(timeToMixJuice(item))
  }

  let start = 0;
  let end = orderTime.length - 1
  
  while (timeLeft > 0 && orderTime.length) {
    timeLeft -= orderTime[start];
    start++
  }

  return orders.slice(start)
}
