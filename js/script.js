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
    fadeUpAnime();/* アニメーション用の関数を呼ぶ*/
  });
function fadeUpAnime(){
// fadeUp
$('.fade').each(function(){ //fadeUpTriggerというクラス名が
	var elemPos = $(this).offset().top-50;//要素より、50px上の
	var scroll = $(window).scrollTop();
	var windowHeight = $(window).height();
	if (scroll >= elemPos - windowHeight){
	$(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
	}else{
	$(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
	}
}); $(window).scroll(function (){
    fadeLeftAnime();/* アニメーション用の関数を呼ぶ*/
  });
}

function fadeLeftAnime(){
// fadeLeft
$('.fade').each(function(){ //fadeLeftTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
    }else{
    $(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
    }
});
};

$(window).scroll(function (){
    fadeRightAnime();/* アニメーション用の関数を呼ぶ*/
  });
function fadeRightAnime(){	
// fadeRight
  $('.fade').each(function(){ //fadeRightTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
    }else{
    $(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
    }
});
}
