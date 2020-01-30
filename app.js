const fs = require('fs');
const { 
  stringResult,
  getUniques,
  getTenMostCommonNames,
  get25FirstUniqueNames } = require('./functions');

  
fs.readFile('test-data-10-exp-5.list', 'utf8', (err, contents) => {
  if(err)
    console.error(err);

  // transform list into array of lines
  const lines = contents.split('\n');

  // filter only lines with full names
  const fullNamesLines = lines.filter(line => line.match(/,/i));
  
  // get an array of cleared lines with only full names
  const getFullNames = arr => arr.map(line => line.split(' -- ')[0]);
  // get an array of first names
  const getFirstNames = arr => arr.map(fullName => fullName.split(', ')[1]);
  // get an array of last names
  const getLastNames = arr => arr.map(fullName => fullName.split(', ')[0]);
  
  // arrays of cleared full names, first names and last names
  const fullNames = getFullNames(fullNamesLines);
  const firstNames = getFirstNames(fullNames);
  const lastNames = getLastNames(fullNames);
  
  /*
    QUESTION 1 :  Number of unique full names, first names and last names
  */
  console.log(getUniques(fullNames, firstNames, lastNames));
  /*
    QUESTION 2 : 10 most common first names
  */
  console.log(`
    The ten most common first names are: \n ${stringResult(getTenMostCommonNames(firstNames))}
  `);
  /*
  QUESTION 3 : 10 most common last names
  */
  console.log(`
    The ten most common last names are: \n ${stringResult(getTenMostCommonNames(lastNames))}
  `);
  /*
    QUESTION 4 : 10 most common last names
  */
  console.log(`
    The first 25 unique names are: \n ${stringResult(get25FirstUniqueNames(fullNames))}
  `);
});
