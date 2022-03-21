// 下部スクロールでGナビ固定
$(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

function FixedAnime() {
	var headerH = $('.header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
			$('.header').addClass('fixed');//fixedというクラス名を付与
		}else{//それ以外は
			$('.header').removeClass('fixed');//fixedというクラス名を除去
		}
}
// toggle-btn
$(".toggle-btn").click(function(){
	$(this).toggleClass('open');
	$(".menu").toggleClass("open");
});
$(".menu a").click(function() {
	$(".toggle-btn").removeClass('open');
	$(".menu").removeClass('open');

});

$(window).scroll(function () {
	fadeAnime();/* 関数を呼ぶ*/
});
function fadeAnime(){
// fadeUp
$('.fade-in-up').each(function(){ 
	var elemPos = $(this).offset().top-50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeUp');
	}else{
	$(this).removeClass('fadeUp');
	}
});  
// fadeDown
$('.fade-in-down').each(function(){ 
	var elemPos = $(this).offset().top-50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeDown');
	}else{
	$(this).removeClass('fadeDown');
	}
}); 

// fadeRight
$('.fade-in-left').each(function(){ 
	var elemPos = $(this).offset().top-50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeLeft');
	}else{
	$(this).removeClass('fadeLeft');
	}
}); 
// fadeLeft
$('.fade-in-right').each(function(){
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fadeRight');
  }else{
  $(this).removeClass('fadeRight');
  }
});
}
// 
$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  variableWidth:true,
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
});
