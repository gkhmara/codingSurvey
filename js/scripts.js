//BUSINESS LOGIC

//USER INTERFACE LOGIC
$(document).ready(function(){
  $("#survey").submit(function(event){
    
    const nameInput=$("input#name").val();
    const soup = $("select#soup").val();
    const hat = $("select#hat").val();
    const buttonLever = $("select#buttonLever").val();
    const food = $("select#food").val();
    const grapes = $("select#grapes").val();

    //Name Question
    if (Boolean(nameInput) === false) {
      $("#nameOutput").hide();
      $("#error").show();
      $('#one').hide();
      $('#two').hide();
      $('#three').hide();
    } else if (Boolean(nameInput) === true){
      $(".name").text(nameInput);
      $("#error").hide();
      $("#nameOutput").show();

      //ACTUAL FINAL OUTPUT
      if (food === 'farm') {
        $('#three').show();
        $('#one').hide();
        $('#two').hide();
      } else if (soup === 'peaSoup') {
        $('#two').show();
        $('#one').hide();
        $('#three').hide();
      } else if (hat === 'tallHat') {
        $('#three').show();
        $('#one').hide();
        $('#two').hide();
      } else if (buttonLever === 'button') {
        $('#one').show();
        $('#two').hide();
        $('#three').hide();
      } else if (grapes === 'purple') {
        $('#two').show();
        $('#one').hide();
        $('#three').hide();
      } else if (grapes === 'green') {
        $('#one').show();
        $('#two').hide();
        $('#three').hide();
      } else {
        $('#one').hide();
        $('#two').hide();
        $('#three').hide();
      }
    }

    //TESTCODE
    alert(typeof nameInput);
    alert(nameInput.length)
    alert(Boolean(nameInput))

    $("#results").show();

    event.preventDefault();
  });
});

