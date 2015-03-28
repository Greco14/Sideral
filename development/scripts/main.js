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

	$.ajax({
	  url: "scripts/config/galleries.json",
	  type: 'GET',
	}).done(function(data) {
		var gallery = data.galleries[0];
	  console.log(gallery.id);
	});	
});