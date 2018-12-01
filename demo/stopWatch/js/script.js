var hours = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    miliseconds = document.getElementById('miliseconds'),

    startButton = document.getElementById('startButton'),
    pauseButton = document.getElementById('pauseButton'),
    stopButton = document.getElementById('stopButton'),
    resetButton = document.getElementById('resetButton'),

    setTime,
    currentTime,
    difference,
    timer = 0,
    inverval;

var start = function(){
  setTime = Date.now();
  inverval = setInterval(update, 10);
}

var pause = function(){
  clearInterval(inverval);
};

var stop = function (){
  clearInterval(inverval);
  timer = 0;
};

var reset = function(){
  timer = 0;
  updateScreen();
};

var update = function(){
  currentTime = Date.now();
  difference = currentTime - setTime;
  timer += difference;
  
  updateScreen();
  setTime = currentTime;
}

var updateScreen = function(){
  var timeRaw = timer/1000,
      timeMiliSeconds = parseInt((timeRaw % 1) * 100);
      timeSeconds = Math.floor(timeRaw);
      timeMinutes = Math.floor(timeSeconds/60);
      timeHours = Math.floor(timeMinutes/60);

  miliseconds.innerText = twoDigiter(timeMiliSeconds);
  seconds.innerText = twoDigiter(processSixty(timeSeconds));
  minutes.innerText = twoDigiter(processSixty(timeMinutes));
  hours.innerText = twoDigiter(timeHours);
};

var twoDigiter = function(number){
  var numString = number.toString();
  if(numString.length < 2){
    return "0" + numString;
  }else{
    return numString;
  }
};

var processSixty = function(number){
  var divisible = Math.floor(number/60);
  if(number/60 >= divisible){
    return number - 60 * divisible;
  }
};

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);






