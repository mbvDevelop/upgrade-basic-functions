
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
