// alert ('Hello')
const addTaskbtn = document.getElementById('addTask')
const taskTextField = document.getElementById('task')
const recodsDisplay = document.getElementById('records')
const btnText=addTaskbtn.innerText
let taskArray = []
let Edit_id=null
// data get
let objstr = localStorage.getItem('tasks')
// console.log(objstr)
if (objstr!=null){
    // console.log(objstr)
    taskArray = JSON.parse(objstr)  // JSON convert into object

}
displayTask()

// console.log(taskArray)

addTaskbtn.onclick = () => {
    const name = taskTextField.value
    // alert(name)
    if(Edit_id !=null){
        taskArray.splice(Edit_id,1,{'taskname':name})
    }else {
        taskArray.push({ 'taskname': name })

    }
    
    // console.log(taskArray)
    savetask(taskArray)
    taskTextField.value=''
    addTaskbtn.innerText=btnText
}

function savetask(taskArray) {
    // console.log(taskArray)
    let str = JSON.stringify(taskArray)
    // console.log(str)
    localStorage.setItem('tasks',str)
    displayTask()
}
function displayTask(){
    let data = ''
    taskArray.forEach((user,i)=>{
        console.log(user)
        data += `<tr>
        <th scope="row">${i+1}</th>
        <td>${user.taskname}</td>
        <td><i class="btn text-white fa fa-edit btn-info mx-2" onclick='EditInfo(${i})'></i> <i class="btn btn-danger text-white fa fa-trash" onclick='DeleteInfo(${i})'></i></td>
      </tr>`;
    })
    recodsDisplay.innerHTML=data
    // console.log(data)
}

function DeleteInfo(id){
    alert("Do you want to delete"+ id)
    taskArray.splice(id,1)
    savetask(taskArray)
} 
function EditInfo(id){
    // alert("id")
    Edit_id=id
    taskTextField.value=taskArray[id].taskname
    addTaskbtn.innerText='Update task'
}
