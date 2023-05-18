const addToDoButton = document.querySelector('#addTask');
const inputField = document.querySelector('#userTaskInput');
const toDoContainer = document.querySelector('.todos');

inputField.addEventListener('click', selectInput);
addToDoButton.addEventListener('click', addTask)


function selectInput() {
    inputField.style['boxShadow'] = '0 6px 2px -2px pink'
}

function addTask() {
    if(inputField.value.trim().length) {
    let newToDo = document.createElement('li');
    newToDo.classList.add('li-styling');
    newToDo.innerText = inputField.values;
    toDoContainer.appendChild(newToDo);

    }
    else{
        console.log('empty value');
    }
}