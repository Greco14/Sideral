GalleryLoad = function(){
	this.settings = {
    wrapGrid: $('.wrapGrid')
	};

};
GalleryLoad.prototype.init = function(){
	var self = this;
	self.bind();
};

GalleryLoad.prototype.bind = function(){
	var self = this,
		s = self.settings;
	self.loading();
};

GalleryLoad.prototype.loading = function(){
	var self = this,
		s = self.settings;

	$.address.init(function(event) {
        //console.log('init: "' + event.value + '"');
        history_init = event.value;
        /*$('a').address(function() {
            return $(this).attr('href').replace(location.pathname, '');
        });*/
    }).change(function(event) {
       // console.log('change: "' + event.value + '"');
       /*if(loadingIt)
        {
          return false;
        }*/
        var roota = event.value;
        switch(event.value)
        {
          case roota:
          		var gall = roota.split('_');
                self.callingAjax(gall[1]);
          break;
        }
        var text = (event.value == '') ? 'Home' :
            event.pathNames[0].substr(0, 1).toUpperCase() + 
            event.pathNames[0].substr(1);

    }).internalChange(function(event) {
        //console.log('internalChange: "' + event.value + '"');
    }).bind('externalChange', {msg: 'The value of the event is "{value}".'}, function(event) {
        //console.log('externalChange: ' + event.data.msg.replace(/\{value\}/, event.value));
    });
};
GalleryLoad.prototype.callingAjax = function(galleryId){
	var self = this,
		s = self.settings;
	console.log(galleryId);
  var id = galleryId-1;
	$.ajax({
		url: "scripts/config/galleries.json",
		type: 'GET',
	}).done(function(data) {
		var gallery = data.galleries[id];
		console.log(gallery.gallery);
    var gal = gallery.gallery;
    s.wrapGrid.html(' ');
     $.each(gal, function(index, data){

      if(gal.id == 1 || gal.id == 2 || gal.id == 6){
        console.log('this are dobles '+gal.id);
      }
      if(gal.id == 3 && gal.id == 4 ){
        console.log('this are singles In '+gal.id);
      }
      
      
     });
     // $.map(gal, function(num){
     //    console.log(num.id);
     //  });
	});	
};




