addEventListener("DOMContentLoaded", function(){
    this.document.querySelector("#regBtn").addEventListener("click", addUser)
})


async function addUser(){
    const user = {
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
        role: document.querySelector("#roleDropdown option:checked").value,
        status: "online"
    }

    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/user", {
        method: "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(user)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added course with Role of" + results.role)

        //reset the form
        document.querySelector("form").reset()
    }
    else{
        document.querySelector("#error").innerHtml = "Cannot Add User"
    }
}
