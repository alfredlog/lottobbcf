function h(){
    var token = document.getElementById("token1").value
    sessionStorage.setItem("t1", token)
}
var t1 = sessionStorage.getItem("t1")
console.log(t1)
var T1 = document.getElementById("token4").value = t1
function z(){
    var token = document.getElementById("token2").value
    sessionStorage.setItem("t2", token)
}
var t2 = sessionStorage.getItem("t2")
console.log("ok")
var T2 = document.getElementById("token4").value = t2


