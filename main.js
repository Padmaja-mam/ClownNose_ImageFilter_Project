noseX = 0;
noseY = 0;

noseX2 = 0;
noseY2 = 0;

function preload()
{
clown_nose = loadImage('https://i.postimg.cc/Qxf1vMp6/lovepik-clown-png-image-401025321-wh860-removebg-preview.png');
clown_hat = loadImage('https://i.postimg.cc/TPQk0LFP/clown-hat1.png');
}

function setup()
{
  canvas = createCanvas(300, 300);
  canvas.center();
  
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    
    noseX = results[0].pose.nose.x - 60;
    noseY = results[0].pose.nose.y - 200;

    noseX2 = results[0].pose.nose.x - 20;
    noseY2 = results[0].pose.nose.y - 20;
    
    
    console.log("nose X : " + noseX2);
    console.log("nose Y : " + noseY2);

  }
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');
}

function draw()
{
  image(video, 0, 0, 300, 300);
  
image(clown_nose, noseX2, noseY2, 50, 50);
image(clown_hat, noseX, noseY, 120, 150);
}

function take_snapshot()
{    
  save('myFilterImage.png');
}