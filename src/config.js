(function(window){
    //第一步:将配置保存到windwo中
    window._myConfig = {
        api:'http://192.168.0.65:4200',
        title:'标题一'
    };
    console.log(window._myConfig);
}(this))