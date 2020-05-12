(function($){
  const newsimage = $('.newsimage');
  let newsLink = newsimage.children('li').children('a');
  let subscribe = $('.subscribe');
  let toread = $('.toread');

  newsLink.on('click',function(e){
    e.preventDefault();
  })
  subscribe.on('mouseenter',function(){
    $(this).css({'font-weight':'bold'});
  });
  toread.on('mouseenter',function(){
    $(this).css({'font-weight':'bold'});
  });
  subscribe.on('mouseleave',function(){
    $(this).css({'font-weight':'normal'});
  });
  toread.on('mouseleave',function(){
    $(this).css({'font-weight':'normal'});
  });
})(jQuery);