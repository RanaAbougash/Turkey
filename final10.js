let view;
let view2

function preload() {
  view = loadImage("view.jpg");
  view2 = loadImage("view2.JPG");
  view3 = loadImage("view3.png")
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image(view,0,0,600,600);
  image(view2,450,310,110,80);
  image(view2,490,350,110,80);
  
   loadPixels(); 
  for (var y = 100; y< 150; y ++){
    for (var x = 150; x< 600;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
   // pixels[index+1]= 80;
    //pixels[index + 2]= 70;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 300; y< 600; y ++){
    for (var x = 50; x< 70;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 200;
    pixels[index+1]= 80;
    //pixels[index + 2]= 70;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 310; y< 390; y ++){
    for (var x = 450; x< 560;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 140;
   // pixels[index+1]= 80;
    //pixels[index + 2]= 70;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 310; y< 390; y ++){
    for (var x = 450; x< 560;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 140;
   // pixels[index+1]= 80;
    //pixels[index + 2]= 70;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 70; y< 120; y ++){
    for (var x = 320; x< 480;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 200;
    pixels[index+1]= 150;
    //pixels[index + 2]= 70;
   // pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 230; y< 280; y ++){
    for (var x = 200; x< 410;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    pixels[index+1]= 10;
    //pixels[index + 2]= 90;
    pixels[index + 3]= random(200,255);
    }
  } 
  updatePixels();

  
   image(view3,200,150,100,110);
  
   loadPixels(); 
  for (var y = 0; y< 500; y ++){
    for (var x = 100; x< 110;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 200;
    pixels[index+1]= 150;
    pixels[index + 2]= 50;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 230; y< 400; y ++){
    for (var x = 20; x< 60;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 200;
    pixels[index+1]= 90;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(150,200);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 500; y< 550; y ++){
    for (var x = 20; x< 400;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    //pixels[index+1]= 80;
    pixels[index + 2]= 10;
    pixels[index + 3]= 200;
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 430; y< 530; y ++){
    for (var x = 380; x< 390;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 150;
    //pixels[index+1]= 80;
    pixels[index + 2]= 10;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();
  
  loadPixels(); 
  for (var y = 390; y< 410; y ++){
    for (var x = 250; x< 590;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 190;
    //pixels[index+1]= 80;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 250; y< 320; y ++){
    for (var x = 360; x< 400;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 190;
    //pixels[index+1]= 80;
    pixels[index + 2]= 0;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();

    loadPixels(); 
  for (var y = 250; y< 320; y ++){
    for (var x = 50; x< 90;x++){
    var index = (x + y* width)*4;
    //pixels[index +0] = 190;
    pixels[index+1]= 120;
    //pixels[index + 2]= 0;
    //pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();
  
   loadPixels(); 
  for (var y = 20; y< 240; y ++){
    for (var x = 40; x< 70;x++){
    var index = (x + y* width)*4;
    pixels[index +0] = 10;
    pixels[index+1]= 120;
    //pixels[index + 2]= 0;
    pixels[index + 3]= random(180,255);
    }
  } 
  updatePixels();


  
}