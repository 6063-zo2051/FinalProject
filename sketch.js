let mSerial;

let readyToRead;
let mConnectButton;

let isPlaying;

let prev = ["0","0"];

function connect() {
  mSerial.open(9600);
  readyToRead = true;
}

let angle = 0;
let recordImg;

function preload() {
recordImg = loadImage('recordImg.jpg'); // preload images
chromeImg = loadImage('chromeImg.png');

song1 = loadSound("./walk.mp3"); // preload music
song2 = loadSound("./watching.mp3");
song3 = loadSound("./flashlight.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  mSerial = createSerial();

  readyToRead = false;
  isPlaying = false;

  mConnectButton = createButton("Connect to Serial");
  mConnectButton.position(0, 0);
  mConnectButton.size(mConnectButton.width * 3, mConnectButton.height * 3);
  mConnectButton.style('font-size', '24px');
  mConnectButton.mousePressed(connect);
}

function draw() {
  background(0);
  
  if (readyToRead && mSerial.opened()) {
    mSerial.clear();
    mSerial.write(10);
    readyToRead = false;
  }
 
   if (mSerial.opened() && mSerial.availableBytes() > 0) {
    let mLine = mSerial.readUntil("\n");
    mLine = trim(mLine); // removes extra characters
    let vals = mLine.split(",");

    if (vals[0] == "1" && prev[0] == "0") {
      // start song
      // turn on green LED
      isPlaying = true;
      print("start");
    }

    if (vals[1] == "1" && prev[1] == "0") {
      // stop song
      // turn on red LED
      isPlaying = false;
      print("stop");
    }

    prev[0] = vals[0];
    prev[1] = vals[1];

    readyToRead = true;
   }

// code for song change button feature and scratch sound

  recordSpin();
  recordNeedle();

}


function recordSpin() { 
  let recordX = -width / 5;
  let recordY = 0;

  push();
  stroke(255);
  strokeWeight(4);
  translate(recordX, recordY);
  rotate(angle);
  texture(recordImg);
  let minDim = min(width, height);
  circle( 0, 0, minDim / 1.5);
  fill(0);
  circle(0, 0, minDim / 10);
  angle += 1;
  pop();

}

function recordNeedle() { // **FIX DIMENSIONS
texture(chromeImg);
stroke(255);
strokeWeight(6);
push();
translate( width / 10, - height / 5);

if (!isPlaying) { // ** MAKE STATEMENT FOR "NOT PLAYING"
  rotate(-45);
}

circle(0, 0, 200);


stroke(255);
strokeWeight(20);
line(0, 0, - 600, 600);
pop();
}

// function for audio visualizer

// function for moving lights