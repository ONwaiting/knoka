define(['config'], function () {
    //--引入jquery

    require(['jquery'], function () {
        //放大镜
        big();

        function big() {
            $('.box').on('mouseenter', function () {
                $('.lit_img').fadeOut(100);
                var bigUrl = $('.lit_img').attr('src');
                $(this).append('<div class="img_big"><img src="' + bigUrl + '" /></div>');
                $('.img_big').fadeIn(100);
                $(document).on('mousemove', function (e) {
                    var viewWidth = $('.box').width(),
                        viewHeight = $('.box').height(),
                        largeWidth = $('.img_big').width(),
                        largeHeight = $('.img_big').height(),
                        parentOffset = $('.img_big').offset(),
                        relativeXPosition = (e.pageX - parentOffset.left),
                        relativeYPosition = (e.pageY - parentOffset.top),
                        moveX = Math.floor((relativeXPosition * (viewWidth - largeWidth) / viewWidth) * 0.55),
                        moveY = Math.floor((relativeYPosition * (viewHeight - largeHeight) / viewHeight) * 0.55);
                    $('.img_big').css({
                        left: moveX,
                        top: moveY
                    })
                });
            });
            $('.box').on('mouseleave', function () {
                $('.lit_img').fadeIn(100);
                $('.img_big').fadeOut(100);
                $(document).off('mousemove'); //移除事件
            });
            $('.left_det_show>ul>li').on('mouseenter', function () {
                var leftUrl = $(this).children('img').attr('src');
                $('.box>.lit_img').attr('src', leftUrl);
                $(this).addClass('active').siblings().removeClass('active');
            });
            //左边缩略图菜单栏按钮点击效果
            $('.jup').on('click', function () {
                if ($('.left_det_show>ul>li').length > 5) {
                    $('.left_det_show>ul').stop(true).animate({
                        top: -410
                    })
                }
            });
            $('.jdown').on('click', function () {
                $('.left_det_show>ul').stop(true).animate({
                    top: -0
                })
            });
            //右边数量按钮组
            $(document).on('click', '.count>.btn>.add', function () {
                add($(this));
            });
            $('.btn>.add2').on('click', function () {
                add($(this));
            });
            $(document).on('click', '.count>.btn>.jian', function () {
                jian($(this));
            });
            $('.btn>.jian2').on('click', function () {
                jian($(this));
            });
            function add(obj) {
                var counts;
                if (Number(obj.siblings('.result').val()) < 99) {
                    counts = Number(obj.siblings('.result').val()) + 1;
                } else {
                    counts = 99;
                }
                obj.siblings('.result').val(counts);
            }
            function jian(obj){
                var counts;
                if (Number(obj.siblings('.result').val()) > 1) {
                    counts = Number(obj.siblings('.result').val()) - 1;
                } else {
                    counts = 1;
                }
                obj.siblings('.result').val(counts);
            }
           
            $(document).on('input', '.btn>.result', function () {
                var reg = /^\d+$/g; //只能输入数字
                var value = parseInt($(this).val());
                if (reg.test(value)) {
                    if (value >= 99) { //限定范围
                        $(this).val(99);
                    } else if (value <= 0) {
                        $(this).val(1);
                    } else {
                        $(this).val(value);
                    }
                } else {
                    $(this).val(1);
                }
            })
        }
        //动态数据处理
        (function ($) {
            var url = 'http://10.31.155.56/project/project/konka/php/';
            var gid = location.search.slice(1).split('=')[1];
            var arrgid = [];
            var arrnum = [];
            $('.del_right').on('click', '.addcar', function () {
                location.reload(true);
                cookietoarray();
            });

            function cookietoarray() {
                if ($.cookie('cookiegid') && $.cookie('cookienum')) {
                    arrgid = $.cookie('cookiegid').split(','); //cookie商品的sid  
                    arrnum = $.cookie('cookienum').split(','); //cookie商品的num
                }
                if ($.inArray(gid, arrgid) != -1) { //商品存在，数量叠加 
                    var num = parseInt(arrnum[$.inArray(gid, arrgid)]) + parseInt($('.del_right>.btn>.result').val());
                    arrnum[$.inArray(gid, arrgid)] = num;
                    $.cookie('cookienum', arrnum.toString(), {
                        expires: 7
                    }); //数组存入cookie

                } else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
                    arrgid.push(gid); //将当前的id存入数组
                    $.cookie('cookiegid', arrgid.toString(), {
                        expires: 7
                    }); //数组存入cookie
                    arrnum.push($('.del_right>.btn>.result').val());
                    $.cookie('cookienum', arrnum.toString(), {
                        expires: 7
                    }); //数组存入cookie
                }

            }
            if (gid) {
                $.ajax({
                    url: url + 'details.php',
                    dataType: 'json',
                    data: 'gid=' + gid,
                    success: function (msg) {
                        var msg = msg[0];
                        //details左边
                        var imgData = msg.urls.split(';');
                        var str_l = '';
                        $.each(imgData, function (i, val) {
                            if (i === 0) {
                                str_l += '<li class="active"><img src="' + val + '" alt=""></li>';
                            } else {
                                str_l += '<li><img src="' + val + '" alt=""></li>';
                            }
                        });
                        $('.left_det_show>ul').html(str_l);

                        //details中间
                        var str_m = ' <div class="box">' +
                            '<img src="' + imgData[0] + '" alt="" class="lit_img">' +
                            '</div>';
                        $('.del_mid').html(str_m);
                        //details右边
                        var str_r = '<h3 class="del_title">' + msg.g_title + ' </h3>' +
                            '<div>' + msg.g_disc + '</div>' +
                            '<p class="del_price">' +
                            '<strong>￥' + msg.g_price + '.00</strong>' +
                            '<span style="text-decoration:line-through;color:#b0b0b0;">￥4099.00</span>' +
                            '</p>' +
                            '<pre>配送至: 江苏省 盐城市 亭湖区 新洋街道</pre>' +
                            '<strong>数量</strong>' +
                            '<div class="btn">' +
                            '<button class="jian2">-</button><input type="text" class="result" value="1"><button class="add2">+</button>' +
                            '</div>' +
                            '<div class="endbtn">' +
                            '<button class="now">立即购买</button>' +
                            '<button class="addcar">加入购物车</button>' +
                            '</div>';
                        $('.del_right').html(str_r);
                        big();
                    }
                })
            }

        })(jQuery);
    });

});