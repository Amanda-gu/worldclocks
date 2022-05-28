let angle = 0;
let points;
let bounds;

var font;
function preload() {
  font = loadFont("https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Bold.otf");
  // font = loadFont("../Inconsolata-VariableFont_wdth,wght.ttf");
}

function setup() {
  // createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);  
  
  //background(255,0);
  }




function draw() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textSize(200);
  background(255,255);

  var sec = second();
  var min = minute();
  var hrs = hour();
 
  var amhrs;
  var smin;
  var ssec;

  var shTime;
  var amshTime;

  var  gTime;
  var amgTime;
 //Greenwich
  push();
  //rotateX(-angle);
  textFont(font);
  textAlign(CENTER, CENTER);
  fill(0,200);

  gTime = hrs + 5;
  if (gTime > 24) {
    gTime = gTime - 24;
  } 
  if (gTime === 0 && min >= 10 && sec >=10) {
    gTime = 12; 
     text(gTime + ":" + min + ":" + sec, 0, 0);
  }  
  if (gTime === 0 && min < 10 && sec >=10) {
    gTime = 12; 
    smin = "0" + min;
     text(gTime + ":" + smin + ":" + sec, 0, 0);
  }  
  if (gTime === 0 && min >= 10&& sec < 10) {
    gTime = 12; 
    ssec = "0" + sec;
     text(gTime + ":" + min + ":" + ssec, 0, 0);
  } 
  if (gTime === 0 && min < 10&& sec < 10) {
    gTime = 12; 
    smin = "0" + min;
    ssec = "0" + sec;
     text(gTime + ":" + smin + ":" + ssec, 0, 0);
  }    


 
  if (gTime >= 10 && min >= 10&& sec >=10) {
     text(gTime + ":" + min + ":" + sec, 0, 0);
  }  
  if (gTime >= 10 && min < 10&& sec >=10) {
    smin = "0" + min;
     text(gTime + ":" + smin + ":" + sec, 0, 0);
  }  
  if (gTime >= 10 && min >= 10&& sec < 10) { 
    ssec = "0" + sec;
     text(gTime + ":" + min + ":" + ssec, 0, 0);
  } 
  if (gTime >= 10 && min < 10&& sec < 10) {
    smin = "0" + min;
    ssec = "0" + sec;
     text(gTime + ":" + smin + ":" + ssec, 0, 0);
  }


 

  if (gTime < 10 && min >= 10&& sec >=10) {
  amgTime = "0" + gTime;
    text(amgTime + ":" + min + ":" + sec, 0, 0);
  }  
  if (gTime < 10 && min < 10&& sec >=10) {
    amgTime = "0" + gTime;
    smin = "0" + min;
    text(amgTime + ":" + smin + ":" + sec, 0, 0);
  }  
  if (gTime < 10 && min >= 10&& sec < 10) { 
    amgTime = "0" + gTime;
    ssec = "0" + sec;
    text(amgTime + ":" + min + ":" + ssec, 0, 0);
  } 
  if (gTime < 10 && min < 10&& sec < 10) {
    smin = "0" + min;
    ssec = "0" + sec;
    amgTime = "0" + gTime;
    text(amgTime + ":" + smin + ":" + ssec, 0, 0);
  }

  pop();

  // sec = formatting(sec);
  // min = formatting(min);
  // hrs = formatting(hrs);

//NY
  //rotateY(frameCount * 0.03);
