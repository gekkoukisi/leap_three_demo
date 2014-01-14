t_getFingers = function(frame){
	var len = frame.fingers.length;
	var fingers = new Array;
	for(var i=0;i<len;i++){
		var finger = frame.fingers[i];
		fingers.push({x:finger.tipPosition[0],y:finger.tipPosition[1],z:finger.tipPosition[2]});
	}	
	return fingers; 
}
/*t_obj*/
t_obj = function(scene,obj){
	this.scene = scene;
	this.obj = obj;
	this.g = 0.03;
	this.v = 0;
	this.down_count = 0;
}
t_obj.prototype.down = function(){
		this.v = this.g*this.down_count;
		this.obj.position.y -= this.v;
		this.down_count++;
		if(this.obj.position.y < -20){
			this.kill();
			return true;
		}
}
t_obj.prototype.kill = function(){
	this.scene.__removeObject(this.obj);
}
/*t_objects+*/
t_objects = function(){
	this.objects = new Array;
	
}
t_objects.prototype.push = function(obj){
	this.objects.push(obj);
}
t_objects.prototype.move = function(){
	var len = this.objects.length;
	for(var i=0;i<this.objects.length;i++){
		if(this.objects[i].down()){
			delete this.objects[i];
			this.objects.splice(i,1);
			i--;
		}
	}
}
