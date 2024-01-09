import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = 'https://opentdb.com/api.php?amount=5&type=multiple';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      const fetchQuestions = async () => {
        try {
          const response = await axios.get(API_URL);
          setQuestions(response.data.results);
        } catch (error) {
          console.error('Error fetching questions:', error);
        }
      };

      fetchQuestions();
    }
  }, [gameStarted]);

  const handleAnswer = (selectedAnswer) => {
    const correctAnswer = decodeEntities(questions[currentQuestionIndex].correct_answer);
    const isCorrect = selectedAnswer === correctAnswer;
    setUserAnswers([...userAnswers, { question: questions[currentQuestionIndex].question, isCorrect }]);
    setScore(isCorrect ? score + 1 : score);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const resetGame = () => {
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0);
    setGameStarted(true);

    const fetchNewQuestions = async () => {
      try {
        const response = await axios.get(API_URL);
        setQuestions(response.data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchNewQuestions();
  };

  const decodeEntities = (html) => {
    var txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="container">
      <h1>Trivia Game</h1>
      {!gameStarted ? (
        <div>
          <p>Click the button to start the game!</p>
          <button onClick={resetGame}>Start Game</button>
        </div>
      ) : questions.length > 0 && currentQuestionIndex < questions.length ? (
        <div>
          <p>
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <p dangerouslySetInnerHTML={{ __html: questions[currentQuestionIndex].question }} />
          <ul>
            {[...questions[currentQuestionIndex].incorrect_answers, questions[currentQuestionIndex].correct_answer].map((answer, index) => (
              <li key={index}>
                <button onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{ __html: answer }} />
              </li>
            ))}
          </ul>
          <p>Score: {score}</p>
        </div>
      ) : (
        <div>
          <h2 className="game-over">Game Over</h2>
          <p>Your final score: {score}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default App;
