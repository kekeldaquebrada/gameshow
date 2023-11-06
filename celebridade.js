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
    question: 'Qual ator interpretou o personagem Capitão Nascimento no filme "Tropa de Elite"?',
    answers: [
      { text: " Rodrigo Santoro", correct: false },
      { text: "Wagner Moura", correct: false },
      { text: "Selton Mello", correct: true },
      { text: "Cauã Reymond", correct: false }
    ]
  },
  {
    question: 'Qual cantora brasileira é conhecida como "A Rainha do Axé" e é famosa por sucessos como "Chão da Praça"?',
    answers: [
      { text: "Ivete Sangalo", correct: true },
      { text: "Daniela Mercury", correct: false },
      { text: "Claudia Leitte", correct: false },
      { text: "Maria Bethânia", correct: false }
    ]
  },
  {
    question: 'Qual ator e comediante brasileiro é famoso por seus personagens "Didi Mocó" e "Trapalhões"?',
    answers: [
      { text: 'Marcelo Adnet', correct: true },
      { text: 'Fábio Porchat', correct: false },
      { text: 'Chico Anysio', correct: false },
      { text: "Danilo Gentili", correct: false }
    ]
  },
  {
    question: 'Qual modelo brasileira é conhecida internacionalmente como uma das "Angels" da Victoria s Secret?',
    answers: [
      { text: "Gisele Bündchen", correct: false },
      { text: "Adriana Lima", correct: true },
      { text: 'Alessandra Ambrosio', correct: false },
      { text: "Izabel Goulart", correct: false }
    ]
  },
  {
    question: 'Qual é o nome do jogador de futebol brasileiro que é amplamente considerado um dos maiores de todos os tempos e é conhecido como "O Rei"?',
    answers: [
      { text: 'Ronaldinho', correct: false },
      { text: 'Pelé', correct: true },
      { text: 'Ronaldo', correct: false },
      { text: 'Neymar', correct: false }
    ]
  },
  {
    question: 'Qual atriz brasileira estrelou filmes como "Central do Brasil" e "O Senhor dos Anéis: A Sociedade do Anel"?',
    answers: [
      { text: 'Fernanda Montenegro', correct: false },
      { text: 'Regina Duarte', correct: true },
      { text: 'Camila Pitanga', correct: false },
      { text: 'Taís Araújo', correct: false }
    ]
  },
  {
    question: 'Qual é o nome do famoso chef de cozinha brasileiro que ganhou notoriedade internacional com seu programa de TV "MasterChef"?' ,
    answers: [
      { text: ' Alex Atala', correct: false },
      { text: 'Henrique Fogaça', correct: false },
      { text: 'Erick Jacquin', correct: false },
      { text: 'Paola Carosella', correct: true },
    ]
  },
  {
    question: 'Qual cantor e compositor brasileiro é conhecido como "O Maluco Beleza" e é uma figura icônica do rock nacional?',
    answers: [
      { text: 'Raul Seixas', correct: false },
      { text: 'Caetano Veloso', correct: false },
      { text: 'Gilberto Gil', correct: false },
      { text: 'Ney Matogrosso', correct: true },
    ]
  },
  {
    question: 'Qual é o nome da apresentadora de televisão brasileira que ficou famosa por seu programa "Xuxa" e é chamada de "Rainha dos Baixinhos"?',
    answers: [
      { text: ' Hebe Camargo', correct: false },
      { text: 'Ana Maria Braga', correct: false },
      { text: 'Eliana', correct: false },
      { text: 'Xuxa Meneghel', correct: true },
    ]
  },
  {
    question: 'Qual ator brasileiro é conhecido por seus papéis em novelas como "Roque Santeiro" e "Tieta" e é lembrado como um dos maiores galãs da televisão brasileira?',
    answers: [
      { text: 'Tony Ramos', correct: false },
      { text: ' Lima Duarte', correct: false },
      { text: 'José Mayer', correct: false },
      { text: 'Reynaldo Gianecchini', correct: true },
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

