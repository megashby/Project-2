
var useranswers = new Array();
// var answered = 0;
var correct = 0;

function renderQuiz() {
  for(i=0;i<questions.length;i++) {
    document.writeln('<p class="question">' + questions[i] + ' <span id="result_' + i + '"></span></p>');
    for(j=0;j<choices[i].length;j++) {
      document.writeln('<input type="radio" name="answer_' + i + '" value="' + choices[i][j] + '" id="answer_' + i + '_' + j + '" class="question_' + i + '" onclick="submitAnswer(' + i + ', this, \'question_' + i + '\')" /><label id="label_' + i + '_' + j + '" for="answer_' + i + '_' + j + '"> ' + choices[i][j] + '</label><br />');
    }
  }
  document.writeln('<p><input type="submit" value="Show Score" onclick="showScore()" /></p><p style="display:none"></p>');
}

function submitAnswer(questionId, obj, classId) {
  useranswers[questionId] = obj.value;
  disableQuestion(classId);
  showResult(questionId);
  // answered++;
  // alert(answered)
}
function showResult(questionId) {
  alert('the answer was '+answers[questionId].toString())
  alert('you answered '+useranswers[questionId].toString())
  alert('did you answer correctly? '+(answers[questionId].toString() == useranswers[questionId].toString()))
  if(answers[questionId] == useranswers[questionId]) {
    // alert('you got it correct')
  correct++;
  } else {
    // alert('you got it incorrect')
  }
alert('your total number of correct questions are '+correct)
}
function showScore() {
  questionCount = answers.length;
  correct = 0;
  incorrect = 0;
  for(i=0;i<questionCount;i++) {
    if(useranswers[i] == answers[i])
      correct++;
    else
      incorrect++;
  }
  pc = Math.round((correct / questionCount) * 100);
  alertMsg = "You scored " + correct + " out of " + questionCount + "\n\n";
  alert(alertMsg)
  
}

function disableQuestion(classId) {
  var alltags=document.all? document.all : document.getElementsByTagName("*")
  for (i=0; i<alltags.length; i++) {
    if (alltags[i].className == classId) {
      alltags[i].disabled = true;
    }
  }
}


