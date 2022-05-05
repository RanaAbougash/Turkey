let tower
let tower2

function preload(){
  tower = loadImage("tower.jpg");
  tower2= loadImage("tower2.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image(tower,0,0,600,600);
  image(tower2,220,210,100,100);
  image(tower2,380,330,100,100);
  
  image(tower2,310,250,100,100);
  loadPixels(); //blue for eye
  for (var y = 210; y< 310; y ++){
    for (var x = 220; x< 320;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    pixels[index+1]= 190;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();
  
  image(tower2,190,180,100,100);
  
    loadPixels();
  for (var y = 180; y< 280; y ++){
    for (var x = 190; x< 290;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 0;
   // pixels[index+1]= 180;
    pixels[index + 2]= 0;
    pixels[index + 3]= 130;
    }
  } 
  updatePixels();
  
  
    loadPixels(); 
  for (var y = 300; y< 340; y ++){
    for (var x = 280; x< 470;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 130;
    //pixels[index + 2]= 200;
    pixels[index + 3]= 1905;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 260; y< 290; y ++){
    for (var x = 100; x< 250;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 130;
    //pixels[index + 2]= 200;
    pixels[index + 3]= random(190,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 190; y< 220; y ++){
    for (var x = 50; x< 220;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 180;
    pixels[index + 2]= 0;
    pixels[index + 3]= 90;
    }
  } 
  updatePixels();
  
  
  loadPixels(); 
  for (var y = 130; y< 170; y ++){
    for (var x = 20; x< 100;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 250;
    //pixels[index+1]= 90;
    pixels[index + 2]= 200;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 230; y< 250; y ++){
    for (var x = 400; x< 480;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 180;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(90,150);
    }
  } 
  updatePixels();

  loadPixels(); 
  for (var y = 330; y< 430; y ++){
    for (var x = 380; x< 480;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 90;
    //pixels[index+1]= 0;
    //pixels[index + 2]= 0;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 410; y< 460; y ++){
    for (var x = 230; x< 440;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 0;
    pixels[index + 2]= 100;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 340; y< 380; y ++){
    for (var x = 420; x< 600;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 0;
    pixels[index + 2]= 80;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 530; y< 560; y ++){
    for (var x = 0; x< 280;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
    pixels[index+1]= 150;
    //pixels[index + 2]= 0;
    pixels[index + 3]= 130;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 350; y< 380; y ++){
    for (var x = 200; x< 220;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
    pixels[index+1]= 150;
    //pixels[index + 2]= 0;
    pixels[index + 3]= 130;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 310; y< 320; y ++){
    for (var x = 500; x< 580;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 255;
    pixels[index+1]= 150;
    //pixels[index + 2]= 0;
    pixels[index + 3]= 130;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 310; y< 320; y ++){
    for (var x = 0; x< 300;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 0;
    pixels[index+1]= 90;
    //pixels[index + 2]= 20;
    pixels[index + 3]= random(100,150);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 110; y< 120; y ++){
    for (var x = 300; x< 400;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    pixels[index+1]= 180;
    //pixels[index + 2]= 20;
    pixels[index + 3]= random(130,200);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 420; y< 430; y ++){
    for (var x = 200; x< 260;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 0;
    pixels[index+1]= 150;
    //pixels[index + 2]= 20;
    pixels[index + 3]= 160;
    }
  } 
  updatePixels();
  
}