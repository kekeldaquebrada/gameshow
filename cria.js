const questions = [
    { question: "Qual é a capital do Brasil?", options: ["Rio de Janeiro", "São Paulo", "Brasília", "Belo Horizonte"], answer: "c" },
    // Adicione mais perguntas conforme necessário
];

const questionContainer = document.getElementById("question");
const alternativesContainer = document.getElementById("alternatives");
const nextQuestionBtn = document.getElementById("next-question-btn");
const addQuestionBtn = document.getElementById("add-question-btn");
const addQuestionForm = document.getElementById("add-question-form");
const submitQuestionBtn = document.getElementById("submit-question-btn");

let currentQuestionIndex = 0;

function showQuestion(question) {
    questionContainer.textContent = question.question;
    alternativesContainer.innerHTML = "";
    
    question.options.forEach((option, index) => {
        const alternative = document.createElement("div");
        alternative.className = "alternative";
        alternative.textContent = `${String.fromCharCode(97 + index)}. ${option}`;
        alternative.setAttribute("data-index", index);
        alternativesContainer.appendChild(alternative);
    });
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer.charCodeAt(0) - 97;
    const alternativeElements = document.querySelectorAll(".alternative");
    
    alternativeElements.forEach((alternative, index) => {
        alternative.classList.remove("correct", "incorrect");
        if (correctIndex === index) {
            alternative.classList.add("correct");
        } else if (selectedIndex === index) {
            alternative.classList.add("incorrect");
        }
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion(questions[currentQuestionIndex]);
    } else {
        alert("Fim das perguntas.");
    }
}

function addQuestion() {
    addQuestionForm.classList.remove("hidden");
}

submitQuestionBtn.addEventListener("click", function() {
    const newQuestion = document.getElementById("new-question").value;
    const optionA = document.getElementById("option-a").value;
    const optionB = document.getElementById("option-b").value;
    const optionC = document.getElementById("option-c").value;
    const optionD = document.getElementById("option-d").value;
    const correctAnswer = document.getElementById("correct-answer").value;

    if (!newQuestion || !optionA || !optionB || !optionC || !optionD || !correctAnswer) {
        alert("Por favor, preencha todos os campos.");
    } else {
        questions.push({
            question: newQuestion,
            options: [optionA, optionB, optionC, optionD],
            answer: correctAnswer.toLowerCase()
        });
        alert("Nova pergunta adicionada com sucesso!");
        addQuestionForm.classList.add("hidden");
        clearForm();
    }
});

function clearForm() {
    document.getElementById("new-question").value = "";
    document.getElementById("option-a").value = "";
    document.getElementById("option-b").value = "";
    document.getElementById("option-c").value = "";
    document.getElementById("option-d").value = "";
    document.getElementById("correct-answer").value = "";
}

nextQuestionBtn.addEventListener("click", nextQuestion);
addQuestionBtn.addEventListener("click", addQuestion);
alternativesContainer.addEventListener("click", function(event) {
    const selectedIndex = event.target.getAttribute("data-index");
    if (selectedIndex !== null) {
        checkAnswer(parseInt(selectedIndex));
    }
});


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


