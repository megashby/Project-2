var useranswers = Array();
var correct = 0;

function createQuiz() {
    for(q=0;q<questions.length;q++) {
    document.writeln('<p  class="question "blink"><span>'+questions[q]+' <p id="result_'+q+'"</span></p></p>');
    for(a=0;a<3;a++) {
      document.writeln('<p><span><input type="radio" name="answer_ '+q+'" value="'+choices[q][a]+'" id="answer_'+q +'_'+a+'" class="question_'+q+'" onclick="submitQuestion('+q+', this, \'question_'+q+'\')" /><label id="label_'+q+'_'+a+'" for="answer_'+q+'_'+a+'"> '+choices[q][a]+'</label><br /></span></p>');
    }
  }
  document.writeln('<p><input type="submit" value="Show Score" class = "btn btn-info" id= "ad_button" onclick="showTotalScore()" /></p><p style="display:none"></p>');
}


function submitQuestion(questionNum, obj, classNum) {
  useranswers[questionNum] = obj.value;
  disableQuestion(classNum);
  showResult(questionNum);

}
function showResult(questionNum) {
  // alert('the answer was '+answers[questionNum].toString())
  // alert('you answered '+useranswers[questionNum].toString())
  userAns = String(useranswers[questionNum]).trim(' ')
  sysAns = String(answers[questionNum]).trim(' ')

  // alert(userAns === sysAns)

  // alert('did you answer correctly? '+(userAns ===sysAns))
  if(userAns === sysAns) {
    // alert('you got it correct')
  correct++;
  } else {
    //alert('you got it incorrect')
  }
alert('your total number of correct questions: '+correct)
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
  var randX = Math.floor(Math.random() * 1100);
  var randY = Math.floor(Math.random() * 400);
  $(this).css({top: randY, left: randX});
}

function startAd() {
  $("#annoying_ad").show().css({top: 0, left: 0});
  $("#annoying_ad").mouseover(moveToRandomLocation);
}

// Starts jQuery event listeners (must be called after everything is loaded).
function setupListeners() {
  $("#ad_button").click(startAd);

}

// This function is automatically called when everything is done loading.
$(document).ready(function() {
  setupListeners();
});


