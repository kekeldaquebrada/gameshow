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
    question: " Quem pintou a monalisa",
    answers: [
      { text: "Van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: false },
      { text: "Michelangelo", correct: true },
      { text: "Tarsila do Amaral", correct: false }
    ]
  },
  {
    question: "Qual pintor famoso que pintou o quadro “A noite estrelada”    ?",
    answers: [
      { text: "Van Gogh", correct: true },
      { text: "Monet", correct: false },
      { text: "Charles Darwin", correct: false },
      { text: "Leonardo da Vinci", correct: false }
    ]
  },
  {
    question: 'Qual das obras a seguir foi criada por Pablo Picasso',
    answers: [
      { text: 'Noite estrelada', correct: true },
      { text: 'Monalisa', correct: false },
      { text: "Les demoiselles d'Avignon", correct: false },
      { text: "O grito", correct: false }
    ]
  },
  {
    question: 'Qual pintor que cortou a própria orelha?',
    answers: [
      { text: "Van Gogh", correct: false },
      { text: "Monet", correct: true },
      { text: 'Michelangelo', correct: false },
      { text: "Leonardo da Vinci", correct: false }
    ]
  },
  {
    question: 'Qual é a técnica de pintura que envolve a aplicação de tinta sobre gesso úmido?',
    answers: [
      { text: 'Aquarela ', correct: false },
      { text: 'Guache', correct: true },
      { text: 'Óleo sobre tela', correct: false },
      { text: 'Afresco ', correct: false }
    ]
  },
  {
    question: 'Quem é a autora da série de pinturas "Ophelia" que retrata a personagem de Shakespeare submersa na água?',
    answers: [
      { text: 'Frida Kahlo', correct: false },
      { text: 'Mary Cassatt', correct: true },
      { text: "Georgia O'Keeffe", correct: false },
      { text: 'John Everett Millais', correct: false }
    ]
  },
  {
    question: 'Qual período artístico é conhecido por sua ênfase na emoção e na expressão individual?',
    answers: [
      { text: 'Renascimento', correct: false },
      { text: 'Barroco', correct: false },
      { text: 'Romantismo', correct: false },
      { text: 'Rococó', correct: true },
    ]
  },
  {
    question: 'Qual movimento artístico influenciou a arquitetura, as artes visuais e o design no início do século 20, enfatizando a funcionalidade e a simplicidade?',
    answers: [
      { text: 'Renascimento', correct: false },
      { text: 'Art Nouveau', correct: false },
      { text: 'Bauhaus', correct: false },
      { text: 'Impressionismo', correct: true },
    ]
  },
  {
    question: 'Quem é conhecido por suas "latas de sopa Campbell" e retratos de celebridades, tornando-se um ícone da pop art?',
    answers: [
      { text: 'Jackson Pollock', correct: false },
      { text: 'Andy Warhol', correct: false },
      { text: 'Piet Mondrian', correct: false },
      { text: 'Henri Cartier-Bresson', correct: true },
    ]
  },
  {
    question: 'Qual é a principal característica do estilo artístico conhecido como "Op Art"?',
    answers: [
      { text: 'Uso de cores escuras e sombrias', correct: false },
      { text: 'Ênfase na representação realista da natureza', correct: false },
      { text: ' Uso de ilusões ópticas e padrões geométricos', correct: false },
      { text: 'Abstração total e ausência de forma reconhecível', correct: true },
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

