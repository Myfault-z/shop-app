/**
 * 获取url地址参数的方法
 * @param {string} key:参数的名
 * @returns {string} 匹配结果
 */ 
function getUrlParam(key){
    var reg = new RegExp(key + '=([^&]*)');
    var results = location.href.match(reg);
    return results ? results[1] : null;
}
/**
 * 时间倒数
 * 根据时间差毫秒数 返回具体的小时 分钟 秒的时间差
 * @param {number} ms 相隔的毫秒数
 * @returns {Array} 返回时间间隔的数组
 *  */
function getHouersMinutesSecondsByMS(ms){
    ms = + ms   // 转换成number类型
    if( ms < 0){
        return null;
    }
    // 处理小时
    var hours = parseInt(ms / (1000 * 60 * 60)) % 24;
    var minutes = parseInt(ms / (1000 * 60)) % 60;
    var seconds = parseInt(ms / 1000) % 60;
    var hoursStr = ('0' + hours);
    var minutesStr = ('0' + minutes);
    var secondsStr = ('0' + seconds);
    hoursStr = hoursStr.slice(-2);
    minutesStr = minutesStr.slice(-2);
    secondsStr = secondsStr.slice(-2);

    var str = hoursStr + minutesStr + secondsStr;
    return str.split('');
}