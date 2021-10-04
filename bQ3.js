var score=localStorage.getItem("score");
localStorage.removeItem("score");
document.getElementById("score_display").innerHTML = score;
function r(){
if (score == "1"){
    window.alert("correct!!");
    score="2";
    localStorage.setItem("score", score);
    document.getElementById("score_display").innerHTML = score;
    window.location = "marksb.html";
}
if (score == "0"){
    window.alert("correct!!");
    score="1";
    localStorage.setItem("score", score);
    document.getElementById("score_display").innerHTML = score;
    window.location = "marksb.html";
}
if (score == "2"){
    window.alert("correct!!");
    score="3";
    localStorage.setItem("score", score);
    document.getElementById("score_display").innerHTML = score;
    window.location = "marksb.html";
}
}
function w() {
if (score == "1"){
window.alert(" Oh no!! Wrong answer!!")
localStorage.setItem("score", "1");
window.location = "marksb.html";
}
if (score == "0"){
    window.alert(" Oh no!! Wrong answer!!")
    localStorage.setItem("score", "1");
    window.location = "marksb.html";
}
if (score == "2"){
    window.alert(" Oh no!! Wrong answer!!")
    localStorage.setItem("score", "2");
    window.location = "marksb.html";
}
}