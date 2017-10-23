// DO NOT CHANGE THIS

var print = console.log;
var separator = "\n---\n\n";

function areEqualArrays(listA, listB) {
	return listA.sort().join() === listB.sort().join();
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

// 1. STRING MANIPULATION
print("2. ARRAY MANIPULATION")
// Ex 0

/*
	Define a function, array_sum, that takes a list as its argument and returns the sum of the elements in the array.
	Use a for loop to iterate over the array.
*/
function array_sum(list) {
	return null;
}

print("array_sum");
test(array_sum([1, 2, 3, 4]), 10);
test(array_sum([1, 2, 3, 4, 6]), 16);
test(array_sum([1, 0, 0, 4]), 5);
test(array_sum([10, 20, 30, 4]), 64);
print(separator);

// Ex 1

/*	XML Tag Counter

    Write a function, tag_count, that takes as its argument a list of strings.
    It should return a count of how many of those strings are XML tags.
    XML is a data language similar to HTML. 
    You can tell if a string is an XML tag if it begins with a left angle bracket "<" and end with a right angle bracket ">".

	You can assume that the list of string that will be given as input will not contain empty strings.
*/
function tag_count(stringList) {
	return null;
}
print("tag_count");
test(tag_count(['<greeting>', 'Hello World!', '</greeting>']), 2);
test(tag_count(['<strong>', '<i class="icon"></i>', 'welcome']), 2);
test(tag_count(['Welcome', 'Hello World!', '</div>']), 1);
test(tag_count(['<greeting>', '<Hello World!>', '</greeting>']), 3);
print(separator);

// Ex 2

/*	Create an HTML List

    Write the html_list function. The function takes one argument, a list of strings, and returns a single string which is an HTML list.
    For example, if the function should produce the following string when provided 
    the list ['first string', 'second string'].
    <ul>
	    <li>first string</li>
	    <li>second string</li>
    </ul>
*/
function html_list(stringList) {
	return null;

}
print("html_list");
test(html_list(['first string', 'second string']), "<ul><li>first string</li><li>second string</li></ul>");
test(html_list(['milk', 'cheese', 'eggs', 'chocolate']), "<ul><li>milk</li><li>cheese</li><li>eggs</li><li>chocolate</li></ul>");
test(html_list(['new item', 'old item', '</div>']), "<ul><li>new item</li><li>old item</li><li></div></li></ul>");
test(html_list([]), "<ul><li></li></ul>");
print(separator);

// Ex 3

/*	Nearest Square

    Implement the nearest_square function. 
    The function takes an integer argument limit, and returns the largest square number that is less than limit.
    A square number is the product of an integer multiplied by itself, for example 36 is a square number because it equals 6*6.

	There's more than one way to write this code, but I suggest you use a while loop!
	Here is a test case you can copy to test your code. Feel free to write additional tests too!
*/
function nearest_square(limit) {
	return null;
}
print("nearest_square");
test(nearest_square(40), 36);
test(nearest_square(65), 64);
test(nearest_square(120), 100);
test(nearest_square(140), 121);
print(separator);

// Ex 4

/*	Break the String

    Time to write your own loop with a break statement. 
    Your task is to create a function, news_ticker that returns a string that is exactly 140 characters long. 
    You should create the news ticker string by adding headlines from the headlines list (input),
    inserting a space in between each headline.
    If necessary, truncate the "last headline" in the middle so that news_ticker is exactly 140 characters long.

	Remember that break works in both for and while loops. 
	Use whichever loop seems most appropriate. Consider adding print statements to your code 
	to help you resolve bugs.
*/
function news_ticker(headlines) {
	return null;
}

test1 = ["Local Bear Eaten by Man",
         "Legislature Announces New Laws",
         "Peasant Discovers Violence Inherent in System",
         "Cat Rescues Fireman Stuck in Tree",
         "Brave Knight Runs Away",
         "Papperbok Review: Totally Triffic"
        ];
expectedTest1 = "Local Bear Eaten by Man Legislature Announces New Laws Peasant Discovers Violence Inherent in System Cat Rescues Fireman Stuck in Tree Brave";
test2 = ["Local Bear Eaten by Man",
         "Papperbok Review: Totally Triffic",
         "Legislature Announces New Laws",
         "Cat Rescues Fireman Stuck in Tree",
         "Brave Knight Runs Away",
         "Peasant Discovers Violence Inherent in System",
        ];
expectedTest2 = "Local Bear Eaten by Man Papperbok Review: Totally Triffic Legislature Announces New Laws Cat Rescues Fireman Stuck in Tree Brave Knight Runs";
test3 = ["Papperbok Review: Totally Triffic",
         "Cat Rescues Fireman Stuck in Tree",
         "Legislature Announces New Laws",
         "Peasant Discovers Violence Inherent in System",
         "Brave Knight Runs Away",
		 "Local Bear Eaten by Man",
        ];
expectedTest3 = "Papperbok Review: Totally Triffic Cat Rescues Fireman Stuck in Tree Legislature Announces New Laws Peasant Discovers Violence Inherent in Sy";
test4 = ["Legislature Announces New Laws",
		 "Local Bear Eaten by Man",
        ];
expectedTest4 = "Legislature Announces New Laws Local Bear Eaten by Man ";

print("news_ticker");
test(news_ticker(test1), expectedTest1);
test(news_ticker(test2), expectedTest2);
test(news_ticker(test3), expectedTest3);
test(news_ticker(test4), expectedTest4);
print(separator);

// Ex 5

/*	Deduplication

    Write a function, remove_duplicates that takes a list as its argument and returns a new list 
    containing the unique elements of the original list.
    The elements in the new list without duplicates can be in any order.

*/
function remove_duplicates(list) {
	return null;
}
print("remove_duplicates");
test(remove_duplicates([1,1,2,3]), [1,2,3]);
test(remove_duplicates([1,1,2, 2,3,3,4]), [1,2,3,4]);
test(remove_duplicates([1,2]), [1,2]);
test(remove_duplicates([1]), [1]);
print(separator);

// Ex 6

/*	Match_ends

	Given a list of strings, return the count of the number of
	strings where the string length is 2 or more and the first
	and last chars of the string are the same.
*/
function match_ends(words) {
	return null;
}
print("match_ends");
test(match_ends(['aba', 'xyz', 'aa', 'x', 'bbb']), 3)
test(match_ends(['', 'x', 'xy', 'xyx', 'xx']), 2)
test(match_ends(['aaa', 'be', 'abc', 'hello']), 1)
print(separator);

// Ex 7
/*
	front_x
	Given a list of strings, return a list with the strings
	in sorted order, except group all the strings that begin with 'x' first.
	e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
	['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
	Hint: this can be done by making 2 lists and sorting each of them
	before combining them.
*/
function front_x(words) {
	return null;
}
print("front_x");
test(front_x(['bbb', 'ccc', 'axx', 'xzz', 'xaa']),
       ['xaa', 'xzz', 'axx', 'bbb', 'ccc']);
test(front_x(['ccc', 'bbb', 'aaa', 'xcc', 'xaa']),
   ['xaa', 'xcc', 'aaa', 'bbb', 'ccc']);
test(front_x(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']),
   ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']);
print(separator);

// Ex 8
/*
	E. Given two lists sorted in increasing order, create and return a merged
	list of all the elements in sorted order. You may modify the passed in lists.
	Ideally, the solution should work in "linear" time, making a single
	pass of both lists.
*/

function linear_merge(list1, list2) {
	return null;
}

print('linear_merge')
test(linear_merge(['aa', 'xx', 'zz'], ['bb', 'cc']),
   ['aa', 'bb', 'cc', 'xx', 'zz'])
test(linear_merge(['aa', 'xx'], ['bb', 'cc', 'zz']),
   ['aa', 'bb', 'cc', 'xx', 'zz'])
test(linear_merge(['aa', 'aa'], ['aa', 'bb', 'bb']),
   ['aa', 'aa', 'aa', 'bb', 'bb'])
test(linear_merge([10, 50, 100], [5, 20, 300]),
   [5, 10, 20, 50, 100, 300])
test(linear_merge([-10, 10, 50, 70], [-20, 20, 30]),
   [-20, -10, 10, 20, 30, 50, 70])
print(separator);