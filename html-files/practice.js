const questions = [
  {
    category="Math", question="What is 3+2?", choices=["4", "5", "6"], answer="5"
  },

  {
    category="Science", question="Closest planet to Earth?", choices=["Venus", "Jupiter", "Saturn"], answer="Venus"
  },

  {
    category="Geography", question="Capital of Uttar Pradesh?", choices=["Kanpur", "Lucknow", "Varanasi"], answer="Lucknow"
  },

  {
    category="Computer", question="Which language is used in Frontend Development?", choices=["HTML", "Java", "Python"], answer="HTML"
  },

  {
    category="General Knowledge", question="Currency name of India?", choices=["Rubel", "Yen", "Rupees"], answer="Rupees"
  }
];

  function getRandomQuestion(questions)
  {
    const index = Math.floor(Math.random()*questions.length);
    return questions[index];
  }

  function getRandomComputerChoice(choices)
  {
    const index = Math.floor(Math.random()*choices.length);
    return choices[index];
  }

  function getResults(question, computerChoice)
  {
    if(question.answer===computerChoice)
    return "The computer's choice is correct!"
    else
    {
    return `The computer's choice is wrong. The correct answer is: ${question.answer};`
  }
  }