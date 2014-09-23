//1. Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.

function max(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else {
		return num2;
	}
};

//2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1, num2, num3) {
	if (num1 > num2 && num1 > num3) {
		return num1;
	} else if (num2 > num1 && num2 > num3) {
			return num2;
	  } else {
		return num3;
		}
};

/*ALTERNATE JAKE WAY, STUDY THIS!*/

function maxOfThree() {
	return _.reduce(Array.prototype.slice.call(arguments, 0, 3), function(a, b) {
    return a > b ? a : b;
  	});
};

//3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function vowelTest(letter) {
	if (letter.toLowerCase() === "a" || letter.toLowerCase() === "e" || letter.toLowerCase() === "i" || letter.toLowerCase() === "o" || letter.toLowerCase() === "u") {      /*  or use switch */
		return true;
	} else { 
		return false;
	}
};

//4. Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(text) {
	return text.split("").map(function(letter) {
		if (letter.toLowerCase() !== "a" && letter.toLowerCase() !== "e" && letter.toLowerCase() !== "i" && letter.toLowerCase() !== "o" && letter.toLowerCase() !== "u") {       /* or use switch */
			return letter + "o" + letter;
		} else {
			return letter;
		}
	}).join("");
};

//5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

function sum(numArray) {
	var numbers = numArray.reduce(function(a,b) {
		return a + b;
	});
	console.log(numbers);
};

function multiply(numArray) {
	var numbers = numArray.reduce(function(a,b) {
		return a * b;
	});
	console.log(numbers);
};

/*ALTERNATE MULTIPLY FUNCTION*/

function multiply(numArray) {
        var sum = 1;
        for (var i=0; i<numArray.length; i++) {
            sum = sum * numArray[i];
        };
        return sum;
    console.log(sum);
};

//6. Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".

// ALTERNATE METHOD?: letter position = total characters - (initial position + 1);

function reverse(string) {
	var splitup = string.split("").reverse().join("");
	console.log(splitup);
};

//7. Represent a small bilingual lexicon as a Javascript object in the following fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"} and use it to translate your Christmas cards from English into Swedish.

var lexObj = {
"merry": "god",
"christmas": "jul",
"and": "och",
"happy": "gott",
"new": "nytt",
"year": "år"
};

var cardText = "Merry Christmas and Happy New Year";

function translate(cardText){
	var words = cardText.toLowerCase().split(" ").map(function(word) {
		return lexObj[word];														// I was stuck using .word instead of [word] here but I think I understand now. Still, not cool JavaScript. */
	});
	console.log("Translation: " + words.join(" "));
};
translate(cardText);


//8.  Write a function findLongestWord() that takes an array of words and returns the length of the longest one.  

function findLongestWord(wordArray) {
var wordLength = wordArray[0].length;
var longWord = wordArray[0];
for (i = 0; i < wordArray.length; i++) { 
    if (wordArray[i].length > wordLength) {
    	wordLength = wordArray[i].length;
    	longWord = wordArray[i];
    };
};
console.log(longWord + " has a character length of " + wordLength);
return wordLength;
};

//9. Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

function filterLongWords(wordArray, i) {
	var longArray = wordArray.filter(function(item) {
    	return item.length > i;
	});
console.log(longArray);
return longArray;
};

//ALTERNATE VERSION

function filterLongWords(wordArray, i) {
	var longArray = [];
	wordArray.forEach(function(item){
    		if (item.length > i) {
 	   		longArray.push(item);		
    		};
	});
console.log(longArray);
return longArray;
};

//10. Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab"). 

// I had to get Jon's help for this one but I understand it now.

function charFreq(string) {
	var listing = {};
	string.split("").forEach(function(bla) {
		if (listing[bla]) {
			listing[bla]++;
		} else {
			listing[bla] = 1;
		}
	});
		return listing;
}


console.log(charFreq("cghrjmfbhffrrtv"));


//POWER LEVEL 9000
//One of the most useful exercises I've ever done as a programmer is the following:

//1. Write your own forEach function. It takes the array and the function (referred to as a callback) as arguments:
// function forEach(list, callback) { /* Do stuff */ }

function forEach(array, callBackFn) {
	for (i=0; i<array.length; i++) {
		callBackFn (array[i]);
	};
};

function printMe(num) {
	console.log(num);
};

forEach([1,3,6], printMe);

//2. Write your own map, reduce, and filter that use your custom forEach to do their work.

// I'll do Map. The I think it's time to get back to the current homework assignment. Call me Powel Level 2000.

function map(array, callBackFn) {
	var newMapArray = [];
	for (i=0; i<array.length; i++) {
		newMapArray.push(callBackFn(array[i]));
	};
	return newMapArray;
};

function printMeBig(num) {
	console.log(num * 2.5);
};

map ([1,3,6], printMeBig);



//3. Write a function called pluck that extracts a list of property names:
// function pluck(list, propertyName) { /* Do stuff*/ }
// var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// pluck(stooges, 'name');
// => ["moe", "larry", "curly"]

//4. Write a function called reject that returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter.
// function reject(list, predicate) { /* Do stuff */ }
// var odds = reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => [1, 3, 5]

//5. Write a function called find that looks through each value in the list, returning the first one that passes a truth test (predicate), or undefined if no value passes the test. The function returns as soon as it finds an acceptable element, and doesn't traverse the entire list.
// function find(list, predicate) { /* Do stuff */ }
// var even = find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// => 2

//6. Write a function called where that looks through each value in the list, returning an array of all the values that contain all of the key-value pairs listed in properties.
// function where(list, properties) { /* Do stuff */ }
// where(listOfPlays, {author: "Shakespeare", year: 1611});
// => [{title: "Cymbeline", author: "Shakespeare", year: 1611},
//     {title: "The Tempest", author: "Shakespeare", year: 1611}]





























