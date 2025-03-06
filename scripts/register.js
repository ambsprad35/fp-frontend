addEventListener("DOMContentLoaded", function(){
    this.document.querySelector("#regBtn").addEventListener("click", addUser)
})


async function addUser(){
    const user = {
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
        role: document.querySelector("#roleDropdown option:checked").value
    }
    const response = await fetch("http://localhost:3000/api/register",{        //("http://localhost:3000/api/user", {
    //const response = await fetch("https://locrian-harsh-scion.glitch.me/api/user", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added user with Role of " + results.role)

        //reset the form
        document.querySelector("form").reset()
        window.location.replace("/index.html")
    }
    else{
        document.querySelector("#errorMsg").innerHtml = "Cannot Add User"
    }
}
