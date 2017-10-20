// DO NOT CHANGE THIS

var log = console.log;
var separator = "\n---\n\n";

function format(funName, success) {
	if (success)
		return "\u{2714} " + funName + " is ok Yay \u{1F600}";
	return "\u{2716} " + funName + " is not ok \u{1F61E}";
}

// --------------------------


// 1. STRING MANIPULATION

// Ex 1

/*	Complete the formLetter function. This function should:

    Take three strings as arguments: the first name of the recipient, the sender's signature name, and the message of the letter
    combine the three into a single string with additional greetings and closings
    insert additional new lines between the greeting, message, and signature
*/
function formatLetter(recipient, sender, emailBody) {
	// return "Hello " + recipient + ",\n\n" + emailBody + "\n\nSincerely,\n" + sender;
	return null;
}

result = formatLetter("James", "Richard", "Things are well.");
expectedReturn = "Hello James,\n\nThings are well.\n\nSincerely,\nRichard";
log(result === expectedReturn ? format("formatLetter", true) : format("formLetter", false));
log(separator);

// EX 2

/*
	Complete the sliceItAndCombineIt function. This function should:

    take a string and four indices (numbers)
    return a new string which is the concatenation of two substrings marked by the first and second index of each pair of indices.
*/
function sliceItAndCombineIt(str, index1, index2, index3, index4) {
	return null;
}

result = sliceItAndCombineIt("This is a Test", 0, 4, 5, 7);
expectedReturn = "Thisis";
log(result === expectedReturn ? format("sliceItAndCombineIt", true) : format("sliceItAndCombineIt", false));

result = sliceItAndCombineIt("This is a Test", 0, 4, 1, 2);
expectedReturn = "Thish";
log(result === expectedReturn ? format("sliceItAndCombineIt", true) : format("sliceItAndCombineIt", false));
log(separator);

// EX 3

/*
	Complete the findFirstMatch function. This function should:

    Take two strings as arguments. The first string is the one to search, the second is the one to search for.
    Return the position (i.e. index) of the first match of string being searching for
*/
function findFirstMatch(str, subStr) {
	return null;
}

result = findFirstMatch("Roses are red", "re")
expectedReturn = 7
log(result === expectedReturn ? format("findFirstMatch", true) : format("findFirstMatch", false));
log(separator);

// EX 4

/*
	Complete the findLastMatch function. This function should:

    Take two strings as arguments. The first string is the one to search, the second is the one to search for
    Return the position (a.k.a. the index) of the last match of string we're searching for
*/
function findLastMatch(str, subStr) {
	return null;
}

result = findLastMatch("Roses are red", "re");
expectedReturn = 10
log(result === expectedReturn ? format("findLastMatch", true) : format("findLastMatch", false));
log(separator);

// EX 5

/*
	Complete the substringBetweenMatches function. This function should:

    Take two strings as arguments. The first string is the one to search, the second is the one to search for
    Return the substring between the first match and the last match
    Not include the first match or the last match in the returned substring
*/
function substringBetweenMatches(str, subStr) {
	return null;
}

result = substringBetweenMatches("Roses are red, apples are really red.", "red")
expectedReturn = ", apples are really ";
log(result === expectedReturn ? format("substringBetweenMatches", true) : format("substringBetweenMatches", false));
log(separator);

