
// 1 1 2 3 5 8 ...
function fn1(num){
    return num <= 2 ? 1 : fn1(num-1) + fn1(num -2);
}
var onmessage = function(event){//不能用声明函数
    console.log("分线程接收到主线程值：", event.data)
    //计算
    var result = fn1(event.data)
    //将获取到的数据发送回主线程
    postMessage(result)
    console.log("分线程向主线程发送值：", result)
}