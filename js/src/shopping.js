

(function($){
  const shopping_header = $('.shopping_header');
  let shopping_content = shopping_header.find('li').children('a');

  shopping_content.on('click',function(e){
    e.preventDefault();
    $(this).parent('li').siblings().removeClass('act');
    $(this).parent('li').addClass('act');
    
  });

})(jQuery);