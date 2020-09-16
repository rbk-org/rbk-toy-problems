// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.
var todo = {
  task  : "",
  complete: "",
  id: "" 
};
// EXERCISE 1
var todo1 = todoFactory('Complete exercise_1');
var todo2 = todoFactory('Complete exercise_2');
var todo3 = todoFactory('Complete exercise_3');
var todo4 = todoFactory('Complete exercise_4');

var todos = [todo1,todo2,todo3,todo4];

function todoFactory(task) {
  return {
    task: task,
    complete: false,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  };
}

// EXERCISE 2
function displayTodo(todo) {
  // your code here
  return todo.id +':'+ ' ' + todo.task + ' ' + todo.complete;
}

var myTodoList = makeTodoList(todos);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;
  var archive = [];
  return {
    display: function() {
      // EXERCISE 3
      display="";
      for (var i=0;i<todos.length;i++){
        display = display +i+'.' +displayTodo(todos[i]) + '\n';
      }
      return display;
    },
    add: function(task) {
      // EXERCISE 4
      var todo = todoFactory(task);
      todos.push(todo)
    },
    toggleComplete: function(id){
      for(var i=0;i<todos.length;i++){
        if(todos[i]['id']===id){
          todos[i]['complete'] = !todos[i]['complete'];
        }
      }
    },
    remove: function(){
      for(var i=0;i<todos.length;i++){
          // console.log(todos[i]);  
        if(todos[i]['complete']=== true){
          // console.log(todos[i]);
          archive.push(todos[i]);
          todos.splice(i,1);
          i--;
        }
      } 
    },
    unarchive: function(id){
      for(var i=0;i<archive.length;i++){
        if(archive[i]['id']===id){
          todos.push(archive[i]);
          archive.splice(i,1);    
        }
      }
    },
    displayArchive:function(){
      display="";
      for (var i=0;i<archive.length;i++){
        display = display + displayTodo(archive[i]) + '\n';
      }
      return display;
    },
    clearArchived:function(){
      archive.length = 0;
      // archive = [];
    },
    move: function(from,to){

    }
  }
}

myTodoList.toggleComplete(2);
// myTodoList.toggleComplete(3);

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}
