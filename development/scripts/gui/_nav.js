Nav = function(){
	this.settings={
		gridTop : $('.gridWrap'),
		naver : $('#topNav'),
		openMenu: $('#openMenu'),
		navMobile: $('#navMobile'),
		hold: $('#navMobile').find('.hold'),
	};
	this.tlOpenMenu = new TimelineLite();
};
Nav.prototype.init = function(){
	var self = this;
	self.bind();
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

    TweenMax.set(s.navMobile, {autoAlpha:0});
    TweenMax.set(s.hold, {right:'-100%'});



    s.openMenu.on('click', function(){
    	s.navMobile.css('display','block');
    	self.tlOpenMenu.to(s.navMobile, 0.5, {
    		autoAlpha: 1,
    		ease: Cubic.easeOut,
    		onComplete: function(){
    			self.tlOpenMenu.to(s.hold,0.75,{
    				right: 0,
    				ease: Circ.easeOut
    			});
    		}
    	});
    });

    $('#navMobile > .hold > a').on('click',function(){
    	self.tlOpenMenu.to(s.hold,0.5,{
    				right: '-100%',
    				ease: Circ.easeOut,
    				onComplete: function(){
    					self.tlOpenMenu.to(s.navMobile, 0.5, {
				    		autoAlpha: 0,
							ease: Cubic.easeOut,
							onComplete: function(){
								s.navMobile.css('display','none');
							}
						});
    				}
    			});
    });


};








