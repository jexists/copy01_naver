(function(){
	const nowWord = ["유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬"];

	const keyword = $('.keyword');
	const keyPopup = $('.keypopup');
	const popBox = $('.oneto20');
	const popLi = popBox.children('li');
	const popDtLink = popLi.find('dt').children('a');
	const popDd = popLi.find('li').children('a');

	const keywordOl = keyword.children('ol');
	const keywordLi = keywordOl.children('li');
	const keytext = keywordLi.find('p');

	for(let i=0; i<nowWord.length ;i++){
		keywordLi.eq(i).children('p').text(nowWord[i]);
		popLi.find('dd').find('a').eq(i).text(nowWord[i]);
	}
	const liClone = keywordLi.eq(-1).clone();
	liClone.prependTo(keywordOl)



	let thisLi =0;
	const ThisCount = function(i){
		thisLi=i;
		popLi.find('dt').removeClass('action');
		popLi.eq(thisLi).find('dt').addClass('action');
		popLi.find('dd').hide(0);
		popLi.eq(thisLi).find('dd').show(0); 
	};

	popDtLink.on('click',function(){
		/*popLi.find('dt').removeClass('action');
		$(this).parent().addClass('action');
		popLi.find('dd').hide();
		popLi.eq(thisLi).find('dd').show();
		*/
		thisLi = $(this).parents('li').index();
		ThisCount(thisLi);
	});

	let timed = 4000;
	let k=0;
	let key;
	// keywordOl.css({transform:'translateY(-49px)'});
	const GoKey = function(){
		key = setInterval(function(){

		popLi.find('dd').find('a').css({fontWeight:'normal',color:'#333'});
		popDd.eq(k+1).css({fontWeight:'bold',color:'#00f'});
		k++;
		keywordOl.animate({top: -49 * (k+1) + 'px'},timed/4,  function(){
			if(k<10){ 
				ThisCount(0);
			}else if(k<20){
				ThisCount(1);
			}else if(k>=19){
				k=0;
				keywordOl.css({top:-49 +'px'});
				ThisCount(0);
				//StopKey();
				//Gokey();
			}
		});
		//console.log(k);

	},timed);
	};
	const StopKey = function(){
		clearInterval(key);
	};
	GoKey();


	keyword.on('mouseenter',function(){
		keyPopup.stop().fadeIn();
		StopKey();
	});
	keyPopup.on('mouseleave',function(){
		$(this).stop().fadeOut();
		GoKey();
	});
})(jQuery);
