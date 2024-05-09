let currentPage = 0

const questions = [
  { section: 1, label: "I engage in physical activity and regular exercise 5 days a week." },
  { section: 1, label: "My overall diet and nutrition is healthy." },
  { section: 1, label: "I rarely eat processed foods and refined sugars, and I eat organic foods regularly." },
  { section: 1, label: "I get at least 7-8 hours of sleep per night." },
  { section: 1, label: "I rarely experience physical illnesses (e.g., colds, infections)." },
  {
    section: 1,
    label:
      "My gut health is excellent! I rarely experience digestive issues such as bloating, heartburn, diarrhea, and/or constipation.",
  },
  { section: 1, label: "My skin is glowing and even-toned, and I rarely get acne." },
  { section: 1, label: "My energy levels and focus are consistently even." },
  { section: 1, label: "I make self-care and preventive healthcare a priority in my life." },
  { section: 1, label: "I drink no more than two alcoholic beverages per week." },
  { section: 2, label: "I rarely feel high stress levels or a sense of being overwhelmed." },
  { section: 2, label: "My moods and emotional health feel consistent and stable." },
  { section: 2, label: "I have established reliable coping mechanisms to help manage daily stressors." },
  { section: 2, label: "I prioritize engaging in activities that bring me joy and happiness." },
  { section: 2, label: "I rarely feel anxious or depressed." },
  { section: 2, label: "I have a high level of self-esteem and confidence." },
  { section: 2, label: "I often engage in meaningful conversations or connections with others." },
  { section: 2, label: "I have a solid understanding of how to regulate my emotions." },
  { section: 2, label: "I know my personality type (e.g., introvert and extrovert), and I support it well." },
  { section: 2, label: "I will ask for help when needed." },
  { section: 3, label: "I often engage in practices that connect me to my spiritual beliefs or values." },
  { section: 3, label: "I regularly spend time in nature or in peaceful environments." },
  { section: 3, label: "I often practice acts of kindness." },
  { section: 3, label: "I have a strong sense of purpose and find life very meaningful." },
  { section: 3, label: "I practice mindfulness and/or meditation regularly." },
  { section: 3, label: "I often feel gratitude and appreciation." },
  { section: 3, label: "I do not hold grudges. I can forgive myself and others." },
  { section: 3, label: "I can give and receive love with ease." },
  { section: 3, label: "I feel attuned to my inner voice and knowing." },
  { section: 3, label: "I know what brings my heart joy." },
  {
    section: 4,
    label:
      "I consistently follow a healthy diet, use pharmaceutical nutritional supplementation to help enhance my health, and monitor my toxic exposure (environmental, internal, and emotional) to help optimize my overall health.",
  },
  {
    section: 4,
    label: "I monitor and track my health metrics or biomarkers (e.g., blood sugar, sleep quality) regularly.",
  },
  { section: 4, label: "I regularly use technology or devices to enhance my physical or mental performance." },
  {
    section: 4,
    label: "I engage in mental exercises and cognitive training and/or challenge myself to learn new things regularly.",
  },
  { section: 4, label: "I highly rate my proactive measures in personal health optimization." },
  {
    section: 4,
    label:
      "I am aware of what causes my inflammation levels to increase and avoid such things as environments/foods/activities/etc. to the best of my ability.",
  },
  {
    section: 4,
    label:
      "I use environmental modifications regularly to improve my well-being (e.g., reducing EMF exposure, using water filters, and using air purifiers).",
  },
  { section: 4, label: "I support health holistically." },
  { section: 4, label: "I have tested my microbiome and made lifestyle modifications based on the results." },
  {
    section: 4,
    label: "I have had my genetics tested and have made lifestyle modifications based on the results.",
  },
]

let currentQuestionIndex = 0;
let totalQuestions = questions.length;

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
    updateProgressBar();
});

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const sectionTitle = document.querySelector('.section-title');
    const questionText = document.querySelector('.question-text');
    const optionsContainer = document.querySelector('.options-container');

    sectionTitle.textContent = `Section ${question.section}`;
    questionText.textContent = question.label;
    optionsContainer.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const optionId = `option-${i}`;
        const input = document.createElement('input');
        input.type = 'radio';
        input.id = optionId;
        input.name = 'answer';
        input.value = i;
        input.onchange = () => nextQuestion();

        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.textContent = i;

        optionsContainer.appendChild(input);
        optionsContainer.appendChild(label);
    }
}

function nextQuestion() {
  if (currentQuestionIndex < totalQuestions - 1) {
      currentQuestionIndex++;
  } else {
      // Optionally handle the completion of the quiz differently
      currentQuestionIndex = 0; // Reset or handle completion
      alert("You've completed the quiz!");
  }
  displayQuestion();
  updateProgressBar();
}

function updateProgressBar() {
  const progressBar = document.querySelector('#progress-bar');
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
}

document.addEventListener("DOMContentLoaded", () => {
  displayQuestion(); // Initialize the first question
  updateProgressBar(); // Initialize the progress bar
});
