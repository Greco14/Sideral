Nav = function(){
	this.settings={
		gridTop : $('.gridWrap'),
		naver : $('#topNav'),
	};
};
Nav.prototype.init = function(){
	var self = this;
	self.bind();
	console.log('Nav tool start');
};

Nav.prototype.bind = function(){
	var self = this,
		s = self.settings;
	
        

	$('body').scroll(function(event) {
       
       var gridTop = s.gridTop.offset().top;
        if(gridTop > 0){
        	s.naver.css({position:'absolute'});
        }
        if(gridTop < 0){
        	s.naver.css({position:'fixed'});
        }
    });
};