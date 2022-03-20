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

$(window).scroll(function (){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });
function fadeAnime(){
// fadeUp
$('.fade-in-up').each(function(){ 
	var elemPos = $(this).offset().top-50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fade-in');
	$(this).removeClass('fade-in');
	}
}); 
// fadeDown
$('.fade-in-down').each(function(){ 
	var elemPos = $(this).offset().top-50;
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fade-in');
	}else{
	$(this).removeClass('fade-in');
	}
}); 

// fadeRight
  $('.fade-in-right').each(function(){
    var elemPos = $(this).offset().top-50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fade-in');
    }else{
    $(this).removeClass('fade-in');
    }
});
// fadeLeft
$('.fade-in-left').each(function(){
  var elemPos = $(this).offset().top-50;//要素より、50px上の
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  if (scroll >= elemPos - windowHeight){
  $(this).addClass('fade-in');
  }else{
  $(this).removeClass('fade-in');
  }
});
}
