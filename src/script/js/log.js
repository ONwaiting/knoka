define(['config'], function () {
    //--引入jquery

    require(['jquery', 'jqvalidate','jqcookie'], function () {
        //表单验证
        $(function () {
            (function ($) {
                $(function () {
                    $('#checkLog').validate({
                        rules: {
                            username: {
                                required: true,
                                minlength: 2,
                                maxlength: 20,
                                remote: {
                                    type: 'post',
                                    url: 'http://10.31.155.56/project/project/konka/php/registor.php'
                                }
                            },
                            password: {
                                required: true,
                                minlength: 6
                            },
                            repass: {
                                required: true,
                                equalTo: '#password'
                            },
                            check:{
                                required: true
                            }
                        },
                        messages: {
                            username: {
                                required: '<em class="err">用户名不能为空</em>',
                                minlength: '用户名不能小于2',
                                maxlength: '用户名不能大于10',
                                remote: '<em class="err">用户名已存在</em>'
                            },
                            password: {
                                required: '密码不能为空',
                                minlength: '密码不能小于6位'
                            },
                            repass: {
                                required: '密码重复不能为空',
                                equalTo: '密码不匹配'
                            },
                            check:{
                                required: '验证码不能为空'
                            }
                        }
                    });
                })

                jQuery.validator.addMethod("check", function (value, element) {
                    return this.optional(element) || ($('.s_check').html()===value);
                }, "验证码有误");

                //验证通过
                $.validator.setDefaults({
                    //添加校验成功后的执行函数--修改提示内容，并为正确提示信息添加新的样式(默认是valid)
                    success: function (label) {
                        label.text('√').css('color', 'green').addClass('valid');
                    }
                });
            })(jQuery);
        });
        //验证码
        (function () {
            var str = "",
                ran, str2 = "AZaz09";


            while (str.length < 4) {
                ran = Math.floor(Math.random() * 123);
                if (ran >= str2.charCodeAt(2) && ran <= str2.charCodeAt(3)) {
                    // check.push(String.fromCharCode(ran));
                    str = str.concat(String.fromCharCode(ran));

                } else if (ran >= str2.charCodeAt(0) && ran <= str2.charCodeAt(1)) {
                    // check.push(String.fromCharCode(ran));
                    str = str.concat(String.fromCharCode(ran));

                } else if (ran >= str2.charCodeAt(4) && ran <= str2.charCodeAt(5)) {
                    // check.push(String.fromCharCode(ran));
                    str = str.concat(String.fromCharCode(ran));

                } else {
                    ran = Math.floor(Math.random() * 123);
                }
            }
            $('.change').on('click', function () {
                str = '';
                while (str.length < 4) {
                    ran = Math.floor(Math.random() * 123);
                    if (ran >= str2.charCodeAt(2) && ran <= str2.charCodeAt(3)) {
                        // check.push(String.fromCharCode(ran));
                        str = str.concat(String.fromCharCode(ran));

                    } else if (ran >= str2.charCodeAt(0) && ran <= str2.charCodeAt(1)) {
                        // check.push(String.fromCharCode(ran));
                        str = str.concat(String.fromCharCode(ran));

                    } else if (ran >= str2.charCodeAt(4) && ran <= str2.charCodeAt(5)) {
                        // check.push(String.fromCharCode(ran));
                        str = str.concat(String.fromCharCode(ran));

                    } else {
                        ran = Math.floor(Math.random() * 123);
                    }
                }
                $('.s_check').html(str);
            })
            $('.s_check').html(str);
        })(jQuery);
        //登录
        (function(){
            $('.login').on('click',function(){
                $.ajax({
                    type:'post',
                    url:'http://10.31.155.56/project/project/konka/php/login.php',
                    data:{
                        usm:$('.usm').val(),
                        psd:$('.psd').val()
                    },
                    
                    success:function(msg){
                        if(msg==='true'){
                            location.href='./index.html';
                            $.cookie('usm',$('.usm').val());
                        }else{
                            $('#login').append('<div class="mi"><label class="fwidth" for="" style="width:100%;text-align:center;">密码错误</label></div>');
                            $('#login input').on('focus',function(){
                                $('#login>div').remove('.mi');
                            });
                        }
                        
                    }
                })
            })
        })(jQuery)
    });

});