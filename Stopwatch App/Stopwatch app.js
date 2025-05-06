<!DOCTYPE html>
<html>
<head>
  <title>Stopwatch</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 50px;
    }
    #time {
      font-size: 48px;
      margin-bottom: 20px;
    }
    button {
      font-size: 18px;
      padding: 10px 20px;
      margin: 5px;
    }
  </style>
</head>
<body>
  <h2>⏱️ Stopwatch</h2>
  <div id="time">00:00</div>
  <button onclick="startTimer()">Start</button>
  <button onclick="stopTimer()">Stop</button>
  <button onclick="resetTimer()">Reset</button>

  <script>
    let seconds = 0;
    let minutes = 0;
    let interval = null; // to store setInterval ID
    let running = false; // is stopwatch running?

    function updateTime() {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      // Format with leading zero (e.g. 03:07)
      const formattedTime =
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);

      document.getElementById("time").textContent = formattedTime;
    }

    function startTimer() {
      if (!running) {
        interval = setInterval(updateTime, 1000); // run every 1 sec
        running = true;
      }
    }

    function stopTimer() {
      clearInterval(interval); // stop setInterval
      running = false;
    }

    function resetTimer() {
      clearInterval(interval);
      seconds = 0;
      minutes = 0;
      running = false;
      document.getElementById("time").textContent = "00:00";
    }
  </script>
</body>
</html>
