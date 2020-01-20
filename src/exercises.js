function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  // write your code here
  if (a.length < 1 || b.length <1) {
    return false;
  }

  if(a[0] === b[0] || a[a.length - 1] === b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  // write your code here
  let array = [];

    if (!values || values.length < n || !Number.isInteger(n) || n < 0) {
      return array;
    } else {
      if (n === 0) {
        return values;
      }

        for (let i = 0; i < n; i++) {
            array.push(values[i]);
        }

        for (let i = n; i > 0; i--) {
            array.push(values[values.length - i]);
        }
        return array;
      }
  }

function difference(numbers) {
  // write your code here
  if (numbers == undefined||numbers < 1||numbers.some(isNaN)) {
      return undefinedd;
    } else {
      let largest = Math.max.apply(Math, numbers);
      let smallest = Math.min.apply(Math, numbers);
      return largest - smallest;
    }
  }


function max(number) {
  // write your code here
  if (number == undefined||number < 3||number.some(isNaN)||number.length % 2 == 0) {
     return undefined;
   } else {
     let first = number[0];
     let last = number[number.length -1];
     let middle = number[Math.floor((number.length - 1) / 2)];
     let elements = [first, middle, last];

     return Math.max.apply(Math, elements);
   }
 }

function middle(values) {
  // write your code here
  if (values == undefined||values.length < 3||values.length % 2 == 0) {
     return [];
   } else {
     let middle1 = values [Math.floor((values.length - 1) / 2) - 1];
     let middle2 = values[(values.length - 1) / 2];

     return [middle1, middle2];
   }
 }

function increasing(numbers) {
  // write your code here
  if (!numbers || numbers.some(isNaN) || Number.isInteger(numbers) || numbers.length < 3) {
       return undefined;
     }
     else {
       for (let i = 1; i < numbers.length; i++) {
         if ((numbers[i - 1] + 1) === numbers[i] && numbers[i + 1] - 1 === numbers[i]) {
               return true;
               break;
         }
       }
     }
     return false;
  }

function everywhere(values, x) {
  // write your code here
  let result;
   	if (!values || values.length < 1 || !x) {
   		return false;
   	}

   	for (let i = 0; i < values.length; i++) {
   		if (values[i] !== x) {
   			if (values[i - 1] === x || values[i + 1] === x) {
   				result = false;
   			} else {
   				return false;
   			}
   		}
   	}
   	return true;
 }

function consecutive(numbers) {
  // write your code here
  if (!numbers || numbers.length < 3 || numbers.some(isNaN) || Number.isInteger(numbers)) {
     return false;
   } else {
     for (let i = 1; i < numbers.length; i++) {
       if (numbers[i - 1] % 2 === 0 && numbers[i] % 2 === 0 && numbers[i + 1] % 2 === 0) {
         return true;
       } else if (numbers[i - 1] % 2 === 1 && numbers[i] % 2 === 1 && numbers[i + 1] % 2 === 1) {
         return true;
       }
     }
     return false;
   }
 }

function balance(numbers) {
  // write your code here
  let left = 0;
    	let result;
    	let right = 0;

    	if (!numbers || numbers.some(isNaN) || Number.isInteger(numbers) || numbers.length < 2) {
    		return false;
    	}
    	for (let i = 0; i < numbers.length; i++) {
    		left = left + numbers[i];
    	}
    	let half = left / 2;
    	if (left % 2 === 1) {
    		return false;
    	}
    	for (let j = 0; j < numbers.length - 1; j++) {
    		right = right + numbers[j];
    		if (right === half) {
    			return true;
    		}
    	}
    	return false;
    console.log("test");
  }

function clumps(values) {
  // write your code here
  let count = 0;
   if (!values) {
     return -1;
   } else {
      for (let i = 0; i < values.length - 1; i++) {
        if (values[i - 1] === values[i]) {
       } else if (values[i] === values[i + 1]) {
          count++;
       }
      }
     return count;
   }
 }

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
