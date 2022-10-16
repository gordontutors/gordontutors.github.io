<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="style.css" />
    <title>Multiplication Drills</title>
  </head>
  <body>
    <header>
      <h1>Find the Product!</h1>
      <p class="difficulty">(Between 2 and 12)</p>
      <p class= "timerlabel">
        Timer: <span id="timerCount">30</span>
      </p>
      </section>
      <button class="btn reset">Reset</button>
      <div class="question">
        <p id="firstNumber">1</p>
        x
        <p id="secondNumber">2</p>
      </div>
    </header>
    <main>
      <section class="left">
        <input type="number" class="guess" id="guess" />
        <button class="btn check">Check!</button>
      </section>
      <section class="right">
        <p class="message">Start guessing...</p>
        <p class="streak-message"></p>
        <p class="label-score">
          💯 Score: <span class="score" id="score">0</span>
        </p>
        <p class="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
        <p class="label-lives">❤️ Lives: <span class="lives">3</span></p>
      </section>
      <section class="bottomleft">
          <a href="https://gordontutors.github.io/images/GordonPoster.jpg" id="aboutmelink">About me</a>
      </section>
      <section class="bottomright">
        <button class="deleteCookies">Clear Data</button>
      </section>
    </main>
    <script src="script.js"></script>
  </body>
</html>
