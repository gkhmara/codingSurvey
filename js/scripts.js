//BUSINESS LOGIC

//USER INTERFACE LOGIC
$(document).ready(function(){
  $("#survey").submit(function(event){
    event.preventDefault();
    const nameInput=$("input#name").val();

    $(".name").text(nameInput);

    $("#results").show();
  });
});