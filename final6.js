let street

function preload(){
  street = loadImage("street.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  image (street, 0,0,600,600);
  
   loadPixels();
  for (var y = 0; y < 600; y++) {
    for (var x = 0; x < 600; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 200;
      //pixels[index + 1] = 0;
      //pixels[index + 2] = 50;
      pixels[index + 3] = random(200,230);
    }
  }
  updatePixels();

  
  loadPixels();
  for (var y = 0; y < 70; y++) {
    for (var x = 260; x < 320; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 10;
      pixels[index + 1] = 50;
      //pixels[index + 2] = 100;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
   loadPixels();
  for (var y = 90; y < 150; y++) {
    for (var x = 190; x < 230; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 10;
      pixels[index + 1] = 80;
      //pixels[index + 2] = 100;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
  loadPixels();
  for (var y = 50; y < 180; y++) {
    for (var x = 300; x < 330; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 50;
      pixels[index + 1] = 150;
      pixels[index + 2] = 255;
      //pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
  loadPixels();
  for (var y = 130; y < 270; y++) {
    for (var x = 240; x < 280; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 50;
      pixels[index + 1] = 150;
      pixels[index + 2] = 255;
      pixels[index + 3] = random(150,255);
    }
  }
  updatePixels();
  
  loadPixels();
  for (var y = 160; y < 240; y++) {
    for (var x = 295; x < 320; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 10;
      pixels[index + 1] = 50;
      pixels[index + 2] = 255;
      //pixels[index + 3] = 240;
    }
  }
  updatePixels();
  
    loadPixels();
  for (var y = 0; y < 100; y++) {
    for (var x = 170; x < 220; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 10;
      pixels[index + 1] = 10;
      pixels[index + 2] = x;
      pixels[index + 3] = random(200,255);
    }
  }
  updatePixels();
  
   loadPixels();
  for (var y = 210; y < 320; y++) {
    for (var x = 260; x < 300; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 10;
      pixels[index + 1] = 10;
      //pixels[index + 2] = x;
      pixels[index + 3] = 200;
    }
  }
  updatePixels();
  
   loadPixels();
  for (var y = 270; y < 400; y++) {
    for (var x = 290; x < 310; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 80;
      pixels[index + 1] = 150;
      pixels[index + 2] = 230;
      //pixels[index + 3] = 200;
    }
  }
  updatePixels();
  
   loadPixels();
  for (var y = 270; y < 400; y++) {
    for (var x = 290; x < 310; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 80;
      pixels[index + 1] = 150;
      pixels[index + 2] = 230;
      //pixels[index + 3] = 200;
    }
  }
  updatePixels();
  
  
   loadPixels();
  for (var y = 330; y < 600; y++) {
    for (var x = 530; x < 590; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 80;
      pixels[index + 1] = 20;
      //pixels[index + 2] = 50;
      pixels[index + 3] = 200;
    }
  }
  updatePixels();
  
  loadPixels();
  for (var y = 330; y < 600; y++) {
    for (var x = 190; x < 225; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 100;
     pixels[index + 1] = 20;
      //pixels[index + 2] = 20;
      pixels[index + 3] = 200;
    }
  }
  updatePixels();
  
  loadPixels();
  for (var y = 230; y < 600; y++) {
    for (var x = 140; x < 180; x++) {
      var index = (x + y * width) * 4;
      pixels[index + 0] = 10;
      //pixels[index + 1] = 150;
      pixels[index + 2] = 0;
      pixels[index + 3] = 240;
    }
  }
  updatePixels();
  
  loadPixels();
  for (var y = 0; y < 500; y++) {
    for (var x = 100; x < 130; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 0;
      //pixels[index + 1] = 0;
      pixels[index + 2] = 10;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
  loadPixels();
  for (var y = 350; y < 500; y++) {
    for (var x = 500; x < 550; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 0;
      //pixels[index + 1] = 0;
      pixels[index + 2] = 10;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
  
  loadPixels();
  for (var y = 260; y < 600; y++) {
    for (var x = 400; x < 450; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 0;
      //pixels[index + 1] = 0;
      pixels[index + 2] = 10;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
    loadPixels();
  for (var y = 400; y < 600; y++) {
    for (var x = 350; x < 390; x++) {
      var index = (x + y * width) * 4;
      //pixels[index + 0] = 10;
      pixels[index + 1] = 20;
      //pixels[index + 2] = 10;
      pixels[index + 3] = 255;
    }
  }
  updatePixels();
  
}
