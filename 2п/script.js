let addButton = document.querySelector("#button")
let input = document.querySelector("#input1")
let tasks = document.getElementById('tasks')
let completed_tasks = document.getElementById("complited-tasks")
let uncompleted_tasks = document.getElementById("uncomplited-tasks")
let counter = 0;
let counter_completed = 0;
let counter_uncompleted = 0;


function schow_text(){
    let task = document.createElement('div')
    tasks.append(task)

    let checkMark = document.createElement('input')
    checkMark.type = 'checkbox'
    task.append(checkMark)
    checkMark.addEventListener('click', function(){
        oneTask.classList.toggle('cheked')
        if(counter === 0){
            completed_tasks.innerText = ++counter_completed;
            uncompleted_tasks.innerText = --counter_uncompleted;
        }
        else{
            completed_tasks.innerText = --counter_completed;
            uncompleted_tasks.innerText = ++counter_uncompleted;
        }
        
    })

    let oneTask = document.createElement('p')
    oneTask.innerText = input.value
    task.append(oneTask)
    ++counter_uncompleted;

    let but_del = document.createElement('button')
    but_del.innerText = 'Delete'
    task.append(but_del)
    but_del.addEventListener("click",function(){
        task.style.display= "none";
        if (oneTask.classList.contains("cheked") )
        {
            completed_tasks.innerText = --counter_completed;
        }
        else{
            uncompleted_tasks.innerText = --counter_uncompleted;
        }
    })


    let but_edit = document.createElement('button')
    but_edit.innerText = 'Edit'
    task.append(but_edit)
    but_edit.addEventListener("click",function(){
        checkMark.style.display="none";
        but_del.style.display="none";
        but_edit.style.display="none";

        let input_edit =document.createElement("input");
        input_edit.value = oneTask.innerText;
    
        let button_save = document.createElement("button");
        button_save.innerText = "save";
        task.append(input_edit);
        task.append(button_save);
        button_save.addEventListener("click",function(){
            checkMark.style.display = "block";
            but_del.style.display = "block";
            but_edit.style.display = "block";
            oneTask.innerText = input_edit.value;
            button_save.style.display = "none";
            input_edit.style.display = "none";
        })
    })

    input.value = ''
    
}
addButton.addEventListener("click", schow_text)