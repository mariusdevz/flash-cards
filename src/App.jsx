import { useState } from "react";
import "./App.css";

const flashCards = [
  {
    question: "What is the difference between var, let, and const?",
    answer:
      "var is function-scoped and can be redeclared; let and const are block-scoped. let allows reassignment while const does not.",
  },
  {
    question: "What is a closure in JavaScript?",
    answer:
      "A closure gives a function access to variables from its outer scope even after the outer function has finished executing.",
  },
  {
    question: "What is the DOM?",
    answer:
      "The DOM is a programming interface that represents HTML documents as a tree structure.",
  },
  {
    question: "What is event bubbling?",
    answer:
      "Event bubbling occurs when an event propagates from the target element up through its ancestors.",
  },
];

export default function App() {
  const [currentCard, setCurrentCard] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const progress = ((currentCard + 1) / flashCards.length) * 100;

  const nextCard = () => {
    if (currentCard < flashCards.length - 1) {
      setCurrentCard(currentCard + 1);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setShowAnswer(false);
    }
  };

  return (
    <div className="container">
      <h2>Flash Cards</h2>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="progress-info">
        <span>{Math.round(progress)}%</span>
        <span>
          {currentCard + 1} of {flashCards.length}
        </span>
      </div>

      <div className="card">
        {showAnswer
          ? flashCards[currentCard].answer
          : flashCards[currentCard].question}
      </div>

      <div className="controls">
        <button onClick={prevCard}>Previous</button>

        <button onClick={() => setShowAnswer(!showAnswer)}>
          {showAnswer ? "Hide Answer" : "Show Answer"}
        </button>

        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
}
