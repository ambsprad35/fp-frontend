addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#updateBtn").addEventListener("click", updateCourse)
    const urlparam = new URLSearchParams(window.location.search)
    const courseId = urlparam.get('id')

    const response = await fetch("http://localhost:3000/api/courses/" + courseId)
    //const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseId)
    if(response.ok){
        let course =  await response.json()
        document.querySelector("#courseId").value = course._id
        document.querySelector("#name").value = course.name
        document.querySelector("#subjectArea").value = course.subject
        document.querySelector("#creditHours").value = course.credits
        document.querySelector("#description").value = course.description
        document.querySelector("#instructor").value = course.instructor
    }

})

async function updateCourse(){
    const courseID = document.querySelector("#courseId").value

    const course = {
        _id: document.querySelector("#courseId").value,
        name: document.querySelector("#name").value,
        subject: document.querySelector("#subjectArea").value,
        credits: document.querySelector("#creditHours").value,
        description: document.querySelector("#description").value,
        instructor: document.querySelector("#instructor").value,
    }

    //const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseID,{
    const response = await fetch("http://localhost:3000/api/courses/" + courseID,{    
        method: "PUT",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(course)

    })

    if(response.ok){
        alert("Updated Course")
    }
    else{
        document.querySelector("#error").innerHTML = "Cannot Update Course"
    }
}