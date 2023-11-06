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
    question: 'Quem interpretou o papel de Jack Dawson no filme "Titanic" de 1997?',
    answers: [
      { text: "Brad Pitt", correct: false },
      { text: "Tom Hanks", correct: false },
      { text: "Leonardo DiCaprio", correct: true },
      { text: "Johnny Depp", correct: false }
    ]
  },
  {
    question: "Qual é o nome da série de televisão que gira em torno das famílias Stark, Lannister e Targaryen em um mundo de fantasia?",
    answers: [
      { text: "Game of Thrones", correct: true },
      { text: "Stranger Things", correct: false },
      { text: "The Walking Dead", correct: false },
      { text: "Westworld", correct: false }
    ]
  },
  {
    question: ' Qual banda britânica lançou o álbum "The Dark Side of the Moon" em 1973?    ',
    answers: [
      { text: 'The Rolling Stones', correct: false },
      { text: ' The Who', correct: false },
      { text: 'Pink Floyd', correct: true },
      { text: "Led Zeppelin", correct: false }
    ]
  },
  {
    question: 'Qual ator interpretou o personagem Wolverine nos filmes da franquia X-Men?',
    answers: [
      { text: "Chris Hemsworth", correct: false },
      { text: "Hugh Jackman", correct: true },
      { text: 'Robert Downey Jr.', correct: false },
      { text: "Chris Evans", correct: false }
    ]
  },
  {
    question: ' Qual é o nome do famoso bruxo criado por J.K. Rowling na série de livros "Harry Potter"?',
    answers: [
      { text: 'Ron Weasley', correct: false },
      { text: 'Harry Potter', correct: true },
      { text: 'Albus Dumbledore', correct: false },
      { text: 'Severus Snape', correct: false }
    ]
  },
  {
    question: 'Quem dirigiu o filme de animação "Toy Story" da Pixar em 1995?',
    answers: [
      { text: 'Steven Spielberg', correct: false },
      { text: 'John Lasseter', correct: true },
      { text: 'George Lucas', correct: false },
      { text: ' James Cameron', correct: false }
    ]
  },
  {
    question: 'Qual atriz desempenhou o papel principal de Katniss Everdeen na franquia "Jogos Vorazes"?',
    answers: [
      { text: 'Emma Stone', correct: false },
      { text: 'Jennifer Aniston', correct: false },
      { text: 'Anne Hathaway', correct: false },
      { text: 'Jennifer Lawrence', correct: true },
    ]
  },
  {
    question: ' Qual é o nome da série de livros de J.R.R. Tolkien que foi adaptada para uma trilogia de filmes dirigida por Peter Jackson?',
    answers: [
      { text: 'As Crônicas de Nárnia', correct: false },
      { text: 'As Crônicas de Gelo e Fogo', correct: false },
      { text: 'Divergente', correct: false },
      { text: 'O Senhor dos Anéis', correct: true },
    ]
  },
  {
    question: 'Qual é o nome do famoso detetive fictício criado por Arthur Conan Doyle?',
    answers: [
      { text: 'Hercule Poirot', correct: false },
      { text: 'Sam Spade', correct: false },
      { text: 'Miss Marple', correct: false },
      { text: ' Sherlock Holmes', correct: true },
    ]
  },
  {
    question: 'Qual é o nome do programa de televisão de culinária em que chefs competem para criar pratos gourmet sob pressão de tempo?',
    answers: [
      { text: ' Chopped', correct: false },
      { text: 'Top Chef', correct: false },
      { text: 'Hells Kitchen', correct: false },
      { text: 'MasterChef', correct: true },
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

