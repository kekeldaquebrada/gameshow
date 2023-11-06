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
    question: "Quem é a maior cantora do Brasil ?",
    answers: [
      { text: "Gal Costa", correct: false },
      { text: "Rita Lee", correct: false },
      { text: " Elis Regina", correct: true },
      { text: "Clara Nunes", correct: false }
    ]
  },
 
  {
    question: ' Michael Jackson estreou sua marca registrada moonwalk durante qual música em 1983?    ',
    answers: [
      { text: 'Billie Jean', correct: true },
      { text: 'Thriller', correct: false },
      { text: 'Chicago', correct: false },
      { text: "Rock With You", correct: false }
    ]
  },
  {
    question: 'Qual estrela dos anos 80 é reconhecida pelo Guinness World Records como a artista feminina mais vendida de todos os tempos?',
    answers: [
      { text: "Jessica Lange", correct: false },
      { text: "Meryl Streep", correct: true },
      { text: 'Glenn Close', correct: false },
      { text: "Madonna", correct: false }
    ]
  },
  {
    question: ' A banda Melim tem quantos integrantes?    ',
    answers: [
      { text: '7', correct: false },
      { text: '8', correct: true },
      { text: '3', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'Quem é conhecida com o título de "Abelha Rainha da MPB"?',
    answers: [
      { text: 'Maria Bethânia', correct: false },
      { text: 'Gal Costa', correct: true },
      { text: 'Simone', correct: false },
      { text: 'Elis Regina', correct: false }
    ]
  },
  {
    question: 'Em que ano o Grupo Mamonas Assassinas foi formado?    ',
    answers: [
      { text: '1989', correct: false },
      { text: '1950', correct: false },
      { text: '1996', correct: false },
      { text: '1994', correct: true },
    ]
  },
  {
    question: 'Como se chama o famoso passo de dança criado por Michael Jackson?',
    answers: [
      { text: 'Noonwalk', correct: false },
      { text: 'Moonwalk', correct: false },
      { text: 'Dancingwalk', correct: false },
      { text: 'Boomwalk', correct: true },
    ]
  },
  {
    question: 'Quem cantou a música "Dona" nos anos 80?'    ,
    answers: [
      { text: 'Roupa Nova      ', correct: false },
      { text: 'Kid Abelha', correct: false },
      { text: 'Oswaldo Montenegro', correct: false },
      { text: 'RPM', correct: true },
    ]
  },
  {
    question: ' É um dеѕtасаdо соmроѕіtоr, tеndо múѕісаѕ grаvаdаѕ роr nоmеѕ соnѕаgrаdоѕ соmо Еlіѕ Rеgіnа, Ѕіmоnе е Gаl Соѕtа.',
    answers: [
      { text: 'Сhісо Вuаrquе', correct: false },
      { text: 'Іvаn Lіnѕ', correct: false },
      { text: ' Еdu Lоbо', correct: false },
      { text: 'Zé Gеrаldо', correct: true },
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

