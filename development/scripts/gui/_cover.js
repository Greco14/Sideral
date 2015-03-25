Cover = function(){
	this.settings = {
		topL : $('.topL'),
		leftL : $('.leftL'),
		bottomL : $('.bottomL'),
		rightL : $('.rightL'),
		txt : $('.coverSection').find('.txt'),
	};
	this.tlMove = new TimelineLite();
};
Cover.prototype.init = function(){
	var self = this;
	self.bind();
};
Cover.prototype.bind = function(){
	var self = this,
		s = self.settings;
	self.tlMove.to(s.txt,0.25,{
		top: 0,
		opacity: 1,
		ease: Cubic.easeOut
	});

	self.tlMove.to(s.topL,0.25,{
		width:'100%',
		ease: Quad.easeOut
	}).delay(0.25);
	self.tlMove.to(s.rightL,0.25,{
		height:'100%',
		ease: Quad.easeOut
	}).delay(0.50);
	self.tlMove.to(s.bottomL,0.25,{
		width:'100%',
		ease: Quad.easeOut
	}).delay(0.75);
	self.tlMove.to(s.leftL,0.25,{
		height:'100%',
		ease: Quad.easeOut
	}).delay(1);
	
};