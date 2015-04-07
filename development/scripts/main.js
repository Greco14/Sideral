Main = {
	init: function(params) {

        hoverGrid = new HoverGrid();
        hoverGrid.init();
        nav = new Nav();
        nav.init();
        galleryLoad = new GalleryLoad();
        galleryLoad.init();
        // cover = new Cover();
        // cover.init();
    },
};
$(function(){
	Main.init();

});