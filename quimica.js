const $startGameButton = document.querySelector(".start")
const $nextQuestionButton = document.querySelector(".next")
const $questionsContainer = document.querySelector(".questoes-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".respostas-container")
const $answers = document.querySelectorAll(".resposta")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {

    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
      document.body.classList.add("orrect")
      totalCorrect++
    } else {
      document.body.classList.add("ncorrect") 
    }


  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  

  $questionsContainer.innerHTML = 
  `
   
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Jogar Novamente
    </button>
  `
}


const questions = [
  {
    question: "Qual é o símbolo químico do oxigênio?",
    answers: [
      { text: "Ox", correct: false },
      { text: "Oxg", correct: false },
      { text: "O", correct: true },
      { text: "O2", correct: false }
    ]
  },
  {
    question: "Qual é o número atômico do hidrogênio?",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: " 3", correct: false },
      { text: "4", correct: false }
    ]
  },
  {
    question: 'Qual é a fórmula química da água?',
    answers: [
      { text: 'H2O', correct: true },
      { text: 'CO2', correct: false },
      { text: 'NaCl', correct: false },
      { text: "O2", correct: false }
    ]
  },
  {
    question: 'Qual é o elemento mais abundante na crosta terrestre?    ',
    answers: [
      { text: " Ferro", correct: false },
      { text: "Oxigênio", correct: true },
      { text: 'Silício', correct: false },
      { text: "Carbono", correct: false }
    ]
  },
  {
    question: 'Qual é o nome da reação química em que um composto é quebrado em dois ou mais produtos, geralmente pela adição de água?',
    answers: [
      { text: 'Combustão', correct: false },
      { text: 'Decomposição', correct: true },
      { text: 'Síntese', correct: false },
      { text: 'Substituição', correct: false }
    ]
  },
  {
    question: 'Qual é o pH neutro em uma escala de pH?',
    answers: [
      { text: '0', correct: false },
      { text: '7', correct: true },
      { text: '14', correct: false },
      { text: '10', correct: false }
    ]
  },
  {
    question: 'Qual é o elemento químico essencial para a formação de ossos e dentes?    ',
    answers: [
      { text: 'Ferro', correct: false },
      { text: 'Sódio', correct: false },
      { text: 'Potássio', correct: false },
      { text: 'Cálcio', correct: true },
    ]
  },
  {
    question: 'Qual é o gás mais abundante na atmosfera terrestre?',
    answers: [
      { text: 'Oxigênio', correct: false },
      { text: ' Dióxido de carbono', correct: false },
      { text: 'Hélio', correct: false },
      { text: 'Nitrogênio', correct: true },
    ]
  },
  {
    question: 'Qual é o processo químico pelo qual as plantas convertem a luz solar em energia química?',
    answers: [
      { text: 'Respiração celular', correct: false },
      { text: 'Oxidação', correct: false },
      { text: ' Fermentação', correct: false },
      { text: ' Fotossíntese', correct: true },
    ]
  },
  {
    question: 'Qual é o nome do processo químico em que uma substância passa diretamente do estado sólido para o estado gasoso, sem se tornar líquida no meio?    ',
    answers: [
      { text: 'Condensação', correct: false },
      { text: 'Evaporação', correct: false },
      { text: 'Fusão', correct: false },
      { text: 'Sublimação', correct: true },
    ]
  },
]



  // outro relogio
  let tempo = 0;
let cronometro;

function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosFormatados = segundos % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosFormatados).padStart(2, '0')}`;
}

function atualizarTempo() {
    tempo++;
    document.getElementById('tempo').innerText = formatarTempo(tempo);
}

function iniciarCronometro() {
    if (!cronometro) {
        cronometro = setInterval(atualizarTempo, 1000);
    }
}

function pararCronometro() {
    clearInterval(cronometro);
    cronometro = null;
}

function zerarCronometro() {
    tempo = 0;
    document.getElementById('tempo').innerText = formatarTempo(tempo);
    pararCronometro();
}

