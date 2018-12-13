define(['config'], function () {
	//--引入jquery

	require(['jquery', 'jqcookie'], function () {
		function searchAnim() {
			$('.search').on('click', function () {
				$('.searTop').css({
					display: 'block',
					width: 490,
					left: 600,
					opacity: 0
				});
				$('.searBtm').css({
					display: 'block',
					opacity: 0
				});
				$('.searBtm>li>span').css({
					left: 200,
					opacity: 0
				});
				$('.nav').fadeOut(100);
				$('.searTop').animate({
					left: 200,
					width: 890,
					opacity: 1
				}, 300, function () {
					$('.inpsearch').css('width', '860');
					$('.closeSearch').css('left', '1000');
					$('.closeSearch').animate({
						left: 900
					}, 300);
				});
				$('.searBtm').animate({
					opacity: 1
				}, 100, function () {
					$.each($.makeArray($('.searBtm>li')), function (i, val) {
						setTimeout(function () {
							$(val).children('span').animate({
								left: 25,
								opacity: 1
							}, 300);
						}, i * 100);
					})
				})
			});
			$(document).on('click', function (ev) {
				var ele = ev.target || ev.srcElement;
				if (ele.className === '' || ele.className === 'closeSearch') {
					$('.nav').fadeIn(100);
					$('.searTop').fadeOut(100);
					$('.searBtm').fadeOut(100);
				}

			});
		}
		$('.header').load('./top.html', function () {
			$('.tcar').on('click', function () {
				location.href = './cart.html';
			});
			if($('.pay_count').length!=0){
				setTimeout(function () {
					$('.tcar').html('<a class="iconfont">&#xe63a;</a>购物车(' + $('.pay_count').html() + ')');
				}, 100);
			}
			
			if ($.cookie('allgoods')) {
				$('.tcar').html('<a class="iconfont">&#xe63a;</a>购物车(' + $.cookie('allgoods') + ')');
			}
			if ($.cookie('usm')) {
				$('.log_right>.login').html($.cookie('usm'));
				$('.log_right>.regist').html('退出');
				$('.log_right>.regist').on('click', function () {
					$.cookie('usm', '');
					location.reload(true);
				});
			}
			//顶部搜索框效果
			searchAnim();

		}); //载入头部
		$('.footer').load('./bottom.html'); //载入底部
		$('.log_header').load('./top.html', function () {
			$('.log_header>.logo').addClass('relive');
			searchAnim();
		});
		//楼梯效果
		(function ($) {
			//左边楼梯
			if ($('.ban_con').length !== 0) {
				conleft = $('.ban_con');
				$('.upstairs').css('left', conleft.offset().left - 80);
			}
			var $upstairs = $('.upstairs>ul>li'),
				$loucheng = $('.tel_con');
			if ($upstairs.length > 0) {
				//窗口尺寸监听
				$(window).resize(function () {
					$('.right_fix').animate({
						top: $(window).height() * 3 / 5
					}, 20);
				});
				$('.right_fix').css('top', $(window).height() * 3 / 5);
				//滚轮滚动效果
				$(window).scroll(function () {
					if ($(window).scrollTop() > $loucheng.eq(0).offset().top - 50) {
						$('.upstairs').show();
						$('.right_fix').css('top', $(window).height() * 3 / 5 - 42)
						$('.itemdong').fadeIn(500); //右边飞机效果

					} else {
						$('.upstairs').hide();
						$('.right_fix').css('top', $(window).height() * 3 / 5 + 42)
						$('.itemdong').fadeOut(500);
					}

					$.each($.makeArray($loucheng), function (i, val) {
						if (i === 0) {
							if ($(val).offset().top + 300 > $(window).scrollTop()) {
								$upstairs.eq(i).addClass('active').siblings().removeClass('active');
								return false;
							}
						} else if (i === 1 || i === 2) {
							if ($(val).offset().top + 1100 > $(window).scrollTop()) {
								$upstairs.eq(i).addClass('active').siblings().removeClass('active');
								return false;
							}
						} else {
							if ($(val).offset().top + 600 > $(window).scrollTop()) {
								$upstairs.eq(i).addClass('active').siblings().removeClass('active');
								return false;
							}
						}

					})
				});
				//点击楼层效果
				$upstairs.on('click', function () {
					if ($(this).index() === 0) {
						var $top = $loucheng.eq($(this).index()).offset().top - 50;
					} else {
						var $top = $loucheng.eq($(this).index()).offset().top;
					}
					$('html,body').stop(true, true).animate({
						scrollTop: $top
					});
					$(this).addClass('active').siblings().removeClass('active');
				});
				//回道顶部
				$('.itemdong').on('click', function () {
					$('html,body').stop(true, true).animate({
						scrollTop: 0
					});
				});

			}
			//右边固定定位鼠标划入效果
			$('.right_fix>.item').on('mouseenter', function () {
				$(this).children("i").slideUp(1)
				$(this).css('background', 'red');
				$(this).children("span").css({
					lineHeight: '40px',
					display: 'block'
				})
				$(this).children("span").stop(true, true).animate({
					lineHeight: 15
				}, 300);
			});
			$('.right_fix>.item').on('mouseleave', function () {
				$(this).css('background', '#fff');
				$(this).children("i").css({
					top: 42,
					display: 'block'
				});
				$(this).children("i").stop(true, true).animate({
					top: 5,
				}, 100);
				$(this).children("span").css({
					display: 'none'
				})
			});
			$('.toCart').on('click', function () {
				location.href = 'cart.html';
			})
		})(jQuery);
		//明星产品栏点击滑动效果
		(function ($) {
			$('.star_btn_left').on('click', function () {
				$('.star_show').stop(true).animate({
					left: 0
				});
			})
			$('.star_btn_right').on('click', function () {
				$('.star_show').stop(true).animate({
					left: -1140
				});
				window.getSelection && window.getSelection().removeAllRanges() || document.selection.empty();
			})
		})(jQuery);
		//滚轮改定位
		(function ($) {
			$(window).scroll(function (ev) {
				if ($(window).scrollTop() > $('.log').outerHeight() * 2) {
					$('.logo_con').css({
						position: 'fixed',
						top: 0,
						right: 0,
						left: 0,
						margin: '0 auto'
					})
				} else {
					$('.logo_con').css({
						position: 'relative'
					});
				}
			});
		})(jQuery);


	});

});