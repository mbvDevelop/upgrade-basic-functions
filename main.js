
// //IT 1

function sum(numberOne , numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne
    }
    return numberTwo
  }

  //   // IT 2

  const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
  function findLongestWord(param) {
      let longest = ""
    for (hero of param) {
        if (hero.length > longest.length) {
            longest = hero
        }
    }
    return longest
  }

   // IT 3

  const numbers = [1, 2, 3, 5, 45, 37, 58];
 
function sumAll(param) {
    let sum = 0
    for (number of param) {
        sum += number
    }
    return sum
}

  // IT 4
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sum = 0
    for (number of param) {
        sum += number
    }
    return sum / param.length
}
// // IT 5
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let sum = 0
  for (item of param) {
      if (typeof(item) == "string") {
        sum += item.length
        continue
      }
      sum += item
  }
  return sum
}

// IT 6
 
const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
function removeDuplicates(param) {
    let cleanArray = []
    for (itemToCheck of param) {
            if (cleanArray.includes(itemToCheck)) {
                continue
            }
            cleanArray.push(itemToCheck)
            console.log(itemToCheck)
    }
    return cleanArray
}  
 
console.log(removeDuplicates(duplicates))

// IT 7
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param, itemToSearch) {
  // insert code
  for (item of param) {
      if (itemToSearch == item) {
          return (true, param.indexOf(item))
      }
  }
  return false
}

console.log(finderName(nameFinder, "Peter"))