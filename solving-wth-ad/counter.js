var startButton = document.getElementById('startCounter')
console.log(startButton);

var displayCounter = document.getElementById('counterDisplay');
displayCounter.innerText = "0";

var timer = "";
var total = 0;
var totalTransitionValue = 0;
var timeForAnimation = 0;
var refreshRate = 0;


function update(initialValue, finalValue, refreshRate1, timeGiven){
   totalTransitionValue = Math.abs(finalValue - initialValue);
   timeForAnimation = timeGiven;
  refreshRate = refreshRate1;
  timer = setInterval(incrementCounter, (1000/refreshRate));
  console.log('t')
}

function incrementCounter(){
  console.log(total)
  if(total  < totalTransitionValue){
    total = total + (totalTransitionValue/timeForAnimation /(refreshRate));
    displayCounter.innerText = parseInt(total);
  }else{
    clearInterval(timer);
  }
}

update(2000,1000,60, 2);