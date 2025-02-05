async function anm(mail, pass){
    try{
        var resp = await fetch("https://project-rho-hazel.vercel.app/anmeldung", {
            method : "post",
            headers : {"Content-Type" :"application/json"},
            body : JSON.stringify({mail : mail, passwort:pass})
                
            })
        return resp


    }catch(error){
        return error
    }
}

function anmeldung() {
    let mail = document.getElementById("mail").value
    let passwort = document.getElementById("pass").value
    sessionStorage.setItem("Mail", mail)
    sessionStorage.setItem("Pass", passwort)
}
var Mail = sessionStorage.getItem("Mail")
var Passwort = sessionStorage.getItem("Pass")
console.log(Passwort)
anm(Mail, Passwort)
 .then(reponse =>{
    if(reponse.status == 200)
    {
        var affiche = document.getElementById("connect").style.display = "block"
        reponse.json()
         .then(repon=>{
            var token1 = document.getElementById("token1").value = repon.token
            var token2 = document.getElementById("token2").value = repon.token

            console.log(token2)
         })
    }
    else if(reponse.status == 400)
    {
        var affiche = document.getElementById("deconnect").style.display = "block"
        reponse.json()
        .then(repon=>{
            console.log(repon)
            var r = document.getElementById("non").innerHTML = repon
        })
    }
    else if(reponse.status == 500)
    {
        console.log(reponse)
    }
 })






