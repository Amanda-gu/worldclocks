let angle = 0;
let points;
let bounds;

var font;
function preload() {
  font = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf");
}

function setup() {
  
  // Create Canvas of given size
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  textFont(font);
  fill(0,120);
  textSize(750);
  textAlign(CENTER);
  }


function draw() {

  background(255);

  var sec = second();
  var min = minute();
  var hrs = hour();
  var amhrs
  var shTime;




//NY
  //rotateY(frameCount * 0.03);
  push();
  rotateY(angle);
  fill(0,107);
 
  if (hrs === 0) {
    hrs = 12; 
     text(hrs + ":" + min + ":" + sec, 0, 0);
  }  
  if (hrs >= 10) { 
     text(hrs + ":" + min + ":" + sec, 0, 0);
  }  
  if(hrs < 10) {
    amhrs = "0" + hrs;
    text(amhrs + ":" + min + ":" + sec, 0, 0);
  }
   
  pop();
  

//SHANGHAI
  push();
  rotate(15);
  rotateY(-angle);
  fill(0,127);
  // rotateZ(frameCount * 0.03);
  // rotateY(frameCount * 0.01);  
  shTime = hrs + 12;
  if (shTime > 24) {
    shTime = shTime - 24;
  }  
  if (shTime === 0) {
    shTime = 12;    
  }  
  if(shTime < 10) {
    shTime = "0" + shTime;
  }
  // if(hrs < 10) {
  //   shTime = "0" + hrs;
  // }
  text(shTime + ":" + min + ":" + sec, 0, 0);
  pop();

  angle = angle + 1;
}
  

// function formatting(num){
//   // Convert to int and check 
//   // if less than 10
//   if(int(num) < 10) {
//       // Return the padded number
//     return "0" + num;
//   }
//   // Return the original number if
//   // padding is not required
//   return num;
// }



function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}
