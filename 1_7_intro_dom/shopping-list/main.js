var inputElt = document.querySelector('input');
var btnElt = document.querySelector('button');
var listElt = document.querySelector('.shopping-list');

btnElt.onclick = function addItem() {

	var newItem = inputElt.value;

	var newTodo = document.createElement('li');
	// var newTodoText = document.createElement('span')
	newTodo.textContent = newItem;

	var deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'delete';
	deleteBtn.onclick = function deleteItem(){
		//var deleteItem = deleteBtn.parentNode;
		listElt.removeChild(newTodo);

	}
	newTodo.appendChild(deleteBtn);

	listElt.appendChild(newTodo);

	
}
