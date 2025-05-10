let myFont;
let img=[];
let carte;
let proba;
let cse
let saute
function preload() {
myFont = loadFont("font/gamay.otf");
for(i=0; i<37; i++){
	img[i] = loadImage('img/Cartes/carte'+i+'.png');
}
}

function setup() {

textFont(myFont);
createCanvas(windowWidth/2,windowHeight/2);
background(0)
carte = loadImage('img/Cartes/Fond-cartes.png')
proba = int(random(0,100))
fill(255)
textSize(50)
text(proba,110,110)
cse =int(random(0,58))
saute = int(random(1,4))


}

function draw() {
    background(0)
image(carte, windowWidth/2-carte.width/2,windowHeight/2-carte.height/2);

if(proba <= 10){

    image (img[0],windowWidth/2-img[0].width/2,windowHeight/2-img[0].height/2)
}
else if(proba > 10 && proba<=13){
    
    image (img[1],windowWidth/2-img[1].width/2,windowHeight/2-img[1].height/2)
}
else if(proba > 13 && proba<=21){
  
    image (img[2],windowWidth/2-img[2].width/2,windowHeight/2-img[2].height/2)
}
else if(proba > 21 && proba<=24){
    
    image (img[3],windowWidth/2-img[3].width/2,windowHeight/2-img[3].height/2)
}
else if(proba > 24 && proba<=31){

    image (img[4],windowWidth/2-img[4].width/2,windowHeight/2-img[4].height/2)
}
else if(proba > 31 && proba<=36){
   
    image (img[5],windowWidth/2-img[5].width/2,windowHeight/2-img[5].height/2)
}
else if(proba > 36 && proba<=43){
    
    image (img[6],windowWidth/2-img[6].width/2,windowHeight/2-img[6].height/2)
    textSize(35)
    text(cse,windowWidth/2+img[6].width/3.5, windowHeight/2+img[6].height/2.453)
}
else if(proba > 43 && proba<=58){
    
    image (img[7],windowWidth/2-img[7].width/2,windowHeight/2-img[7].height/2)
    textSize(35)
    text(cse,windowWidth/2+img[6].width/3.5, windowHeight/2+img[6].height/2.453)
}
else if(proba > 58 && proba<=62){
    
    image (img[8],windowWidth/2-img[8].width/2,windowHeight/2-img[8].height/2)
}
else if(proba > 62 && proba<=67){
    
    image (img[9],windowWidth/2-img[9].width/2,windowHeight/2-img[9].height/2)
}
else if(proba > 67 && proba<=79){
    
    image (img[10],windowWidth/2-img[10].width/2,windowHeight/2-img[10].height/2)
}
else if(proba > 79 && proba<=84){
    
    image (img[11],windowWidth/2-img[11].width/2,windowHeight/2-img[11].height/2)
    textSize(35)
    text(saute,windowWidth/2+img[6].width/800, windowHeight/2+img[6].height/2.53)
}
else if(proba > 84 && proba<=85){
    
    image (img[12],windowWidth/2-img[12].width/2,windowHeight/2-img[12].height/2)
}
else if(proba > 85 && proba<=92){
   
    image (img[13],windowWidth/2-img[13].width/2,windowHeight/2-img[13].height/2)
    textSize(35)
    text(saute,windowWidth/2+img[6].width/100, windowHeight/2+img[6].height/2.45)
}
else {
   
    image (img[14],windowWidth/2-img[14].width/2,windowHeight/2-img[14].height/2)
}
}
