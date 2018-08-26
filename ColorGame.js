//select elements
var numSquares = 6;
var colors = [];
var targetColor;
var squares = document.querySelectorAll(".square");
var colorShow = document.querySelector("#colorShow");
var noticeBoard = document.querySelector("#noticeBoard");
var banner = document.querySelector("#banner");
var resetButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");
var hardBtn = document.querySelector("#hardBtn");
var easyBtn = document.querySelector("#easyBtn");

init();

//utility functions
function init(){
	setupButtons();
	setupSquares();
	reset();
}

//utility functions
function setupButtons(){
	resetButton.addEventListener("click", function(){
		reset();
	})
	for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		for(var j=0; j<modeButtons.length; j++){
			modeButtons[j].classList.remove("selected");
		}
		this.classList.add("selected");
		numSquares = this.textContent==="Easy"? 3 : 6;
		console.log("pressed");
		reset();
	})}
}

function setupSquares(){
	for(var i=0; i<squares.length; i++){
	squares[i].addEventListener("click", function(){
		if(this.style.backgroundColor == targetColor){
			noticeBoard.textContent = "Correct!";
			changeColor();
			resetButton.textContent = "play again?"
		}else{
			noticeBoard.textContent = "Try again.";
			this.style.backgroundColor = "#232323";
		}
		})
	}
}

function reset(){
	colors = generateColors(numSquares);
	targetColor = pickColor();
	colorShow.textContent = targetColor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	banner.style.backgroundColor = "steelblue";
	noticeBoard.textContent="";
	resetButton.textContent="New Game";
}

function changeColor(){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = targetColor;	
	}
	banner.style.backgroundColor = targetColor;
}

function pickColor(){
	var index = Math.floor(Math.random()*colors.length);
	return colors[index];
}

function generateColors(num){
	var array = [];
	for(var i=0; i<num; i++){
		array.push(generateOneColor());
	}
	return array;
}

function generateOneColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var ret = "rgb(" + r + ", " + g + ", " + b + ")";
	return ret;
}

