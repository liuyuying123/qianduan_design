//文档一加载就开始执行
$(function(){
    window.addEventListener("keydown",function(event){
        //alert("hello");
        if(event.key==='w'||event.key==='W'||event.key==="ArrowUp"){
            //alert("hello");
            if(upMovable()){//如果可以向上移动的话
                //alert("yes");
                setRound();//判断是不是第一次开始游戏
                upMove();//向上移动
                generateNum();//产生一个随机数字
                displayGame();//显示游戏界面
                showScore();//显示分数
                if(win===1){
                    alert("You Win!");
                }
            }else{
                checkFail();
            }
        }
        if(event.key==='a'||event.key==='A'||event.key==="ArrowLeft"){
            if(leftMovable()){
                setRound();
                leftMove();
                generateNum();
                displayGame();
                showScore();
                if(win===1){
                    alert("You Win!");
                }
            }else{
                checkFail();
            }
        }
        if(event.key==='s'||event.key==='S'||event.key==="ArrowDown"){
            if(downMovable()){
                setRound();
                downMove();
                generateNum();
                displayGame();
                showScore();
                if(win===1){
                    alert("You Win!");
                }
            }else{
                checkFail();
            }
        }
        if(event.key==='d'||event.key==='D'||event.key==="ArrowRight"){
            if(rightMovable()){
                setRound();
                rightMove();
                generateNum();
                displayGame();
                showScore();
                if(win===1){
                    alert("You Win!");
                }
            }else{
                checkFail();
            }
        }
    },false);
});


function setRound(){
    if(isFirst){
        isFirst=false;
    }
}
function newgame(){
    initBoard();
    generateNum();
    generateNum();
    displayGame();
    score=0;
    isFirst=true;
    showScore();
}