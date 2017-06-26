//吸顶
// document.onscroll = function() {
//         var t = document.body.scrollTop || document.documentElement.scrollTop;
//         if (t >= 100) {
//             // $(".navbar-app").addClass("nav");
//             // $(".navbar-app").removeClass("nav2");
//         }
//     }



function text() {
    var amAct = am[Math.floor(Math.random() * am.length)];
    $(".joke").addClass('animated ' + amAct);
}
//笑话大全
$.ajax({
        url: "http://route.showapi.com/341-1", //获取api
        data: {
            showapi_appid: "40582", //需要传入的参数
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564"
        },
        success: function(data) {
            var obj = data.showapi_res_body.contentlist;
            var html = "";
            $.each(obj, function(index, value) {
                html += '<div class="col-md-12 joke"><h2>' + obj[index].title + '<span>' + obj[index].ct + '</span></h2><p>' + obj[index].text + '</p></div>'
            })
            $(".jape1").append(html); //添加到dom里
            text();
            $(".jape1").append("<h3>明天再来吧！</h3>")
        }
    })
    //来福岛
$.ajax({
        url: "http://route.showapi.com/107-32",
        data: {
            showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564"
        },
        success: function(data) {
            var obj = data.showapi_res_body.list;
            var html = "";
            $.each(obj, function(index, value) {
                html += '<div class="col-md-12 joke"><h2>' + obj[index].title + '</h2><p>' + obj[index].content + '</p></div>'
            })
            $(".jape2").append(html);
            text();
            $(".jape2").append("<h3>明天再来吧！</h3>")
        }
    })
    //不信你不笑
$.ajax({
        url: "http://route.showapi.com/341-3",
        data: {
            showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564"
        },
        success: function(data) {
            var obj = data.showapi_res_body.contentlist;
            var html = "";
            $.each(obj, function(index, value) {
                html += '<div class="col-md-3 col-md-offset-1 joke"><h2>' + obj[index].title + '</h2><p><img class="img-responsive" src="' + obj[index].img + '" title="' + obj[index].title + '"/></p></div>'
            })
            $(".jape3").append(html);
            text();
        }
    })
    //历史上的今天

$("#btn").click(function() {
    $(".history").empty(); //点击时清空dom里的内容
    var riqi = $("#test").val(); //获取表单里的值

    $.ajax({
        url: "http://route.showapi.com/119-42",
        data: {
            showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564",
            date: riqi
        },
        success: function(data) {
            var obj = data.showapi_res_body.list;
            var html = "";
            $.each(obj, function(index, value) {
                if (obj[index].img == undefined) {
                    html += '<div class="col-md-12 joke" title="' + obj[index].title + '"><h2>' + obj[index].title + '</h2><p>' + obj[index].year + '.' + obj[index].month + '.' + obj[index].day + '</p></div>'
                } else {
                    html += '<div class="col-md-12 joke" title="' + obj[index].title + '"><h2>' + obj[index].title + '<span>' + obj[index].year + '.' + obj[index].month + '.' + obj[index].day + '</span></h2><p><img class="img-responsive" src="' + obj[index].img + '"/></p></div>'
                }
            })
            $(".history").append(html);
            text();
            $(".history").append("<h3>今天大事已完，请更换一天！</h3>")
        }
    })
})

//电影

$("#btn1").click(function() {
    var count = 10;
    var start = 0;
    var arr = [];
    $(".movie").empty();
    $(".swiper-container").empty();
    var city = $("#city").val();
    $(".movie").append("<h2 class='title'>正在上映的电影-" + city + "</h2>")


    function getPage(count, start) {
        $.ajax({
            type: "get",
            url: "https://api.douban.com/v2/movie/in_theaters?apikey=0b2bdeda43b5688921839c8ecb20399b&city=" + city + "&start=" + start + "&count=" + count,
            dataType: 'jsonp',
            jsonp: "callback",
            success: function(data) {
                var obj = data.subjects;
                var html = "";
                $.each(obj, function(index, value) {
                    arr.push(obj[index].images.large);
                    html += '<div class="col-md-3 col-md-offset-1 joke"><h2>' + obj[index].title + '<span>上映时间：' + obj[index].mainland_pubdate + '</span></h2><p><a href="' + obj[index].alt + '"><img class="img-responsive" src="' + obj[index].images.large + '" title="' + obj[index].title + '"/></a></p></div>'
                })
                text();
                $(".movie").append(html);
            }
        });
        var flag = true;
        $(window).scroll(function(ev) { //监听鼠标滚动
            if (!flag) {
                return;
            }
            var foot = $(window).scrollTop() >= $(".movie").height() - $(window).height() - 100;
            if (foot) {
                start++;
                getPage(count, start);
                flag = false;
            }
        })
    }
    getPage(count, start);
})

//猜一猜
$.ajax({
    url: "http://route.showapi.com/151-2",
    data: {
        showapi_appid: "40582",
        showapi_sign: "30efa9bcecf146168ae9dc3d6101d564"

    },
    success: function(data) {
        var obj = data.showapi_res_body.pagebean.contentlist;
        var html = "";
        $.each(obj, function(index, value) {
            html += '<div class="col-md-12 joke"><h2>' + obj[index].typeName + '</h2><p>' + obj[index].Title + '</p><button class="btn btn-primary dian">点我，就给你答案</button><span>' + obj[index].Answer + '</span></div>'
        })
        $(".guess").append(html);
        text();
        $(".guess").append("<h3><a href='caiyicai.html'>换一换</a></h3>")
        var btns = $(".guess .joke");
        $.each(btns, function(index) {
            $(this).click(function() {
                var i = $(this).index();
                $(".guess .joke span").eq(i).toggle();
            })
        });
    }
});
//线路查询
$("#line").click(function() {
    $(".public").empty();
    var city = $("#city").val();
    var startAddr = $("#startAddr").val();
    var endAddr = $("#endAddr").val();
    $.ajax({
        url: "http://route.showapi.com/844-3",
        data: {
            showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564",
            city: city,
            start_addr: startAddr,
            end_addr: endAddr
        },
        success: function(data) {
            var obj = data.showapi_res_body.busList;
            var html = "";
            $.each(obj, function(index, value) {
                $.each(obj[index].segList, function(i) {
                    var msg = obj[index].segList[i];
                    html += '<div class="col-md-12 joke"><h2>' + msg.line_name + '</h2><p>途径站点：<span>' + msg.stats + '</span></p><p>出发地：<span>' + msg.start_stat + '</span></p><p>到达站点：<span>' + msg.end_stat + '</span></p></div>'
                })
            })
            $(".public").append(html);
            text();
        }
    });
})

//zaixianfanyi

$("#translate").click(function() {
    $(".translate").empty();
    var q = $("#word").val();
    $.ajax({
        url: "http://route.showapi.com/32-9",
        data: {
            showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564",
            q: q
        },
        success: function(data) {
            var obj = data.showapi_res_body.basic.explains;
            var html = "";
            $.each(obj, function(index, value) {
                html += '<div class="col-md-6 joke"><p>' + obj[index] + '</p></div>'

            })
            $(".translate").append("<h2>" + q + "</h2>")
            $(".translate").append(html);
            text();
        }
    });
})