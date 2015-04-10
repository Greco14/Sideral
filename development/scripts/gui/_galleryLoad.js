GalleryLoad = function(){
	this.settings = {
    wrapGrid: $('.wrapGrid'),
    infoGal: $('.section-half'),
    mainInfo: $('.fistHalf'),
    sndInfo: $('.secondHalf'),
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
	
  var id = galleryId-1;
	$.ajax({
		url: "scripts/config/galleries.json",
		type: 'GET',
	}).done(function(data) {

		var gallery = data.galleries[id];
    var gal = gallery.gallery;
    var title = gallery.title;
    var client = gallery.client;
    var category = gallery.category;
    var description = gallery.description;
    var autor = gallery.autor;
    var aut = autor.split('/');


    s.wrapGrid.html(' ');
    s.infoGal.html(' ');

    var titulo = '<div class="titles"><span>'+title+'</span><br>'+client+'</div>';
    var categoria = '<div class="category">'+category+'</div>';
    var descripcion = '<div class="description">'+description+'</div>';
    var autord = '<div class="autors"><span>'+aut[0]+'</span>/<span>'+aut[1]+'</span></div>';


    s.mainInfo.append(titulo+categoria);
    s.sndInfo.append(descripcion+autord);



     $.each(gal, function(index, data){
      var type = data.type;
      var color = data.color;
      var items = [];
      var fill;

      if(type == 'single'){
        // console.log('singles: '+ data.id +' '+data.location);
        fill = '<div id="h'+data.id +'-home" class="singleHold holdGrid" >'+
            '<div class="front" style="background-color:'+color+'">'+
              '<div style="background-image:url('+data.location+')" class="fInerImg"></div>'+
            '</div>'+
          '</div>';
          items.push(fill);
      }
      if(type == 'doble'){
        // console.log('singles: '+ data.id +' '+data.location);
        fill = '<div id="h'+data.id +'-home" class="dobleHold holdGrid">'+
            '<div class="front" style="background-color:'+color+'">'+
              '<div style="background-image:url('+data.location+')" class="fInerImg"></div>'+
            '</div>'+
          '</div>';
          items.push(fill);
        
      }
      if(type == 'full'){
        // console.log('singles: '+ data.id +' '+data.location);
        fill = '<div id="h'+data.id +'-home" class="fullHold holdGrid">'+
            '<div class="front" style="background-color:'+color+'">'+
              '<div style="background-image:url('+data.location+')" class="fInerImg"></div>'+
            '</div>'+
          '</div>';
          items.push(fill);
        
      }
      if(type == 'complex'){
        // console.log('singles: '+ data.id +' '+data.inerImages[0].location+' '+data.inerImages[1].location);
        fill = '<div class="singleHolder">'+
                  '<div id="h'+data.inerImages[0].id +'-home" class="singleHolds holdGrid" ">'+
                    '<div class="front" style="background-color:'+color+'">'+
                      '<div style="background-image:url('+data.inerImages[0].location+')" class="fInerImg"></div>'+
                    '</div>'+
                  '</div>'+
                  '<div id="h'+data.inerImages[1].id +'-home" class="singleHolds holdGrid" >'+
                    '<div class="front" style="background-color:'+color+'">'+
                      '<div style="background-image:url('+data.inerImages[1].location+')" class="fInerImg"></div>'+
                    '</div>'+
                  '</div>'+
          '</div>';
          items.push(fill);
      }

      s.wrapGrid.append(items);
      
      
     });
     
	});	
};
GalleryLoad.prototype.filler = function(){

};




