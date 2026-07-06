// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const stringArray1 = String(array1).replaceAll(",", "")
  const stringArray2 = String(array2).replaceAll(",", "")  

  return Number(stringArray1) + Number(stringArray2)
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  if (value < 0) return false; 
    
    const str = String(value);
    let left = 0;
    let right = str.length - 1;
    
    while (left < right) {
        if (str[left] !== str[str.length - 1 - left]) return false;
        left++;
        right--;
    }
    return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === null || input === undefined || input === '') {
    return 'Required field';
  }

  if (!Number(input)) {
    return 'Must be a number besides 0';
  }

  return '';
}
