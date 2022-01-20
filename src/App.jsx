import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");
  const [records, setRecords] = useState([])
  
  



const handleClick = () => {

  if(timeOut === true){
    setRecords([...records, {name:username, earn:earned}])
  }
  
  
  setEarned("$ 0")
  setUsername(null)
  setTimeOut(false)
  setQuestionNumber(1)

};

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "A person with well-developed abdominal muscles is said to have a what?",
      answers: [
        {
          text: "One-pack",
          correct: false,
        },
        {
          text: "Six-pack",
          correct: true,
        },
        {
          text: "12-pack",
          correct: false,
        },
        {
          text: "Family-pack",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Which two words traditionally appear onscreen at the termination of a feature film?",
      answers: [
        {
          text: "The End",
          correct: true,
        },
        {
          text: "The Conclusion",
          correct: false,
        },
        {
          text: "The Finish",
          correct: false,
        },
        {
          text: "The Pizza Rolls Are Done",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "A magnet would most likely attract which of the following?",
      answers: [
        {
          text: "Metal",
          correct: true,
        },
        {
          text: "Plastic",
          correct: false,
        },
        {
          text: "Wood",
          correct: false,
        },
        {
          text: "The Wrong Man",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Which of these names is not in the title of a Shakespeare play?",
      answers: [
        {
          text: "Hamlet",
          correct: false,
        },
        {
          text: "Romeo",
          correct: false,
        },
        {
          text: "Macbeth",
          correct: false,
        },
        {
          text: "Darren",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "Where did Scotch whisky originate?",
      answers: [
        {
          text: "Ireland",
          correct: false,
        },
        {
          text: "Wales",
          correct: false,
        },
        {
          text: "The United States",
          correct: false,
        },
        {
          text: "Scotland",
          correct: true,
        },
      ],
    },
    {
      id: 9,
      question: "What name is traditionally given to the party held for a woman who is expecting a baby?",
      answers: [
        {
          text: "Baby drizzle",
          correct: false,
        },
        {
          text: "Baby Shower",
          correct: true,
        },
        {
          text: "Baby downpour",
          correct: false,
        },
        {
          text: "Baby deluge",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "In fancy hotels, it is traditional for what tantalizing treat to be left on your pillow?",
      answers: [
        {
          text: "A pretzel",
          correct: false,
        },
        {
          text: "An apple",
          correct: false,
        },
        {
          text: "A mint",
          correct: true,
        },
        {
          text: "A photo of Wolf Blitzer",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "In the United States, what is traditionally the proper way to address a judge?",
      answers: [
        {
          text: "Your holiness",
          correct: false,
        },
        {
          text: "Your honor",
          correct: true,
        },
        {
          text: "Your eminence",
          correct: false,
        },
        {
          text: "You da man!",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of these pairs of apps offers roughly the same type of service?",
      answers: [
        {
          text: "Snapchat and Grubhub",
          correct: false,
        },
        {
          text: "Whatsapp and SHAREit",
          correct: false,
        },
        {
          text: "Tiktok and Spotify",
          correct: false,
        },
        {
          text: "Lyft and Uber",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "The popular children's song 'It's Raining, It's Pouring' mentions an 'old man' doing what?",
      answers: [
        {
          text: "Snoring",
          correct: true,
        },
        {
          text: "Cooking",
          correct: false,
        },
        {
          text: "Laughing",
          correct: false,
        },
        {
          text: "Yelling at squirrels",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "At a restaurant, someone who 'foots the bill' does what?",
      answers: [
        {
          text: "Kisses it",
          correct: false,
        },
        {
          text: "Rips it up",
          correct: false,
        },
        {
          text: "Hopes to get lucky",
          correct: false,
        },
        {
          text: "Pays it",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "In which of these films does Whoopi Goldberg dress up as a nun?",
      answers: [
        {
          text: "Sister Act",
          correct: true,
        },
        {
          text: "Ghost",
          correct: false,
        },
        {
          text: "The Color Purple",
          correct: false,
        },
        {
          text: "How Judas Got His Groove Back",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
  
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
     
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || questionNumber>15 ?
          
            (
              <div className="results">
              <h1 className="endText">{username} has earned: {earned}</h1>
              <h2>Earnings History :</h2>
              <h2 style={{whiteSpace: "pre-wrap"}}>{records.map((n) => n.name +" = " + n.earn+"\n")}</h2>
              <button className="againButton" onClick={handleClick}>
        Play Again
      </button>
              </div>
            
               
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
        
          <div className="pyramid">
            
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
