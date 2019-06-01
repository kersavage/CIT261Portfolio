// JavaScript Document 
/*Global console*/ 

//Problem01
function readText() { 
	let inputValue = document.getElementById("problem01").value; 
	let getDiv = document.getElementById("display01"); 
	getDiv.innerHTML = inputValue;
	}

//Problem02
function sumNumber() { 

	let inputValue = document.getElementById("problem02").value; 
	let getDiv = document.getElementById("display02");
	var total = parseInt(inputValue, 10);

	if (!isNaN(inputValue)) { 
		for (var i = 0; i < inputValue; i++)
			total += i;
		}
	else {
		window.alert("Please input a valid integer!");
		return;
	}
	
	getDiv.innerHTML = total;
	}

//Problem03
function addAllNumbers() {
	let input1 = parseInt(document.getElementById("add1").value, 10); 
	let input2 = parseInt(document.getElementById("add2").value, 10);
	let getDiv = document.getElementById("display03");

	getDiv.innerHTML = input1 + input2;
	}

//Calculator function, will perform operations on two numbers
const calculator = { 

	add(num1, num2) { 
		return num1 + num2;
	}, 

	subtract(num1, num2) { 
		return num1 - num2;
	}, 

	multiply(num1, num2) { 
		return num1 * num2;
	}, 

	divide(num1, num2) { 
		return num1 / num2;
	},
};


function addNum() {
	var first = parseInt(document.getElementById("num1").value, 10);
	var second = parseInt(document.getElementById("num2").value, 10);

	var getDiv = document.getElementById("displayCalc");
	getDiv.innerHTML = calculator.add(first, second);
}

function subtractNum() { 
	var first = parseInt(document.getElementById("num1").value, 10);
	var second = parseInt(document.getElementById("num2").value, 10);

	var getDiv = document.getElementById("displayCalc");
	getDiv.innerHTML = calculator.subtract(first, second);
}

function multiplyNum() { 
	var first = parseInt(document.getElementById("num1").value, 10);
	var second = parseInt(document.getElementById("num2").value, 10);

	var getDiv = document.getElementById("displayCalc");
	getDiv.innerHTML = calculator.multiply(first, second);
}

function divideNum() { 
	var first = parseInt(document.getElementById("num1").value, 10);
	var second = parseInt(document.getElementById("num2").value, 10);

	var getDiv = document.getElementById("displayCalc");
	getDiv.innerHTML = calculator.divide(first, second);
}