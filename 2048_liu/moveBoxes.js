var win=0;

//首先将每一行或者一列的数字全部都单独弄出来，然后这样如果前后相等的话就合并，最后没有数字的空格全部填上0即可
function upMove(){
    for(let i=0;i<4;i++){
        let rowIndex=0;
        var currentcol=getCol(i);//得到第i列不为0的值
        for(let j=0;j<currentcol.length;j++){
            if(j+1<currentcol.length && currentcol[j]===currentcol[j+1]){
                board[rowIndex][i]=currentcol[j]*2;
                if(currentcol[j]*2===2048){
                    win=1;
                }
                j++;
                addScore(board[rowIndex][i]);
            }
            else{
                board[rowIndex][i]=currentcol[j];
            }
            rowIndex++;
        }
        for(let r=rowIndex;r<4;r++){
            board[r][i]=0;
        }
    }
}

function leftMove(){
    for(let i=0;i<4;i++){
        let colindex=0;
        let currentrow=getrow(i);
        for(let j=0;j<currentrow.length;j++){
            if(j+1<currentrow.length&&currentrow[j]===currentrow[j+1]){
                board[i][colindex]=currentrow[j]*2;
                if(currentrow[j]*2===2048){
                    win=1;
                }
                j++;
                addScore(board[i][colindex])
                colindex++;
                }
            else{
                board[i][colindex]=currentrow[j];
                colindex++;
                }
            }
        for(let k=colindex;k<4;k++){
            board[i][k]=0;
    }
}
}

function downMove(){
    for(let i=0;i<4;i++){
        let rowIndex=3;
        let currentcol=getCol(i);
        for(let j=currentcol.length-1;j>=0;j--){
            if(j-1>=0&&currentcol[j]==currentcol[j-1]){
                board[rowIndex][i]=2*currentcol[j];
                if(currentcol[j]*2===2048){
                    win=1;
                }
                j--;
                addScore(board[rowIndex][i]);
                rowIndex--;
            }
            else{
                board[rowIndex][i]=currentcol[j];
                rowIndex--;
            }
        }
        for(let k=rowIndex;k>=0;k--){
            board[k][i]=0;
        }
    }
}


function rightMove(){
    for(let i=0;i<4;i++){
        colindex=3;
        currentrow=getrow(i);
        for(let j=currentrow.length-1;j>=0;j--){
            if(j-1>=0&&currentrow[j]==currentrow[j-1]){
                board[i][colindex]=2*currentrow[j];
                if(currentrow[j]*2===2048){
                    win=1;
                }
                j--;
                colindex--;
            }
            else{
                board[i][colindex]=currentrow[j];
                colindex--;
            }
        }
        for(let k=colindex;k>=0;k--){
            board[i][k]=0;
        }
    }
}

function isEmpty(k,j,i){
    if(k===i-1){
        return true;
    }
    for(let m=k+1;m<i;m++){
        if(board[m][j]!=0){
            return false;
        }
    }
    return true;
}

function getCol(index){
    var col=[];
    for(let i=0;i<4;i++){
        if(board[i][index]!==0){
            col.push(board[i][index]);
        }
    }
    return col;
}

function getrow(index){
    var row=[];
    for(let i=0;i<4;i++){
        if(board[index][i]!==0){
            row.push(board[index][i]);
        }
    }
    return row;
}