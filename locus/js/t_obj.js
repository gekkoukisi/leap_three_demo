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
	console.log("del");
	this.scene.__removeObject(this.obj);
}
