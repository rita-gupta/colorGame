var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 =  document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	//mode buttons event listeners
	setupModeButtons();
	setupSquares();
    reset();
}

function setupModeButtons(){
for(var i=0; i<modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
	    modeButtons[1].classList.remove("selected");
	    this.classList.add("selected");

	    this.textContent ==="EASY" ? numSquares = 3: numSquares = 6;

	   reset();
	});
  }
}
function setupSquares(){
for(var i=0; i<squares.length; i++){
//add  click listener to squares
	squares[i].addEventListener("click", function(){
		//grab the color of picked square
		var clickedColor = this.style.backgroundColor;
		//compare the color to pickedColor
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "Correct!!"
			resetButton.textContent = "Play Again!!"
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!"
		}
	});
  } 
}


function reset(){
	colors = generateRandomColors(numSquares);
 //pick a new random color from array
 pickedColor = pickColor();
 // chnage the colorDisplay to match picked Color
 colorDisplay.textContent = pickedColor;
resetButton.textContent = "New Colors"
  messageDisplay.textContent = "";

  //change color of the squares 
  for(var i=0; i<squares.length; i++){
     if(colors[i]){
       squares[i].style.backgroundColor = colors[i];
             squares[i].style.display = "block";

     }else{
      squares[i].style.display = "none";
     }

  }

h1.style.backgroundColor = "steelblue";


}

resetButton.addEventListener("click", function(){
reset();
});

function changeColors(color){
	//loop through the squares
	for(var i=0; i<squares.length; i++){
		//chnage each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random =  Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var ary = []
	//repeat num times
	for(var i=0; i<num; i++){
		//get random colors and push into ary
			ary.push(randomColor())

		//get random and push into arr
	}
	//return that ary
	return ary; 
}

function randomColor(){
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random()* 256);
	//pick a 'green' from 0 to 255
	var g = Math.floor(Math.random()* 256);

	//pick a "blue" from 0 to 255
	var b = Math.floor(Math.random()* 256);
	"rgb(r, g, b)"
	return "rgb(" + r + ", " + g + ", " + b + ")";

}