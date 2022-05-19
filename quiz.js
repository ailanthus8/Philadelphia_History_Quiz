var myQuestions = [
	{
	  question:
		"Philadelphians eat 12 times the average number of pretzels as the rest of the US. What is the proper shape for a Philadelphia soft pretzel?",
	  answers: {
		a: "Heart-shaped, like praying arms",
		b: "Gracefully braided",
		c: "A narrow oval, like a race track"
	  },
	  correctAnswer: "c"
	},
	{
	  question:
		"Philadelphia hosted the first Republican National Convention in 1856. In addition to choosing presidential candidates, what was the purpose of the meeting?",
	  answers: {
		a: "To plan a political strategy for a US civil war" + " ",
		b:
		  "To launch an ice-cream making business to support party activities" +
		  " ",
		c: "To approve an anti-slavery platform"
	  },
	  correctAnswer: "c"
	},
	{
	  question:
		"Philadelphia was the first American city to guarantee freedom of religion. What year was that?",
	  answers: {
		a: "1774" + " ",
		b: "1702" + " ",
		c: "1682. We were ahead of our time."
	  },
	  correctAnswer: "c"
	},
  
	{
	  question: "Which famous comic book artist was born in Philadelphia?",
	  answers: {
		a: "Art Spiegelman" + " ",
		b: "Charles M. Schultz" + " ",
		c: "R. Crumb"
	  },
	  correctAnswer: "c"
	},
	{
	  question:
		"In 2017, which household object appeared as a giant sculpture on the plaza of a downtown building next to a statue of former mayor Frank Rizzo?",
	  answers: {
		a: "A pretzel" + " ",
		b: "A clothespin" + " ",
		c: "An Afro pick"
	  },
	  correctAnswer: "c"
	},
  
	{
	  question:
		"Why did 92-year old city planner and Bacon brothers dad Ed Bacon ride a skateboard across LOVE Park in 2002?",
	  answers: {
		a: "To protest the park's misuse by skateboarders" + " ",
		b: "To try out a new sport he had seen on ESPN" + " ",
		c:
		  "To support young people who used it as a world-renowned skateboard park"
	  },
	  correctAnswer: "c"
	},
	{
	  question:
		"In what year did Philly civil rights activist, scholar, and athlete Octavius Catto succeed in his campaign to desegrete Philadelphia streetcars?",
	  answers: {
		a: "1864" + " ",
		b: "1948" + " ",
		c: "1954"
	  },
	  correctAnswer: "a"
	},
	{
	  question: "How long has IKEA been in Philadelphia?",
	  answers: {
		a: "Since 1974" + " ",
		b: "Since 2001" + " ",
		c:
		  "The Swedes were the first to build their homes in Philadelphia, in 1638. In 1985, three hundred forty seven years later, IKEA arrived to furnish them."
	  },
	  correctAnswer: "c"
	}
  ];
  
  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  
  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
  
  function generateQuiz(
	questions,
	quizContainer,
	resultsContainer,
	submitButton
  ) {
	function showQuestions(questions, quizContainer) {
	  // storing the output and the answer choices
	  var output = [];
	  var answers;
  
	  // for each question:
	  for (var i = 0; i < questions.length; i++) {
		// first reset the list of answers
		answers = [];
  
		// for each available answer...
		for (letter in questions[i].answers) {
		  // ...add an html radio button
		  answers.push(
			"<label>" +
			  '<input type="radio" name="question' +
			  i +
			  '"value="' +
			  letter +
			  '">' +
			  letter +
			  ": " +
			  questions[i].answers[letter] +
			  "</label>"
		  );
		}
  
		// add this question and its answers to the output
		output.push(
		  '<div class="question">' +
			questions[i].question +
			"</div>" +
			'<div class="answers">' +
			answers.join("") +
			"</div>"
		);
	  }
  
	  // finally combine our output list into one string of html and put it on the page
	  quizContainer.innerHTML = output.join("");
	}
  
	function showResults(questions, quizContainer, resultsContainer) {
	  // gather answer containers from our quiz
	  var answerContainers = quizContainer.querySelectorAll(".answers");
  
	  // keep track of user's answers
	  var userAnswer = "";
	  var numCorrect = 0;
  
	  // for each question...
	  for (var i = 0; i < questions.length; i++) {
		// find selected answer
		userAnswer = (
		  answerContainers[i].querySelector(
			"input[name=question" + i + "]:checked"
		  ) || {}
		).value;
  
		// if answer is correct
		if (userAnswer === questions[i].correctAnswer) {
		  // add to the number of correct answers
		  numCorrect++;
  
		  // color the answers green
		  answerContainers[i].style.color = "green";
		}
		// if answer is wrong or blank
		else {
		  // color the answers red
		  answerContainers[i].style.color = "red";
		}
	  }
  
	  // show number of correct answers out of total
	  resultsContainer.innerHTML =
		"You got " +
		numCorrect +
		" out of " +
		questions.length +
		" answers correct.";
  
	  // print a comment about each possible quiz score
	  if (numCorrect === 8) {
		resultsContainer.innerHTML =
		  "8 out of 8 answers correct? You deserve a sausage and pepper hoagie!";
	  }
  
	  if (numCorrect === 7) {
		resultsContainer.innerHTML =
		  "7 out of 8 answers correct? You deserve a cookie at Isgro's Bakery!";
	  }
  
	  if (numCorrect === 6) {
		resultsContainer.innerHTML =
		  "6 out of 8 answers correct? Treat yourself to a water ice at John's. You deserve it!";
	  }
  
	  if (numCorrect === 5) {
		resultsContainer.innerHTML =
		  "Clinging to success with 5 out of 8 correct? That's Gritty!";
	  }
  
	  if (numCorrect === 4) {
		resultsContainer.innerHTML =
		  "4 out of 8 answers correct? Check out the Ben Franklin documentary on PBS!";
	  }
  
	  if (numCorrect === 3) {
		resultsContainer.innerHTML =
		  "3 out of 8 answers correct? Time for a walking tour in Society Hill!";
	  }
  
	  if (numCorrect === 2) {
		resultsContainer.innerHTML =
		  "2 out of 8 answers correct? Might be time to take a trip to Philly!";
	  }
  
	  if (numCorrect === 1) {
		resultsContainer.innerHTML =
		  '1 out of 8 answers correct? Check out "The Sixth Sense" (maybe the most Philly movie ever made)';
	  }
	  if (numCorrect === 0) {
		resultsContainer.innerHTML =
		  "0 out of 8? That's okay. Philly loves you anyway!";
	  }
	}
  
	// show questions right away
	showQuestions(questions, quizContainer);
  
	// on submit, show results
	submitButton.onclick = function () {
	  showResults(questions, quizContainer, resultsContainer);
	};
  }

