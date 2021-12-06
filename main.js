// let button = document.querySelectorAll('button[id=button]');
// let clear = document.querySelector('button[class=clear]');
// let backSpace = document.querySelector('button[class=backspace]');
// let operations = document.querySelectorAll('button[class=operations]');
// let output = document.querySelector('div[class=output]');

import {button} from './view.js';
import {clear} from './view.js';
import {backSpace} from './view.js';
import {operations} from './view.js';
import {output} from './view.js';

let currentOperation;
let firstNum = '';
let secondNum = '';
let total = '';
let check = true;


function typeNum() {
	if(check) {
		if(output.textContent == 0) {output.innerHTML = '';}
		output.innerHTML += this.textContent;
		if(output.textContent.length > 5) {output.textContent = output.innerHTML.slice(0, 5)}
		firstNum = output.textContent;
	}

	else {
		if(output.textContent == 0 || output.textContent == firstNum) {output.innerHTML = ''}
		output.innerHTML += this.textContent;
		if(output.textContent.length > 5) {output.textContent = output.innerHTML.slice(0, 5)}
		secondNum = output.textContent;
	}

	switch(currentOperation) {
		case '/':
			total = firstNum / secondNum;
			break;
		case '*':
			total = firstNum * secondNum;
			break;
		case '-':
			total = firstNum - secondNum;
			break;
		case '+':
			total = +firstNum + +secondNum;
			break;
	}
}

function calc() {
	switch(this.textContent) {
		case '÷':
			currentOperation = '/';
			check = false;
			break;
		case '×':
			currentOperation = '*';
			check = false;
			break;
		case '-':
			currentOperation = '-';
			check = false;
			break;
		case '+':
			currentOperation = '+';
			check = false;
			break;
	}
}

function showTotal() {
	if(this.textContent == '=') {
		if(!Math.trunc(total)) {
			total = total.toFixed(2);
		}
		output.textContent = +total;
		if(output.textContent.length > 5) {
			output.textContent = total.toExponential(1);
		}
		firstNum = total;
		secondNum = '';
		total = '';
		check = true;
		currentOperation = '';
	}
}

function clearOutput() {
	output.innerHTML = 0;
	firstNum = '';
	secondNum = '';
	total = '';
	currentOperation = '';
	check = true;
}

function backSpaceOutput() {
	output.innerHTML = output.innerHTML.slice(0, -1);
	if(output.textContent.length == 0) {output.innerHTML = 0;}
}

button.forEach(item => item.addEventListener('click', typeNum));
clear.addEventListener('click', clearOutput);
backSpace.addEventListener('click', backSpaceOutput);
operations.forEach(item => item.addEventListener('click', calc));
operations.forEach(item => item.addEventListener('click', showTotal));