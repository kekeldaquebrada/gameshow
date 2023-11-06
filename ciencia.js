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
    question: "De acordo com a ciência qual foi o fenômeno que deu a origem ao universo",
    answers: [
      { text: "Dilúvio", correct: false },
      { text: "Terremoto", correct: false },
      { text: "Tsunami", correct: false },
      { text: "Big bang", correct: true }
    ]
  },
  {
    question: "Quantos corações o polvo tem?",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "5", correct: false }
    ]
  },
  {
    question:  'Quem inventou a lâmpada?',
    answers: [
      { text: 'Nikolas Tesla', correct: false },
      { text: 'Thomas Edison', correct: true },
      { text: 'Leonardo Da Vinci', correct: false },
      { text: "albert Einstein", correct: false }
    ]
  },
  {
    question: 'Qual é o fenômeno natural que causa os tsunamis?',
    answers: [
      { text: "Fortes ventos", correct: false },
      { text: " Colisão de correntes marítimas", correct: false },
      { text: 'Movimento das placas tectônicas', correct: true },
      { text: "tempestades oceânicas", correct: false }
    ]
  },
  {
    question: 'Como ficou conhecido a disputa entre Nikolas Tesla e Thomas Edison',
    answers: [
      { text: 'Guerra das correntes', correct: true },
      { text: 'Guerra dos canudos', correct: false },
      { text: 'Guerra fria', correct: false },
      { text: 'Corrida espacial', correct: false }
    ]
  },
  {
    question: 'De quem é a famosa frase “Penso, logo existo”?',
    answers: [
      { text: 'Platão', correct: false },
      { text: 'Sócrates', correct: false },
      { text: 'Descartes ', correct: true },
      { text: 'Galileu Galilei', correct: false }
    ]
  },
  {
    question: 'De onde é a invenção do chuveiro elétrico?',
    answers: [
      { text: 'Inglaterra', correct: false },
      { text: 'Brasil', correct: true },
      { text: 'Estados Unidos', correct: false },
      { text: 'França', correct: false },
    ]
  },
  {
    question: 'Qual o menor planeta do sistema solar ?    ',
    answers: [
      { text: 'Terra', correct: false },
      { text: 'Marte', correct: false },
      { text: 'Mercúrio', correct: true },
      { text: 'Vênus', correct: false },
    ]
  },
  {
    question: 'Qual o material mais resistente do planeta ?',
    answers: [
      { text: 'Grafite', correct: false },
      { text: 'Ferro', correct: false },
      { text: ' Diamante', correct: true },
      { text: 'Ouro', correct: false },
    ]
  },
  {
    question: 'Qual a cor do sol ?  ',
    answers: [
      { text: 'Amarelo', correct: false },
      { text: 'Vermelho', correct: false },
      { text: 'Laranja', correct: false },
      { text: 'Branco', correct: true },
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

