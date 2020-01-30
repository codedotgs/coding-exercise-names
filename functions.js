const stringResult = arr => {
  return arr.reduce((acc, curr) => (acc + `\n ${curr}`));
}

/* 
  QUESTION 1
*/
const getUniques = (fullNames, firstNames, lastNames) => {
  let uniqueFullNames = [...new Set(fullNames)]
  let uniqueFirstNames = [...new Set(firstNames)]
  let uniqueLastNames = [...new Set(lastNames)]
  
  return (`
    There are ${uniqueFullNames.length} unique full names.
    There are ${uniqueFirstNames.length} unique first names.
    There are ${uniqueLastNames.length} unique last names.
  `);
}


/* 
  QUESTION 2 & 3
*/
const getTenMostCommonNames = arrNames => {
  let uniqueNames = [...new Set(arrNames)];
  let namesScores = [];
  for (let i = 0; i < arrNames.length; i++) {
    let name = arrNames[i];
    namesScores[name] = namesScores[name] ? namesScores[name] + 1 : 1;
  }
  const sortingDescending = (a , b) => b - a;
  
  // array of most common names
  const mostCommonnames = Object
    .keys(namesScores)
    .sort((a, b)=> namesScores[b] - namesScores[a]);

  let scoreboard = [];
  for (i=0; i<10; i++) {
    let name = mostCommonnames[i];
    scoreboard[i] = `${name} (${namesScores[name]})`;
  }

  return scoreboard;
}


/* 
  QUESTION 4
*/
const compareStrings = (arr, value) => {
  let isUnique = true;
  
  for(let i = 0; i < arr.length; i++) {
    let a = arr[i].split(', ');
    let b = value.split(', ');
    if (!(a[0] !== b[0] && a[1] !== b[1])) {
      isUnique = false;
    }
  }
  return isUnique;
}

const get25FirstUniqueNames = (arrNames) => {    
    let uniqueNames = [arrNames[0]];
    let cpt = 1;
    
    for (i = 0; i < 24; i++) {
      for (j = 1; j < arrNames.length; j++) {
        if(uniqueNames.length === 25) { break; }
        
        if (compareStrings(uniqueNames, arrNames[j])) {
          uniqueNames.push(arrNames[j]);
        }
      }
    }
    
    return uniqueNames;
  }


exports.stringResult = stringResult;
exports.getUniques = getUniques;
exports.getTenMostCommonNames = getTenMostCommonNames;
exports.get25FirstUniqueNames = get25FirstUniqueNames;

