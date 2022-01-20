import { useEffect, useState } from "react";
import useSound from "use-sound";

import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";
import quiz from "../sounds/quiz.mp3";
import {Howl, Howler} from 'howler';

export default function Trivia({
  data,
  questionNumber,
  setQuestionNumber,
  setTimeOut,
}) {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);
  
  const [quizSound] = useSound(quiz)


  const [check, setCheck] = useState([])
  const [uniqueRandoms, setUniqueRandoms] = useState([])

 
  var sound = new Howl({
    src: quiz,

  });

  useEffect(() => {
  
 // Clear listener after first call.
sound.once('load', function(){
  console.log("start")
  sound.play();
});

// Fires when the sound finishes playing.
sound.on('end', function(){
  console.log('Finished!');
  sound.play();
});


}, [setTimeOut]);


  

  function makeUniqueRandom() {
    
  var numRandoms = 16;
    // refill the array if needed
    if (!uniqueRandoms.length && uniqueRandoms.length === 0) {
        for (var i = 1; i < numRandoms; i++) {
       
            uniqueRandoms.push(i)
        }
    }
 
 

    do {
   
    
      var index = Math.floor(Math.random() * uniqueRandoms.length);
      var val = uniqueRandoms[index];
      
      console.log(val)
      console.log(check)
      console.log(check.toString().indexOf(val.toString()) !== -1)
      console.log(uniqueRandoms)
      
      
  } while(check.toString().indexOf(val.toString()) !== -1);
  uniqueRandoms.splice(index, 1);
  setCheck([...check, val])
 
      
      
      
     
    
    

  return val
    
}


    

useEffect(() => {
  var randomNumber = makeUniqueRandom()
    console.log("render")
    console.log(randomNumber)
    
  

    
      setQuestion(data[randomNumber - 1]);
     
  }, [questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
};

const handleClick = (a) => {

    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    // setTimeout(() => {
    //   setClassName(a.correct ? "answer correct" : "answer wrong");
    // }, 3000);

    // setTimeout(() => {
      delay(5000, () => {
      if (a.correct) {
        correctAnswer();
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);

        });
        // setTimeout(() => {
        //   setQuestionNumber((prev) => prev + 1);
        //   setSelectedAnswer(null);
        // }, 1000);
      } else {
        wrongAnswer();
        delay(1000, () => {
          setTimeOut(true);
        });
        // setTimeout(() => {
        //   setTimeOut(true);
        // }, 1000);
      }
    // }, 5000);
      })
};
  return (
    <div className="trivia">
      <div className="question">{question?.question}</div>
      <div className="answers">
      
        {question?.answers.map((a) => (
          <div
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => !selectedAnswer && handleClick(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
}
