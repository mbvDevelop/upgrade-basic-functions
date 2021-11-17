
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
