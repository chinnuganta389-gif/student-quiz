let questions = [];
let current = 0;
let score = 0;
let userAnswers = [];

/* =========================
   QUESTION BANKS
========================= */

// C QUESTIONS
const cQuestions = [
  {
    q: "Who developed C language?",
    options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum", "Bjarne Stroustrup"],
    answer: 0
  },
  {
    q: "C language is a?",
    options: ["High level", "Low level", "Middle level", "Machine level"],
    answer: 2
  },
  {
    q: "Which symbol is used to end a statement in C?",
    options: [":", ";", ".", ","],
    answer: 1
  },
  {
    q: "Which data type is used to store integers?",
    options: ["float", "char", "int", "double"],
    answer: 2
  },
  {
    q: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    answer: 1
  },



{
    q: "Which operator is used for addition?",
    options: ["+", "-", "*", "/"],
    answer: 0
  },
  {
    q: "Which keyword is used to start a loop?",
    options: ["if", "loop", "for", "switch"],
    answer: 2
  },
  {
    q: "Which keyword is used to make decision?",
    options: ["for", "while", "if", "break"],
    answer: 2
  },
  {
    q: "Which symbol is used for comments?",
    options: ["//", "/* */", "#", "Both // and /* */"],
    answer: 3
  },
  {
    q: "Which function is used to take input?",
    options: ["printf()", "scanf()", "input()", "get()"],
    answer: 1
  },
  {
    q: "C programs are compiled using?",
    options: ["Interpreter", "Compiler", "Assembler", "Editor"],
    answer: 1
  },
  {
    q: "Which keyword ends a loop?",
    options: ["stop", "exit", "break", "end"],
    answer: 2
  },

  // 🔹 MEDIUM (16–35)
  {
    q: "Which operator is used for logical AND?",
    options: ["&", "&&", "|", "||"],
    answer: 1
  },
  {
    q: "Which loop executes at least once?",
    options: ["for", "while", "do-while", "none"],
    answer: 2
  },
  {
    q: "Array index starts from?",
    options: ["0", "1", "-1", "Depends"],
    answer: 0
  },
  {
    q: "Which symbol is used for address?",
    options: ["*", "&", "#", "@"],
    answer: 1
  },
  {
    q: "Which data type stores single character?",
    options: ["int", "char", "float", "double"],
    answer: 1
  },
  {
    q: "Which keyword is used to define constant?",
    options: ["static", "final", "const", "define"],
    answer: 2
  },
  {
    q: "Which function compares strings?",
    options: ["strcpy()", "strlen()", "strcmp()", "strcat()"],
    answer: 2
  },
  {
    q: "Which function finds string length?",
    options: ["strlen()", "sizeof()", "length()", "strlength()"],
    answer: 0
  },
  {
    q: "Which operator increases value by 1?",
    options: ["++", "--", "+=", "="],
    answer: 0
  },
  {
    q: "Which keyword is used to return value?",
    options: ["break", "continue", "return", "exit"],
    answer: 2
  },
  {
    q: "Which storage class has local scope?",
    options: ["static", "extern", "auto", "register"],
    answer: 2
  },
  {
    q: "Which keyword stops current iteration?",
    options: ["break", "stop", "continue", "exit"],
    answer: 2
  },
  {
    q: "Which format specifier is for integer?",
    options: ["%d", "%f", "%c", "%s"],
    answer: 0
  },
  {
    q: "Which format specifier is for float?",
    options: ["%d", "%f", "%c", "%s"],
    answer: 1
  },
  {
    q: "Which function allocates memory dynamically?",
    options: ["malloc()", "alloc()", "memory()", "new()"],
    answer: 0
  },

  // 🔹 HARD (36–50)
  {
    q: "Which operator is used to access value via pointer?",
    options: ["&", "*", "->", "."],
    answer: 1
  },
  {
    q: "Which function releases memory?",
    options: ["delete()", "remove()", "free()", "clear()"],
    answer: 2
  },
  {
    q: "Which keyword is used for recursion?",
    options: ["loop", "self", "function call itself", "repeat"],
    answer: 2
  },
  {
    q: "Which file contains function prototypes?",
    options: ["Source file", "Object file", "Header file", "Text file"],
    answer: 2
  },
  {
    q: "Which function copies string?",
    options: ["strcat()", "strcmp()", "strcpy()", "strlen()"],
    answer: 2
  },
  {
    q: "Which operator has highest priority?",
    options: ["+", "*", "()", "="],
    answer: 2
  },
  {
    q: "Which type of memory is allocated at runtime?",
    options: ["Stack", "Static", "Heap", "Register"],
    answer: 2
  },
  {
    q: "Which keyword is used to access global variable?",
    options: ["global", "extern", "static", "auto"],
    answer: 1
  },
  {
    q: "What does sizeof() return?",
    options: ["Value", "Address", "Size in bytes", "Length"],
    answer: 2
  },
  {
    q: "Dangling pointer points to?",
    options: ["Valid memory", "NULL", "Freed memory", "Heap"],
    answer: 2
  },
  {
    q: "Which function reads formatted input?",
    options: ["printf()", "scanf()", "gets()", "puts()"],
    answer: 1
  },
  {
    q: "Which loop is best when iterations are known?",
    options: ["while", "do-while", "for", "goto"],
    answer: 2
  },
  {
    q: "Which operator is conditional operator?",
    options: ["?:", "&&", "||", "=="],
    answer: 0
  },
  {
    q: "Which keyword prevents modification?",
    options: ["final", "static", "const", "lock"],
    answer: 2
  },
  {
    q: "Which function opens a file?",
    options: ["file()", "open()", "fopen()", "read()"],
    answer: 2
  }
];




