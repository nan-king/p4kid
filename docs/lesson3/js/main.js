document.write(['three.min.js','OrbitControls.js','three-ext.js','line.js'].map(f=>f+'></script>')
    .join('\n')
    .replace(/^/gm,'<script src='+document.scripts[document.scripts.length-1].src.replace(/[^\/]+$/,'') )
   +` <div id="webGL-container" style="width:1000px;height:1000px;overflow:hidden"></div>`);


/*global variables*/
var WIDTH=1000, HEIGHT=1000;
var newModels = [];
var scene ;

function init() {
	var camera,renderer;
    scene = new THREE.Scene();
	camera=new THREE.PerspectiveCamera(25 , 1, 0.1, 3000);
	renderer= new THREE.WebGLRenderer({
	        antialias: true
	    });
    /*creates empty scene object and renderer*/
    renderer.setClearColor(0xdddddd);
    renderer.setSize(WIDTH, HEIGHT);
    renderer.shadowMap.enabled = true;
    renderer.shadowMapSoft = true;

    /*add controls*/
    var controls = new THREE.OrbitControls(camera, renderer.domElement);
    //controls.addEventListener('change', render);

    /*adds helpers*/
    var arrowX = new THREE.ArrowHelper( new THREE.Vector3(1,0,0), new THREE.Vector3( 0, 0, 0 ), 500, 0xFF0000 );
    scene.add( arrowX );
    var arrowY = new THREE.ArrowHelper( new THREE.Vector3(0,1,0), new THREE.Vector3( 0, 0, 0 ), 500, 0x00FF00 );
    scene.add( arrowY );
    var arrowZ = new THREE.ArrowHelper( new THREE.Vector3(0,0,1), new THREE.Vector3( 0, 0, 0 ), 500, 0x0000FF );
    scene.add( arrowZ );

    grid = new THREE.GridHelper(1000, 10,0x000000, 0x666666);
    grid.material.depthFunc=THREE.LessDepth ;
    grid.rotation.x = Math.PI/2;
    // grid.setColors();
    scene.add(grid);

    /*Ground*/
    var Ground_geometry = new THREE.BoxGeometry(400,0.1, 400);
    var Ground_material = new THREE.MeshPhongMaterial({
        color: 0xa0adaf,
        shininess: 150,
        specular: 0xffffff,
        flatShading: THREE.SmoothShading
    });

    var ground = new THREE.Mesh(Ground_geometry, Ground_material);
    ground.scale.multiplyScalar(1);
    ground.castShadow = false;
    ground.receiveShadow = true;
    //scene.add(ground);

    /*Camera*/
    camera.position.x = 250;
    camera.position.y = 50;
    camera.position.z = 2000;
    console.log(scene.position)
    camera.lookAt(scene.position);

    /*Lights*/
    var ambient = new THREE.AmbientLight(0xffff00);
    scene.add(ambient);

    var spotLight1 = new THREE.SpotLight(0xffffff,1,2000);
    spotLight1.position.set(100, 500, 200);
    spotLight1.name = 'Spot Light1';
    initSpotLight(spotLight1);

    var spotLight2 = new THREE.SpotLight(0xffffff,1,2000);
    spotLight2.position.set(-100, -500, -200);
    spotLight2.name = 'Spot Light2';
    initSpotLight(spotLight2);
    function initSpotLight(spotLight){
    	spotLight.target.position.set(0, 100, 0);
	    spotLight.castShadow = true;
	    spotLight.shadow.camera.near = 30;
	    spotLight.shadow.camera.far = 100;
	    //spotLight.shadow.darkness = 0.9;
	    spotLight.shadow.camera.visible = false;
	    //shadow map size will determine the resolution of shadow
	    spotLight.shadow.mapSize.width = 1024;
	    spotLight.shadow.mapSize.height = 1024;
	    scene.add(spotLight);
    }

    

    document.getElementById("webGL-container").append(renderer.domElement);
    function animate() {
	    requestAnimationFrame(animate);
	    if(newModels && newModels.length){
	    	for(var model of [].concat(newModels)) {
	    		//model = model.clone().rotateX(Math.PI/2)
		        scene.add(model);
		    }
		    newModels = [];
	    };
	    renderer.render(scene, camera);
	}

    animate();
    //<textarea ondblclick='this.value = nan.genSTL()'></textarea>
    var textarea = document.createElement('textarea');
    textarea.setAttribute('placeholder','双击文本框生成stl')
    textarea.setAttribute('ondblclick','this.value = nan.genSTL()');
    document.body.appendChild(textarea)

	
}


function saveAsSTL(models){
    var exporter = new THREE.STLExporter();
    // second argument is a list of options
    var scene = new THREE.Scene();
    for(var model of [].concat(models)) {
    	//console.log(model)
    	model = model.clone();
    	model.geometry = model.geometry.clone();
    	model.geometry.rotateX(Math.PI/2)
        scene.add(model);
    }

    var data = exporter.parse( scene, { binary: false } );
    console.log(data)
    return data
} 
function genRouteYModels(points,segments){
    var pts2 = offsetLine(points,1);
    var angle = Math.PI*2;;
    if(segments == 0){
    	segments=1;
    	angle = 0.001;

    }
    points = points.concat(pts2.reverse());
    points.push(points[0]);
    points.reverse();
    console.log('point!'+points.length+'\n',points.join('\n '))
    points = points.map(p=>new THREE.Vector2(p[0],p[1]));

    //var geometry = new THREE.LineGeometry( points);
    var geometry = new THREE.LatheGeometry( points ,segments||16,.5*Math.PI,angle);
    
    var material = new THREE.MeshPhongMaterial( { 
    		//wireframe : true,
            color: 0x99ee33 ,
            shininess: 150,
            depthFunc:THREE.LessDepth ,
            specular: 0x222222,
            flatShading: THREE.SmoothShading} );

 	// var material = new THREE.LineDashedMaterial();
	// var material = new THREE.MeshDepthMaterial( { color: 0xffffff } );
    var lathe = new THREE.Mesh( geometry, material );
    var rtv = [lathe];
	//var border = new THREE.EdgesHelper( lathe,0xff0000 );  //添加边框
	
	//if(segments<16){
    	var edges = new THREE.WireframeGeometry( geometry );
		var border = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xffffff,linewidth: 1,
			depthTest:true,
			opacity:1,
			transparent:true } ) );
		rtv.push(border)
    //}
    return rtv;
}

class Nan3D{
	constructor(){

	}
	drawLines(...args){
		this.lineArguments = args;
		this.routeY(0);
	}
	routeY(segments){
		if(!this.model){
			var models = genRouteYModels(this.lineArguments,segments);
			newModels = newModels.concat(models);

			this.models = newModels.filter(m=>!(m instanceof THREE.WireframeGeometry));
		}
	}
	genSTL(){
		return saveAsSTL(this.models);
        //return saveAsSTL([new THREE.Mesh(new THREE.BoxGeometry(10,10, 10))])
	}
}

