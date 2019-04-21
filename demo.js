var _ = require('lodash');

console.log(_);

var input1 = document.querySelector(".input1");
var input2 = document.querySelector(".input2");
var body = document.querySelector("body");
var print = document.querySelector("h3");

function changeBackground(){
	var back = "linear-gradient(to right,"+input1.value+","+input2.value+")";
	body.style.background = back;
	print.innerHTML = back;
}

input1.addEventListener("input",changeBackground);
input2.addEventListener("input",changeBackground);