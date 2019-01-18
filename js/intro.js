// get the <canvas> tag from the document
var canvas = document.querySelector(".my-game");

// with jQuery
// var canvas = $(".my-game")[0];

// get the context object (has all the methods for drawing things)
var ctx = canvas.getContext("2d");

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
