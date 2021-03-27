var score=0;
function addScore(s){
    score+=s;
    showScore();
}

function showScore(){
    $("#scores").text("得分: "+score);
}