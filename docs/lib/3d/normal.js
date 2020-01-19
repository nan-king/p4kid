



exports.normalVector = normalVector;
function normalVector( x1, y1, z1, x2, y2, z2, x3, y3, z3){
	// let dat =[
	// 	x2-x1,y2-y1,z2-z1,
	// 	x3-x2, y3-y2, z3-z2
	// ];
	// let a1 = dat[0],a2 = dat[3];
	// let b1 = dat[1],b2 = dat[4];
	// let c1 = dat[2],c2 = dat[5];

	let a1 = x2-x1,a2 = x3-x2;
	let b1 = y2-y1,b2 =y3-y2;
	let c1 = z2-z1,c2 = z3-z2;
	let sp=a1*b2-a2*b1;
	//非齐次方程组求解
	let sa = -(c1 * b2 - c2 * b1);
	let sb = -(a1 * c2 - a2 * c1);
	return [sa,sb,sp];
	/*
	let dat =[
		x2-x1,y2-y1,z2-z1,
		x3-x2, y3-y2, z3-z2
	];
	for(let i=0;i<3;i++){
		//see https://blog.csdn.net/DrIcetar/article/details/81297446
		//2个未知数2个方程组求解
		//_a1x+_b1y=_c1;---(1)
		//_a2x+_b2y=_c2;---(2)
		//系数矩阵B
		//| _a1 _b1 |
		//| _a2 _b2 |
		// let DB=_a1*_b2-_a2*_b1;
		let ida = (i+2)%3;
		let idb = (i+1)%3;
		let idc = i;
		let a1 = dat[ida],a2 = dat[ida+3];
		let b1 = dat[idb],b2 = dat[idb+3];
		let c1 = dat[idc],c2 = dat[idc+3];
		let sp=a1*b2-a2*b1;
		if (sp!=0)//有唯一解
		{
			//非齐次方程组求解
			let sa = c1 * b2 - c2 * b1;
			let sb = a1 * c2 - a2 * c1;
			let buf  =[.1,0,0];
			buf[ida] = sa  ;
			buf[idb] = sb ;
			buf[idc] = -sp;
			return buf;
		//}else{
		//console.log('failed!',arguments,[a1,b1],[a2,b2],[c1,c2],sp)
		}
	}
	*/

}

