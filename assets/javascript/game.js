$(document).ready(function() {
  var wins = 0;
  var loses = 0;
  var playerTotal = 0;
  var targetNumber = Math.floor(Math.random() * 102 + 19);
  $("#random-num").text(targetNumber);

  var purpleCrystal = Math.floor(Math.random() * 12 + 1);
  $("#purple").on("click", function() {
    playerTotal = playerTotal + purpleCrystal;
    $("#final").text(playerTotal);
    winChecker();
  });
  var orangeCrystal = Math.floor(Math.random() * 12 + 1);
  $("#orange").on("click", function() {
    playerTotal = playerTotal + orangeCrystal;
    $("#final").text(playerTotal);
    winChecker();
  });

  var glassCrystal = Math.floor(Math.random() * 12 + 1);
  $("#glass").on("click", function() {
    playerTotal = playerTotal + glassCrystal;
    $("#final").text(playerTotal);
    winChecker();
  });

  var blueCrystal = Math.floor(Math.random() * 12 + 1);
  $("#blue").on("click", function() {
    playerTotal = playerTotal + blueCrystal;
    $("#final").text(playerTotal);
    winChecker();
  });
  console.log(
    purpleCrystal + " " + orangeCrystal + " " + glassCrystal + " " + blueCrystal
  );

  function winChecker() {
    if (playerTotal === targetNumber) {
      wins = wins + 1;
      $("#won").text("wins: " + wins);
      console.log(targetNumber);
      alert("You Win !!");
      startOver();
    } else if (playerTotal > targetNumber) {
      loses = loses + 1;
      $("#lose").text("losses: " + loses);
      alert("You Lose !!");
      startOver();
    }
  }
  function startOver() {
    targetNumber = Math.floor(Math.random() * 102 + 19);
    $("#random-num").text(targetNumber);
    playerTotal = 0;
    $("#final").text(playerTotal);
    purpleCrystal = Math.floor(Math.random() * 12 + 1);
    orangeCrystal = Math.floor(Math.random() * 12 + 1);
    glassCrystal = Math.floor(Math.random() * 12 + 1);
    blueCrystal = Math.floor(Math.random() * 12 + 1);
    
    console.log(
      purpleCrystal + " " + orangeCrystal + " " + glassCrystal + " " + blueCrystal
    );
  }
});

