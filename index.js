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
            const index = checkboxes.indexOf(event.target)
            document.getElementById("doneList").appendChild(paragraphs[index])
            document.getElementById("doneList").appendChild(checkboxes[index])
            const doneBr = document.createElement("br")
            document.getElementById("doneList").appendChild(doneBr)

        }
        else {
            console.log("unpogchamp D:")
            const index = checkboxes.indexOf(event.target)
            document.getElementById("taskList").appendChild(paragraphs[index])
            document.getElementById("taskList").appendChild(checkboxes[index])
            const doneBr = document.createElement("br")
            document.getElementById("taskList").appendChild(doneBr)

        }
    })
}
