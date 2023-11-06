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
    question: "O que significa a sigla “www” na internet?",
    answers: [
      { text: "World wide web", correct: true },
      { text: "Web world wide", correct: false },
      { text: "Web wide world", correct: false },
      { text: "Wide web world", correct: false }
    ]
  },
  {
    question: "Qual empresa desenvolveu o sistema operacional Android para dispositivos móveis?",
    answers: [
      { text: "Apple", correct: false },
      { text: "Microsoft", correct: false },
      { text: "Google ", correct: true },
      { text: " Samsung", correct: false }
    ]
  },
  {
    question: 'Qual é a unidade básica de armazenamento em um computador?',
    answers: [
      { text: 'Byte', correct: true },
      { text: ' Megabyte', correct: false },
      { text: 'Kilobyte', correct: false },
      { text: "Terabyte", correct: false }
    ]
  },
  {
    question: 'Qual é o nome do primeiro navegador de internet amplamente utilizado?',
    answers: [
      { text: "Chrome", correct: false },
      { text: " Firefox", correct: false },
      { text: 'Internet Explorer', correct: true },
      { text: "Safari", correct: false }
    ]
  },
  {
    question: 'Qual empresa é mais conhecida por seus processadores para computadores, como o Core i7?',
    answers: [
      { text: ' AMD', correct: false },
      { text: 'Intel ', correct: true },
      { text: 'NVIDIA', correct: false },
      { text: 'Qualcomm ', correct: false }
    ]
  },
  {
    question: ' O que a sigla "URL" significa em relação à internet?',
    answers: [
      { text: 'Universal Resource Locator', correct: true},
      { text: ' Uniform Resource Language', correct: false },
      { text: 'Unified Reference Link', correct: false },
      { text: 'Universal Retrieval Link', correct: false }
    ]
  },
  {
    question: 'Qual é o nome do protocolo de segurança amplamente usado para proteger a comunicação na internet? ',
    answers: [
      { text: 'FTP', correct: false },
      { text: 'HTTP', correct: false },
      { text: 'SSL/TLS', correct: true},
      { text: 'UDP', correct: false},
    ]
  },
  {
    question: 'Qual é o termo para um programa de computador que se disfarça como um software legítimo, mas realiza ações maliciosas?',
    answers: [
      { text: 'Vírus', correct: false },
      { text: 'Worm', correct: false },
      { text: 'Trojan', correct: true },
      { text: 'Spyware ', correct: false },
    ]
  },
  {
    question: 'Qual é o termo para a prática de invadir sistemas de computador com intenções maliciosas?',
    answers: [
      { text: 'Hacking', correct: true },
      { text: 'Phishing ', correct: false },
      { text: 'Spamming ', correct: false },
      { text: 'Malware ', correct: false },
    ]
  },
  {
    question: 'Qual é a tecnologia que permite a transferência de dados sem fio em curtas distâncias, como para dispositivos como fones de ouvido e teclados?',
    answers: [
      { text: 'Bluetooth', correct: true },
      { text: 'Wi-Fi', correct: false },
      { text: 'NFC', correct: false },
      { text: ' 4G', correct: false },
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

