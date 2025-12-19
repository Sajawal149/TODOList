const input = document.getElementById('task-add');
const button = document.getElementsByClassName('add-task');
const list = document.getElementsByClassName('task-list');

button[0].addEventListener('click', function(){
    inputValue = input.value;
    const li = document.createElement('li');
    li.innerText = inputValue;
    list[0].appendChild(li);
    input.value = '';
});


input.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        inputValue = input.value;
        const li = document.createElement('li');
        li.innerText = inputValue;
        list[0].appendChild(li);
    }
});



