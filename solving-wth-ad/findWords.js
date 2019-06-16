const arrWords = [
	'Apple',
	'Banana',
	'Aeroplane',
	'Atmosphere',
	'Cycle',
	'Elephant',
	'elephant',
	'amazing',
	'Man'
];

O(N * S-max) Tries: Dictionary


const word1 = 'man';
const word2 = 'amAziNg';

console.log(doesWordExist(word));

function doesWordExist(word, isCaseSentive = true) {
	let foundWord = arrWords.find(item => word == item);
	return (foundWord != undefined)
}


amAziNg => true, => amazing

elePHANT => true => function allMatches([ Elephant, elephant ]) => 1 val