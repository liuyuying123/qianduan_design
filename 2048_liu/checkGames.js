function upMovable(){
    for(let j=0;j<4;j++){
        for(let i=1;i<4;i++){
            if(board[i][j]===board[i-1][j]||board[i-1][j]===0){
                return true;
            }
        }
    }
    return false;
}

function leftMovable(){
    for(let i=0;i<4;i++){
        for(let j=1;j<4;j++){
            if(board[i][j]===board[i][j-1]||board[i][j-1]===0){
                return true;
            }
        }
    }
    return false;
}

function downMovable(){
    for(let j=0;j<4;j++){
        for(let i=0;i<3;i++){
            if(board[i][j]==board[i+1][j]||board[i+1][j]===0){
                return true;
            }
        }
    }
    return false;
}
function rightMovable(){
    for(let i=0;i<4;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==board[i][j+1]||board[i][j+1]===0){
                return true;
            }
        }
    }
    return false;
}

function checkFail(){
    if(!upMovable()&&!leftMovable()&&!downMovable()&&!rightMovable()){
        alert("游戏结束，最终得分为："+score);
    }
}