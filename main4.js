async function hers(code, token){
    try{
        var resp = await fetch("https://project-rho-hazel.vercel.app/benutzer/1/ziehung", {
            method : "post",
            headers : {"Content-Type" :"application/json","authoriz":token},
            body : JSON.stringify({codewahl : code})  
            })
        return resp


    }catch(error){
        return error
    }
}
function ziehung() {
    let code = document.getElementById("code").value
    let token = document.getElementById("token4").value
    sessionStorage.setItem("Passw", code)
    sessionStorage.setItem("token3", token)
}
var code = sessionStorage.getItem("Passw")
var token = sessionStorage.getItem("token3")
console.log(token)
hers(code,token)
 .then(reponse =>{
    console.log(reponse.status )
    if(reponse.status == 400)
        {
            reponse.json()
             .then(res =>{
                console.log(res)
                const r = document.getElementById("reponse1")
                r.style.color = "red"
                r.innerHTML = res
                
             })  
        }
    else if(reponse.status == 200)
        {
            reponse.json()
             .then(res =>{
                const r = document.getElementById("reponse1")
                r.style.color = "blue"
                r.innerHTML = res
             })
        }
    else if(reponse.status == 401)
    {
        reponse.json()
        .then(res =>{
           console.log(res)
           const r = document.getElementById("reponse1")
           r.style.color = "red"
           r.innerHTML = res
           
        }) 
    }
 })