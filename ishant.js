const starte = document.getElementById('start1')
const nexte = document.getElementById('next1')
const questionbox= document.getElementById('question-box')
const question = document.getElementById('question')
const answers = document.getElementById('answer-buttons')

let shufflequestion,currentindex

starte.addEventListener('click',startgame)
function startgame()
{  console.log("hhsa");
   starte.classList.add('hide')
   shufflequestion=questions.sort(()=>Math.random()-0.5)
   currentindex=0
   questionbox.classList.remove('hide')

}







const questions = [
  {
    question: 'What is 2 + 2?',
    answer: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Who is the best YouTuber?',
    answer: [
      { text: 'Web Dev Simplified', correct: true },
      { text: 'Traversy Media', correct: true },
      { text: 'Dev Ed', correct: true },
      { text: 'Fun Fun Function', correct: true }
    ]
  },
  {
    question: 'Is web development fun?',
    answer: [
      { text: 'Kinda', correct: false },
      { text: 'YES!!!', correct: true },
      { text: 'Um no', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'What is 4 * 2?',
    answer: [
      { text: '6', correct: false },
      { text: '8', correct: true }
    ]
  }
]