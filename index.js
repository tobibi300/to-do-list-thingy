let task
let paragraph
let checkbox
let taskCounter = 0
document.getElementById("addButton").onclick = () => {
    task = document.getElementById("taskBox").value
    console.log(task)
    taskCounter++
    paragraph = document.createElement("p")
    paragraph.textContent = task
    paragraph.id = "task_" + taskCounter
    checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "checkBox_" + taskCounter
    document.getElementById("taskList").appendChild(paragraph)
    document.getElementById("taskList").appendChild(checkbox)
    const br = document.createElement("br")
    document.getElementById("taskList").appendChild(br)
    document.getElementById("taskBox").value = ''
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            console.log("pogchamp")       document.getElementById("taskList").appendChild(paragraph)
document.getElementById("taskList").appendChild(checkbox)
document.getElementById("taskList").appendChild(br)
        }
    })
}
