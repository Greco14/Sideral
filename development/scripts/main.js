Main = {
	init: function(params) {

        hoverGrid = new HoverGrid();
        hoverGrid.init();
        nav = new Nav();
        nav.init();
    },
};
$(function(){
	Main.init();
	
});