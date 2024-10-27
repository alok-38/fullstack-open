let sentence = "Always look on the bright side of life";
console.log(sentence);
console.log(sentence.length);

// concatenation
let a = "When candles are out";
let b = "all cats are grey.";
console.log(`${a} ${b}`);

// String comparison
console.log("Berry" < "Copper");
console.log("Zed Shaw" > "Alok");

// Common String Methods in JavaScript
let firstQuote = "When candles are out,";
let secondQuote = "all cats are grey.";
let concatenateQuote = firstQuote.concat(" ", b);
console.log(concatenateQuote);

// The toLowerCase() & toUpperCase() methods
let mySentence = "Always look on the bright side of life";
console.log(mySentence.toUpperCase());
console.log(mySentence.toLowerCase());

// The includes() method
let niceSentence = "Always look on the bright side of life";
console.log(niceSentence.includes("look up"));
console.log(niceSentence.includes("look at"));
console.log(niceSentence.includes("look on"));

let myName = "Alok";
let myAge = 40;
const myMessage = `Hello my name is ${myName}. Nice to meet you.\
I'm ${myAge} years old.`;
console.log(myMessage);

const html = `
	<div>
		<h2>${name}</h2>
		<p>${myMessage}</p>
	</div>
`;

document.body.innerHTML = html;
