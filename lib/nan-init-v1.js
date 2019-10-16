var canvas = document.createElement('canvas');
canvas.setAttribute('width',200);
canvas.setAttribute('height',200);
document.write(`
<style>
#canvas-parent{
	border:1px dashed red;
	transform-origin:top left;transform: scale(3) ;
}
</style>

	`)
document.write('<div style="float:right" id="info"></div><div style="float:left" id="canvas-parent"></div>');

document.getElementById('canvas-parent').appendChild(canvas);
canvas.onmousemove = function(e){
	document.getElementById('info').innerHTML = ['x:',e.offsetX,'y:',e.offsetY].join('');
}
//<canvas id="canvas" width="200" height="200" style="border:1px solid red; width:200px;height:200px"/>
//<script>
//var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var tasks=[];
function flushLazy(draw){
	console.log(tasks)
	tasks.push(draw);
	setTimeout(function(){
		while(tasks.length){
			tasks.shift()();
		}
	})
}

ctx.lineWidth='1';//边框宽度
ctx.strokeStyle='red';//线条颜色

// drawLine(100,0,100,10);
// drawLine(100,200,100,190);
// drawLine(200,100,190,100);
// drawLine(0,100,10,100);

ctx.strokeStyle='red';//线条颜色

//画线
function drawLine(x0,y0,x1,y1){
	function draw(){
		ctx.beginPath();
		ctx.moveTo(x0,y0);
		ctx.lineTo(x1,y1);
		ctx.stroke();
	}
	flushLazy(draw);
	return {};
}
function drawStart5(x,y,r1){
	var r2 = r1 * (Math.sin(54/180*Math.PI)-Math.sin(36/180*Math.PI)*Math.tan(36/180*Math.PI));
	var step = 36/180*Math.PI;
	var args = [];
	for(var i=0;i<10;i++){
		var r = (i&1)?r2:r1;
		args.push(x+r*Math.sin(step*i),y-r*Math.cos(step*i))
	}
	console.log('start5',r1,r2,args)
	return drawShape.apply(null,args);

}
	
//画园
function drawCycle(x0,y0,r){
	function draw(){
		ctx.beginPath();
		ctx.arc(x0,y0,r,0,2*Math.PI);
		ctx.stroke();
	}
	flushLazy(draw);
}
function drawShape(x0,y0){
	var args = [].slice.call(arguments,0);
	//console.log(args)
	var fillColor;
	function draw(){
		ctx.beginPath();
		ctx.moveTo(x0,y0);
		for(var i=2;i<args.length;i+=2){
			ctx.lineTo(args[i],args[i+1]);
		}
		ctx.closePath()
		ctx.stroke();

		if(fillColor){
			ctx.fillStyle=fillColor;
			ctx.fill();
		}


	}
	flushLazy(draw);
	return {
		fill:function(color){
			fillColor = color;
			return this;
		},
		copyTo(x,y){
			var args2 = args.map(function(x,i){return x+((i%2)?y:x)});
			return drawShape.apply(null,args2).fill(fillColor);
		}
	}
}

function toX(r,angle){
	return r * Math.cos(angle/180*Math.PI);
}
function toY(r,angle){
	return -r * Math.sin(angle/180*Math.PI);
}