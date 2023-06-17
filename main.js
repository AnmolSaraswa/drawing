difference=0;
rightWristX=0;
leftWristX=0;
function setup() {
    video = createCapture(VIDEO);
    video.position(50, 100);
    video.size(570, 500);
    canvas = createCanvas(570, 500);
    canvas.position(1110, 125);
    a = ml5.poseNet(video, modelLoaded);
    a.on('pose', gotPoses);
}
function modelLoaded() {
    console.log("Posenet is Initialized");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
        console.log("leftWristX ="+leftWristX+"rightWristX = "+rightWristX+"difference = "+difference);
    }
}
function draw() {
    background(245, 203, 241);
    document.getElementById("font").innerHTML="Size of font is = "+difference;
    textSize(difference);
    fill("#blue");
   text("Anmol",50,140);
}