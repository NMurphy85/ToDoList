const list = document.querySelector(".list");
const input = document.querySelector('input');


let toDoList = [];
let listItemAdd = "";
let counter = 0;

function listItem(event) {
  listItemAdd = event.target.value; // this is the exact value thats in the button when we change it.
  // this goes into the function and shows what we will be printing out on the web page.
}
function addTask() {
  console.log(toDoList)
  if (!listItemAdd) {
    return;
  }
  toDoList.push({
    // you cannot have an equals sign in front of push.  it breaks the entire app!
        id: counter++,  // this makes the ids increment by one  starting at zero. 
        //this keeps the numbers from overlapping. 
      task: listItemAdd, 
    })
  

renderList();
input.value = '';
listItemAdd = "";
}

function deleteTask(id) {
  toDoList = toDoList.filter((list) => list.id !== id);
  renderList();
  // when you make a variable global, make sure you remove it from other places in your code, or it wont work!!
}
function renderList() {
  list.innerHTML = toDoList
  .map(
      (element) =>
        `<li>
    ${element.task}
    <button onclick="deleteTask(${element.id})" class="todo__delete">
    x
    </button>
    </li>`
    )
    .join("");
}
