
var board=[];
var isFirst=true;

function initBoard(){
    for(let i=0;i<4;i++){
        board[i]=[];
        for(let j=0;j<4;j++){
            board[i][j]=0;
        }
    }
}

function displayGame(){
    let boxess=$("#boxess").children();
    // console.log(boxess);
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            if(board[i][j]==0){
                boxess[i*4+j].innerHTML="";
            }else{
                boxess[i*4+j].innerHTML=board[i][j]
            }
            var top=i*100+(i+1)*10;
            var left=j*100+(j+1)*10;
            boxess[i*4+j].style.top=top+"px";
            boxess[i*4+j].style.left=left+"px";
        }
    }
    
}

function generateNum(){
    let isValid=false;
    let row,col;
    while(!isValid){//isValid起到一个加锁的作用
        row=Math.floor(Math.random()*4);
        col=Math.floor(Math.random()*4);
        if (board[row][col]==0){
            isValid=true;
            if(isFirst){
                board[row][col]=2;
            }else{
                board[row][col]=(Math.floor(Math.random()*100)<90)?2:4;
            }
        }
    }
}

