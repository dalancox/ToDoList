//Selectors
let todoButton = document.getElementById('addTodo');
let todoList = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

//Functions

function addTodos() {
    var addingDivs = document.createElement('div')
    addingDivs.classList.add('p-style');
    addingDivs.innerText = inputField.value;
    todoList.appendChild(addingDivs);
    //Add Todo to Local storage
    inputField.value = "";


    addingDivs.addEventListener('click', function(){
        addingDivs.style.textDecoration = "line-through";
    })

    addingDivs.addEventListener('dblclick', function(){
        todoList.removeChild(addingDivs);
    })


}

//Event Listeners 

todoButton.addEventListener('click', addTodos);

todoButton.addEventListener('keyup', function(event){
    if(event.key == "Enter") {
        document.querySelector('addTodo').click;
    }
    }
);
