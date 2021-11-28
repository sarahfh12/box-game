let box;
let audio;

function setup() {
  createCanvas(400, 400);
  
  box = new Box();
  audio = loadSound("shrink.mp3");
}


// LOOPS
function draw() {
  background(220);
  
  box.tampilkan();
  box.gerak();
}


// EVENT TOMBOL DITEKAN
function keyPressed() { 
  if (keyCode === RIGHT_ARROW) {
    box.tombolkanan = true;
    audio.play();
  } else if(keyCode === LEFT_ARROW) {
    box.tombolkiri = true;
    audio.play();
  } else if(keyCode === UP_ARROW) {
    box.tombolatas = true;
    audio.play();
  } else if(keyCode === DOWN_ARROW) {
    box.tombolbawah = true;
    audio.play();
  }
}


// EVENT TOMBOL DILEPAS
function keyReleased() {
  box.tombolkanan = false;
  box.tombolkiri = false;
  box.tombolatas = false;
  box.tombolbawah = false;
}