test();
function test(){
	function check(){
		var r1 = normalVector.apply(this,arguments);
		var r2 = normalVectorRef.apply(this,arguments);
		function sameRate(a,b,x,y){
			if(b == 0)return y==0;
			return a/b == x/y;
		}
		if(r1 || r2){
			//console.log(r1,r2)
			var x = 1024;
			if(!sameRate(r1[0],r1[1],r2[0],r2[1]) || !sameRate(r1[1],r1[2],r2[1],r2[2]) ){
				console.log('optimize not implement!!',r1,r2);
			}
			//return r1;
		}
		console.log(r1)
	}
	check(15,0,0,  0,2,0,  0,0,5);
	check(0,0,0,  1,0,0,  0,1,0);
	check(0,0,0,  0,1,0,  0,0,1);
	check(0,0,0 , 0,0,1,  1,0,0);
	console.log('revose p2,p3');
	check(1,0,0,  0,0,1,  0,1,0);
	check(1,0,0,   0,1,0, 0,0,1);

	console.log('右手定则');
	check(0,0,0,   1,0,0, 1,1,0);
}
function normalVectorRef( x1, y1, z1, x2, y2, z2, x3, y3, z3){
	//法线 x,y,z,;
	//_dx1 * x+_dy1 * y+_dz1 * z=0;
	//_dx2 * x+_dy2 * y+_dz2 * z=0;
	//_dx3 * x+_dy3 * y+_dz3 * z=0;
	//3个未知数3个方程组成的齐次方程组求解
	let _dx1=x2-x1, _dy1=y2-y1, _dz1=z2-z1;
	let _dx2=x3-x2, _dy2=y3-y2, _dz2=z3-z2;
	// let _dx3=x3-x1, _dy3=y3-y1, _dz3=z3-z1;//a3=a1+a2,... 

	//系数矩阵A
	//| _dx1 _dy1 _dz1 |
	//| _dx2 _dy2 _dz2 |
	//| _dx3 _dy3 _dz3 |
	//如果行列式A的值不等于0，则有唯一解且为零解
	// let DA=_dx1*_dy2*_dz3  +_dy1*_dz2*_dx3  +_dx2*_dy3*_dz1  -_dx3*_dy2*_dz1  -_dx1*_dy3*_dz2  -_dx2*_dy1*_dz3;
	// //= dx2*dy3*dx1 - dx3*dy2*dx1
	// if (DA!=0){//？why?? 三点相连，恒==0。
	// 	return null;
	// }
	//---------------------------------------------//
	//如果行列式A的值等于0，则有非零解
	//非零解即x!=0时有解或者y!=0时有解或者z!=0时有解
	//let x=0.0f,y=0.0f,z=0.0f;
	//若z!=0时有解,取z=-1
	//_dx1 * x+_dy1 * y=_dz1;---(1)
	//_dx2 * x+_dy2 * y=_dz2;---(2)
	let buf = twoLineIntersection(_dx1,_dy1,_dz1,_dx2,_dy2,_dz2);
	if (buf)//假设成立
	{
		// x=-zy[0];
		// y=-zy[1];
		// z=1.0f;
		buf.push(-1.0)
		return buf;
	}
	//假设不成立，继续试验另一个假设
	//若x!=0时有解取x=-1，平面中两条直线求交点问题
	//_dy1 * y+_dz1z=_dx1;---(1)
	//_dy2 * y+_dz2z=_dx2;---(2)
	buf=twoLineIntersection(_dy1,_dz1,_dx1,_dy2,_dz2,_dx2);
	if (buf)//假设成立
	{
		// dx=1.0f;
		// dy=-y;
		// dz=-z;
		buf.splice(0,0,-1.0);
		return buf;
	}
	//假设不成立，继续试验另一个假设
	//若y!=0时有解取y=-1，平面中两条直线求交点问题
	//_dx1 * x+_dz1 * z=_dy1;---(1)
	//_dx2 * x+_dz2 * z=_dy2;---(2)
	buf=twoLineIntersection(_dx1,_dz1,_dy1,_dx2,_dz2,_dy2);
	if (buf)//假设成立
	{
		// dx=-x;
		// dy=1.0f;
		// dz=-z;
		buf.splice(1,0,-1.0);
		return buf;
	}
	//所有假设都不成立，求解失败
	// return false;
}
//二次方程求解
function twoLineIntersection( _a1, _b1, _c1, _a2, _b2, _c2){
	//2个未知数2个方程组求解
	//_a1x+_b1y=_c1;---(1)
	//_a2x+_b2y=_c2;---(2)
	//系数矩阵B
	//| _a1 _b1 |
	//| _a2 _b2 |
	let DB=_a1*_b2-_a2*_b1;
	if (DB!=0)//有唯一解
	{
		if (_c1==0&&_c2==0){//齐次方程
			// x=0;y=0;
			return [0,0];
		}else{//非齐次方程组求解
			let dD1 = _c1 * _b2 - _c2 * _b1;
			let dD2 = _a1 * _c2 - _a2 * _c1;
			let x = dD1 / DB;
			let y= dD2 / DB;
			return [x,y];
		}
	}
	// else {
		//有无数解 （齐次方程） (a1,b1) (a2,b2) 方向相同/相反，面积为零, (x,y)为通过原点的某条直线
		//有无数解或者无解（非齐次方程）(a1,b1) (a2,b2) 方向相同/相反，面积为零, （x,y 无解或者某条不过原点的直线）
		//x=0;
		//y=0;
		//return false;
	// }
	//return null;
}
//*/