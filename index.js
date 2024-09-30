let task
let paragraph
let checkbox
document.getElementById("addButton").onclick= function(){
    task=document.getElementById("taskBox").value
    console.log(task)
    checkbox=document.createElement("input") 
    checkbox.type="checkbox"
    checkbox.id="doneBox"
    document.getElementById("taskList").appendChild(checkbox)
    paragraph=document.createElement("p")
    paragraph.textContent=task
    document.getElementById("taskList").appendChild(paragraph)
    document.getElementById("taskBox").value = ''

}