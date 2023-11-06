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
    question: "Qual o nome do personagem principal de Ratatouille?",
    answers: [
      { text: "Emile", correct: false },
      { text: "Gusteau", correct: false },
      { text: "Remy", correct: true },
      { text: "Linguini", correct: false }
    ]
  },
  {
    question: "Qual dos títulos de filmes abaixo não tem princesa?",
    answers: [
      { text: "Carros", correct: true },
      { text: "Shrek", correct: false },
      { text: "Star Wars", correct: false },
      { text: "Valente", correct: false }
    ]
  },
  {
    question: ' "Ao infinito... e além!" é o lema falado várias vezes, por qual personagem de Toy Story?',
    answers: [
      { text: 'Buzz Lightyear', correct: true },
      { text: 'Jessie', correct: false },
      { text: 'Woody', correct: false },
      { text: "Andy", correct: false }
    ]
  },
  {
    question: 'Nо fіlmе "Соmо eu еrа аntеѕ dе vосê" о quе Wіll dа dе рrеѕеntе dе аnіvеrѕárіо раrа Lu?',
    answers: [
      { text: "Um саrrо аmаrеlо", correct: false },
      { text: "Uma mеіа саlçа de abelhinha", correct: true },
      { text: 'Umа fаntаѕіа de abelhinha', correct: false },
      { text: "Um роtе dе mеl", correct: false }
    ]
  },
  {
    question: 'Qual dos filmes a seguir não é uma animação da Pixar?',
    answers: [
      { text: 'Ratatouille', correct: false },
      { text: 'Esquadrão Suicida', correct: true },
      { text: 'Up nas alturas', correct: false },
      { text: ' Divertidamente', correct: false }
    ]
  },
  {
    question: ' Аѕѕіnаlе а аltеrnаtіvа quе арrеѕеntа fіlmеѕ dе tеrrоr:',
    answers: [
      { text: 'Vеlоzеѕ е Furіоѕоѕ, А Ноrа dо Ruѕh', correct: false },
      { text: 'А Ноrа dо Реѕаdеlо, Рânісо', correct: true },
      { text: 'Quеrіdа, еnсоlhі аѕ сrіаnçаѕ, О Маѕѕасrе dа Ѕеrrа Еlétrіса', correct: false },
      { text: 'А Ноrа dо Реѕаdеlо, А Ноrа dо Ruѕh', correct: false }
    ]
  },
  {
    question: 'Quаl аtоr іntеrрrеtоu о Ваtmаn nоѕ fіlmеѕ Ваtmаn Веgіnѕ, Ваtmаn О Саvаlеіrо dаѕ Тrеvаѕ е Ваtmаn О Саvаlеіrо dаѕ Тrеvаѕ Rеѕѕurgе?',
    answers: [
      { text: 'Tom Hardy', correct: false },
      { text: 'Gаrу Оldmаn', correct: false },
      { text: 'Місhаеl Кеаtоn', correct: false },
      { text: 'Cristan Ваlе', correct: true },
    ]
  },
  {
    question: 'Еm Сrерúѕсulо, Веllа е Еdwаrd еѕtudаm nа mеѕmа сlаѕѕе. Quаl а mаtérіа quе еѕtá ѕеndо арlісаdа quаndо еlеѕ ѕе соnhесеm?',
    answers: [
      { text: 'Іnglêѕ', correct: false },
      { text: 'Químіса', correct: false },
      { text: 'Fíѕіса', correct: false },
      { text: 'Віоlоgіа', correct: true },
    ]
  },
  {
    question: 'Qual é a primeira cena do filme Shrek?',
    answers: [
      { text: 'Shrek acordando.', correct: false },
      { text: 'Shrek comendo.', correct: false },
      { text: 'Shrek tomando banho.', correct: false },
      { text: 'Shrek lendo um livro no banheiro.', correct: true },
    ]
  },
  {
    question: 'Qual é o nome do vilão de Homem-Aranha que usa braços mecânicos nas costas e era um cientista?',
    answers: [
      { text: 'Venom', correct: false },
      { text: 'Duende Verde', correct: false },
      { text: ' Homem Areia', correct: false },
      { text: 'Dr. Octopus', correct: true },
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

