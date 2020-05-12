

(function($){
	const body = $('body');
	const wrap = $('#wrap');

	const keywordPopup = $('.keypopup');
	const catnews = $('.catnews');

	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
	};

	keywordPopup.load('./temp/keypopup.html',function(){
		JsLink('date');
		JsLink('keypopup');
	});

	catnews.load('./temp/catnews.html',function(){
		JsLink('newsimage');
	});

})(jQuery);