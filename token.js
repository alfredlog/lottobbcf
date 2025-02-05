
function z(){
    var token = document.getElementById("token2").value
    sessionStorage.setItem("t2", token)
}
var t2 = sessionStorage.getItem("t2")
console.log("ok")
var T2 = document.getElementById("token4").value = t2


