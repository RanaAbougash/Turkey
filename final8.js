let turtle
let turtle2

function preload(){
  turtle = loadImage("turtle.jpg")
  turtle2= loadImage("turtle2.png")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  image(turtle,0,0,600,600);
  
  loadPixels(); 
  for (var y = 270; y< 340; y ++){
    for (var x = 10; x< 350;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    pixels[index+1]= 110;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(230,255);
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 50; y< 230; y ++){
    for (var x = 50; x< 100;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 150;
    //pixels[index + 2]= 0;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  image(turtle2,20,180,320,170);
  
   loadPixels(); 
  for (var y = 200; y< 240; y ++){
    for (var x = 200; x< 600;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    //pixels[index+1]= 10;
    pixels[index + 2]= 10;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 170; y< 360; y ++){
    for (var x = 410; x< 510;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 100;
    pixels[index+1]= 10;
    //pixels[index + 2]= 200;
    pixels[index + 3]= 240;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 440; y< 570; y ++){
    for (var x = 490; x< 530;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 100;
    pixels[index+1]= 150;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(200,240);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 460; y< 470; y ++){
    for (var x = 340; x< 580;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 255;
    pixels[index + 2]= 180;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 100; y< 120; y ++){
    for (var x = 160; x< 370;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 150;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 380; y< 390; y ++){
    for (var x = 80; x< 210;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
    //pixels[index+1]= 150;
    pixels[index + 2]= 50;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 550; y< 580; y ++){
    for (var x = 220; x< 440;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 130;
    //pixels[index+1]= y;
    pixels[index + 2]= 150;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 150; y< 180; y ++){
    for (var x = 20; x< 250;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 100;
    //pixels[index+1]= y;
    pixels[index + 2]= 180;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 0; y< 100; y ++){
    for (var x = 510; x< 550;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 150;
    //pixels[index + 2]= 150;
    pixels[index + 3]= 180;
    }
  } 
  updatePixels();

}