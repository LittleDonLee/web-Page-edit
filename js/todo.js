const todoForm = document.getElementById("todo-form");
const todoinput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let toDos = [];  //a,b,c,d,e
//5
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
    
}
//4
function deleteToDo(event){
    //아래 li와는 전혀 다른 변수
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id) );
    saveToDos();

     
}



//3   a,b,c,d,e
function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span= document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.addEventListener("click",deleteToDo);
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
     todoList.appendChild(li);
    
     
      

}

//2
function handleToDosubmit (event){
    event.preventDefault(); 
    const newToDo = todoinput.value;
    todoinput.value="";
    
    const newToDoObj={
        text:newToDo, id:Date.now(),
    };
    
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}
//1
todoForm.addEventListener("submit",handleToDosubmit);



//6
const savedToDos = localStorage.getItem(TODOS_KEY);


//7
if(savedToDos !==null){
    const parsedToDos = JSON.parse(savedToDos);
     toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}
