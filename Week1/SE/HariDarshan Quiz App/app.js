const quizzes = [
	{
		question: 'What is the capital of India?',
		answer: 1,
		options: ['Mumbai', 'Delhi', 'Banglore', 'Gurugram'],
	},
	{
		question: 'Sun rises from the ______',
		answer: 1,
		options: ['Obviously West', 'East seriously??', 'South', 'North'],
	},
	{
		question: 'Best movie?',
		answer: 5,
		options: ['Tubelight', 'Bharat', 'Bombay Velvet', 'Student Of the year 2'],
	},
	{
		question: 'You enjoyed the game?',
		answer: 0,
		options: ['Yes', 'No', 'No', 'No'],
	},
];

quizHtml = quizzes.map((quiz, index) => {
	return `
    <div>
      <span class="counter">${index + 1}/${quizzes.length}</span>
    </div>
    <div class="quizWrapper">
			<h1 class="heading">${quiz.question}</h1>
		</div>
  `;
});

document.body.style.backgroundColor = '#0a0a74';
const renderOn = document.querySelector('.quiz');
let currentQuestion = 0;
let score = 0;
renderOn.innerHTML = quizHtml[currentQuestion];
const nextBtn = document.querySelector('.nextBtn');

function selectOption(e) {
	// console.log(e.target);
	let currentAnswer = Number(e.target.value);
	// console.log(currentAnswer);
	if (e.target.value) {
		if (currentAnswer === quizzes[currentQuestion].answer) {
			console.log('correct');
			score++;
			e.target.style.backgroundColor = '#197519';
			document.body.style.backgroundColor = '#197519';
		} else {
			e.target.style.backgroundColor = '#ad1616';
			document.body.style.backgroundColor = '#ad1616';
		}
		if (quizzes[currentQuestion].answer < 4) {
			optionBtns = document.querySelectorAll('.option');
			optionBtns[quizzes[currentQuestion].answer].style.backgroundColor =
				'#197519';
		}
	} else {
		let currentAnswer = Number(e.path[1].value);
		if (currentAnswer === quizzes[currentQuestion].answer) {
			console.log('correct');
			score++;
			e.path[1].style.backgroundColor = '#197519';
			document.body.style.backgroundColor = '#197519';
		} else {
			e.path[1].style.backgroundColor = '#ad1616';
			document.body.style.backgroundColor = '#ad1616';
		}
		if (quizzes[currentQuestion].answer < 4) {
			optionBtns = document.querySelectorAll('.option');
			optionBtns[quizzes[currentQuestion].answer].style.backgroundColor =
				'#197519';
		}
	}
}

function renderOptions(parentNode, index) {
	aDiv = document.createElement('div');
	aDiv.innerHTML = null;
	aDiv.classList.add('optionsDiv');
	quizzes[index].options.forEach((element, ind) => {
		let btn = document.createElement('button');
		let spn = document.createElement('span');
		let anSpan = document.createElement('span');

		btn.style.opacity = 0;
		btn.classList.add('option');
		btn.value = ind;
		btn.addEventListener('click', selectOption);

		spn.classList.add('label');
		spn.innerHTML = String.fromCharCode(65 + ind);

		anSpan.classList.add('quizOption');
		anSpan.innerHTML = element;

		btn.appendChild(spn);
		btn.appendChild(anSpan);
		aDiv.appendChild(btn);
	});
	parentNode.appendChild(aDiv);
	gsap.to('.option', {
		duration: 0.5,
		delay: 0.4,
		opacity: 1,
		stagger: 0.3,
		ease: 'none',
		force3D: true,
	});
}

let parenNode = document.querySelector('.quizWrapper');
renderOptions(parenNode, currentQuestion);

nextBtn.addEventListener('click', () => {
	if (currentQuestion >= quizHtml.length - 1) {
		currentQuestion = 0;
		alert(`You Scored ${score} out of ${quizzes.length} in quiz`);
		score = 0;
	} else {
		currentQuestion++;
	}
	if (currentQuestion === quizHtml.length - 1) {
		nextBtn.innerHTML = 'Next';
	} else {
		nextBtn.innerHTML = 'Next';
	}
	document.body.style.backgroundColor = '#0a0a74';
	renderOn.innerHTML = quizHtml[currentQuestion];
	let parenNode = document.querySelector('.quizWrapper');
	renderOptions(parenNode, currentQuestion);
});
