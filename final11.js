let gold1;
let gold2;
let gold3;

function preload(){
 gold1 = loadImage("gold1.jpg");
 gold2 = loadImage("gold2.png");
 gold3 = loadImage("gold3.png");
  
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image(gold1,0,0,600,600);
  
  
    loadPixels(); 
  for (var y = 150; y< 200; y ++){
    for (var x = 50; x< 300;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    pixels[index+1]= 80;
   // pixels[index + 2]= 1;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  //image(gold2,290,230,110,80);
  
   loadPixels(); 
  for (var y = 360; y< 400; y ++){
    for (var x = 280; x< 550;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 10;
    pixels[index+1]= 80;
    pixels[index + 2]= 10;
    pixels[index + 3]= 180;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 230; y< 250; y ++){
    for (var x = 120; x< 390;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 10;
    pixels[index+1]= 80;
    pixels[index + 2]= 10;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 0; y< 300; y ++){
    for (var x = 550; x< 580;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 0;
    //pixels[index+1]= 100;
    pixels[index + 2]= 255;
    pixels[index + 3]= 240;
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 0; y< 130; y ++){
    for (var x = 0; x< 50;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 0;
    //pixels[index+1]= 100;
    pixels[index + 2]= 255;
    pixels[index + 3]= 150;
    }
  } 
  updatePixels();
  
  
    loadPixels(); 
  for (var y = 10; y< 100; y ++){
    for (var x = 40; x< 80;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 0;
    //pixels[index+1]= 100;
    pixels[index + 2]= 255;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();

      loadPixels(); 
  for (var y = 50; y< 430; y ++){
    for (var x = 480; x< 500;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 0;
    //pixels[index+1]= 100;
    pixels[index + 2]= 255;
    pixels[index + 3]= random(150,200);
    }
  } 
  updatePixels();
  
  
      loadPixels(); 
  for (var y = 500; y< 600; y ++){
    for (var x = 420; x< 460;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 0;
    pixels[index+1]= 150;
    pixels[index + 2]= 100;
    pixels[index + 3]= 255;
    }
  } 
  updatePixels();
  
   
      loadPixels(); 
  for (var y = 250; y< 590; y ++){
    for (var x = 80; x< 100;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 0;
    pixels[index+1]= 180;
    pixels[index + 2]= 150;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
      loadPixels(); 
  for (var y = 130; y< 170; y ++){
    for (var x = 220; x< 400;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 0;
    pixels[index+1]= 180;
    pixels[index + 2]= 150;
    pixels[index + 3]= 150;
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 90; y< 100; y ++){
    for (var x = 150; x< 300;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 10;
    pixels[index+1]= 80;
    pixels[index + 2]= 10;
    pixels[index + 3]= 180;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 350; y< 380; y ++){
    for (var x = 200; x< 350;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 100;
    pixels[index+1]= 80;
    pixels[index + 2]= 0;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 460; y< 500; y ++){
    for (var x = 10; x< 400;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    pixels[index+1]= 80;
   // pixels[index + 2]= 1;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
    loadPixels(); 
  for (var y = 450; y< 470; y ++){
    for (var x = 350; x< 580;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 50;
    pixels[index+1]= 130;
    pixels[index + 2]= 80;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
}