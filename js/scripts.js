//BUSINESS LOGIC

//USER INTERFACE LOGIC
$(document).ready(function(){
  $("#survey").submit(function(event){
    
    const nameInput=$("input#name").val();
    const soup = $("select#soup").val();
    const hat = $("select#hat").val();

    //Name Question
    $(".name").text(nameInput);

    //Soup Question
    if (soup === 'tomatoSoup') {
      $("#tomato").show();
      $("#pea").hide();
    } else if (soup === 'peaSoup') {
      $("#pea").show();
      $("#tomato").hide();
    }

    //Hat Question
    if (hat === 'tallHat') {
      $("#tallHat").show();
      $("#shortHat").hide();
    } else if (hat === 'shortHat') {
      $("#shortHat").show();
      $("#tallHat").hide();
    }

    //FINAL RESULTS TEST
    if (soup === 'tomatoSoup' && hat === 'tallHat') {
      $('#one').show();
      $('#two').hide();
      $('#three').hide();
      $('#four').hide();
    } else if (soup === 'tomatoSoup' && hat === 'shortHat') {
      $('#two').show();
      $('#one').hide();
      $('#three').hide();
      $('#four').hide();
    } else if (soup === 'peaSoup' && hat === 'tallHat') {
      $('#three').show();
      $('#one').hide();
      $('#two').hide();
      $('#four').hide();
    } else if (soup === 'peaSoup' && hat === 'shortHat') {
      $('#four').show();
      $('#one').hide();
      $('#two').hide();
      $('#three').hide();
    }



    //TEST CODE
    alert(nameInput);
    alert(soup);
    alert(hat);

    $("#results").show();

    event.preventDefault();
  });
});

