// cathing the form and addEventListener to it
document.querySelector("form").addEventListener("submit",myTodo)
// catching the task and priority input and getting its value

// working with mytodo function in event listner
let todoArr=[]
function myTodo(){
    event.preventDefault()
    let input = document.getElementById("task").value
    let priority = document.getElementById("priority").value
    let todoObj={
        input,
        priority
    }
    todoArr.push(todoObj)
    displayTable(todoArr)
    
}

function displayTable(todoArr){
    // document.querySelector("tbody").innerHTML=""
    todoArr.map(function(ele){
        let tr = document.createElement("tr")
        let td1= document.createElement("td")
        td1.innerText = ele.input

        let td2 = document.createElement("td")
        td2.innerText = ele.priority

        let td3 = document.createElement("td")
        td3.innerText = "Add"

        if(ele.priority === "High"){
          td2.style.backgroundColor = "red"
        }
        else{
            td2.style.backgroundColor = "green"
        }
        tr.append(td1,td2,td3)
        document.querySelector("tbody").append(tr)

    })
}