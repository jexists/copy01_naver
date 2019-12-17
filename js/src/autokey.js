(function(){
 const autoKey = $('.autokey').find('button'),
 	   keyBoard = $('.keyboard').find('button');


 autoKey.on('click',function(){
 	$(this).parent().toggleClass('action');
 });
 keyBoard.on('click',function(){
 	$(this).toggleClass('action')
 });

})(jQuery);