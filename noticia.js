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
    question: "Qual país recentemente anunciou avanços significativos em sua pesquisa espacial?",
    answers: [
      { text: "Estados Unidos", correct: false },
      { text: " Índia", correct: false },
      { text: "China", correct: true },
      { text: "Rússia", correct: false }
    ]
  },
  {
    question: "Quem foi eleito como o líder de um importante partido político em um país europeu nas últimas eleições?",
    answers: [
      { text: "Olaf Scholz", correct: true },
      { text: "Angela Merkel", correct: false },
      { text: " Emmanuel Macron", correct: false },
      { text: "Boris Johnson", correct: false }
    ]
  },
  {
    question: 'Qual é a mais recente descoberta científica relacionada à saúde que está ganhando destaque nos noticiários?',
    answers: [
      { text: 'Vacina contra a malária', correct: true },
      { text: 'Tratamento inovador para o câncer', correct: false },
      { text: ' Novo antibiótico potente', correct: false },
      { text: " Terapia genética para a diabetes", correct: false }
    ]
  },
  {
    question: 'Em qual região do mundo ocorreu um recente desastre natural, impactando comunidades locais?',
    answers: [
      { text: "América do Sul", correct: false },
      { text: "Sudeste Asiático", correct: true },
      { text: 'África Subsaariana', correct: false },
      { text: " Europa Ocidental", correct: false }
    ]
  },
  {
    question: 'Qual setor da economia está enfrentando desafios significativos devido às recentes mudanças no cenário global?',
    answers: [
      { text: 'Tecnologia', correct: false },
      { text: 'Turismo', correct: true },
      { text: 'Energia', correct: false },
      { text: 'Agricultura', correct: false }
    ]
  },
  {
    question: 'Quem é o atual campeão de um importante torneio esportivo internacional que aconteceu recentemente?',
    answers: [
      { text: 'Estados Unidos (basquete)', correct: false },
      { text: 'Brasil (futebol)', correct: true },
      { text: 'França (tênis)', correct: false },
      { text: 'Austrália (rúgbi)', correct: false }
    ]
  },
  {
    question: 'Qual tema tem sido central nas discussões sobre o meio ambiente nas últimas notícias?',
    answers: [
      { text: 'Desmatamento na Amazônia', correct: false },
      { text: 'Poluição do ar na Ásia', correct: false },
      { text: 'Escassez de água na África', correct: false },
      { text: 'Derretimento das calotas polares', correct: true },
    ]
  },
  {
    question: 'Qual líder político recentemente anunciou medidas para combater a crise econômica em seu país?',
    answers: [
      { text: 'Narendra Modi', correct: false },
      { text: 'Justin Trudeau', correct: false },
      { text: 'Xi Jinping', correct: false },
      { text: 'Jair Bolsonaro', correct: true },
    ]
  },
  {
    question: 'Qual empresa de tecnologia lançou um produto inovador que está gerando grande interesse do público?',
    answers: [
      { text: 'Amazon', correct: false },
      { text: 'Microsoft', correct: false },
      { text: 'Apple', correct: false },
      { text: 'Google', correct: true },
    ]
  },
  {
    question: 'Em qual país ocorreram recentemente protestos significativos, chamando a atenção para questões sociais e políticas?',
    answers: [
      { text: 'Chile', correct: false },
      { text: 'Austrália', correct: false },
      { text: 'Canadá', correct: false },
      { text: 'Nigéria', correct: true },
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

