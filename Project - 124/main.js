var song1=" "
var song2=" "
function preload()
{
    song1=loadSound("Super_mario.mp3");
    song2=loadSound("harrypotter1_theme_song.mp3");
}

function play()
{
    song1.play();
    song2.play();
}

function setup()
{
    canvas=createCanvas(600, 500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}