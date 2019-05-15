$(document).ready(function() {
  var wins = 0;
  var loses = 0;
  var playerTotal = 0;
  var targetNumber = Math.floor(Math.random() * 102 + 19);
  $("#random-num").append(targetNumber);

  var purpleCrystal = Math.floor(Math.random() * 12 + 1);

  $("#purple").on("click", function() {
    playerTotal = playerTotal + purpleCrystal;
    $("#final").text(playerTotal);
    winChecker()
  });
  var orangeCrystal = Math.floor(Math.random() * 12 + 1);
  $("#orange").on("click", function() {
    playerTotal = playerTotal + orangeCrystal;
    $("#final").text(playerTotal);
    winChecker()
  });

  var glassCrystal = Math.floor(Math.random() * 12 + 1);
  $("#glass").on("click", function() {
    playerTotal = playerTotal + glassCrystal;
    $("#final").text(playerTotal);
    winChecker()
  });

  var blueCrystal = Math.floor(Math.random() * 12 + 1);
  $("#blue").on("click", function() {
    playerTotal = playerTotal + blueCrystal;
    $("#final").text(playerTotal);
    winChecker()
  });
  
  function winChecker() {
  if (playerTotal === targetNumber){
      wins = wins + 1;
      $('#won').text('wins: ' + wins);
      alert('You Win !!')
  }else if (playerTotal > targetNumber) {
    loses = loses + 1;
    $('#lose').text('losses: ' + loses);
      alert("You Lose !!")

    }}
});
