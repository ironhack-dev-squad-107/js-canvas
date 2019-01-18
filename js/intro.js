// get the <canvas> tag from the document
var canvas = document.querySelector(".my-game");

// with jQuery
// var canvas = $(".my-game")[0];

// get the context object (has all the methods for drawing things)
var ctx = canvas.getContext("2d");

// Drawing Images
// -----------------------------------------------------------------------------
// you need an Image object to draw images with canvas
var zombieImg = new Image();
// specify "src" as if it it was from the HTML FILE
zombieImg.src = "./images/zombie.jpeg";
// run this function when the image finishes loading
zombieImg.onload = function() {
  // draw an image (imageObj, x, y, width, height)
  ctx.drawImage(zombieImg, zombieX, zombieY, 150, 150);
};

function drawZombie() {
  // automatically decrease zombie's X (he will move to the left)
  zombieX -= 5;
  if (zombieX < -150) {
    zombieX = 1000;
    // give the zombie a random new Y coordinate when he's reset
    zombieY = Math.floor(Math.random() * 400);
  }

  ctx.drawImage(zombieImg, zombieX, zombieY, 150, 150);
}

var zombieX = 850;
var zombieY = 200;

// --------------------------------

// you need an Image object to draw images with canvas
var michaelImg = new Image();
// specify "src" as if it it was from the HTML FILE
michaelImg.src = "./images/michael.png";
// run this function when the image finishes loading
michaelImg.onload = function() {
  // draw an image (imageObj, x, y, width, height)
  ctx.drawImage(michaelImg, michaelX, michaelY, 128, 128);
};

function drawMichael() {
  ctx.drawImage(michaelImg, michaelX, michaelY, 128, 128);
}

var michaelX = 0;
var michaelY = 211;

// Drawing Loop
// -----------------------------------------------------------------------------
// call "drawingLoop" for the first time to begin the loop
drawingLoop();

function drawingLoop() {
  // erase the whole canvas before drawing (x, y, width, height)
  ctx.clearRect(0, 0, 1000, 550);

  drawRectangles();
  drawText();
  drawCircles();
  drawMichael();
  drawZombie();

  // ask the browser for a chance to re-draw the scene
  requestAnimationFrame(function() {
    // set up a recursive loop (the function "drawingLoop" calls itself)
    drawingLoop();
  });
}

// --------------------------------

function drawRectangles() {
  // Drawing Rectangles
  // -----------------------------------------------------------------------------
  // fillStyle controls the color of ALL the next FILLS
  ctx.fillStyle = "deeppink";
  // draw a solid rectangle that covers ALL the canvas
  ctx.fillRect(0, 0, 1000, 550);

  // fillStyle controls the color of ALL the next FILLS
  ctx.fillStyle = "black";
  // draw a solid rectangle (x, y, width, height)
  ctx.fillRect(0, 0, 500, 275);

  // lineWidth sets how fat the lines are for ALL the next STROKES
  ctx.lineWidth = 10;
  // strokeStyle controls the color of ALL the next STROKES
  ctx.strokeStyle = "#16735f";
  // draw a rectangle OUTLINE (x, y, width, height)
  ctx.strokeRect(500, 275, 500, 275);
}

function drawText() {
  // Drawing Text
  // -----------------------------------------------------------------------------
  // font sets the size and font family of ALL the next TEXT
  ctx.font = "40px Baskerville, serif";
  // fillStyle controls the color of ALL the next FILLS
  ctx.fillStyle = "rebeccapurple";
  // draw some SOLID text (string, x, y)
  ctx.fillText("Hello", 900, 40);

  // lineWidth sets how fat the lines are for ALL the next STROKES
  ctx.lineWidth = 2;
  // strokeStyle controls the color of ALL the next STROKES
  ctx.strokeStyle = "orange";
  // draw some text OUTLINE (string, x, y)
  ctx.strokeText("Blah", 0, 40);
}

function drawCircles() {
  // Drawing Circles
  // -----------------------------------------------------------------------------
  // start a path (custom drawing needed for circles)
  ctx.beginPath();
  // draw a circle (x, y, radius, startAngle, endAngle)
  ctx.arc(250, 400, 50, 0, 2 * Math.PI);
  // fill the circle
  ctx.fillStyle = "chartreuse";
  ctx.fill();
  // end the path
  ctx.closePath();

  ctx.beginPath();
  // draw a circle (x, y, radius, startAngle, endAngle)
  ctx.arc(250, 400, 75, 0, 2 * Math.PI);
  // outline the circle
  ctx.lineWidth = 5;
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.closePath();
}

// -------------------------------------------------------------------------

// keydown event handler (when user press down on ANY KEY)
document.onkeydown = function(event) {
  console.log("coucou KEY DOWN " + event.keyCode);
  console.log(event);

  switch (event.keyCode) {
    case 37: // left arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      michaelX -= 10;
      break;

    case 38: // up arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      michaelY -= 10;
      break;

    case 39: // right arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      michaelX += 10;
      break;

    case 40: // down arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      michaelY += 10;
      break;
  }
};
