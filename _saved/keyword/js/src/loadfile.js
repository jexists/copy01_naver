

(function($){
	const body = $('body');
	const wrap = $('#wrap');

	const keywordPopup = $('.keypopup');


	const JsLink = (temp) => {
		return body.append(`<script src="../js/src/temp/${temp}.js"></script>`);
	};

	keywordPopup.load('./temp/keypopup.html',function(){
		JsLink('keypopup')
	});


})(jQuery);