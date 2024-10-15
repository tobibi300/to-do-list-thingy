let task
let paragraphs = []
let checkboxes = []
let stevens = [] //delete button
let edits = []
let taskCounter = 0

document.getElementById("addButton").onclick = () => {
    task = document.getElementById("taskBox").value
    if (task == ""){
        console.log("( ͡° ͜ʖ ͡°)")
    }
    else{
        taskCounter++
    const paragraph = document.createElement("p")
    paragraph.textContent = task
    paragraph.id = "task_" + taskCounter

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.id = "checkBox_" + taskCounter

    const steven = document.createElement("button")
    steven.type = "button"
    steven.id = "delete_" + taskCounter
    steven.textContent = "x"

    document.getElementById("taskList").appendChild(paragraph)
    document.getElementById("taskList").appendChild(checkbox)
    document.getElementById("taskList").appendChild(steven)

    const br = document.createElement("br")
    document.getElementById("taskList").appendChild(br)
    document.getElementById("taskBox").value = ''

    stevens.push(steven)
    paragraphs.push(paragraph)
    checkboxes.push(checkbox)

    checkbox.addEventListener("change", function(event) {
        if (event.target.checked) {
            console.log("pogchamp")
            br.remove()
            const index = checkboxes.indexOf(event.target)
            let wrapperDiv = document.createElement("div");
            wrapperDiv.appendChild(paragraphs[index]);
            wrapperDiv.appendChild(checkboxes[index]);
            wrapperDiv.appendChild(stevens[index]);
            document.getElementById("doneList").appendChild(wrapperDiv)
        }
        else {
            console.log("unpogchamp D:")
            const index = checkboxes.indexOf(event.target)
            let wrapperDiv = document.createElement("div");
            wrapperDiv.appendChild(paragraphs[index]);
            wrapperDiv.appendChild(checkboxes[index]);
            wrapperDiv.appendChild(stevens[index]);
            wrapperDiv.appendChild(stevens[index]);
            document.getElementById("taskList").appendChild(wrapperDiv)
        }
    })

    steven.onclick=(event) => {
        console.log("stevens workin :D")
        const stevedex = stevens.indexOf(event.target)
        paragraphs[stevedex].remove()
        checkboxes[stevedex].remove();
        stevens[stevedex].remove();
        paragraphs.splice(stevedex, 1);
        checkboxes.splice(stevedex, 1);
        stevens.splice(stevedex, 1);
    }
}
}
