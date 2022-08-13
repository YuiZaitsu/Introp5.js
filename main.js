function preload(){

}

function setup() {
canvas= createCanvas(600,500);
canvas.position(100,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}

function draw() {
    image(video,100,80,300,250   );

    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    rect(70, 27, 375, 25);
    rect(70, 350, 375, 25);
    rect(30, 63, 25, 275);
    rect(448, 63, 25, 275);

     
}


function take_snapshot() {
    save("");
    }

