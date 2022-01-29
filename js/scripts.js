//BUSINESS LOGIC

//USER INTERFACE LOGIC
$(document).ready(function(){
  $("#survey").submit(function(event){
    
    const nameInput=$("input#name").val();
    const soup = $("#soup").val();

    $(".name").text(nameInput);
    // $(".soup").text(soup);

    if (soup === 'tomatoSoup') {
      $("#tomato").show();
      $("#pea").hide();
    } else if (soup === 'peaSoup') {
      $("#pea").show();
      $("#tomato").hide();
    }


    //TEST CODE
    alert(nameInput);
    alert(soup);

    $("#results").show();

    event.preventDefault();
  });
});

