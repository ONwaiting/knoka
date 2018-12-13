define(['config'], function () {
    //--引入jquery

    require(['jquery', 'jqcookie'], function () {
        function CartStatic() {

        }
        CartStatic.prototype = {
            constructor: CartStatic,
            init: function () {
                var that = this;
                this.getPrice(); //计算总价格
                //加号点击
                $(document).on('click', '.count>.btn>.add', function () {
                    that.update($(this));
                    that.getLPrice($(this));
                });
                //减号点击
                $(document).on('click', '.count>.btn>.jian', function () {
                    that.update($(this));
                    that.getLPrice($(this));
                });
                //输入框
                $(document).on('input', '.btn>.result', function () {
                    that.update($(this), 1);
                    that.getLPrice($(this), 1);
                })
                //单选框
                $('.choose').not('.all').on('click', function () {
                    that.oneClick($(this));
                    that.getPrice();
                });
                $('.all').click(function () {
                    //全选按钮判定
                    if ($(this).prop('checked')) {
                        $('.choose').prop('checked', true);
                        that.getPrice();
                        $('.mid_col').css({
                            background: '#fffeec'
                        });
                    } else {
                        $('.choose').prop('checked', false);
                        that.getPrice();
                        $('.mid_col').css({
                            background: '#fff'
                        });
                    }
                });
            },
            update: function (obj, i) { //加减更新cookie
                if (obj.parent('.btn').data('gid')) {
                    var gid = obj.parent('.btn').data('gid') + '';
                    var goods = $.cookie('cookiegid').split(',');
                    var count = $.cookie('cookienum').split(',');
                    //通过i 参数来判断触发事件的对象是加减按钮还是输入框
                    if (i) {
                        count[$.inArray(gid, goods)] = obj.val();
                    } else {
                        count[$.inArray(gid, goods)] = obj.siblings('.result').val();
                    }

                    $.cookie('cookienum', count.toString(), {
                        expires: 7
                    });
                }
            },
            getPrice: function () { //获取总价格
                var $zongjia = 0.00;
                $.each($.makeArray($('.choose:checked').not('.all')), function (i, val) {
                    $zongjia += parseFloat($(val).parent().siblings('.price_all').html());
                })
                var str = $zongjia.toString();
                str = this.getZero(str);
                $('.pay_price').html(str);
                if (str === '0.00') {
                    $('.pay>button').attr('disabled', 'disabled').css('background', '#ccc');
                } else {
                    $('.pay>button').removeAttr('disabled').css('background', '#7a271c');
                }
                var allcount = 0;
                $.each($.makeArray($('.count>.btn>.result')), function (i, val) {
                    allcount += Number($(val).val());
                });
                // $.cookie('allgoods', 5, {
                //     expires: 7
                // });
                $('.pay_count').html(allcount);
                $.cookie('allgoods',  $('.pay_count').html(), {
                    expires: 7
                });
            },
            getZero: function (str) { //处理零
                if (str.indexOf('.') === -1) {
                    str += '.00';
                } else {
                    var str2 = str.split('.')[1];
                    if (str2.length === 1) {
                        str2 += '0';
                    }
                    str = str.split('.')[0] + '.' + str2;
                }
                return str;
            },
            getLPrice: function (obj, i) { //计算小计价格
                var price = parseFloat(obj.parent().parent().siblings('.price_one').html());
                if (i) {
                    price *= Number(obj.val());
                } else {
                    price *= Number(obj.siblings('.result').val());
                }
                var str = price.toString();
                str = this.getZero(str);
                obj.parent().parent().siblings('.price_all').html(str);
                this.getPrice(); //实时更新总价格
            },
            oneClick: function (obj) { //单次点击事件
                if ($('.choose:not(:checked)').not('.all').length === 0) {
                    $('.all').prop('checked', true);
                } else {
                    $('.all').prop('checked', false);
                }
                //判定ul颜色
                if (obj.prop('checked')) {
                    obj.parent().parent('.mid_col').css({
                        background: '#fffeec'
                    });
                } else {
                    obj.parent().parent('.mid_col').css({
                        background: '#fff'
                    });
                }
            }
        }
        //购物车静态数据处理对象
        new CartStatic().init();
        //购物车动态数据处理
        (function ($) {
            var url = 'http://10.31.155.56/project/project/konka/php/';
            if ($.cookie('cookiegid')) {
                var goods = $.cookie('cookiegid').split(','); //商品cookie
                var count = $.cookie('cookienum').split(','); //数量cookie
                var str = '';
                $.each(goods, function (i, val) {
                    //循环拼接字符串
                    $.ajax({
                        url: url + 'details.php',
                        dataType: 'json',
                        data: 'gid=' + val
                    }).done(function (msg) {
                        var data = msg[0];
                        //字符串拼接
                        str = str + '<ul class="goods_title clearfix mid_col">' +
                            '<li><input type="checkbox" name="" id="" class="choose" checked data-gid="' + data.gid + '"></li>' +
                            '<li class="goods_list">' +
                            '<img src="' + data.f_url + '" alt="">' +
                            '<span class="goods_name">' + data.g_title + '</span>' +
                            '<span class="goods_size">XQG80-10D08W </span>' +
                            '<span class="goods_intro">' + data.g_disc + '</span>' +
                            '</li>' +
                            '<li class="price_one">' + data.g_price + '</li>' +
                            '<li class="count">' +
                            '<div class="btn" data-gid="' + data.gid + '">' +
                            '<button class="jian">-</button><input type="text" class="result" value="' + count[i] + '"><button class="add">+</button>' +
                            '</div>' +
                            '</li>' +
                            '<li class="price_all">' + Number(data.g_price * count[i]).toFixed(2) + '</li>' +
                            '<li class="options"><small data-gid="' + data.gid + '" class="del_goods">删除</small></li>' +
                            '</ul>';
                        $('.change_cart').html(str);
                        new CartStatic().init();
                    });

                });
                //删除单个  ==》自定义属性找id
                $(document).on('click', '.del_goods', function () {
                    if ($.inArray($(this).data('gid') + '', goods) != -1) {
                        count.splice($.inArray($(this).data('gid') + '', goods), 1);
                        goods.splice($.inArray($(this).data('gid') + '', goods), 1);
                        $.cookie('cookienum', count.toString(), {
                            expires: 7
                        });
                        $.cookie('cookiegid', goods.toString(), {
                            expires: 7
                        });
                    }
                    $(this).parent().parent().remove();
                    new CartStatic().init();
                    if (goods.length === 0) {
                        $.cookie('cookienum', count.toString(), {
                            expires: -1
                        });
                        $.cookie('cookiegid', goods.toString(), {
                            expires: -1
                        });
                        $('.change_cart').html('<div style="padding: 50px;">购物车空空如也，快去购物吧！</div>');
                    }

                });
                //删除选中
                $(document).on('click', '.del_all', function () {
                    $.each($.makeArray($('.change_cart>ul>li>.choose:checked')), function (i, val) {
                        if ($.inArray($(val).data('gid') + '', goods) != -1) {
                            count.splice($.inArray($(val).data('gid') + '', goods), 1);
                            goods.splice($.inArray($(val).data('gid') + '', goods), 1);
                            $.cookie('cookienum', count.toString(), {
                                expires: 7
                            });
                            $.cookie('cookiegid', goods.toString(), {
                                expires: 7
                            });
                            $(val).parent().parent().remove();
                        }
                    })

                    new CartStatic().init();
                    if (goods.length === 0) {
                        $.cookie('cookienum', count.toString(), {
                            expires: -1
                        });
                        $.cookie('cookiegid', goods.toString(), {
                            expires: -1
                        });
                        $('.change_cart').html('<div style="padding: 50px;">购物车空空如也，快去购物吧！</div>');
                    }

                });
            } else {
                $('.change_cart').html('<div style="padding: 50px;">购物车空空如也，快去购物吧！</div>');
            }
        })(jQuery);


    });

});