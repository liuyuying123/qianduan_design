(function(){
    function playaudio(e){
        const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
        const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(!audio){return false;}
        // 将选定的audio播放时间设置到0
        audio.currentTime=0;
        audio.play();
        // 将playing类添加到选定的要改变样式的格子的classList中
        key.classList.add('playing');
    }
    const keys = document.querySelectorAll('.key');
    // alert(keys.length);必须定义js的defer延迟执行属性，不然娶不到这些key标签
    keys.forEach(key=>{
        return key.addEventListener('transitionend',removeTransition);
    });

    function removeTransition(e){
        // 用this就是对的，但是用e.classList.remove()就会报错，为什么呢？
        if(e.propertyName=='transform'){this.classList.remove("playing");}
        else return false;
    }
    window.addEventListener('keydown',playaudio);
}());