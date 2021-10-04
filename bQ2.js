var score=localStorage.getItem("score");
localStorage.removeItem("score");
document.getElementById("score_display").innerHTML = score;
function r(){
if (score == "1"){
    window.alert("correct!!");
    score="2";
    localStorage.setItem("score", score);
    document.getElementById("score_display").innerHTML = score;
    window.location = "bQ3.html";
}
if (score == "0"){
window.alert("correct!!");
score="1";
localStorage.setItem("score", score);
document.getElementById("score_display").innerHTML = score;
window.location = "bQ3.html";
}
}
function w() {
if (score == "1"){
window.alert(" Oh no!! Wrong answer!!")
localStorage.setItem("score", "1");
window.location = "bQ3.html";
}
else{
    window.alert(" Oh no!! Wrong answer!!")
    localStorage.setItem("score", "0");
    window.location = "bQ3.html";
}
}
