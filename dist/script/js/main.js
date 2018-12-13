require.config({baseUrl:"https://cdnjs.cloudflare.com/ajax/libs/",paths:{jquery:"jquery/1.12.4/jquery.min",jqcookie:"jquery-cookie/1.4.1/jquery.cookie.min",jqvalidate:"jquery-validate/1.19.0/jquery.validate.min",jqlzload:"jquery.lazyload/1.9.1/jquery.lazyload.min"},shim:{jqlzload:{exports:"jqlzload",deps:["jquery"]},jqvalidate:{exports:"jqvalidate",deps:["jquery"]}}}),define("config",function(){}),define("easy",["config"],function(){require(["jquery","jqcookie"],function(){function t(){$(".search").on("click",function(){$(".searTop").css({display:"block",width:490,left:600,opacity:0}),$(".searBtm").css({display:"block",opacity:0}),$(".searBtm>li>span").css({left:200,opacity:0}),$(".nav").fadeOut(100),$(".searTop").animate({left:200,width:890,opacity:1},300,function(){$(".inpsearch").css("width","860"),$(".closeSearch").css("left","1000"),$(".closeSearch").animate({left:900},300)}),$(".searBtm").animate({opacity:1},100,function(){$.each($.makeArray($(".searBtm>li")),function(t,e){setTimeout(function(){$(e).children("span").animate({left:25,opacity:1},300)},100*t)})})}),$(document).on("click",function(t){var e=t.target||t.srcElement;""!==e.className&&"closeSearch"!==e.className||($(".nav").fadeIn(100),$(".searTop").fadeOut(100),$(".searBtm").fadeOut(100))})}$(".header").load("./top.html",function(){$(".tcar").on("click",function(){location.href="./cart.html"}),0!=$(".pay_count").length&&setTimeout(function(){$(".tcar").html('<a class="iconfont">&#xe63a;</a>购物车('+$(".pay_count").html()+")")},100),$.cookie("allgoods")&&$(".tcar").html('<a class="iconfont">&#xe63a;</a>购物车('+$.cookie("allgoods")+")"),$.cookie("usm")&&($(".log_right>.login").html($.cookie("usm")),$(".log_right>.regist").html("退出"),$(".log_right>.regist").on("click",function(){$.cookie("usm",""),location.reload(!0)})),t()}),$(".footer").load("./bottom.html"),$(".log_header").load("./top.html",function(){$(".log_header>.logo").addClass("relive"),t()}),function(t){0!==t(".ban_con").length&&(conleft=t(".ban_con"),t(".upstairs").css("left",conleft.offset().left-80));var e=t(".upstairs>ul>li"),i=t(".tel_con");e.length>0&&(t(window).resize(function(){t(".right_fix").animate({top:3*t(window).height()/5},20)}),t(".right_fix").css("top",3*t(window).height()/5),t(window).scroll(function(){t(window).scrollTop()>i.eq(0).offset().top-50?(t(".upstairs").show(),t(".right_fix").css("top",3*t(window).height()/5-42),t(".itemdong").fadeIn(500)):(t(".upstairs").hide(),t(".right_fix").css("top",3*t(window).height()/5+42),t(".itemdong").fadeOut(500)),t.each(t.makeArray(i),function(i,o){if(0===i){if(t(o).offset().top+300>t(window).scrollTop())return e.eq(i).addClass("active").siblings().removeClass("active"),!1}else if(1===i||2===i){if(t(o).offset().top+1100>t(window).scrollTop())return e.eq(i).addClass("active").siblings().removeClass("active"),!1}else if(t(o).offset().top+600>t(window).scrollTop())return e.eq(i).addClass("active").siblings().removeClass("active"),!1})}),e.on("click",function(){if(0===t(this).index())var e=i.eq(t(this).index()).offset().top-50;else var e=i.eq(t(this).index()).offset().top;t("html,body").stop(!0,!0).animate({scrollTop:e}),t(this).addClass("active").siblings().removeClass("active")}),t(".itemdong").on("click",function(){t("html,body").stop(!0,!0).animate({scrollTop:0})})),t(".right_fix>.item").on("mouseenter",function(){t(this).children("i").slideUp(1),t(this).css("background","red"),t(this).children("span").css({lineHeight:"40px",display:"block"}),t(this).children("span").stop(!0,!0).animate({lineHeight:15},300)}),t(".right_fix>.item").on("mouseleave",function(){t(this).css("background","#fff"),t(this).children("i").css({top:42,display:"block"}),t(this).children("i").stop(!0,!0).animate({top:5},100),t(this).children("span").css({display:"none"})}),t(".toCart").on("click",function(){location.href="cart.html"})}(jQuery),function(t){t(".star_btn_left").on("click",function(){t(".star_show").stop(!0).animate({left:0})}),t(".star_btn_right").on("click",function(){t(".star_show").stop(!0).animate({left:-1140}),window.getSelection&&window.getSelection().removeAllRanges()||document.selection.empty()})}(jQuery),function(t){t(window).scroll(function(e){t(window).scrollTop()>2*t(".log").outerHeight()?t(".logo_con").css({position:"fixed",top:0,right:0,left:0,margin:"0 auto"}):t(".logo_con").css({position:"relative"})})}(jQuery)})}),define("slider",["config"],function(){require(["jquery"],function(){var t=null,e=0,i={},o=null,n=null,s=null,a={counts:4,speeds:500,delay:35e3};0!==$(".ban_con").length&&(i.change_con=$(".ban_con"),function(){o=function(){i.imgs=$(".imgs>li"),i.dots=$(".dot>li"),i.left=$(".show>.leftBtn"),i.right=$(".show>.rightBtn"),i.show=$(".show"),i.imgs.css("left",i.imgs.outerWidth()),i.imgs.eq(0).css("left",0),i.show.css("width",$(window).width()),i.rigDis=i.change_con.outerWidth()+i.change_con.offset().left+20,i.show.hover(function(){clearInterval(t),i.left.stop(!0).animate({left:($(window).width()-i.change_con.width())/2-i.left.width()-10},a.speeds),i.right.stop(!0).animate({left:i.rigDis},a.speeds)},function(){s(),i.left.stop(!0).animate({left:-60},a.speeds),i.right.stop(!0).animate({left:i.rigDis+220},a.speeds)})},o(),n=function(){i.dots.eq(e).addClass("active").siblings("li").removeClass("active")},i.dots.on("click",function(){$(this).index()>e?(i.imgs.eq(e).stop(!0).animate({left:i.imgs.outerWidth()}),e=$(this).index(),i.imgs.eq(e).css("left",-i.imgs.outerWidth()),i.imgs.eq(e).stop(!0).animate({left:0})):$(this).index()<e&&(i.imgs.eq(e).stop(!0).animate({left:-i.imgs.outerWidth()}),e=$(this).index(),i.imgs.eq(e).css("left",i.imgs.outerWidth()),i.imgs.eq(e).stop(!0).animate({left:0})),n()}),i.left.on("click",function(){i.imgs.eq(e).stop(!0).animate({left:-i.imgs.outerWidth()}),e++,e===a.counts&&(e=0),i.imgs.eq(e).css("left",i.imgs.outerWidth()),i.imgs.eq(e).stop(!0).animate({left:0}),n()}),i.right.on("click",function(){i.imgs.eq(e).stop(!0).animate({left:i.imgs.outerWidth()}),e--,-1===e&&(e=a.counts-1),i.imgs.eq(e).css("left",-i.imgs.outerWidth()),i.imgs.eq(e).stop(!0).animate({left:0}),n()}),(s=function(){t=setInterval(function(){i.left.click()},2e3)})()}())})}),define("detail",["config"],function(){require(["jquery"],function(){function t(){function t(t){var e;e=Number(t.siblings(".result").val())<99?Number(t.siblings(".result").val())+1:99,t.siblings(".result").val(e)}function e(t){var e;e=Number(t.siblings(".result").val())>1?Number(t.siblings(".result").val())-1:1,t.siblings(".result").val(e)}$(".box").on("mouseenter",function(){$(".lit_img").fadeOut(100);var t=$(".lit_img").attr("src");$(this).append('<div class="img_big"><img src="'+t+'" /></div>'),$(".img_big").fadeIn(100),$(document).on("mousemove",function(t){var e=$(".box").width(),i=$(".box").height(),o=$(".img_big").width(),n=$(".img_big").height(),s=$(".img_big").offset(),a=t.pageX-s.left,c=t.pageY-s.top,l=Math.floor(a*(e-o)/e*.55),r=Math.floor(c*(i-n)/i*.55);$(".img_big").css({left:l,top:r})})}),$(".box").on("mouseleave",function(){$(".lit_img").fadeIn(100),$(".img_big").fadeOut(100),$(document).off("mousemove")}),$(".left_det_show>ul>li").on("mouseenter",function(){var t=$(this).children("img").attr("src");$(".box>.lit_img").attr("src",t),$(this).addClass("active").siblings().removeClass("active")}),$(".jup").on("click",function(){$(".left_det_show>ul>li").length>5&&$(".left_det_show>ul").stop(!0).animate({top:-410})}),$(".jdown").on("click",function(){$(".left_det_show>ul").stop(!0).animate({top:-0})}),$(document).on("click",".count>.btn>.add",function(){t($(this))}),$(".btn>.add2").on("click",function(){t($(this))}),$(document).on("click",".count>.btn>.jian",function(){e($(this))}),$(".btn>.jian2").on("click",function(){e($(this))}),$(document).on("input",".btn>.result",function(){var t=/^\d+$/g,e=parseInt($(this).val());t.test(e)?e>=99?$(this).val(99):e<=0?$(this).val(1):$(this).val(e):$(this).val(1)})}t(),function(e){function i(){if(e.cookie("cookiegid")&&e.cookie("cookienum")&&(n=e.cookie("cookiegid").split(","),s=e.cookie("cookienum").split(",")),-1!=e.inArray(o,n)){var t=parseInt(s[e.inArray(o,n)])+parseInt(e(".del_right>.btn>.result").val());s[e.inArray(o,n)]=t,e.cookie("cookienum",s.toString(),{expires:7})}else n.push(o),e.cookie("cookiegid",n.toString(),{expires:7}),s.push(e(".del_right>.btn>.result").val()),e.cookie("cookienum",s.toString(),{expires:7})}var o=location.search.slice(1).split("=")[1],n=[],s=[];e(".del_right").on("click",".addcar",function(){location.reload(!0),i()}),o&&e.ajax({url:"http://10.31.155.56/project/project/konka/php/details.php",dataType:"json",data:"gid="+o,success:function(i){var i=i[0],o=i.urls.split(";"),n="";e.each(o,function(t,e){n+=0===t?'<li class="active"><img src="'+e+'" alt=""></li>':'<li><img src="'+e+'" alt=""></li>'}),e(".left_det_show>ul").html(n);var s=' <div class="box"><img src="'+o[0]+'" alt="" class="lit_img"></div>';e(".del_mid").html(s);var a='<h3 class="del_title">'+i.g_title+" </h3><div>"+i.g_disc+'</div><p class="del_price"><strong>￥'+i.g_price+'.00</strong><span style="text-decoration:line-through;color:#b0b0b0;">￥4099.00</span></p><pre>配送至: 江苏省 盐城市 亭湖区 新洋街道</pre><strong>数量</strong><div class="btn"><button class="jian2">-</button><input type="text" class="result" value="1"><button class="add2">+</button></div><div class="endbtn"><button class="now">立即购买</button><button class="addcar">加入购物车</button></div>';e(".del_right").html(a),t()}})}(jQuery)})}),define("cart",["config"],function(){require(["jquery","jqcookie"],function(){function t(){}t.prototype={constructor:t,init:function(){var t=this;this.getPrice(),$(document).on("click",".count>.btn>.add",function(){t.update($(this)),t.getLPrice($(this))}),$(document).on("click",".count>.btn>.jian",function(){t.update($(this)),t.getLPrice($(this))}),$(document).on("input",".btn>.result",function(){t.update($(this),1),t.getLPrice($(this),1)}),$(".choose").not(".all").on("click",function(){t.oneClick($(this)),t.getPrice()}),$(".all").click(function(){$(this).prop("checked")?($(".choose").prop("checked",!0),t.getPrice(),$(".mid_col").css({background:"#fffeec"})):($(".choose").prop("checked",!1),t.getPrice(),$(".mid_col").css({background:"#fff"}))})},update:function(t,e){if(t.parent(".btn").data("gid")){var i=t.parent(".btn").data("gid")+"",o=$.cookie("cookiegid").split(","),n=$.cookie("cookienum").split(",");n[$.inArray(i,o)]=e?t.val():t.siblings(".result").val(),$.cookie("cookienum",n.toString(),{expires:7})}},getPrice:function(){var t=0;$.each($.makeArray($(".choose:checked").not(".all")),function(e,i){t+=parseFloat($(i).parent().siblings(".price_all").html())});var e=t.toString();e=this.getZero(e),$(".pay_price").html(e),"0.00"===e?$(".pay>button").attr("disabled","disabled").css("background","#ccc"):$(".pay>button").removeAttr("disabled").css("background","#7a271c");var i=0;$.each($.makeArray($(".count>.btn>.result")),function(t,e){i+=Number($(e).val())}),$(".pay_count").html(i),$.cookie("allgoods",$(".pay_count").html(),{expires:7})},getZero:function(t){if(-1===t.indexOf("."))t+=".00";else{var e=t.split(".")[1];1===e.length&&(e+="0"),t=t.split(".")[0]+"."+e}return t},getLPrice:function(t,e){var i=parseFloat(t.parent().parent().siblings(".price_one").html());i*=e?Number(t.val()):Number(t.siblings(".result").val());var o=i.toString();o=this.getZero(o),t.parent().parent().siblings(".price_all").html(o),this.getPrice()},oneClick:function(t){0===$(".choose:not(:checked)").not(".all").length?$(".all").prop("checked",!0):$(".all").prop("checked",!1),t.prop("checked")?t.parent().parent(".mid_col").css({background:"#fffeec"}):t.parent().parent(".mid_col").css({background:"#fff"})}},(new t).init(),function(e){if(e.cookie("cookiegid")){var i=e.cookie("cookiegid").split(","),o=e.cookie("cookienum").split(","),n="";e.each(i,function(i,s){e.ajax({url:"http://10.31.155.56/project/project/konka/php/details.php",dataType:"json",data:"gid="+s}).done(function(s){var a=s[0];n=n+'<ul class="goods_title clearfix mid_col"><li><input type="checkbox" name="" id="" class="choose" checked data-gid="'+a.gid+'"></li><li class="goods_list"><img src="'+a.f_url+'" alt=""><span class="goods_name">'+a.g_title+'</span><span class="goods_size">XQG80-10D08W </span><span class="goods_intro">'+a.g_disc+'</span></li><li class="price_one">'+a.g_price+'</li><li class="count"><div class="btn" data-gid="'+a.gid+'"><button class="jian">-</button><input type="text" class="result" value="'+o[i]+'"><button class="add">+</button></div></li><li class="price_all">'+Number(a.g_price*o[i]).toFixed(2)+'</li><li class="options"><small data-gid="'+a.gid+'" class="del_goods">删除</small></li></ul>',e(".change_cart").html(n),(new t).init()})}),e(document).on("click",".del_goods",function(){-1!=e.inArray(e(this).data("gid")+"",i)&&(o.splice(e.inArray(e(this).data("gid")+"",i),1),i.splice(e.inArray(e(this).data("gid")+"",i),1),e.cookie("cookienum",o.toString(),{expires:7}),e.cookie("cookiegid",i.toString(),{expires:7})),e(this).parent().parent().remove(),(new t).init(),0===i.length&&(e.cookie("cookienum",o.toString(),{expires:-1}),e.cookie("cookiegid",i.toString(),{expires:-1}),e(".change_cart").html('<div style="padding: 50px;">购物车空空如也，快去购物吧！</div>'))}),e(document).on("click",".del_all",function(){e.each(e.makeArray(e(".change_cart>ul>li>.choose:checked")),function(t,n){-1!=e.inArray(e(n).data("gid")+"",i)&&(o.splice(e.inArray(e(n).data("gid")+"",i),1),i.splice(e.inArray(e(n).data("gid")+"",i),1),e.cookie("cookienum",o.toString(),{expires:7}),e.cookie("cookiegid",i.toString(),{expires:7}),e(n).parent().parent().remove())}),(new t).init(),0===i.length&&(e.cookie("cookienum",o.toString(),{expires:-1}),e.cookie("cookiegid",i.toString(),{expires:-1}),e(".change_cart").html('<div style="padding: 50px;">购物车空空如也，快去购物吧！</div>'))})}else e(".change_cart").html('<div style="padding: 50px;">购物车空空如也，快去购物吧！</div>')}(jQuery)})}),define("tel",["config"],function(){require(["jquery","jqlzload"],function(t){t.ajax({url:"http://10.31.155.56/project/project/konka/php/goods.php",dataType:"json",success:function(e){var i="";t.each(e,function(t,e){i+=3===t||7===t?'<div class="items last"><a href="./details.html?gid='+e.gid+'" target="_blank"><img class="lazy" data-original="'+e.f_url+'" alt="" style="width:200px;height:200px"></a><p class="p1">'+e.g_title+'</p><p class="p2">'+e.g_disc+'</p><p class="p3">￥3199.00 <span class="del">&nbsp;￥'+e.g_price+".00</span></p></div>":'<div class="items" data-id="'+e.gid+'"><a href="./details.html?gid='+e.gid+'" target="_blank"><img class="lazy" data-original="'+e.f_url+'" alt="" style="width:200px;height:200px"></a><p class="p1">'+e.g_title+'</p><p class="p2">'+e.g_disc+'</p><p class="p3">￥3199.00 <span class="del">&nbsp;￥'+e.g_price+".00</span></p></div>"}),t(".teldata").html(i),t("img.lazy").lazyload({effect:"fadeIn"})}})})}),define("log",["config"],function(){require(["jquery","jqvalidate","jqcookie"],function(){$(function(){!function(t){t(function(){t("#checkLog").validate({rules:{username:{required:!0,minlength:2,maxlength:20,remote:{type:"post",url:"http://10.31.155.56/project/project/konka/php/registor.php"}},password:{required:!0,minlength:6},repass:{required:!0,equalTo:"#password"},check:{required:!0}},messages:{username:{required:'<em class="err">用户名不能为空</em>',minlength:"用户名不能小于2",maxlength:"用户名不能大于10",remote:'<em class="err">用户名已存在</em>'},password:{required:"密码不能为空",minlength:"密码不能小于6位"},repass:{required:"密码重复不能为空",equalTo:"密码不匹配"},check:{required:"验证码不能为空"}}})}),jQuery.validator.addMethod("check",function(e,i){return this.optional(i)||t(".s_check").html()===e},"验证码有误"),t.validator.setDefaults({success:function(t){t.text("√").css("color","green").addClass("valid")}})}(jQuery)}),function(){for(var t,e="",i="AZaz09";e.length<4;)t=Math.floor(123*Math.random()),t>=i.charCodeAt(2)&&t<=i.charCodeAt(3)?e=e.concat(String.fromCharCode(t)):t>=i.charCodeAt(0)&&t<=i.charCodeAt(1)?e=e.concat(String.fromCharCode(t)):t>=i.charCodeAt(4)&&t<=i.charCodeAt(5)?e=e.concat(String.fromCharCode(t)):t=Math.floor(123*Math.random());$(".change").on("click",function(){for(e="";e.length<4;)t=Math.floor(123*Math.random()),t>=i.charCodeAt(2)&&t<=i.charCodeAt(3)?e=e.concat(String.fromCharCode(t)):t>=i.charCodeAt(0)&&t<=i.charCodeAt(1)?e=e.concat(String.fromCharCode(t)):t>=i.charCodeAt(4)&&t<=i.charCodeAt(5)?e=e.concat(String.fromCharCode(t)):t=Math.floor(123*Math.random());$(".s_check").html(e)}),$(".s_check").html(e)}(jQuery),function(){$(".login").on("click",function(){$.ajax({type:"post",url:"http://10.31.155.56/project/project/konka/php/login.php",data:{usm:$(".usm").val(),psd:$(".psd").val()},success:function(t){"true"===t?(location.href="./index.html",$.cookie("usm",$(".usm").val())):($("#login").append('<div class="mi"><label class="fwidth" for="" style="width:100%;text-align:center;">密码错误</label></div>'),$("#login input").on("focus",function(){$("#login>div").remove(".mi")}))}})})}(jQuery)})}),require(["easy","slider","detail","cart","tel","log"]),define("main",function(){});