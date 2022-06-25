noseX = 0;
noseY = 0;
LeftWrist = 0;
RightWrist = 0;
Difference = 0;
function setup() {

    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(500, 400)
    canvas.position(560, 150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw() {
    background("#969A97")
}
function modelLoaded() {
    console.log("poseNet is Intialized!")
}
function gotPoses(result) {
    if (result.length > 0) {
        console.log(result)
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        
        console.log("noseX ="+noseX+"noseY"+noseY)
       
        LeftWristX = result[0].pose.leftWrist.x;
        RightWristX = result[0].pose.rightWrist.x;
        Difference = floor(LeftWristX - RightWristX)
       
        console.log("LeftWristX =" + LeftWristX + "RightWristX =" +RightWristX+ "Difference =" + Difference)
    }
}