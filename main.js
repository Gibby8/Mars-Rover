canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_mars_arrayo = ["NASA_1.jpg","NASA_2.jpg","NASA_3.jpg","NASA_4.jpg"];

random_number = Math.floor(Math.random()*4);
console.log(random_number);

rover_width = 100;
rover_height = 90;

background_image = nasa_mars_arrayo[random_number];

rover_image = "rover.png";
rover_x = 10;
rover_y = 10;

function add(){
    background_image_tag = new Image();
    background_image_tag.onload = uploadBackground;
    background_image_tag.src = background_image;
    
    rover_image_tag = new Image();
    rover_image_tag.onload = uploadRover;
    rover_image_tag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}

function uploadRover(){
   ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(keypressed == "37")
    {
        console.log("left");
        left();
   }
   if(keypressed == "38")
   {
       console.log("up");
       up();
  }
  if(keypressed == "39")
    {
        console.log("right");
        right();
   }
   if(keypressed == "40")
   {
       console.log("down");
       down();
  }
}
function up(){
if(rover_y >= 0){
    rover_y = rover_y - 10;
    uploadBackground();
    uploadRover();
}
}
function down(){
    if(rover_y <= 500){
        rover_y = rover_y + 10;
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if(rover_x >= 0){
        rover_x = rover_x - 10;
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if(rover_x <= 700){
        rover_x = rover_x + 10;
        uploadBackground();
        uploadRover();
    }
}
