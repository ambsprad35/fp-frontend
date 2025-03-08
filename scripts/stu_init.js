const auth = new StudentAuth()

document.querySelector("#logout").addEventListener("click", (e) =>{
    auth.logOut()
})