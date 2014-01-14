t_getFingers = function(frame){
	var len = frame.fingers.length;
	var fingers = new Array;
	for(var i=0;i<len;i++){
		var finger = frame.fingers[i];
		fingers.push({x:finger.tipPosition[0],y:finger.tipPosition[1],z:finger.tipPosition[2]});
	}	
	return fingers; 
}
