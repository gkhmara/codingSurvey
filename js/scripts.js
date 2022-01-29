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
    $(".name").text(nameInput);

    //Question One
    if (soup === 'tomatoSoup') {
      $("#tomato").show();
      $("#pea").hide();
    } else if (soup === 'peaSoup') {
      $("#pea").show();
      $("#tomato").hide();
    }

    //Question Two
    if (hat === 'tallHat') {
      $("#tallHat").show();
      $("#shortHat").hide();
    } else if (hat === 'shortHat') {
      $("#shortHat").show();
      $("#tallHat").hide();
    }

    //Question Three
    if (buttonLever === 'button') {
      $("#button").show();
      $("#lever").hide();
    } else if (buttonLever === 'lever') {
      $("#lever").show();
      $("#button").hide();
    }

    //Question Four
    if (food === 'hunt') {
      $("#hunt").show();
      $("#farm").hide();
    } else if (food === 'farm') {
      $("#farm").show();
      $("#hunt").hide();
    }

    //Question Five
    if (grapes === 'green') {
      $("#green").show();
      $("#purple").hide();
    } else if (grapes === 'purple') {
      $("#purple").show();
      $("#green").hide();
    }

     //ACTUAL FINAL OUTPUT
     if (soup === 'tomatoSoup') {
      $('#one').show();
      $('#two').hide();
      $('#three').hide();
    } else if (soup === 'peaSoup') {
      $('#two').show();
      $('#one').hide();
      $('#three').hide();
    } else if (hat === 'tallHat') {
      $('#three').show();
      $('#one').hide();
      $('#two').hide();
    } else if (hat === 'shortHat') {
      $('#one').show();
      $('#two').hide();
      $('#three').hide();
    } else if (buttonLever === 'button') {
      $('#two').show();
      $('#one').hide();
      $('#three').hide();
    } else if (buttonLever === 'lever') {
      $('#three').show();
      $('#one').hide();
      $('#two').hide();
    } else if (food === 'hunt')

    //FINAL RESULTS TEST
    // if (soup === 'tomatoSoup' && hat === 'tallHat' && buttonLever === 'button') {
    //   $('#one').show();
    //   $('#two').hide();
    //   $('#three').hide();
    //   $('#four').hide();
    //   $('#five').hide();
    //   $('#six').hide();
    //   $('#seven').hide();
    //   $('#eight').hide();
    // } else if (soup === 'tomatoSoup' && hat === 'tallHat' && buttonLever === 'lever') {
    //   $('#two').show();
    //   $('#one').hide();
    //   $('#three').hide();
    //   $('#four').hide();
    //   $('#five').hide();
    //   $('#six').hide();
    //   $('#seven').hide();
    //   $('#eight').hide();
    // } else if (soup === 'tomatoSoup' && hat === 'shortHat' && buttonLever === 'button') {
    //   $('#three').show();
    //   $('#one').hide();
    //   $('#two').hide();
    //   $('#four').hide();
    //   $('#five').hide();
    //   $('#six').hide();
    //   $('#seven').hide();
    //   $('#eight').hide();
    // } else if (soup === 'tomatoSoup' && hat === 'shortHat' && buttonLever === 'lever') {
    //   $('#four').show();
    //   $('#one').hide();
    //   $('#two').hide();
    //   $('#three').hide();
    //   $('#five').hide();
    //   $('#six').hide();
    //   $('#seven').hide();
    //   $('#eight').hide();
    // } else if (soup === 'peaSoup' && hat === 'tallHat' && buttonLever === 'button') {
    //   $('#five').show();
    //   $('#one').hide();
    //   $('#two').hide();
    //   $('#three').hide();
    //   $('#four').hide();
    //   $('#six').hide();
    //   $('#seven').hide();
    //   $('#eight').hide();
    // } else if (soup === 'peaSoup' && hat === 'tallHat' && buttonLever === 'lever') {
    //   $('#six').show();
    //   $('#one').hide();
    //   $('#two').hide();
    //   $('#three').hide();
    //   $('#four').hide();
    //   $('#five').hide();
    //   $('#seven').hide();
    //   $('#eight').hide();
    // } else if (soup === 'peaSoup' && hat === 'shortHat' && buttonLever === 'button') {
    //   $('#seven').show();
    //   $('#one').hide();
    //   $('#two').hide();
    //   $('#three').hide();
    //   $('#four').hide();
    //   $('#five').hide();
    //   $('#six').hide();
    //   $('#eight').hide();
    // } else if (soup === 'peaSoup' && hat === 'shortHat' && buttonLever === 'lever') {
    //   $('#eight').show();
    //   $('#one').hide();
    //   $('#two').hide();
    //   $('#three').hide();
    //   $('#four').hide();
    //   $('#five').hide();
    //   $('#six').hide();
    //   $('#seven').hide();
    // }

    //TEST CODE
    alert(nameInput);
    alert(soup);
    alert(hat);
    alert(buttonLever);
    alert(food);
    alert(grapes);

    $("#results").show();

    event.preventDefault();
  });
});

