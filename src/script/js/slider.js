define(['config'], function () {
    //--引入jquery

    require(['jquery'], function () {

        var timer = null, //定时器
            that = this,
            index = 0, //图片位置
            elms = {}, //存储元素
            init = null, //初始化函数
            dotClass = null, //添加圆点函数
            auto = null, //自动轮播
            options = {
                counts: 4, //图片张数
                speeds: 500, //运动速度
                delay: 35000 //展示时间
            };
        // options = $.extend(defaults, options);//初始化
        if ($('.ban_con').length !== 0) {
            elms.change_con = $('.ban_con');
            slider();
        } 
        function slider() {
            init = function () {
                elms.imgs = $('.imgs>li'); //图片
                elms.dots = $('.dot>li'); //圆点
                elms.left = $('.show>.leftBtn'); //左键
                elms.right = $('.show>.rightBtn'); //右键
                elms.show = $('.show'); //展示区
                elms.imgs.css('left', elms.imgs.outerWidth()); //初始化图片位置
                elms.imgs.eq(0).css('left', 0); ////初始化图片位置
                elms.show.css('width', $(window).width());
                elms.rigDis = elms.change_con.outerWidth() + elms.change_con.offset().left + 20; //右键偏移位置
                elms.show.hover(function () {
                    clearInterval(timer); //清除定时器
                    elms.left.stop(true).animate({
                        left: ($(window).width() - elms.change_con.width()) / 2 - elms.left.width() - 10
                    }, options.speeds);
                    elms.right.stop(true).animate({
                        left: elms.rigDis
                    }, options.speeds);
                }, function () {
                    auto(); //开启定时器
                    elms.left.stop(true).animate({
                        left: -60
                    }, options.speeds);
                    elms.right.stop(true).animate({
                        left: elms.rigDis + 220
                    }, options.speeds);
                });
            }
            init();
            dotClass = function () {
                elms.dots.eq(index).addClass('active').siblings('li').removeClass('active');
            }
            //圆点点击事件
            elms.dots.on('click', function () {
                if ($(this).index() > index) { //判定圆点位置来决定移动方向
                    elms.imgs.eq(index).stop(true).animate({
                        left: elms.imgs.outerWidth()
                    });
                    index = $(this).index(); //更新索引
                    elms.imgs.eq(index).css('left', -elms.imgs.outerWidth()); //移动前图片就位
                    elms.imgs.eq(index).stop(true).animate({
                        left: 0
                    });
                } else if ($(this).index() < index) {
                    elms.imgs.eq(index).stop(true).animate({
                        left: -elms.imgs.outerWidth()
                    });
                    index = $(this).index();
                    elms.imgs.eq(index).css('left', elms.imgs.outerWidth());
                    elms.imgs.eq(index).stop(true).animate({
                        left: 0
                    });
                }
                dotClass();
            });
            //左键点击事件
            elms.left.on('click', function () {
                elms.imgs.eq(index).stop(true).animate({
                    left: -elms.imgs.outerWidth()
                });
                index++;
                if (index === options.counts) {
                    index = 0;
                }

                elms.imgs.eq(index).css('left', elms.imgs.outerWidth());
                elms.imgs.eq(index).stop(true).animate({
                    left: 0
                });
                dotClass();
            });
            //右键点击事件
            elms.right.on('click', function () {
                elms.imgs.eq(index).stop(true).animate({
                    left: elms.imgs.outerWidth()
                });
                index--;
                if (index === -1) {
                    index = options.counts - 1;
                }
                elms.imgs.eq(index).css('left', -elms.imgs.outerWidth());
                elms.imgs.eq(index).stop(true).animate({
                    left: 0
                });
                dotClass();
            });
            auto = function () {
                timer = setInterval(function () {
                    elms.left.click(); //自动执行左键点击
                }, 2000);
            }
            auto();
        }

    });

});