function offsetLine(pts,  width){
	//小于2个点不进行计算
	let lastIndex = pts.length-1;
	if (lastIndex < 1){
		return pts;
	}
	let tmpPoints = pts.concat();
    for (let i = 0; i < lastIndex; i++) {
		let pt1 = pts[i];
		let pt2 = pts[i + 1];
		//计算斜率
		let angleA = Math.atan2((pt2[1] - pt1[1]), (pt2[0] - pt1[0]));
		//console.log('angleA:',angleA,(pt2[1] - pt1[1]), (pt2[0] - pt1[0]))
		//线段起点
		if (i == 0){
			tmpPoints[0] =  offset(pt1, width, angleA);
			//console.log('p0',tmpPoints[0])
		}
		if (i + 1 < lastIndex){
			//当线段超出二段时,以三个点为一组进行计算
			let pt3 = pts[i + 2];
			let angleB = Math.atan2((pt3[1] - pt2[1]), (pt3[0] - pt2[0]));
			let k = (angleB - angleA - Math.PI) / 2;
			
			let angle = angleA + k;
			let width1 = width / Math.sin(k);
			let x = (pt2[0] - width1 * Math.cos(angle));
			let y = (pt2[1] - width1 * Math.sin(angle));
			tmpPoints[i+1] = [x, y];
		} else {
			//如果终点和起点一样,则是闭合状态
			if (lastIndex>1 && pts[0][0]==  pts[lastIndex][0]&& pts[0][1]==  pts[lastIndex][1]){
				pt1 = pts[lastIndex - 1];
				let pt3 = pts[1];
				let angleA = Math.atan2((pt2[1] - pt1[1]), (pt2[0] - pt1[0]));
				let angleB = Math.atan2((pt3[1] - pt2[1]), (pt3[0] - pt2[0]));
				let k = (angleB - angleA - Math.PI) / 2;
				let angle = angleA + k;
				let width1 = width / Math.sin(k);
				let x = (pt2[0] - width1 * Math.cos(angle));
				let y = (pt2[1] - width1 * Math.sin(angle));
				tmpPoints[0] = [x, y];
				tmpPoints[i+1] = [x, y];
			}else{
				//线段终点
				let tmpPt = offset(pt2, width, angleA);
				tmpPoints[i+1] = tmpPt;
			}
		}
	}
	return tmpPoints;
}

function offset(pt, width, angleA){
	angleA-=Math.PI/2
	//console.log(angleA)
	return [pt[0]+width*Math.cos(angleA),pt[1]+width*Math.sin(angleA)];
}
function isSame(pts1,pts2){
	if(pts1.length != pts2.length){
		console.error('length not match');
		return false;
	}
	for(var i=0;i<pts1.length;i++){
		var p1 = pts1[i];
		var p2 = pts2[i];
		if(Math.abs(p1[0]-p2[0])>0.00001){
			console.error('p1[0]!=p2[0]@'+i,p1[0]-p2[0],p1[0],p2[0])
			return false;
		}
		if(Math.abs(p1[1]-p2[1])>0.00001){
			console.error('p1[1]!=p2[1]@'+i,p1[1]-p2[1],p1[1],p2[1])
			return false;
		}
	}
	return true;
	
	
}
function test(){
	/*线段*/
	var pts = [[0,0],[100,0]];
	var expect = [[0,-10],[100,-10]];
	var pts2 = offsetLine(pts,10);
	console.assert(isSame(pts2,expect))
	console.log(pts2);
	/*非封闭四边形*/

	var pts = [[0,0],[100,0],[100,100],[0,100]];
	var expect = [[0,-10],[110,-10],[110,110],[0,110]];
	var pts2 = offsetLine(pts,10);
	console.assert(isSame(pts2,expect))
	console.log(pts2);

	pts.reverse();
	//expect.reverse();
	var expect = [[0,10],[90,10],[90,90],[0,90]].reverse();
	var pts2 = offsetLine(pts,10);
	console.assert(isSame(pts2,expect))
	console.log(pts2);

	/*封闭四边形*/
	var pts = [[0,0],[100,0],[100,100],[0,100],[0,0]];
	var expect = [[-10,-10],[110,-10],[110,110],[-10,110],[-10,-10]];
	var pts2 = offsetLine(pts,10);
	console.assert(isSame(pts2,expect))
	console.log(pts2);

	pts.reverse();
	//expect.reverse();
	var expect = [[10,10],[90,10],[90,90],[10,90],[10,10]].reverse();
	var pts2 = offsetLine(pts,10);
	console.assert(isSame(pts2,expect))
	console.log(pts2);

	//todo: 非凸多边形
}
//test();