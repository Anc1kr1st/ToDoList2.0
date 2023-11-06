function createTodolist(){
    var text = $("#input").val();
    if (text === '') {
        alert("You must write something!");
    } else {
    $("ul").append(`<li class="clickable">${text}</li>`);
    }
}



$("#addtolist").click(createTodolist);

