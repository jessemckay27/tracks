var addInputs = function(qOneInput, qTwoInput, qThreeInput, qFourInput, qFiveInput) {
  return (qOneInput + qTwoInput + qThreeInput + qFourInput + qFiveInput);
};

var numberCheck = function(result) {
  if (result <= -7) {
    $(".initial-hidden").hide();
    $("#css").show();
  } else if (result > -7 && result <= -3) {
    $(".initial-hidden").hide();
    $("#ruby").show();
  } else if (result > -3 && result <= 3) {
    $(".initial-hidden").hide();
    $("#java").show();
  } else if (result > 3 && result <= 6) {
    $(".initial-hidden").hide();
    $("#php").show();
  } else {
    $(".initial-hidden").hide();
    $("#c-sharp").show();
  }
}

$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();
    var qOneInput = parseInt($("input:radio[name=question1]:checked").val());
    var qTwoInput = parseInt($("input:radio[name=question2]:checked").val());
    var qThreeInput = parseInt($("input:radio[name=question3]:checked").val());
    var qFourInput = parseInt($("input:radio[name=question4]:checked").val());
    var qFiveInput = parseInt($("input:radio[name=question5]:checked").val());
    
    var result = addInputs(qOneInput, qTwoInput, qThreeInput, qFourInput, qFiveInput);

    if ($('input[name="question1"]:checked').length > 0 && $('input[name="question2"]:checked').length > 0 && $('input[name="question3"]:checked').length > 0 && $('input[name="question4"]:checked').length > 0 && $('input[name="question5"]:checked').length > 0) {
      numberCheck(result);
    } else {
      alert("One of more questions has not been answered.");
    }

  });
});
