define(['config'], function () {
    //--引入jquery

    require(['jquery','jqlzload'], function ($) {

        var url = 'http://10.31.155.56/project/project/konka/php/';
        $.ajax({
            url: url + 'goods.php',
            dataType: 'json',
            success: function (msg) {
                var str = '';
                $.each(msg, function (i, val) {
                    if (i === 3 || i === 7) {
                        str += '<div class="items last">' +
                            '<a href="./details.html?gid='+val.gid+'" target="_blank">' +
                            '<img class="lazy" data-original="' + val.f_url + '" alt="" style="width:200px;height:200px">' +
                            '</a>' +
                            '<p class="p1">' + val.g_title + '</p>' +
                            '<p class="p2">' + val.g_disc + '</p>' +
                            '<p class="p3">￥3199.00 <span class="del">&nbsp;￥' + val.g_price + '.00</span></p>' +
                            '</div>';
                    } else {
                        str += '<div class="items" data-id="' + val.gid + '">' +
                            '<a href="./details.html?gid='+val.gid+'" target="_blank">' +
                            '<img class="lazy" data-original="' + val.f_url + '" alt="" style="width:200px;height:200px">' +
                            '</a>' +
                            '<p class="p1">' + val.g_title + '</p>' +
                            '<p class="p2">' + val.g_disc + '</p>' +
                            '<p class="p3">￥3199.00 <span class="del">&nbsp;￥' + val.g_price + '.00</span></p>' +
                            '</div>';
                    }

                });
                $('.teldata').html(str);
                $("img.lazy").lazyload({
                    effect: "fadeIn"
                });
                // $(function() {
                //     $("img.lazy").lazyload({
                //         effect: "fadeIn"
                //     });
                // });
            }
        });

    });

});