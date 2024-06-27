const name = "rajdeep"
const repoCount = 20

// console.log(name + repoCount + "Value"); this is old way to declear  string

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rajdeep_rc.com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);



// console.log(gameName.length);
// console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('d'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   rajdeep   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https.//rajdeep.com/rajdeep%20chandravanshi"
console.log(url.replace('%20', '-'));

console.log(url.includes('rajdeep'))