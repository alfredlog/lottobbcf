async function hers(mails, code, token){
    try{
        var resp = await fetch("https://metadata-mauve.vercel.app/benutzer/1/Series", {
            method : "post",
            headers : {"Content-Type" :"application/json","authoriz":token},
            body : JSON.stringify({codewahl : code, Emails:mails,})  
            })
        return resp


    }catch(error){
        return error
    }
}
function herstellung() {
    let mails = document.getElementById("mails").value
    let code = document.getElementById("code").value
    let token4 = document.getElementById("token4").value
    sessionStorage.setItem("Mails", mails)
    sessionStorage.setItem("Passwo", code)
    sessionStorage.setItem("token", token4)
}
var mails = sessionStorage.getItem("Mails")
var code = sessionStorage.getItem("Passwo")
var token4 = sessionStorage.getItem("token")
console.log(token4)
hers(mails,code,token4)
 .then(reponse =>{
    console.log(reponse.status )
    if(reponse.status == 400)
        {
            reponse.json()
             .then(res =>{
                console.log(res)
                const r = document.getElementById("reponse")
                r.style.color = "red"
                r.innerHTML = res
                
             })  
        }
    else if(reponse.status == 200)
        {
            reponse.json()
             .then(res =>{
                const r = document.getElementById("reponse")
                r.style.color = "blue"
                r.innerHTML = res
             })
        }
    else if(reponse.status == 401)
    {
        reponse.json()
        .then(res =>{
           console.log(res)
           const r = document.getElementById("reponse")
           r.style.color = "red"
           r.innerHTML = res
           
        }) 
    }
 })
