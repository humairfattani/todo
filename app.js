var a = document.getElementById("input")
var b = document.getElementById("showlist")

function addtodo(){
    var input = a.value
    var inp = document.createTextNode(input)
    var to = document.createElement('li')
    to.setAttribute('class','style')
    to.appendChild(inp)
    b.appendChild(to)
    
    var ab = document.createElement('button')
    ab.setAttribute('onclick','deletedTodo(this)')
    var ac = document.createTextNode('DELETE')
    ab.appendChild(ac)
    to.appendChild(ab)


    var editbtn = document.createElement('button')
    editbtn.setAttribute('onclick','editTodo(this)')
    var editText = document.createTextNode('EDIT')
    editbtn.appendChild(editText)
    to.appendChild(editbtn)

    a.value = ''

}
function deletedTodo(element){
    element.parentNode.remove()
    
}
function editTodo(edit){
    edit.parentNode.firstChild.nodeValue=prompt('User Edit',edit.parentNode.firstChild.nodeValue)
}
function deleteall(){
    b.innerHTML=""
}