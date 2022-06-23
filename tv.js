function preload(){

}
function setup(){
canvas=createCanvas(500,400);
camera=createCapture(VIDEO);
camera.hide();
canvas.center();
}
function draw(){
image(camera,0,0,500,400);
if(status!="" ){
    object_detecter.detect(camera,gotResults);
   r=random(255);
   g=random(255);
   b=random(255);
 fill(r,g,b);
 document.getElementById("t9").innerHTML="object detected";
 document.getElementById("t10").innerHTML="no. of objects is detected"+object.length;
for(i=0;i<obects.length;i++){
  percent=Math.floor(object[i].confidence*100);
  text(object[i].label+" "+percent+"%",object[i].x+15,object[i].y+15);
  noFill("");
  stroke("black");
  rect(object[i].x,object[i].y,object[i].width,object[i].height);
}
}

}
