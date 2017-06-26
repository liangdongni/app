项目名称：娱乐传媒（自创）
项目内容：笑话大全，了解历史的今天都发生了什么，新电影的上映时间，公交车站点查询以及英汉互译，让你在娱乐的时候学习学习英语。
技术运用：响应手机端和pc端，轮播应用了swiper，数据通过ajax来获取，文字特效是通过随机来实现的，布局是使用bootstrap的栅格布局方式。
api说明： 笑一笑:http://route.showapi.com/341-1  需要传入参数showapi_appid: "40582",showapi_sign: "30efa9bcecf146168ae9dc3d6101d564"；

        历史上的今天：http://route.showapi.com/119-42
            需要传入参数: showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564",
            date: riqi(可选参数，不传默认今天)；

        猜一猜 http://route.showapi.com/151-2（每刷新一次api的内容更换）
        需要传入参数: showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564"；

        公交车查询：http://route.showapi.com/844-3
             需要传入参数:showapi_appid: "40582",
            showapi_sign: "30efa9bcecf146168ae9dc3d6101d564",
            city: city,
            start_addr: startAddr,
            end_addr: endAddr.
