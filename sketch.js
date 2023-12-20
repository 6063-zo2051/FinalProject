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

let stars = [];

let amplitude;





// connect Arduino
function connect() {
  mSerial.open(9600);
  readyToRead = true;
}




//preloads
function preload() {
recordImg = loadImage('recordImg.jpg'); // preload images
chromeImg = loadImage('chromeImg.png');
starImg = loadImage('star.png');

songs[0] = loadSound("./tainted.mp3"); // preload music
songs[1] = loadSound("./watching.mp3");
songs[2] = loadSound("./flashlight.mp3");
songs[3] = loadSound("./sweetdreams.mp3");

recordScratch = loadSound("./recordScratch.mp3");// sound effect
}






function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  mSerial = createSerial();

  readyToRead = false;
  isPlaying = false;

  amplitude = new p5.Amplitude();

  currentButton = createButton('');
  currentButton.position(width * 2 / 3 , 0);
  currentButton.size(width / 7, width / 7);
  currentButton.style('border-radius', '75%');
  currentButton.style('border-width', '0');
  currentButton.style('background-size', 'cover');
  currentButton.style('background-image', 'url(skipbutton.png)');
  currentButton.style('background-color', 'rgba(0, 0, 0, 0)');
  currentButton.mousePressed(changeSong);

  mConnectButton = createButton("Connect to Serial");
  mConnectButton.position(0, 0);
  mConnectButton.size(mConnectButton.width, mConnectButton.height);
  mConnectButton.style('font-size', ' px');
  mConnectButton.mousePressed(connect);

  for (let i = 0; i < 50; i++) {
    let star = {
      x: random(-width/2, width/2),
      y: random(-height/2, height/2),
      size: random(10, 25),
      color: color(random(0, 255), random(0, 255), random(0, 255)),
      speed: random(1, 3)
    };
    stars.push(star);
  }

}





function draw() {
  background(0);

  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    star.x -= star.speed;

   if (star.x < -width / 2) {
     star.x = width / 2;
     star.y = random(-height / 2, height / 2);
     }

    image(starImg, star.x, star.y, star.size, star.size);
  
  }
  
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
      isPlaying = true;
      print("start");
    }

    if (vals[1] == "1" && prev[1] == "0") {
      songs[currentSong].stop();
      isPlaying = false;
      print("stop");
    }

    prev[0] = vals[0];
    prev[1] = vals[1];

    readyToRead = true;

   }

  recordSpin();
  recordNeedle();

  let level = amplitude.getLevel();
  let brightness = map(level, 0, 1, 0, 255);

  mSerial.write(brightness);
  
  }





  //change song function
  function changeSong(){
    songs[currentSong].stop();
    recordScratch.play();
    currentSong++;
  
    if (currentSong >= songs.length) {
      currentSong = 0;
    }
  
    songs[currentSong].play();
  }





// draw spinning record
function recordSpin() { 

  push();
  stroke(255);
  strokeWeight(4);
  rotate(angle);
  texture(recordImg);
  let minDim = min(width, height);
  circle( 0, 0, minDim / 1.5);
  fill(0);
  circle(0, 0, minDim / 10);
  angle += 1;
  pop();

}





// draw record needle
function recordNeedle() {
texture(chromeImg);
stroke(255);
strokeWeight(3);

if (!isPlaying) {
  rotate(-45);
}

circle(width / 4, - height / 4, 50); //

stroke(255);
strokeWeight(5);
line(width / 4, - height / 4, 0, 0);
}