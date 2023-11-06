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
    question: "Quanto é 185+258?",
    answers: [
      { text: "480", correct: false },
      { text: "483", correct: false },
      { text: "443", correct: true },
      { text: "455", correct: false }
    ]
  },
  {
    question: "Quanto é 185+258",
    answers: [
      { text: "480", correct: false },
      { text: "483", correct: false },
      { text: "443", correct: true },
      { text: "455", correct: false }
    ]
  },
  {
    question: 'Quanto é 580-443?',
    answers: [
      { text: '137', correct: true },
      { text: '140', correct: false },
      { text: '130', correct: false },
      { text: "125", correct: false }
    ]
  },
  {
    question: 'Qual a raiz quadrada de 56',
    answers: [
      { text: "5,7", correct: false },
      { text: "6,9", correct: true },
      { text: '8', correct: false },
      { text: "7,4", correct: false }
    ]
  },
  {
    question: ' Quantos anos tem uma pessoa que nasceu em 1980?    ',
    answers: [
      { text: '44', correct: false },
      { text: '43', correct: true },
      { text: '45', correct: false },
      { text: '47', correct: false }
    ]
  },
  {
    question: 'Quanto é 8x5?',
    answers: [
      { text: '45', correct: true },
      { text: '48', correct: false },
      { text: '52', correct: false },
      { text: '43', correct: false }
    ]
  },
  {
    question: 'Quanto é 74x6',
    answers: [
      { text: '455', correct: false },
      { text: '445', correct: false },
      { text: '440', correct: false },
      { text: '444', correct: true },
    ]
  },
  {
    question: 'Qual a raiz quadrada de 9?',
    answers: [
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false },
      { text: '5', correct: false },
    ]
  },
  {
    question: 'Quantos anos tem uma pessoa que nasceu em 1940',
    answers: [
      { text: '83', correct: true },
      { text: '88', correct: false },
      { text: '85', correct: false },
      { text: '80', correct: false },
    ]
  },
  {
    question: 'Qual a fórmula de PI?',
    answers: [
      { text: '4,5', correct: false },
      { text: '3,10', correct: false },
      { text: '3,14', correct: true },
      { text: '3,13', correct: false },
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

