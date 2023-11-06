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
    question: " Qual o maior continente do globo terrestre? ",
    answers: [
      { text: "América", correct: false },
      { text: "África", correct: false },
      { text: "Ásia ", correct: true },
      { text: " Europa", correct: false }
    ]
  },
  {
    question: "Qual o total de países na europa?",
    answers: [
      { text: "50 ", correct: true },
      { text: "35", correct: false },
      { text: "40", correct: false },
      { text: "65", correct: false }
    ]
  },
  {
    question: 'Qual país contém a maior fauna?',
    answers: [
      { text: 'Brasil', correct: true },
      { text: 'África', correct: false },
      { text: 'Canadá', correct: false },
      { text: "Estados Unidos", correct: false }
    ]
  },
  {
    question: 'Qual o nome do maior país do mundo?',
    answers: [
      { text: "Japão", correct: false },
      { text: "Rússia", correct: true },
      { text: 'Coreia do sul', correct: false },
      { text: "Itália ", correct: false }
    ]
  },
  {
    question: 'Qual o nome do menor país do mundo?',
    answers: [
      { text: 'São Cristóvão', correct: false },
      { text: 'A Cidade do Vaticano', correct: true },
      { text: 'Mônaco', correct: false },
      { text: 'Singapura', correct: false }
    ]
  },
  {
    question: 'Qual é a maior capital do mundo?',
    answers: [
      { text: 'Londres ', correct: false },
      { text: 'Tóquio', correct: true },
      { text: 'Berlim', correct: false },
      { text: ' Brasília', correct: false }
    ]
  },
  {
    question: 'Qual a capital do estado de Nova York?',
    answers: [
      { text: 'Pequim', correct: false },
      { text: 'Cabul', correct: false },
      { text: 'Luanda', correct: false },
      { text: 'Albany', correct: true },
    ]
  },
  {
    question: 'Qual a capital da Coreia do Sul?',
    answers: [
      { text: ' Viena', correct: false },
      { text: 'Argel', correct: false },
      { text: 'Lomé', correct: false },
      { text: 'Seul', correct: true },
    ]
  },
  {
    question: 'Qual o maior rio do mundo?',
    answers: [
      { text: 'Rio Amazonas', correct: true },
      { text: 'Rio Nilo', correct: false },
      { text: 'Rio Mississippi-Missouri', correct: false },
      { text: 'Rio Amarelo ', correct: false },
    ]
  },
  {
    question: 'Qual é o único país que faz fronteira com o Reino Unido? ',
    answers: [
      { text: 'Alemanha ', correct: false },
      { text: 'Irlanda', correct: true },
      { text: 'Paris', correct: false },
      { text: 'Egito', correct: false },
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

