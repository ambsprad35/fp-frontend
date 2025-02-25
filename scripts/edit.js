addEventListener("DOMContentLoaded", async function(){
    document.querySelector("#updateBtn").addEventListener("click", updateCourse)
    const urlparam = new URLSearchParams(window.location.search)
    const courseId = urlparam.get('id')

    //const response = await fetch("http://localhost:3000/api/courses/" + courseId)
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseId)
    if(response.ok){
        let course =  await response.json()
        document.querySelector("#courseId").value = course._id
        document.querySelector("#name").value = course.name
        document.querySelector("#subjectArea").value = course.subjectArea
        document.querySelector("#creditHours").value = course.creditHours
        document.querySelector("#description").value = course.courseDesc
    }

    
})

async function updateCourse(){
    const courseID = document.querySelector("#courseId").value

    const course = {
        _id: document.querySelector("#courseId").value,
        name: document.querySelector("#name").value,
        subjectArea: document.querySelector("#subjectArea").value,
        creditHours: document.querySelector("#creditHours").value,
        courseDesc: document.querySelector("#description").value,
    }

    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseID,{
    //const response = await fetch("http://localhost:3000/api/courses/" + courseID,{    
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