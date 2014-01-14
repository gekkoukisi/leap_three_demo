
var fingers = new Array;

var log = function(str){
	$("#log")[0].value = str;
}
Leap.loop({enableGestures: true}, function(frame){
	fingers = t_getFingers(frame);
	var x=y=z="non";
	if(fingers.length > 0){
		x = parseInt(fingers[0].x);
		y = parseInt(fingers[0].y);
		z = parseInt(fingers[0].z);
	}
	log1(x+"  "+y+"  "+z);
});
var scene = new THREE.Scene();
			var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

			var renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);
			$("#screen")[0].appendChild(renderer.domElement);

			var geometry = new THREE.CircleGeometry(0.1);
			var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

			camera.position.z = 10;
			var cubes = new Array;
			var render = function () {
				requestAnimationFrame(render);
				var cube = new THREE.Mesh(geometry, material);

				if(fingers.length > 0){
					cube.position.setX(fingers[0].x * 0.1) ;
					cube.position.setY(fingers[0].y * 0.07 -8 ) ;
					cube.position.setZ(fingers[0].z * 0.1) ;
					cubes.push(cube);
					scene.add(cube);
					if(cubes.length > 10){
						scene.__removeObject(cubes.shift());
					}
				}

				renderer.render(scene, camera);
			};

			render(); 

