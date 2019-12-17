(function($){
	const videoPop = $('.videopop'),
				smallVideo = $('.smallvideo'),
				videoBtn = smallVideo.find('button'),
				videoNum = smallVideo.find('.videonum'),
				video = $('.video'),
				closeBtn = $('.closebtn'),
				loading = $('.loading');


	const text = setInterval(function(){
		videoPop.find('p').toggle();
	},1500);

	setTimeout(function(){
		videoPop.hide()
		clearInterval(text);
	},8000);

	let n=3;
	let go;
	const setInt = function(){
		go = setInterval(function(){
			n--;
			videoNum.text(n);
			if(n==0){
			  	video.stop().fadeIn();
			  	loading.stop().fadeOut();
			  	videoPop.fadeOut(function(){
			  		clearInterval(go);
			  	});
			  }
			},1000);
	}


	smallVideo.on('mouseenter',function(){
		$(this).addClass('action');
		videoBtn.stop().fadeOut(10,function(){
			videoNum.show();
			loading.show();
			videoNum.css({display:'block'})
		});
		setInt();
	});

	smallVideo.on('mouseleave',function(){
		$(this).removeClass('action');
		videoNum.fadeOut(10,function(){videoBtn.show();});
			clearInterval(go);
			loading.stop().fadeOut();
			n=3;
			videoNum.text(n);
	});

	closeBtn.on('click',function(){
		video.fadeOut();
	});


})(jQuery);