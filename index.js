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
    question: "Qual o nome do pai do Naruto?",
    answers: [
      { text: "Iruka", correct: false },
      { text: "Kakashi", correct: false },
      { text: "Minato", correct: true },
      { text: "Jiraya", correct: false }
    ]
  },
  {
    question: "Qual o pokémon mais forte do Ash?",
    answers: [
      { text: "Charizard", correct: true },
      { text: "Pikachu", correct: false },
      { text: "Aceus", correct: false },
      { text: "Greninja", correct: false }
    ]
  },
  {
    question: "Qual o anime mais assistido do Brasil?",
    answers: [
      { text: "Naruto", correct: true },
      { text: "Dragon Ball", correct: false },
      { text: "Pokémon", correct: false },
      { text: "One Piece", correct: false }
    ]
  },
  {
    question: "Qual o nome do bijuu de nove caudas?",
    answers: [
      { text: "Hachibi", correct: false },
      { text: "Yagura", correct: false },
      { text: "Kurama", correct: true },
      { text: "Naruto", correct: false }
    ]
  },
  {
    question: "Qual o melhor amigo do Goku?",
    answers: [
      { text: 'Vegeta', correct: false },
      { text: 'Kuririn', correct: true },
      { text: 'Mestre kame', correct: false },
      { text: 'Piccolo', correct: false }
    ]
  },
  {
    question: 'Qual a vila do Naruto?',
    answers: [
      { text: 'Vila da areia', correct: false },
      { text: 'Vila São pedro', correct: false },
      { text: 'Vila da folha', correct: true },
      { text: 'Vila da esperança', correct: false }
    ]
  },
  {
    question: 'Qual a marca registrada do personagem luffy?',
    answers: [
      { text: 'Cabelo amarelo', correct: false },
      { text: 'Cicatriz de raio', correct: false },
      { text: 'Perna de pau', correct: false },
      { text: 'Chapéu de palha', correct: true },
    ]
  },
  {
    question: 'No anime Fullmetal Alchemist qual a principal lei da alquimia?',
    answers: [
      { text: 'Lei da gravidade', correct: false },
      { text: 'lei da troca equivalente', correct: true },
      { text: "lei de Newton", correct: false },
      { text: 'Lei Maria da penha ', correct: false },
    ]
  },
  {
    question: 'Em qual ano o personagem Ash ganhou a liga pokémon?',
    answers: [
      { text: '2022', correct: true },
      { text: '2005', correct: false },
      { text: '1890 ', correct: false },
      { text: '1999', correct: false },
    ]
  },
  {
    question: 'Qual o nome do dragão realizador de desejos em Dragon Ball?',
    answers: [
      { text: 'Banguela', correct: false },
      { text: 'Syrax', correct: false },
      { text: 'Astrid', correct: false },
      { text: 'Shenlong', correct: true },
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

