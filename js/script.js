// get the <canvas> tag from the document
var canvas = document.querySelector(".flappy-celine");
// get the context object (has all the methods for drawing things)
var ctx = canvas.getContext("2d");

// Characters
// -----------------------------------------------------------------------------
// Celine
// -----------------
var celineImg = new Image();
// specify "src" as if it it was from the HTML FILE
celineImg.src = "./images/celine.jpeg";
celineImg.onload = function() {
  drawCeline();
};

// group up character's variables in an object (easier to detect crashes later)
var celine = {
  x: 0,
  y: 225,
  width: 100,
  height: 100,
  // when Céline crashes the game is over
  isCrashed: false
};

function drawCeline() {
  ctx.drawImage(celineImg, celine.x, celine.y, celine.width, celine.height);
}

// Pipes
// -----------------
class Pipe {
  constructor(pipeX, pipeY, pipeWidth, pipeHeight) {
    this.x = pipeX;
    this.y = pipeY;
    this.width = pipeWidth;
    this.height = pipeHeight;
    // when a pipe crashes it will turn red (starts green)
    this.isCrashed = false;
  }

  drawPipe() {
    if (!celine.isCrashed) {
      // continue to move only if Céline hasn't crashed
      this.x -= 2;
      if (this.x < -45) {
        this.x = 1200;
      }
    }

    if (this.isCrashed) {
      // color the pipe red if it's crashed
      ctx.fillStyle = "tomato";
    } else {
      ctx.fillStyle = "#057e04";
    }
    // draw a solid rectangle for this pipe
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var allPipes = [
  // x, y, width, height
  new Pipe(650, 0, 30, 250),
  new Pipe(800, 350, 30, 200),
  new Pipe(970, 0, 30, 250),
  new Pipe(1120, 300, 30, 250),
  new Pipe(1270, 0, 45, 200),
  new Pipe(1420, 300, 30, 250)
];

// Drawing Loop
// -----------------------------------------------------------------------------
// call "drawingLoop" for the first time to begin the loop
drawingLoop();

function drawingLoop() {
  // erase the whole canvas before drawing (x, y, width, height)
  ctx.clearRect(0, 0, 1200, 550);

  drawCeline();
  allPipes.forEach(function(onePipe) {
    onePipe.drawPipe();
  });
  checkCrashes();

  if (celine.isCrashed) {
    // draw game over screen
  }

  // ask the browser for a chance to re-draw the scene
  requestAnimationFrame(function() {
    // set up a recursive loop (the function "drawingLoop" calls itself)
    drawingLoop();
  });
}

// Keyboard Controls
// -----------------------------------------------------------------------------
// keydown event handler (when user press down on ANY KEY)
document.onkeydown = function(event) {
  if (celine.isCrashed) {
    // exit this function without moving if Céline is crashed
    return;
  }

  console.log("coucou KEY DOWN " + event.keyCode);
  console.log(event);

  switch (event.keyCode) {
    case 37: // left arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      celine.x -= 10;
      break;

    case 38: // up arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      celine.y -= 10;
      break;

    case 39: // right arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      celine.x += 10;
      break;

    case 40: // down arrow
      // prevents the default behavior of keyboard presses (scrolling of ↑ ↓)
      event.preventDefault();
      celine.y += 10;
      break;
  }
};

// Collision
// -----------------------------------------------------------------------------
function rectangleCollision(rectA, rectB) {
  return (
    rectA.y + rectA.height >= rectB.y &&
    rectA.y <= rectB.y + rectB.height &&
    rectA.x + rectA.width >= rectB.x &&
    rectA.x <= rectB.x + rectB.width
  );
}

function checkCrashes() {
  allPipes.forEach(function(onePipe) {
    if (rectangleCollision(celine, onePipe)) {
      celine.isCrashed = true;
      onePipe.isCrashed = true;
    }
  });
}
