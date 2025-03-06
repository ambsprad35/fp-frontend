// we are going ot make an event listener.. 
// it will will trigger when the DOM is loaded (aka - upon visting the webpage)
addEventListener("DOMContentLoaded", async function () {
    const response = await this.fetch("http://localhost:3000/api/courses")
    //const response = await fetch("https://locrian-harsh-scion.glitch.me/api/courses")
    const courses = await response.json()

    let html = ""
    for (let course of courses){
        let courseID = course._id
        html+=`<li>${course.name} - ${course.description} - <a href="details.html?id=${courseID}">Details</a> 
        - <a href="edit.html?id=${courseID}">Edit</a></li><br>`
    }

    document.querySelector("#list_of_courses").innerHTML = html
    
})