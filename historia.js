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
    question: "Em que ano aconteceu a primeira guerra mundial ?",
    answers: [
      { text: "2023", correct: false },
      { text: "2000", correct: false },
      { text: "1500", correct: false },
      { text: "1914", correct: true }
    ]
  },
  {
    question: "Em que ano acabou a segunda guerra mundial ?",
    answers: [
      { text: "1945", correct: true },
      { text: "1930", correct: false },
      { text: "1940", correct: false },
      { text: "1950", correct: false }
    ]
  },
  {
    question: 'Em qual ano ocorreu a corrida espacial entre Rússia e USA?    ',
    answers: [
      { text: '1975', correct: false },
      { text: '1969', correct: false },
      { text: '1957', correct: true },
      { text: "2000", correct: false }
    ]
  },
  {
    question: 'Em que ano o Brasil se tornou uma república ?',
    answers: [
      { text: "1500", correct: false },
      { text: "1889", correct: true },
      { text: '1910', correct: false },
      { text: "1878", correct: false }
    ]
  },
  {
    question: 'Quem assinou a lei áurea?',
    answers: [
      { text: 'Dom Pedro', correct: false },
      { text: 'Rainha Elizabeth', correct: false },
      { text: 'Pelé', correct: false },
      { text: 'Princesa Isabel', correct: true }
    ]
  },
  {
    question: 'Qual foi o primeiro presidente do Brasil a sofrer um impeachment ?',
    answers: [
      { text: ' Dilma Rousseff', correct: false },
      { text: 'Bolsonaro', correct: false },
      { text: 'Fernando Collor', correct: true },
      { text: 'Bolsonaro', correct: false }
    ]
  },
  {
    question: 'O que iniciou a guerra dos Canudos ?',
    answers: [
      { text: 'Perseguição ao Antônio conselheiro', correct: false },
      { text: 'Atentado terrorista', correct: false },
      { text: 'Morte do Presidente', correct: false },
      { text: 'Falta de pagamentos ao governo', correct: true },
    ]
  },
  {
    question: 'Em que ano começou a revolução francesa?',
    answers: [
      { text: '1878', correct: false },
      { text: '1922', correct: false },
      { text: '1811', correct: false },
      { text: '1789', correct: true },
    ]
  },
  {
    question: 'Qual país ficou conhecido por navegar no caminho das índias?',
    answers: [
      { text: 'Índia', correct: false },
      { text: 'Brasil', correct: false },
      { text: 'Portugal', correct: true },
      { text: 'Estado Unidos', correct: false },
    ]
  },
  {
    question: 'Quem foi Napoleão Bonaparte?',
    answers: [
      { text: 'Um pintor', correct: false },
      { text: 'Músico', correct: false },
      { text: 'Militar', correct: true },
      { text: 'Monarca', correct: false },
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

