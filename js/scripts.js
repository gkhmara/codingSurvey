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
      $('#four').hide();
      $('#five').hide();
    } else if (Boolean(nameInput) === true){
      $(".name").text(nameInput);
      $("#error").hide();
      $("#nameOutput").show();

      //Final Output
      if (soup === 'peaSoup') {
        $('#one').show();
        $('#two').hide();
        $('#three').hide();
        $('#four').hide();
        $('#five').hide();
      } else if (hat === 'tallHat') {
        $('#two').show();
        $('#one').hide();
        $('#three').hide();
        $('#four').hide();
        $('#five').hide();
      } else if (buttonLever === 'button') {
        $('#three').show();
        $('#one').hide();
        $('#two').hide();
        $('#four').hide();
        $('#five').hide();
      } else if (food === 'farm') {
        $('#four').show();
        $('#one').hide();
        $('#two').hide();
        $('#three').hide();
        $('#five').hide();
      } else if (grapes === 'purple') {
        $('#five').show();
        $('#one').hide();
        $('#two').hide();
        $('#three').hide();
        $('#four').hide();
      } else if (grapes === 'green') {
        $('#one').show();
        $('#two').hide();
        $('#three').hide();
        $('#four').hide();
        $('#five').hide();
      } else {
        $('#one').hide();
        $('#two').hide();
        $('#three').hide();
        $('#four').hide();
        $('#five').hide();
      }
    }

    //Show Final Results
    $("#results").show();

    event.preventDefault();
  });
});

