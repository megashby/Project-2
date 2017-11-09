

var useranswers = Array();
var correct = 0;

function createQuiz() {
  for(i=0;i<questions.length;i++) {
    document.writeln('<p  class="question"><span>'+questions[i]+' <p id="result_'+i+'"</span></p></p>');
    for(j=0;j<3;j++) {
      document.writeln('<p><span><input type="radio" name="answer_ '+i+'" value="'+choices[i][j]+'" id="answer_'+i +'_'+j+'" class="question_'+i+'" onclick="submitQuestion('+i+', this, \'question_'+i+'\')" /><label id="label_'+i+'_'+j+'" for="answer_'+i+'_'+j+'"> '+choices[i][j]+'</label><br /></span></p>');
    }
  }
  document.writeln('<p><input type="submit" value="Show Score" id= "ad_button" onclick="showTotalScore()" /></p><p style="display:none"></p>');
}

function submitQuestion(questionNum, obj, classNum) {
  useranswers[questionNum] = obj.value;
  disableQuestion(classNum);
  showResult(questionNum);
  startAd();

}
function showResult(questionNum) {
  alert('the answer was '+answers[questionNum].toString())
  alert('you answered '+useranswers[questionNum].toString())
  var1 = String(useranswers[questionNum]).trim(' ')
  var2 = String(answers[questionNum]).trim(' ')

  // alert(var1 === var2)

  alert('did you answer correctly? '+(var1 ===var2))
  if(var1 === var2) {
    // alert('you got it correct')
  correct++;
  } else {
    //alert('you got it incorrect')
  }
//alert('your total number of correct questions are '+correct)
}
function showTotalScore() {
  totalQuestions = answers.length;
  message = "You scored " + correct + " out of " + totalQuestions + "\n";
  alert(message)
  correct = 0;
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
      alltags[i].disabled = false;
  }
    }

function disableQuestion(classNum) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classNum) {
      alltags[i].disabled = true;
    }
  }
}

function moveToRandomLocation() {
  var width = $(window).width() - $(this).width();
  var randX = Math.floor(Math.random() * 1000);
  var randY = Math.floor(Math.random() * 1000);
  $(this).css({top: randX, left: randY});
}

function startAd() {
  $("#annoying_ad").show().css({top: 0, left: 0});
  $("#annoying_ad").mouseover(moveToRandomLocation);
  $("#annoying_ad").mousemove(moveToRandomLocation);
}

// Starts jQuery event listeners (must be called after everything is loaded).
function setupListeners() {
  $("#ad_button").click(startAd);
}

// This function is automatically called when everything is done loading.
$(document).ready(function() {
  // $(".readmore").text("Read More");
  // $(".details").hide();
  setupListeners();
});
