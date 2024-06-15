let currentPage = 0;

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
];

const result0 = {
    header: "A WORK IN PROGRESS",
    body: `
        <p>Hey beautiful, we can see you may need a little help increasing your Health Esteem.</p>
        </h3>
            Your Health Esteem quiz results indicate that you are A WORK IN PROGRESS and there is a need
            for improvement.
        </h3>
        <p>
            Please do not fret.  We get that there are a lot of unknowns and roadblocks that can make healthy,
            <br />
            successful self-care routines and approaches to biological aging challenging. We are here to help elevate
            you!<br /><br />If you are looking for guidance, a trusted sounding board, and someone to simplify how you can
            improve your health and style it so you can be the best version of yourself, Healthstyle By Dr. Kenna is here to
            help! Please reach out. We see your potential and are ready, willing, and able to be your health coach, guide,
            and advocate!
        </p>
    `
};

const result1 = {
    header: "MIDDLE OF THE ROAD",
    body: `
        <p>Hey there! We can see you are working on your health and have identified there is room for improvement.</h3>
        <h3>Your Health Esteem is rated as Middle of the Road- Average.</h3>
        <p>
            We can see the efforts you are putting into your self-care and how special you are! There is room for
            improvement when it comes to supporting your self-care, health, and biological aging process. We understand that
            you are unique and that your body may need something that has not been identified yet. It could be as simple as
            identifying an inflammatory food source, setting some healthy boundaries, redefining your sleep hygiene, or
            taking a nutritional supplement that can help you stay more focused and energized. Healthstyle By Dr. Kenna
            helps people like yourself figure out what's missing and what needs to be improved to improve their health. We
            take all the guessing out of the process and use information, aka data, to help empower our clients.
            <br /><br />Optimizing one's health doesn't have to be overwhelming; it can be inspiring, fun, energizing, and,
            with consistency, transformative. <br /><br />If there is anything we can do to help you learn how to optimize
            your health, self-care, and biological aging approach, please let Healthstyle know; we are here to help you be
            the best version of yourself.
        </p>
    `
};

const result2 = {
    header: "GOOD",
    body: `
        <p>Wow, we can tell you are invested in your health!</h3>
        <h3>Your Health Esteem is rated as solidly- GOOD.</h3>
        <p>
            Keep up the good work! We can see that you are engaged and working on your health regularly. Caring for your
            health in ways that give optimal results and slow your biological aging doesn't just involve eating right and
            exercising; it requires a 360-degree holistic approach that anyone can easily do. Healthstyle By Dr. Kenna helps
            people identify their health blind spots and transform their approach. If you want to improve your approach to
            supporting your health and biological aging process, please know that Healthstyle is here to help support you.
        </p>
    `
};

const result3 = {
    header: "EXCELLENT",
    body: `
    <h2>Congratulations, your Health Esteem is rated as- EXCELLENT!</h2>
    <p>
        We can tell you are a ROCKSTAR and have made taking care of your health a top priority. You probably already
        know the keys to maintaining your health, but just in case you don't here they are:<br />-Time<br />-Dedication<br />-Consistency<br />-Knowledge
        that health is malleable.<br /><br />Having an understanding that the body may need something different than it
        did before and being willing to pivot and adapt to its needs helps optimize health and biological aging.<br /><br />Please
        let Healthstyle know if there is anything we can do to help better support you with optimizing your health and
        biological aging process. We LOVE supporting ROCKSTARS!
    </p>
    `
};


let currentQuestionIndex = 0;
let totalQuestions = questions.length;
let sectionScores = [0, 0, 0, 0]; // For each section
let sectionTitles = ["Physical Health", "Emotional Health", "Spiritual Health", "Biohacking"];

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('start-quiz').addEventListener('click', startQuiz);
//   document.getElementById('back-button').addEventListener('click', goBack);
});

function startQuiz() {
  document.querySelector('.cover-page').style.display = 'none';
  document.querySelector('.quiz-container').style.display = 'flex';
  displayQuestion();
  updateProgressBar();
}

function displayQuestion() {
  const question = questions[currentQuestionIndex];
  const sectionTitle = document.querySelector('.section-title');
  const questionText = document.querySelector('.question-text');
  const optionsContainer = document.querySelector('.options-container');

  sectionTitle.textContent = sectionTitles[question.section - 1]; // Adjusted for zero-based index
  questionText.textContent = question.label;
  optionsContainer.innerHTML = '';

  for (let i = 1; i <= 5; i++) {
    const optionId = `option-${i}`;
    const input = document.createElement('input');
    input.type = 'radio';
    input.id = optionId;
    input.name = 'answer';
    input.value = i;
    input.onchange = () => handleSelection(i);

    const label = document.createElement('label');
    label.htmlFor = optionId;
    label.textContent = i;

    optionsContainer.appendChild(input);
    optionsContainer.appendChild(label);
  }
//   document.getElementById('back-button').style.display = currentQuestionIndex > 0 ? 'block' : 'none'; // Show back button if not the first question
}

