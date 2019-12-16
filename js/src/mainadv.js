(function($){
	const videoPop = $('.videopop'),
				smallVideo = $('.smallvideo'),
				videoBtn = smallVideo.find('button'),
				videoNum = smallVideo.find('.videonum'),
				video = $('.video'),
				closeBtn = $('.closebtn');


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
			  	videoPop.fadeOut(function(){
			  		clearInterval(go);
			  		n=3;
			  	});
			  }
			},1000);
	}


	smallVideo.on('mouseenter',function(){
		videoBtn.fadeOut(10,function(){
			videoNum.show();
			videoNum.css({display:'block'})
		});
		setInt();

	});

	smallVideo.on('mouseleave',function(){
		videoNum.fadeOut(10,function(){videoBtn.show();});
	});

	closeBtn.on('click',function(){
		video.fadeOut();
		// n=3;
	});


})(jQuery);