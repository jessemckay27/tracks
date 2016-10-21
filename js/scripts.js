var addInputs = function(qOneInput, qTwoInput, qThreeInput, qFourInput, qFiveInput) {
  return (qOneInput + qTwoInput + qThreeInput + qFourInput + qFiveInput);
};


$(document).ready(function(){
  $("form#questions").submit(function(event){
    event.preventDefault();

    var qOneInput = parseInt($("input:radio[name=question1]:checked").val());
    var qTwoInput = parseInt($("input:radio[name=question2]:checked").val());
    var qThreeInput = parseInt($("input:radio[name=question3]:checked").val());
    var qFourInput = parseInt($("input:radio[name=question4]:checked").val());
    var qFiveInput = parseInt($("input:radio[name=question5]:checked").val());
    var result;

    result = addInputs(qOneInput, qTwoInput, qThreeInput, qFourInput, qFiveInput);



    if($('input:radio:checked').length > 0){
      alert(result);
    } else {
      alert("Please check all buttons before submitting.");
    }

  });
});







// alert("its working!");
