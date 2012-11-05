// JavaScript Document

mw.module.shop = {
  add_to_cart : function(data){
     $.post(mw.settings.api_url+'update_cart', data ,
     function(data) {
        
     });
  },

  save_title : function(id,title){

  	 var data = {};
	 data.id = id;
	 data.title = title;



     $.post(mw.settings.api_url+'save_media', data ,
     function(data) {
         
     });
  },

  del: function($id){
   if(confirm('Are you sure you want to delete this image?')){
     $.post(mw.settings.api_url+'delete_media', { id: $id  }, function(data) {
        mw.reload_module('pictures');
     });
   }
  },
  init:function(selector){
    var el = mw.$(selector);
    el.sortable({
        update: function(){
          var serial = el.sortable('serialize');
          $.ajax({
            url: mw.settings.api_url+'reorder_media',
            type:"post",
            data:serial
          })
        }
    });
  }
}






