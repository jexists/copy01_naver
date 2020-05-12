

(function($){
  const catg_header = $('.categlist');
  let catg_content = catg_header.find('li').children('a');

  catg_content.on('click',function(e){
    e.preventDefault();
    $(this).parent('li').siblings().find('a').removeClass('act');
    $(this).addClass('act');
    
  });

})(jQuery);