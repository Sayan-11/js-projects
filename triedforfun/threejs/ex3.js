var width=window.innerWidth ;
var height=window.innerHeight ;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({canvas : document.getElementById('canva'),antialias : true});
renderer.setSize( window.innerWidth, window.innerHeight );
// document.body.appendChild( renderer.domElement );

var AmbLight = new THREE.AmbientLight(0xffffff,0.5);
scene.add(AmbLight);
var pointLight = new THREE.DirectionalLight(0xffffff,0.5);
scene.add(pointLight);

//var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var offset = -5;
var geometry = new THREE.SphereGeometry( 1 );
var material = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );

for(let i = 0;i<40; i+=5){
  for(let j = 0;j<40; j+=5){

    var sphere = new THREE.Mesh( geometry, material );
    sphere.position.x = i + offset;
    sphere.position.z = j;
    scene.add(sphere);
  }
}



camera.position.set(0,0,10);

var angle = 1;
var radius = 500;
animate();
function animate() {
  //cube.position.y = Math.sin(angle * 10);
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
  camera.position.x = radius * Math.cos( angle );
  camera.position.z = radius * Math.sin( angle );
  angle += 0.01;
  //angle += 0.01;
}
