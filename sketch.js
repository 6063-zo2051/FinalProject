//let mSerial;

//let readyToRead;

//function connect() {
  //mSerial.open(9600);
//}

//function setup() {
  //createCanvas(windowWidth, windowHeight);
  //mSerial = createSerial();

  //readyToRead = false;

  //let mConnectButton = createButton("Connect to Serial");
  //mConnectButton.position(width / 2, height / 2);
  //mConnectButton.size(mConnectButton.width * 3, mConnectButton.height * 3);
 // mConnectButton.style('font-size', '24px');
  //mConnectButton.mousePressed(connect);
//}

//function draw() {
  //background(0);

  //if (readyToRead) {
   // mSerial.clear();
   // mSerial.write(10);
   // readyToRead = false;
 // }

  //if (mSerial.opened() && mSerial.availableBytes() > 0) {
   // let mLine = mSerial.readUntil("\n");
   // print (mLine);
   // readyToRead = true;
 // }
//}

let angle = 0;
let recordImg;

function preload() {
recordImg = loadImage('recordImg.jpg'); // preload images
chromeImg = loadImage('chromeImg.png');

walkSong = loadSound("./walk.mp3"); // preload music
watchingSong = loadSound("./watching.mp3");
flashSong = loadSound("./flashlight.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  recordSpin();
  recordNeedle();

}


function recordSpin() { // ***GETS LARGER WHEN IN FULL SCREEN
  let recordX = -width / 5;
  let recordY = 0;

  push();
  stroke(255);
  strokeWeight(4);
  translate(recordX, recordY);
  rotate(angle);
  texture(recordImg);
  circle( 0, 0, width / 2);
  fill(0);
  circle(0, 0, 200);
  angle += 1;
  pop();
}

function recordNeedle() {
texture(chromeImg);
stroke(255);
strokeWeight(6);
circle(width / 10, - height / 5, 200);

stroke(255);
strokeWeight(20);
line(width / 10, - height / 5, (width / 10) - 600, (- height / 5) + 600); // ***HOW DO I MAKE THE NEEDLE ROTATE ABOUT THE POINT ON MOUSE CLICK?

}

