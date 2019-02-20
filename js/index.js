var timer,
    timerIndex = -1,// 时钟索引配合时间事件的if  控制每个时钟的频率
    // 存放主时钟的回调函数
    timerFnArray = [];
// 页面加载完成事件
$(function () {
    // 搜索按钮事件
    $('#btnSearch').on('tap', function (e) {
        var txt = $('#searchTxt').val() || "ZH";
        window.location.href = '../srch.html?kw=' + txt;
    });
    // 初始化轮播图
    initBannerSwiper();
    // 添加有关时钟的回调函数
    timerFnArray.push(updateMSTimer);
    // 页面主时钟 启动
    timer = setInterval(function () {
        timerIndex += 1;
        timerIndex = timerIndex % 100;
        // 执行所有需要时钟执行的函数
        for (var i = 0; i < timerFnArray.length; i++) {
            timerFnArray[i]();
        }
    }, 200);
})
// 页面卸载之前清楚时钟
window.onunload = function(){
    clearInterval(timer);
}
// 时间倒计时
function updateMSTimer() {
    // 判断时间是否过了一秒 
    if (timerIndex % 5 != 0) {
        return;
    }
    // 获取从后台的秒杀的时间
    var endDate = new Date(loadData.ms.endTimre);
    // 赋值毫秒数
    var strArr = getHouersMinutesSecondsByMS(endDate - Date.now());
    // 循环给每个num div中更换内容
    if(strArr <= 0){
        return;
    }
    $('#msTimerBox .timer-num').each(function (index, item) {
        $(item).text(strArr[index]);
    });
}
// 轮播图事件
function initBannerSwiper() {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        // 分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
}
