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
