noseX = 0;
noseY = 0;
LeftWrist = 0;
RightWrist = 0;
Difference = 0;
function setup() {
   
    video = createCapture(VIDEO)
    video.size(550,500)

    canvas = createCanvas(500,400)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw() {
    background(red)
}
function modelLoaded() {
    console.log("poseNet is now Intialized!")
}
function gotPoses(result) {
if (result.length > 0) {
    console.log(result)
}
}