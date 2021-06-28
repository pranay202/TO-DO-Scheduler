const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");

            updateLS();
        });

        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();

            todoEl.remove();

            updateLS();
        });

        todosUL.appendChild(todoEl);

        input.value = "";

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll("li");
    const timer = document.querySelector("li");

    const todos = [];

    todosEl.forEach((todoEl,timer) => {
        todos.push({
            text: todoEl.innerText,
            text: timer.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    localStorage.setItem("todos", JSON.stringify(todos));
}




function alarmG(){


  var sound = new Audio();
sound.src = 'alarm.wav';
var timer;
 
function setAlarm(el){
	var time = document.getElementById('alarmTime').valueAsNumber;
	if(isNaN(time)){
		alert("Invalid DateTime");
		return;
	}
 
	var alarm = new Date(time);
	var alarmTime = new Date(alarm.getUTCFullYear(), alarm.getUTCMonth(), alarm.getUTCDate(), alarm.getUTCHours(), alarm.getUTCMinutes(), alarm.getUTCSeconds());
	var duration = alarmTime.getTime() - (new Date()).getTime();
 
	if(duration < 0){
		alert('Time is already passed');
		return;
	}
 
	timer = setTimeout(initAlarm, duration);
	el.innerHTML = "<span class='glyphicon glyphicon-remove'></span> Cancel Alarm";
	el.setAttribute('onclick', 'cancelAlarm(this);');
	el.setAttribute('class', 'btn btn-danger');
}
 
 
function cancelAlarm(el){
	el.innerHTML = "<span class='glyphicon glyphicon-time'></span> Set Alarm";
	el.setAttribute('onclick', 'setAlarm(this);');
	el.setAttribute('class', 'btn btn-success');
	clearTimeout(timer);
}
 
function initAlarm(){
	sound.loop = true;
	sound.play();
	document.getElementById('alarmButton').style.display = 'none';
	document.getElementById('selectButton').style.display = '';
}
 
function stopAlarm(){
	sound.pause();
	sound.currentTime = 0;
	document.getElementById('selectButton').style.display = 'none';
	cancelAlarm(document.getElementById('alarmButton'));
	document.getElementById('alarmButton').style.display = '';
}
 
function snoozeAlarm(){
	stopAlarm();
	setTimeout(initAlarm, 300000);
	button.innerText = "Cancel Alarm";
	button.setAttribute('onclick', 'cancelAlarm(this);');
}

}