function createTodolist(){
    var text = $("#input").val();
    if (text === '') {
        alert("You must write something!");
    } else {
    $("ul").append(`<li class="clickable">${text}</li>`);
    }
}

function linethrough(){
    $(".clickable").css('text-decoration', 'line-through');
}

$("#addtolist").click(createTodolist);
$(".clickable").click(linethrough);
