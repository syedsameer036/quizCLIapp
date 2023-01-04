var readlineSync = require('readline-sync');
console.log("welcom to sameer quiz");
var user = readlineSync.question('whats your name ');
console.log("welcome " + user);
var score = 0;

function display(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer == current.answer){
    console.log("true");
    score = score+1;
  }else{
    console.log("false");
    
  }
  console.log(score);
  console.log("-------------------------------");
}
function finalScore(score){
  console.log("YOUR FINAL SCORE IS " +score);
}




var questions = [{
  question : "where i live ",
  answer: "raichur",

}
                 ,{
  question: "what i like to do ",
  answer: "listsen songs",
} 
                 ,{
  question: "what is fav color ",
  answer: "red",
}  
                 ,{
  question: "what is my fav super hero ",
  answer: "superman",
   }
                 ,{
  question: "which is your fav sports game ",
  answer: "cricket",
   }
];

// var questions = [q1,q2,q3];


  for (var i = 0; i < questions.length; i++) {
    var current = questions[i];    
  display(current.question,current.answer);
  }

  finalScore(score);
