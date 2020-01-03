	let n=0;
(function($){
	const nowWord = ["유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬","네이버","유재석","유산슬"];

	const keyword = $('.keyword');
	const keywordOl = keyword.children('ol');
	const keywordLi = keywordOl.children('li');
	const keytext = keywordLi.find('p');

	for(let i=0; i<nowWord.length ;i++){
		keywordLi.eq(i).children('p').text(nowWord[i]);
	}
	const liClone = keywordLi.eq(-1).clone();
	liClone.prependTo(keywordOl)

	// console.log(nowWord.length);

	let timed = 4000;

	setInterval(function(){
		n++;
		keywordOl.animate({top: -49 * n + 'px'},timed/4,  function(){
			if(n>=20){n=0; keywordOl.css({top:0})}
		})
	},timed);

})(jQuery);