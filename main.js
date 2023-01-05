function preload()
{

}
function setup()
{
    canvas = createCanvas(550, 390);
    canvas.position(350, 105);
    video = createCapture(VIDEO);
    video.size(570, 380);
    video.position(340, 110)
    poseNet = ml5.poseNet('pose', modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded()
{
    console.log("Model Loaded");
}
function gotPoses(results)
{
    if(results > 0)
    {
        console.log(results);
    }
}
