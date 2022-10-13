const STARTING_TIME = 25;
let totalTimeInSeconds = STARTING_TIME * 60;

const timerText = document.getElementById('timer');

function updateTimer() {
  const minutes = Math.floor(totalTimeInSeconds / 60);
  let seconds = totalTimeInSeconds % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  timerText.innerHTML = `${minutes}:${seconds}`;
  totalTimeInSeconds--;
}

function startTimer() {
  setInterval(updateTimer, 1000);
}
