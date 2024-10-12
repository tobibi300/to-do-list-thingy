let task
let paragraphs = []
let checkboxes = []
let taskCounter = 0
document.getElementById("addButton").onclick = () => {
    task = document.getElementById("taskBox").value
    console.log(task)
    taskCounter++
    const paragraph = document.createElement("p")
    paragraph.textContent = task
    paragraph.id = "task_" + taskCounter
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "checkBox_" + taskCounter
    document.getElementById("taskList").appendChild(paragraph)
    document.getElementById("taskList").appendChild(checkbox)
    const br = document.createElement("br")
    document.getElementById("taskList").appendChild(br)
    document.getElementById("taskBox").value = ''
    paragraphs.push(paragraph)
    checkboxes.push(checkbox)
    checkbox.addEventListener("change", function(event) {
        if (event.target.checked) {
            console.log("pogchamp")
            document.getElementById("doneList").appendChild(paragraph)
            document.getElementById("doneList").appendChild(checkbox)
            const br = document.createElement("br")
            document.getElementById("doneList").appendChild(br)
            document.getElementById("taskList").removeChild(br)
        }
    })
}
