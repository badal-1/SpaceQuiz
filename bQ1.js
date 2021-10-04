score=0;
function r(){
window.alert("correct!!");
score=score+1;
document.getElementById("score_display").innerHTML = score;
localStorage.setItem("score", "1");
window.location = "bQ2.html";
}
function w() {
window.alert(" Oh no!! Wrong answer!!")
localStorage.setItem("score", "0");
window.location = "bQ2.html";
}