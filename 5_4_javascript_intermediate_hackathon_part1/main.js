// DO NOT CHANGE THIS

var print = console.log;
var separator = "\n---\n\n";

function areEqualArrays(listA, listB) {
	if (listA.length !== listB.length) return false;
	for (var i = 0; i < listA.length; i++) {
		if (listB.indexOf(listA[i]) === -1) return false; 
	}
	return true;
}

function test(got, expected) {
	var prefix = "";
	var smiley = "";

	if (Array.isArray(got)  && Array.isArray(expected) && areEqualArrays(got, expected)) {
		prefix = "\u{2714} ";
		smiley = " \u{1F600}";
	} 
	else if (got === expected) {
		prefix = "\u{2714} ";
		smiley = " \u{1F600}";
	}
	else {
		prefix = "\u{2716} ";
		smiley = " \u{1F61E}";
	}
	print(prefix + "got: " + got + ", expected: " + expected + smiley)
}

// --------------------------

// Basic algorithmic scripting
print("Basic Algorithmic Scripting");
// Ex 0

/*
	Reverse the provided string.

	You may need to turn the string into an array before you can reverse it.

	Your result must be a string.
*/
function reverseStringV1(str) {
  return null;
}

// Here do the same thing but don't use built-in functions
// such as split/reverse/join

function reverseStringV2(str) {
  return null;
}

print("reverseStringV1");
test(reverseStringV1("Hello World"), "dlroW olleH");
test(reverseStringV1("awesomeString"), "gnirtSemosewa");
test(reverseStringV1("first second"), "dnoces tsrif");
test(reverseStringV1("madam"), "madam");
print(separator);

print("reverseStringV2");
test(reverseStringV2("Hello World"), "dlroW olleH");
test(reverseStringV2("awesomeString"), "gnirtSemosewa");
test(reverseStringV2("first second"), "dnoces tsrif");
test(reverseStringV2("madam"), "madam");
print(separator);

// Ex 1

/*  Factorialize a Number
	Return the factorial of the provided integer.

	If the integer is represented with the letter n,
	a factorial is the product of all positive integers less than or equal to n.

	Factorials are often represented with the shorthand notation n!

	For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
*/
function factorialize(num) {
  return null;
}

print("factorialize");
test(factorialize(5), 120);
test(factorialize(7), 5040);
test(factorialize(9), 362880);
test(factorialize(11), 39916800);
print(separator);

 // Ex 2

/*  Check for Palindromes
	Return true if the given string is a palindrome. Otherwise, return false.

	A palindrome is a word or sentence that's spelled the same way both forward and backward,
	ignoring punctuation, case, and spacing.

	Note
	You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols)
	and turn everything lower case in order to check for palindromes.

	We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" 
	among others.

	We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2".
*/
function palindrome(str) {
  return null;
}

print("palindrome");
test(palindrome('ab ba'), true);
test(palindrome('ab_ba'), true);
test(palindrome('7ab@ba7'), true);
test(palindrome('race car'), true);
test(palindrome('A man, a plan, a canal. Panama'), true);
test(palindrome('never odd or even'), true);
test(palindrome('nope'), false);
test(palindrome('My age is 0, 0 si ega ym.'), true);
test(palindrome('1 eye for of 1 eye.'), false);
print(separator);

// Ex 3

/*  Find the Longest Word in a String 
	Return the length of the longest word in the provided sentence.

	Your response should be a number.
*/
function findLongestWord(str) {
  return null;
}

print("findLongestWord");
test(findLongestWord('The quick brown fox jumped over the lazy dog'), 6);
test(findLongestWord('May the force be with you'), 5);
test(findLongestWord('Google do a barrel roll'), 6);
test(findLongestWord('What is the average airspeed velocity'), 8);
test(findLongestWord('What if we try a super-long word such as\
	otorhinolaryngology'), 22);
print(separator);

// Ex 4

/*  Title Case a Sentence  
	Return the provided string with the first letter of each word capitalized. 
	Make sure the rest of the word is in lower case.

	For the purpose of this exercise, you should also capitalize 
	connecting words like "the" and "of".
*/
function titleCase(str) {
  return null;
}

print("titleCase");
test(titleCase('I\'m a little tea pot'), 'I\'m A Little Tea Pot');
test(titleCase('sHoRt AnD sToUt'), 'Short And Stout');
test(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT'),
	'Here Is My Handle Here Is My Spout');
print(separator);

// Ex 5

/*  Return Largest Numbers in Arrays  
	Return an array consisting of the largest number from each provided sub-array.
	For simplicity, the provided array will contain exactly 4 sub-arrays.

	Remember, you can iterate through an array with a simple for loop, 
	and access each member with array syntax arr[i].
*/
function largestOfFour(arr) {
  return null;
}

// Ex 6

/*  Confirm the Ending
	Check if a string (first argument, str) ends with the given target string 
	(second argument, target).

	This challenge can be solved with the .endsWith() method, 
	which was introduced in ES2015. But for the purpose of this challenge, 
	we would like you to use one of the JavaScript substring methods instead.
*/
function confirmEnding(str, target) {
  return null;
}


print("confirmEnding");
test(confirmEnding('Bastian', 'n'), true);
test(confirmEnding('Connor', 'n'), false);
test(confirmEnding('He has to give me a new name', 'name'), true);
test(confirmEnding('Walking on water and developing software from a\
 specification are easy if both are frozen', 'specification'), false);
test(confirmEnding('Open sesame', 'pen'), false);
test(confirmEnding('If you want to save our world, you must hurry.\
 We dont know how much longer we can withstand the nothing', 'mountain'), false);
print(separator);

// Ex 7

/*  Repeat a string repeat a string
	Repeat a given string (first argument) num times (second argument).
	Return an empty string if num is not a positive number.
*/
function repeatStringNumTimes(str, num) {
  return null;
}

print("repeatStringNumTimes");
test(repeatStringNumTimes('*', 3), '***');
test(repeatStringNumTimes('*', 8), '********');
test(repeatStringNumTimes('abc', 3), 'abcabcabc');
test(repeatStringNumTimes('abc', -3), '');
print(separator);