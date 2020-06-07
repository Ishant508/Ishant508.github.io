const starte = document.getElementById('start1');
const nexte = document.getElementById('next1');
const questionbox= document.getElementById('question-box');
const question = document.getElementById('question');
const answers = document.getElementById('answe');
var a=0;

var shufflequestion,currentindex

starte.addEventListener('click',startgame);
nexte.addEventListener('click',nextfun);
function nextfun()
{  nexte.classList.add('hide');
  currentindex++;
  setquestion();
}
function startgame()
{  
    
   starte.classList.add('hide');
   document.getElementById('logo').classList.add('hide');
   shufflequestion=questions.sort(()=>Math.random()-0.5);
   currentindex=0;
   questionbox.classList.remove('hide');
  // nexte.classList.remove('hide');
   setquestion();
}
function restart()
{   a=0;
    document.body.classList.add('reset');
    console.log('called');
    shufflequestion=questions.sort(()=>Math.random()-0.5);
    currentindex=0;
    document.getElementById('logo').classList.add('hide');
    document.getElementById('require').classList.remove('hide');
    setquestion();

}

function setquestion()
{ document.getElementById('skip').innerText="SKIP IS NOT ALLOWED  SCORE : "+a;
 showquestion(shufflequestion[currentindex]);
}


function showquestion(questionn)
{ resetstate();
question.innerText=questionn.question;
questionn.answer.forEach(answerdetail=>{
    const butt=document.createElement('button');
    butt.innerText=answerdetail.text;
    butt.classList.add('bt');
    if(answerdetail.correct)
    {
        butt.dataset.correct=answerdetail.correct;
    }
    butt.addEventListener('click',selectans);
    answers.appendChild(butt);

})
}
function resetstate()
{
    while(answers.firstChild)
    {
        answers.removeChild(answers.firstChild);
    }

}
function selectans(e)
{
const selectbut=e.target;
const corr=selectbut.dataset.correct;
if(corr)
{
a++;
}
else
{
    a=a+0;
}
console.log(a);
settcolor(document.body,corr);
Array.from(answers.children).forEach(buttt=>
    {
        settcolor(buttt,buttt.dataset.correct);
    })
  if(shufflequestion.length>currentindex+1)
  {
  nexte.classList.remove('hide');
  }
  else
  { nexte.classList.add('hide');
    starte.innerText='Restart';
    starte.classList.remove('hide');
    score();
    
  }
  }

    
  function score()
  {
      
      document.getElementById('logo').classList.remove('hide');
      document.getElementById('require').classList.add('hide');
      //console.log(a);
     // starte.addEventListener('click',restart());
     document.getElementById('skip').innerText="SKIP IS NOT ALLOWED  SCORE : "+a;
      $('#start1').click(restart);
      
  
  }


function settcolor(ele,correct)
{   clearg(ele);
    if(correct)
    {    
        ele.classList.add('correct');
    }
    else
    {  
        ele.classList.add('wrong');
    }
    
}
function clearg(element)
{
    element.classList.remove('correct');
    element.classList.remove('wrong');

}


const questions = [
  {
    question: 'What is required in life ?',
    answer: [
      { text: 'Family', correct: false }, 
      { text: 'Salary', correct: false },
      { text: 'Home', correct: false }, 
      { text: 'Challenges', correct: true }
    ]
  },
  {
    question: 'Who is the best cricketer in T20 cricket now?',
    answer: [
      { text: 'Rohit Sharma', correct: false },
      { text: 'Virat Kohli', correct: false },
      { text: 'KL Rahul', correct: true },
      { text: 'Pant', correct: false}
    ]
  },
  {
    question: 'What is writers favourite letters?',
    answer: [
      { text: 'K', correct: false },
      { text: 'A', correct: false },
      { text: 'A+K', correct: false },
      { text: 'I+A+S', correct: true }
    ]
  },
  {
    question: 'Who are you?',
    answer: [
      { text: 'Girl', correct: false },
      { text: 'Boy', correct: false },
      { text: 'Human', correct: false },
      { text: 'Fake', correct: true }
    ]
  }
]

var images=[];
var i=0;
images[0]="img1.jpg";
images[1]="img2.jpg";
images[2]="img3.jpg";
images[3]="img4.jpg";
images[4]="img5.jpg";


//window.onload=changeimg;

function changeimg()
{
    document.slide.src=images[i];
    if(i<images.length-1)
    {
        i++;
    }
    else
    {
        i=0;



    }
    setTimeout("changeimg()",3000);

}
window.onload=changeimg;