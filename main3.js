
function wahl() {
    let mail = document.getElementById("mail").value
    let passwort = document.getElementById("code").value
    let nummer = document.getElementById("nummer").value
    let zf = document.getElementById("zf").value
    sessionStorage.setItem("Mail", mail)
    sessionStorage.setItem("code", passwort)
    sessionStorage.setItem("nummer", nummer)
    sessionStorage.setItem("zf", zf)
}
var Mail = sessionStorage.getItem("Mail")
var code = sessionStorage.getItem("code")
var nummer = sessionStorage.getItem("nummer")
var zf = sessionStorage.getItem("zf")
async function W(mail, code, nummer, ziffer){
    try{
        var resp = await fetch("https://project-rho-hazel.vercel.app/wahlen", {
            method : "post",
            headers : {"Content-Type" :"application/json"},
            body : JSON.stringify({codewahl : code, Email:mail,wahl:nummer,ziffer:zf})  
            })
        return resp


    }catch(error){
        return error
    }
}
W(Mail, code, nummer, zf)
 .then(res=>{
    if(res.status == 400)
    {
        res.json()
         .then(r=>{
            var rs = document.getElementById("reponse")
            rs.style.color = "red"
            rs.innerHTML = r
         })
    }
    else if(res.status == 200)
    {
        res.json()
         .then(r=>{
            var rs = document.getElementById("reponse")
            rs.style.color = "blue"
            rs.innerHTML = r 
         })

    }
 })