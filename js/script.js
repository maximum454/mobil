$(function(){

	$(".bx-slider").bxSlider({
		auto:1,
		pager:0,
		controls:1
	});

	$('.popap_box').click(function() {
		$('#modalbox_' + $(this).data('body')).arcticmodal();
	});
})