// JAVA QUESTIONS
const javaQuestions = [
  {
    q: "Who developed Java?",
    options: ["Sun Microsystems", "Microsoft", "Google", "Apple"],
    answer: 0
  },
  {
    q: "Java is a?",
    options: ["Procedure oriented", "Object oriented", "Machine level", "Assembly language"],
    answer: 1
  },
  {
    q: "Which keyword is used to create an object?",
    options: ["class", "object", "new", "create"],
    answer: 2
  },
  {
    q: "Which method is the entry point of Java program?",
    options: ["start()", "main()", "run()", "init()"],
    answer: 1
  },
  {
    q: "Java supports?",
    options: ["Multiple inheritance", "Pointers", "Platform independence", "Goto"],
    answer: 2
  }
];

// PYTHON QUESTIONS
const pythonQuestions = [
  {
    q: "Who created Python?",
    options: ["Guido van Rossum", "Dennis Ritchie", "James Gosling", "Linus Torvalds"],
    answer: 0
  },
  {
    q: "Python is a?",
    options: ["Compiled language", "Interpreted language", "Machine code", "Binary"],
    answer: 1
  },
  {
    q: "Which symbol is used for comments in Python?",
    options: ["//", "#", "/* */", "<!-- -->"],
    answer: 1
  },
  {
    q: "Which data type is immutable?",
    options: ["List", "Set", "Dictionary", "Tuple"],
    answer: 3
  },
  {
    q: "Which function is used to get input?",
    options: ["input()", "scan()", "read()", "get()"],
    answer: 0
  }
];

/* =========================
   START QUIZ
========================= */
function startQuiz(subject) {
  current = 0;
  score = 0;
  userAnswers = [];

  if (subject === "c") questions = cQuestions;
  if (subject === "java") questions = javaQuestions;
  if (subject === "python") questions = pythonQuestions;

  loadQuestion();
}

/* =========================
   LOAD QUESTION
========================= */
function loadQuestion() {
  const q = questions[current];

  let optionsHTML = "";
  q.options.forEach((opt, index) => {
    optionsHTML += `
      <label>
        <input type="radio" name="option" value="${index}">
        ${opt}
      </label>
    `;
  });

  document.getElementById("quiz").innerHTML = `
    <h3>Q${current + 1}. ${q.q}</h3>
    ${optionsHTML}
    <button onclick="nextQuestion()">Next</button>
  `;
}

/* =========================
   NEXT QUESTION
========================= */
function nextQuestion() {
  const selected = document.querySelector('input[name="option"]:checked');

  if (!selected) {
    alert("Please select an answer");
    return;
  }

  const answerIndex = parseInt(selected.value);
  userAnswers.push(answerIndex);

  if (answerIndex === questions[current].answer) {
    score++;
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

/* =========================
   RESULT + REVIEW
========================= */
function showResult() {
  let accuracy = ((score / questions.length) * 100).toFixed(2);
  let reviewHTML = "";

  questions.forEach((q, i) => {
    reviewHTML += `
      <hr>
      <p><strong>Q${i + 1}:</strong> ${q.q}</p>
      <p>Your Answer: ${q.options[userAnswers[i]]}</p>
      <p>Correct Answer: <strong>${q.options[q.answer]}</strong></p>
    `;
  });

  document.getElementById("quiz").innerHTML = `
    <h2>Test Completed</h2>
    <p>Score: ${score} / ${questions.length}</p>
    <p>Accuracy: ${accuracy}%</p>
    ${reviewHTML}
    <button onclick="location.reload()">Restart</button>
  `;
}
