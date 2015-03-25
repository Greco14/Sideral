HoverGrid = function(){
	this.settings = {
		holdGrid: $('.gridWrap').find('.holdGrid'),
		timing: 500,
	};
};
HoverGrid.prototype.init = function() {
	var self = this;
	self.bind();
};

HoverGrid.prototype.bind = function() {
	var self = this,
		s = self.settings;
	s.holdGrid.hover(function(){
		var elId = $(this).attr('id');

		if(elId == 'h2-home' || elId == 'h3-home' || elId == 'h5-home' || elId == 'h11-home' || elId == 'h13-home' || elId == 'h14-home' || elId == 'h16-home' || elId == 'h17-home'){
			$('#'+elId+'-hover> .inerImg').css({width:'100%', height:'100%', top: 0, left: 0});
			$('#'+elId+'-hover').stop().animate({opacity:1}, s.timing, 'easeInOutQuad');
			
			return false;
		}

		$('#'+elId+'-hover').stop().animate({opacity:1}, s.timing, 'easeInOutQuad');
		$('#'+elId+'-hover> .inerImg').stop().animate({width:'100%', height:'100%', top: 0, left: 0}, s.timing, 'easeInOutQuad');

	},function(){
		var elId = $(this).attr('id');
		if(elId == 'h2-home' || elId == 'h3-home' || elId == 'h5-home' || elId == 'h11-home' || elId == 'h13-home' || elId == 'h14-home' || elId == 'h16-home' || elId == 'h17-home'){
			$('#'+elId+'-hover> .inerImg').css({width:'100%', height:'100%', top: 0, left: 0});
			$('#'+elId+'-hover').stop().animate({opacity:0}, s.timing, 'easeInOutQuad');
			return false;
		}
		$('#'+elId+'-hover').stop().animate({opacity:0}, s.timing, 'easeInOutQuad');
		$('#'+elId+'-hover> .inerImg').stop().animate({width:'110%', height:'110%', top: '-5%', left: '-5%'}, s.timing, 'easeInOutQuad');

	});
};