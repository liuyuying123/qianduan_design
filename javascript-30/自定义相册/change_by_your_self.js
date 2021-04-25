(function(){
    // 首先找到所有的input标签
    // 三个input在触发input事件的时候要改变CSS全域变量的值
    const elements=document.querySelectorAll('input');

    // 添加监听事件
    elements.forEach(input => {
        // alert(1);
        input.addEventListener('input',handles);
    });

    // 事件处理函数，首先得到当前input标签当中Value的单位（自定义），然后改变全局CSS变量的值
    function handles(){
        // alert("a");
        let danwei=this.dataset.size || '';
        // 根据input的name找到对应的全局CSS变量的名称
        var html_style=document.documentElement.style;

        html_style.setProperty(`--${this.name}`,this.value+danwei);
    }
}());