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
    question: "Qual é o prato de carne crua picada, geralmente servido com gema de ovo crua, na culinária francesa?    ",
    answers: [
      { text: "Sushi", correct: false },
      { text: "Ceviche", correct: false },
      { text: "Carpaccio", correct: true },
      { text: "Tempura", correct: false }
    ]
  },
  {
    question: "Qual prato italiano é feito com uma massa fina recheada com ingredientes como queijo, carne ou legumes?",
    answers: [
      { text: "Ravioli", correct: true },
      { text: "Risoto", correct: false },
      { text: "Lasanha", correct: false },
      { text: "Pizza", correct: false }
    ]
  },
  {
    question: 'Qual é o ingrediente principal do prato espanhol "paella"?',
    answers: [
      { text: 'Arroz', correct: true },
      { text: 'Frango', correct: false },
      { text: 'Peixe', correct: false },
      { text: "Batata", correct: false }
    ]
  },
  {
    question: 'O que é "sashimi" na culinária japonesa?',
    answers: [
      { text: "Sopa de missô", correct: false },
      { text: "Peixe cru fatiado", correct: true },
      { text: 'Rolinho primavera', correct: false },
      { text: "Nachos", correct: false }
    ]
  },
  {
    question: 'Qual é a sobremesa francesa feita com creme e açúcar caramelizado na superfície?    ',
    answers: [
      { text: 'Tarte Tatin', correct: false },
      { text: 'Crème brûlée', correct: true },
      { text: 'Mousse au chocolat', correct: false },
      { text: 'Éclair', correct: false }
    ]
  },
  {
    question: 'Qual é o principal ingrediente do prato japonês "miso soup"?   ',
    answers: [
      { text: 'Arroz', correct: false },
      { text: 'Pasta de soja fermentada', correct: true },
      { text: 'Tofu', correct: false },
      { text: 'Peixe cru', correct: false }
    ]
  },
  {
    question: 'Qual é o queijo italiano comumente usado na pizza Marguerita?',
    answers: [
      { text: 'Gorgonzola', correct: false },
      { text: 'Parmesão', correct: false },
      { text: 'Ricota', correct: false },
      { text: 'Mozzarella', correct: true },
    ]
  },
  {
    question: ' Qual é o nome da técnica de cozinhar alimentos a baixas temperaturas por um longo período em sacos plásticos selados a vácuo?',
    answers: [
      { text: 'Grelhar', correct: false },
      { text: 'Ferver', correct: false },
      { text: ' Cozinhar a vapor', correct: false },
      { text: 'Sous-vide', correct: true },
    ]
  },
  {
    question: 'Qual é o tempero essencial da culinária tailandesa, feito a partir de capim-limão, gengibre e outros ingredientes?',
    answers: [
      { text: 'Molho de peixe', correct: false },
      { text: 'Coentro', correct: false },
      { text: ' Tamarindo', correct: false },
      { text: 'Curry', correct: true },
    ]
  },
  {
    question: 'Qual é o prato típico da culinária mexicana feito com tortilhas de milho recheadas com carne, feijão e queijo?',
    answers: [
      { text: ' Enchiladas', correct: false },
      { text: ' Nachos', correct: false },
      { text: 'Burritos', correct: false },
      { text: 'Tacos', correct: true },
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