push();
  rotateY(-angle);
  shearX(-7);
  shearY(-10);
  textFont(font);
  fill(0,127);
  textAlign(CENTER, CENTER);

 // text(hrs + ":" + min + ":" + sec, 0, 0);

  if (hrs > 24) {
    hrs = hrs - 24;
  } 
  if (hrs === 0 && min >= 10 && sec >=10) {
    hrs = 12; 
     text(hrs + ":" + min + ":" + sec, 0, 0);
  }  
  if (hrs === 0 && min < 10 && sec >=10) {
    hrs = 12; 
    smin = "0" + min;
     text(hrs + ":" + smin + ":" + sec, 0, 0);
  }  
  if (hrs === 0 && min >= 10&& sec < 10) {
    hrs = 12; 
    ssec = "0" + sec;
     text(gTime + ":" + min + ":" + ssec, 0, 0);
  } 
  if (hrs === 0 && min < 10&& sec < 10) {
    hrs = 12; 
    smin = "0" + min;
    ssec = "0" + sec;
     text(hrs + ":" + smin + ":" + ssec, 0, 0);
  }    


 
  if (hrs >= 10 && min >= 10&& sec >=10) {
     text(hrs + ":" + min + ":" + sec, 0, 0);
  }  
  if (hrs >= 10 && min < 10&& sec >=10) {
    smin = "0" + min;
     text(hrs + ":" + smin + ":" + sec, 0, 0);
  }  
  if (hrs >= 10 && min >= 10&& sec < 10) { 
    ssec = "0" + sec;
     text(hrs + ":" + min + ":" + ssec, 0, 0);
  } 
  if (hrs >= 10 && min < 10&& sec < 10) {
    smin = "0" + min;
    ssec = "0" + sec;
     text(hrs + ":" + smin + ":" + ssec, 0, 0);
  }


 

  if (hrs < 10 && min >= 10&& sec >=10) {
  amgTime = "0" + hrs;
    text(amhrs + ":" + min + ":" + sec, 0, 0);
  }  
  if (hrs < 10 && min < 10&& sec >=10) {
    amhrs = "0" + hrs;
    smin = "0" + min;
    text(amhrs + ":" + smin + ":" + sec, 0, 0);
  }  
  if (gTime < 10 && min >= 10&& sec < 10) { 
    amgTime = "0" + hrs;
    ssec = "0" + sec;
    text(amhrs + ":" + min + ":" + ssec, 0, 0);
  } 
  if (hrs < 10 && min < 10&& sec < 10) {
    smin = "0" + min;
    ssec = "0" + sec;
    amhrs = "0" + hrs;
    text(amhrs + ":" + smin + ":" + ssec, 0, 0);
  }


pop();
  
// SHANGHAI
  push();
  
  //rotate(15);
  shearX(30);
  shearY(20);
  rotateZ(angle);
  textFont(font);
  fill(0,100);
  textAlign(CENTER, CENTER);
  // fill(0,127);
  // rotateZ(frameCount * 0.03);
  // rotateY(frameCount * 0.01);  
  shTime = hrs + 13;
  if (shTime > 24) {
    shTime = shTime - 24;
  }  

  if (shTime === 0 && min >= 10 && sec >=10) {
    shTime = 12; 
     text(shTime + ":" + min + ":" + sec, 0, 0);
  }  
  if (shTime === 0 && min < 10 && sec >=10) {
    shTime = 12; 
    smin = "0" + min;
     text(shTime + ":" + smin + ":" + sec, 0, 0);
  }  
  if (shTime === 0 && min >= 10&& sec < 10) {
    shTime = 12; 
    ssec = "0" + sec;
     text(shTime + ":" + min + ":" + ssec, 0, 0);
  } 
  if (shTime === 0 && min < 10&& sec < 10) {
    shTime = 12; 
    smin = "0" + min;
    ssec = "0" + sec;
     text(shTime + ":" + smin + ":" + ssec, 0, 0);
  }    


 
  if (shTime >= 10 && min >= 10&& sec >=10) {
     text(shTime + ":" + min + ":" + sec, 0, 0);
  }  
  if (shTime >= 10 && min < 10&& sec >=10) {
    smin = "0" + min;
     text(shTime + ":" + smin + ":" + sec, 0, 0);
  }  
  if (shTime >= 10 && min >= 10&& sec < 10) { 
    ssec = "0" + sec;
     text(shTime + ":" + min + ":" + ssec, 0, 0);
  } 
  if (shTime >= 10 && min < 10&& sec < 10) {
    smin = "0" + min;
    ssec = "0" + sec;
     text(shTime + ":" + smin + ":" + ssec, 0, 0);
  }


 

  if (shTime < 10 && min >= 10&& sec >=10) {
  amshTime = "0" + shTime;
    text(amshTime + ":" + min + ":" + sec, 0, 0);
  }  
  if (shTime < 10 && min < 10&& sec >=10) {
    amshTime = "0" + shTime;
    smin = "0" + min;
    text(amshTime + ":" + smin + ":" + sec, 0, 0);
  }  
  if (shTime < 10 && min >= 10&& sec < 10) { 
    amshTime = "0" + shTime;
    ssec = "0" + sec;
    text(amshTime + ":" + min + ":" + ssec, 0, 0);
  } 
  if (shTime < 10 && min < 10&& sec < 10) {
    smin = "0" + min;
    ssec = "0" + sec;
    amshTime = "0" + shTime;
    text(amshTime + ":" + smin + ":" + ssec, 0, 0);
  }
  pop();
  
  

angle = angle + 1;

}
  





// function formatting(){
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