function nextQuestion() {
  if (currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex++;
    displayQuestion();
    updateProgressBar();
  } else {
    requestEmail(); // Calculate and show results based on scores
  }
}

function goBack() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion();
    updateProgressBar();
  }
}

function handleSelection(score) {
  sectionScores[questions[currentQuestionIndex].section - 1] += score; // Accumulate scores by section
  setTimeout(() => { // Fade effect
    document.querySelector('.question-text').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.question-text').style.opacity = '1';
      nextQuestion();
    }, 100);
  }, 100);
}

function updateProgressBar() {
  const progressBar = document.querySelector('#progress-bar');
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  progressBar.style.width = `${progress}%`;
}

function getSectionScoreClass(percentage) {
  if (percentage < 40) return 'low';
  if (percentage < 60) return 'average';
  if (percentage < 80) return 'good';
  return 'excellent';
}

function getSectionScoreContent(percent) {
  if (percent < 40) return 'WIP';
  if (percent < 60) return 'AVERAGE';
  if (percent < 80) return 'GOOD';
  return 'EXCELLENT';
}

function handleFormSubmit(form) {
  (new Y.Squarespace.FormSubmit(form)).submit({
      formId: '666d07ac0f8b397750bb45ee',
      collectionId: '663c3293b5f91a0160fda2cb',
      objectName: 'yui_3_17_2_1_1718419357414_1743'
  });
  showResults();
}

function requestEmail() {
  const emailForm = document.querySelector('#email-form');
  emailForm.style.display = 'block';
  const resultsPage = document.querySelector('#results-page');
  resultsPage.style.display = 'none';
}

function showResults() {
  const emailForm = document.querySelector('#email-form');
  emailForm.style.display = 'none';
  const resultsPage = document.querySelector('#results-page');
  emailForm.style.display = 'flex';
  // Calculate total score and decide the result
  let totalScore = sectionScores.reduce((a, b) => a + b, 0);
  let resultText;
  let resultBody;
  let resultClass;
  switch (true) {
    case totalScore < 80:
      resultText = result0.header;
      resultBody = result0.body;
      resultClass = 'low';
      break;
    case totalScore < 120:
      resultText = result1.header;
      resultBody = result1.body;
      resultClass = 'average';
      break;
    case totalScore < 160:
      resultText = result2.header;
      resultBody = result2.body;
      resultClass = 'good';
      break;
    default:
      resultText = result3.header;
      resultBody = result3.body;
      resultClass = 'excellent';
  }

  // Show section scores as percentages
  const maxScorePerSection = 10 * 5; // 10 questions, 5 points each
  const sectionPercentages = sectionScores.map(score => Math.round((score / maxScorePerSection) * 100));

  document.querySelector('.quiz-container').style.display = 'none';
  document.querySelector('#results-page').style.display = 'flex';
  document.getElementById('results-header').textContent = resultText;
  document.getElementById('results-header').className = resultClass;
  document.getElementById('results-body').innerHTML = resultBody;

  // Color code section scores
  document.getElementById('section-1-sum').className = `section-score ${getSectionScoreClass(sectionPercentages[0])}`;
  document.getElementById('section-2-sum').className = `section-score ${getSectionScoreClass(sectionPercentages[1])}`;
  document.getElementById('section-3-sum').className = `section-score ${getSectionScoreClass(sectionPercentages[2])}`;
  document.getElementById('section-4-sum').className = `section-score ${getSectionScoreClass(sectionPercentages[3])}`;

  document.getElementById('section-1-sum').textContent = getSectionScoreContent(sectionPercentages[0]);
  document.getElementById('section-2-sum').textContent = getSectionScoreContent(sectionPercentages[1]);
  document.getElementById('section-3-sum').textContent = getSectionScoreContent(sectionPercentages[2]);
  document.getElementById('section-4-sum').textContent = getSectionScoreContent(sectionPercentages[3]);
}

function restartQuiz() {
  currentQuestionIndex = 0;
  sectionScores = [0, 0, 0, 0];
  document.querySelector('#results-page').style.display = 'none';
  document.querySelector('.cover-page').style.display = 'flex';
}