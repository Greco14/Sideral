Main = {
	init: function(params) {

        hoverGrid = new HoverGrid();
        hoverGrid.init();
        nav = new Nav();
        nav.init();
        cover = new Cover();
        cover.init();
    },
};
$(function(){
	Main.init();	
});