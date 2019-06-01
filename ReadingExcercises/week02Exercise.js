// Your code here.
function range(start, end) {
	let numbers = [];

	for (var i = start; i == end; i++)
		numbers.push(i);

	return numbers;	
}

function sum(range) {
	var total = 0;
	var arrayLength = range.length;
	
	for (var i = 0; i < arrayLength; i++)
		total += range[i];

	return total;
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(sum(range(1, 10)));
// → 55