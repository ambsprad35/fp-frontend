addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#addCartBtn").addEventListener("click", addToCart)
    getAllCourses()
    getEnrolledCourses()
})

async function getAllCourses(){
    const response = await fetch("http://localhost:3000/api/courses")
    //const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses")
    if(response.ok){
        const courses = await response.json()
        let html = ""
        for(let course of courses){
            html += `<option value="${course._id}">${course.name}</option>`
        }
        document.querySelector("#cartDropdown").innerHTML = html
    }  

}

async function getEnrolledCourses(){
    const userId = localStorage.userId
    const response = await fetch("http://localhost:3000/api/user/" + userId)
    if (response.ok){
        let user = await response.json()
        let html = ""
        for(i=0; i<user.cart.length; i++){
            const res = await fetch ("http://localhost:3000/api/courses/" + user.cart[i])
            const course = await res.json()
            console.log(course)
            html+= `<li>Course - ${course.name}-Credit hours: ${course.credits}</l1></br>`//`<li>${user.cart[i]}</li></br>`
        }
        document.querySelector("#addedCourses").innerHTML = html
    }
}

async function addToCart() {
    const userID = localStorage.userId
    const courseID = document.querySelector("#cartDropdown option:checked").value
    const response = await fetch("http://localhost:3000/api/cart/" + userID + "/courses/" + courseID,{
        method: "POST"
    })
    if(response.ok){
        getEnrolledCourses()
    }

}
/*
async function addToCart(){
    const userId = localStorage.userId
    const response = await fetch("http://localhost:3000/api/user/" + userId)
    if(response.ok){
        let user = await response.json()
        console.log("found user", user._id)
        //const courseID = document.querySelector("#cartDropdown option:checked").value;
        const loggedUser = {
            _id: user._id,
            username: user.username,
            role: user.role, 
            cart: document.querySelector("#cartDropdown option:checked").value
        }
        const response1 = await fetch("http://localhost:3000/api/cart/" + userId, {
            //const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseID, {
                method: "Put",
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(loggedUser)
        
            })
            
            if(response1.ok){
                const courses = await response1.json()
                let html = ""
                for (let course of courses){
                    html+=`<li>${course.name} - ${course.courseDesc}</li><br>`
                }
                console.log("added course")
                document.querySelector("#addedCourses").innerHTML= html
        
            }
            else{
                document.querySelector("#error").innerHTML = "Cannot Add Course"
            }
    }



}
    */