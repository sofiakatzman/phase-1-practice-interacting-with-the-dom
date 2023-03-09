//loadtimer:event listener for DOMloaded that when becomes true starts the timer
//+-:functions that add or subtract from the timer using the buttons
//heart:function with event listener that when clicked "likes" that number and stores it - keeps track of it and how many times its been clicked <arrays>
//pause: pauses counter and does not let you click any other buttons <remove class?> changes label from pause to resume 
//restart: restarts the counter and re-enables buttons? 
//comments: store comments 

//initialize timer
let timer = 0; 
function startTimer(){
    timerCount = setInterval(() => {
        timer++;
        displayTimer();
      }, 1000);
}

function displayTimer(){
    document.getElementById("counter").innerHTML = timer;
}

//select DOM Elements / initialize variables 
let minusButton = document.getElementById('minus')
let plusButton = document.getElementById('plus')
let pauseButton = document.getElementById('pause')
let heartButton = document.getElementById('heart')
let isPaused = false
let commentInput ;
let likedNumbers = []
let likedNumbersCount = []
let likesBoard = []



//add Event Listeners to Make Buttons Work 
document.addEventListener('DOMContentLoaded', startTimer)
minusButton.addEventListener('click', () => { timer--; document.getElementById("counter").innerHTML = timer;})
plusButton.addEventListener('click', () => { timer++; document.getElementById("counter").innerHTML = timer;})
pauseButton.addEventListener('click', handlePause)
heartButton.addEventListener('click', handleHeart)
// commentInput.addEventListener('input', handleComment)


//functions that were too big for arrow function format on Event Listeners
function handlePause(){
isPaused = !isPaused
    if (isPaused){
        clearInterval(timerCount)
        console.log('Paused!')
        minusButton.disabled = true;
        plusButton.disabled = true;
        pauseButton.innerHTML = "Resume";
        heartButton.disabled = true;    
    } else {
        startTimer();
        console.log('Resumed!');
        minusButton.disabled = false;
        plusButton.disabled = false;
        pauseButton.innerHTML = "Pause";
        heartButton.disabled = false;  
    }
}


//add "liked" value to an array, when a new one is called, look through array for that value if not there then .push 
function handleHeart(){
    likedNumbers = [...likedNumbers, timer]
    console.log(likedNumbers)
    displayLikes()
    }

function displayLikes(){
    likedNumbers.forEach(number => {
        //below code checks for dupplicates and returns how many times they occur
        let numberInstances = likedNumbers.filter(numberInst=> number === numberInst).length
        const instanceSentence = `The number ${number} has been clicked ${numberInstances} times`  
        likesBoard = [...likesBoard, instanceSentence]

        console.log(likesBoard)
        // //below code adds the line to DOM
        const li = document.createElement('li');
        li.className = 'likes';
        const parentElement = document.querySelector('ul.likes');
        parentElement.appendChild(li);
        li.innerText = `The number ${number} has been clicked ${numberInstances} times`   
    
        })     
    }    
    
function createNodeTest(){
    const li = document.createElement('li');
    li.className = 'likes';
    const parentElement = document.querySelector('ul.likes');
    parentElement.replaceChildren(li);
}




//What if I write a formula that pushes the sentences to an array then itterates through that array and makes each item in each index a childnode of the list 


// }

// event listener that listens for te heart to be clicked. when the heart is clicked, 
// the number is stored into an array. The dom is then updated to show "The number X has been liked X times" append to class :likes: child node <li>
// 
//
//




//========================================================================================

// old code that I reduced to arrow functions

// function minusTimer(){
//     timer--;
//     document.getElementById("counter").innerHTML = timer;
// }

// function plusTimer(){
//     timer++;
//     document.getElementById("counter").innerHTML = timer;
// }