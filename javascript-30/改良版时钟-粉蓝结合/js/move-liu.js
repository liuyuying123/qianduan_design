(function(){
    // 获取三根指针元素
    var hour_hand=document.querySelector('.hour-hand');
    var minute_hand=document.querySelector('.minute-hand');
    var second_hand=document.querySelector('.second-hand');
    function set_time(){
        let now_time=new Date();
        // 获取小时、分钟、秒
        let hour_now=now_time.getHours();
        let minute_now=now_time.getMinutes();
        let second_now=now_time.getSeconds();

        // 要加90，因为这是直接对rotate进行设置，在初始css样式中设置了rotate 90deg又不会加到上面来，所以要重新加一次
        let second_h=360/60*(second_now)+90;
        let minute_h=360/60*(minute_now)+second_h/360+90;
        let hour_h=360/12*(hour_now)+minute_now/360+90;
        // console.log(1);
        hour_hand.style.transform=`rotate(${hour_h}deg)`;
        minute_hand.style.transform=`rotate(${minute_h}deg)`;
        second_hand.style.transform=`rotate(${second_h}deg)`;
        // alert(1);

    }
    // 先设置一遍时间，这样在刷新页面的时候不会出现所有指针都指向12的情况
    set_time();
    setInterval(set_time,1000);

}());