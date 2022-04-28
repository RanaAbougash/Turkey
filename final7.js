let redd
let redd2
let redd3

function preload(){
  
  redd = loadImage ("redd.jpg");
  redd2 = loadImage ("redd2.jpg");
  redd3 = loadImage ("redd3.png")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image(redd,0,0,600,600);
  image(redd2,150,280,120,230);
  
    loadPixels(); 
  for (var y = 250; y< 270; y ++){
    for (var x = 80; x< 600;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 180;
   // pixels[index+1]= 80;
    //pixels[index + 2]= 70;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  image(redd3,330,40,120,240)
  
  loadPixels(); 
  for (var y = 280; y< 510; y ++){
    for (var x = 150; x< 270;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    //pixels[index+1]= 100;
    //pixels[index + 2]= 180;
    //pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 70; y< 400; y ++){
    for (var x = 200; x< 280;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 150;
    pixels[index+1]= 0;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 70; y< 400; y ++){
    for (var x = 200; x< 280;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 150;
    pixels[index+1]= 0;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 310; y< 350; y ++){
    for (var x = 230; x< 500;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
    //pixels[index+1]= 0;
    pixels[index + 2]= 50;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 150; y< 180; y ++){
    for (var x = 80; x< 260;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 250;
    //pixels[index+1]= 1;
    //pixels[index + 2]= 180;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 380; y< 600; y ++){
    for (var x = 400; x< 440;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    //pixels[index+1]= x;
    //pixels[index + 2]= 40;
    pixels[index + 3]= random(100,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 10; y< 60; y ++){
    for (var x = 0; x< 600;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 180;
    //pixels[index+1]= x;
    //pixels[index + 2]= 160;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 200; y< 230; y ++){
    for (var x = 320; x< 420;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 250;
    pixels[index+1]= 80;
    pixels[index + 2]= 70;
    pixels[index + 3]= random(200,240);
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 560; y< 580; y ++){
    for (var x = 0; x< 350;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
   // pixels[index+1]= 80;
   // pixels[index + 2]= 1;
    pixels[index + 3]= 230;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 100; y< 120; y ++){
    for (var x = 0; x< 530;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
   // pixels[index+1]= 80;
    pixels[index + 2]= 50;
    pixels[index + 3]= random(100,255);
    }
  } 
  updatePixels();
  
}