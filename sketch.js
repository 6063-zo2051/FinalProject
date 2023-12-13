let mSerial;

let readyToRead;
let mConnectButton;

let isPlaying;

let prev = ["0","0"];

let songs = [];
let currentSong = 0;
let currentButton;

let angle = 0;
let recordImg;

function connect() {
  mSerial.open(9600);
  readyToRead = true;
}


function preload() {
recordImg = loadImage('recordImg.jpg'); // preload images
chromeImg = loadImage('chromeImg.png');
skipImg = loadImage('skipbutton.png');

songs[0] = loadSound("./tainted.mp3"); // preload music
songs[1] = loadSound("./watching.mp3");
songs[2] = loadSound("./flashlight.mp3");
songs[3] = loadSound("./sweetdreams.mp3");

recordScratch = loadSound("./recordScratch.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  mSerial = createSerial();

  readyToRead = false;
  isPlaying = false;

  currentButton = createButton(''); // ***BUTTON COVER IS NOT WORKING
  currentButton.position(width * 4 / 5, height / 6);
  currentButton.size(300, 300);
  currentButton.style('border-radius', '50%');
  currentButton.style('background-image', 'url(skip.png)');
  currentButton.style('background-size', 'cover');
  currentButton.mousePressed(changeSong);

  mConnectButton = createButton("Connect to Serial");
  mConnectButton.position(0, 0);
  mConnectButton.size(mConnectButton.width * 3, mConnectButton.height * 3);
  mConnectButton.style('font-size', '24px');
  mConnectButton.mousePressed(connect);

}

function changeSong(){
  songs[currentSong].stop();
  recordScratch.play();
  currentSong++;

  if (currentSong >= songs.length) {
    currentSong = 0;
  }

  songs[currentSong].play();
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
      songs[currentSong].play();
      // turn on green LED
      isPlaying = true;
      print("start");
    }

    if (vals[1] == "1" && prev[1] == "0") {
      songs[currentSong].stop();
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
  //skipButton();

}

//function skipButton() {
//texture(skipButton);
//circle(width * 4 / 5, height / 6, 300);
//}

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