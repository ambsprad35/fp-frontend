addEventListener("DOMContentLoaded", async function(){
    const urlparam = new URLSearchParams(window.location.search)
    const courseId = urlparam.get('id')
    console.log(courseId)

    //const response = await fetch("http://localhost:3000/api/courses/" + courseId)
    const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses/" + courseId)
    const course = await response.json()
    console.log(course)

    let heading = ""
    heading += `${course.name}`

    document.querySelector("h1").innerHTML = heading

    let html = ""
    html += `
        <h2>Subject - ${course.subjectArea}</h2>
        <h3>Credit Hours - ${course.creditHours}</h3>
        <p>Description - ${course.courseDesc}</p>
    
    `
    document.querySelector("div").innerHTML = html
})