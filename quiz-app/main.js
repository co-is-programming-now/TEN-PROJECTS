const quizData = [
  {
    question: "How old is Constanza?",
    a: "10",
    b: "61",
    c: "19",
    d: "20",
    correct: "c",
  },
  {
    question: "What is the most used programming language in 2023?",
    a: "Javascrpit",
    b: "C+",
    c: "SQL",
    d: "Java",
    correct: "a",
  },
  {
    question: "Who is the most watched serie of 2023?",
    a: "Modern family",
    b: "Outer Banks: Season 3",
    c: "The Simpson",
    d: "Kaleidoscope",
    correct: "b",
  },
  {
    question: "How many minutes are 998 hours?",
    a: "54222",
    b: "52000",
    c: "80222",
    d: "59880",
    correct: "d",
  },
  {
    question:
      "Who said: If you don´t know where you are going, you´ll end up someplace else",
    a: "Yogi Berra",
    b: "Lao Tzu",
    c: "Mark Antoni",
    d: "The President",
    correct: "a",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answers");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  //check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  }

  console.log(answer);

  if (answer) {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      //TODO show results
      quiz.innerHTML = `<h2>You answered correclty at ${score} / ${quizData.length} questions.</h2>
             <button onClick="location.reload()">Reload</button>`;
    }
  }
});
