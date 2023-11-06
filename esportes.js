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
    question: "Qual o país que possui mais títulos de copa do mundo no futebol?",
    answers: [
      { text: "Alemanha", correct: false },
      { text: "França", correct: false },
      { text: "Brasil", correct: true },
      { text: "França", correct: false }
    ]
  },
  {
    question: "Quantos jogadores atuam em uma partida de futebol ?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "22", correct: true },
      { text: "11", correct: false }
    ]
  },
  {
    question: 'Quanto tempo dura uma partida de futebol ?',
    answers: [
      { text: '45 minutos', correct: false },
      { text: '30 minutos', correct: false },
      { text: '60 minutos', correct: false },
      { text: "90 minutos ", correct: true }
    ]
  },
  {
    question: 'Quem é o jogador brasileiro que possui mais bolas de ouro?    ',
    answers: [
      { text: "Ronaldo Fenômeno", correct: true },
      { text: "Neymar", correct: false },
      { text: 'Kaká', correct: false },
      { text: "Ronaldinho Gaúcho", correct: false }
    ]
  },
  {
    question: 'Como ficou conhecida a seleção Holandesa?',
    answers: [
      { text: 'Laranjas assassinas', correct: false },
      { text: 'Laranja mecânica', correct: true },
      { text: 'Holandeses do ma', correct: false },
      { text: 'Torta Holandesa', correct: false }
    ]
  },
  {
    question: 'Quantos jogadores formam uma equipe de rugby?  ',
    answers: [
      { text: '10', correct: false },
      { text: '5', correct: false },
      { text: '15', correct: true },
      { text: '20', correct: false }
    ]
  },
  {
    question: 'Quanto tempo dura uma partida de rugby?',
    answers: [
      { text: '90 minutos', correct: false },
      { text: '60 minutos', correct: true },
      { text: '45 minutos', correct: false },
      { text: '30 minutos', correct: false },
    ]
  },
  {
    question: 'Qual é a última faixa que você pode conseguir nas artes marciais?',
    answers: [
      { text: 'Branca', correct: false },
      { text: 'Marrom', correct: false },
      { text: 'Vermelha', correct: false },
      { text: 'Preta', correct: true },
    ]
  },
  {
    question: 'Quanto tempo dura uma partida de basquete?',
    answers: [
      { text: '2 tempos de 20 minutos', correct: false },
      { text: '3 Tempos de 15 minutos', correct: false },
      { text: '-4 tempos de 10 minutos', correct: true },
      { text: '1 tempo de 45 minutos', correct: false },
    ]
  },
  {
    question: 'Quantos jogadores de um time de basquete jogam uma partida ?',
    answers: [
      { text: '5', correct: true },
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '11', correct: false },
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

