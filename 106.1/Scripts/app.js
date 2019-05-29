
var todoList = [];

function init(){
    
    var lbl = document.getElementById("lblTodo");
    lbl.innerText = "Get it done!";

    

    var btn = document.getElementById("btnSave");
  

   btn.onclick = saveTodo;
};

function init2(){

    var lbl = $("#lblTodo");
    lbl.innerText = "jQuery rules??";

    $("#btnSave").click(saveTodo);

};


function saveTodo(){
    var txt = $("#txtTodo");
    var todoText = txt.val();
    console.log(todoText);

    if(todoText.length < 1) {
        txt.addClass('error');

        alert("You entry was blank please try again!");
        console.log("Nothing was stored.");

    } else{
    
    txt.removeClass('error');
    todoList.push(todoText);
    txt.val('');
    displayTodo(todoText);

    };
    
};

function displayTodo(simpleText) {

var ul = $("#todoList");

var li = "<li class='list-group-item myItem'>"  + simpleText + "</li>"

ul.append(li);

};



window.onload = init2;