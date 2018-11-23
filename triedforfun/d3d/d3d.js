let img;


let r = 50;
let d = 2*r;
let angle = 0;
let maxD;
let n = 2;
let m = 2;
let p = 7;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('texture.jpg');
  centerX = width/n;
  centerY = height/m;
  centerZ = height/p;
  maxD = dist(0,0,centerX,centerY);
}

function draw() {
  background(0);
  //translate(centerX, centerY);
   rotateX(angle * 0.001);
   rotateZ(angle * 0.001);

  for(let i = -centerX+r;i< centerX+r;i+=d){
    for(let j = -centerY+r;j< centerY+r;j+=d){
      for(let k = -centerZ+r;k< centerZ+r;k+=d){
      //rotateX(sin(frameCount)*0.002);
      rotateZ(angle * 0.001);
      rotateX(angle * 0.001);

     rotateY(angle * 0.0001);
      push();
      let d = dist(j , i ,k , centerX,centerY,centerY)
      //let offset = map(d , 0,maxD,2,-2)*1.5;
      //let a = angle + offset;
      //let z = map(sin(a) , -1 , 1 , 0,r)
      translate(i,j,k);
      texture(img);
      sphere(8,6,4)
      pop();
      }
    }
  }
  angle += 0.1/2;
}
