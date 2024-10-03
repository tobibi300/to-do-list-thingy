let task
let paragraph
let checkbox
document.getElementById("addButton").onclick= function(){
    task=document.getElementById("taskBox").value
    console.log(task)
    paragraph=document.createElement("p")
    paragraph.textContent=task
    document.getElementById("taskList").appendChild(paragraph)
    document.getElementById("taskBox").value = ''
    checkbox=document.createElement("input") 
    checkbox.type="checkbox"
    checkbox.id="doneBox"
    document.getElementById("taskList").appendChild(checkbox)
    const br=document.createElement("br")
    br.id="brLine"
    document.getElementById("taskList").appendChild(br)
}
