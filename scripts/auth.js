
class Auth{
    constructor(){ 
        document.querySelector("body").style.display = "none"
        const auth = localStorage.getItem("auth")
        const role = localStorage.getItem("role")
        this.validateAuth(auth, role)

    }

    async validateAuth(auth, role){
        console.log(role, auth)
        if((auth != 1) || (role === "Student")){
            window.location.replace("/login.html")
            console.log("redirected to login") 
        }
        else{
            document.querySelector("body").style.display = "block"
            console.log("user logged in")
            console.log(role)
        }
    }

    logOut(){
        localStorage.removeItem("auth")
        localStorage.removeItem("token")
        localStorage.removeItem("uname")

        window.location.replace("/login.html")
    }
}