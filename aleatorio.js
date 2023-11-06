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
    question: "Qual é o planeta mais próximo do Sol no nosso sistema solar?",
    answers: [
      { text: "Marte", correct: false },
      { text: "Júpiter", correct: false },
      { text: "Vênus", correct: true },
      { text: "Urano", correct: false }
    ]
  },
  {
    question: 'Quem é o autor da famosa obra "Dom Quixote"?',
    answers: [
      { text: "William Shakespeare", correct: true },
      { text: "Charles Dickens", correct: false },
      { text: "Fyodor Dostoevsky", correct: false },
      { text: "Miguel de Cervantes", correct: false }
    ]
  },
  {
    question: 'QQual é o maior mamífero terrestre do mundo?',
    answers: [
      { text: ' Leão', correct: true },
      { text: 'Elefante Africano', correct: false },
      { text: 'Girafa', correct: false },
      { text: "Hipopótamo", correct: false }
    ]
  },
  {
    question: 'Qual é a capital da Austrália?',
    answers: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: true },
      { text: 'Brisbane', correct: false },
      { text: "Camberra", correct: false }
    ]
  },
  {
    question: 'Qual é a montanha mais alta do mundo?',
    answers: [
      { text: 'Monte Kilimanjaro', correct: false },
      { text: 'Monte Everest', correct: true },
      { text: 'Monte McKinley', correct: false },
      { text: 'Monte Fuji', correct: false }
    ]
  },
  {
    question: 'Quem é a autora da série de livros "Harry Potter"?',
    answers: [
      { text: 'J.R.R. Tolkien', correct: false },
      { text: 'George Orwell', correct: true },
      { text: 'J.K. Rowling', correct: false },
      { text: 'Stephen King', correct: false }
    ]
  },
  {
    question: 'Qual é o metal líquido à temperatura ambiente?',
    answers: [
      { text: 'Ouro', correct: false },
      { text: 'Mercúrio', correct: false },
      { text: 'Chumbo', correct: false },
      { text: 'Ferro', correct: true },
    ]
  },
  {
    question: 'Qual é o maior órgão do corpo humano?',
    answers: [
      { text: 'Coração', correct: false },
      { text: 'Pulmão', correct: false },
      { text: 'Fígado', correct: false },
      { text: 'Pelé', correct: true },
    ]
  },
  {
    question: 'Qual é o rio mais longo do mundo?',
    answers: [
      { text: 'Rio Amazonas      ', correct: false },
      { text: 'Rio Nilo', correct: false },
      { text: 'Rio Mississipi', correct: false },
      { text: 'Rio Yangtzé', correct: true },
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

