// ctx alias to use canvas
// connect to socket server
const socket = io.connect("https://pepboard.herokuapp.com/");
// *********************************Basic Setup
const board = document.querySelector(".board");

// browser tab->window
board.height = window.innerHeight;
board.width = window.innerWidth;

// canvasRenderingContext2d=> tool
const ctx = board.getContext("2d");
// this will set up a line toobox
ctx.strokeStyle = "blue";
ctx.imageSmoothingEnabled = true;
ctx.lineJoin = "round";
ctx.lineCap = "round";
// lineCap endshape of line->square round butt
ctx.miterLimit = 1;
ctx.imageSmoothingQuality = "high";
// good quality images
ctx.lineWidth = 3;

// ************************Change Size**************************//
function sizeChange(value) {
  ctx.lineWidth = value;
  socket.emit("size", value);
}

// **tool Change***************************************************//
function handleLocaltoolChange(tool) {
  handleToolChange(tool);
  if (tool != "sticky");
  socket.emit("toolchange", tool);
}
// ******************handle color****************************
function handleColorChange(color) {
  ctx.strokeStyle = color;
  socket.emit("color", color);
}

const hamburger = document.querySelector(".hamburger");
const toolPanel = document.querySelector(".tool-panel");
hamburger.addEventListener("click", function() {
   handleHamburger() 

  socket.emit("hamburger");
});

