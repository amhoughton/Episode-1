$(document).ready(function() {
  // put all jquery code here
  $("#grayButton").click(switchGray);
  $("#salmonButton").click(switchSalmon);
  $("#blueButton").click(switchSeafoam);

  function switchGray() {
    $('body').css('background-color', '#D3D3D3');

  }

  function switchSalmon() {
    $('body').css('background-color', '#fa8072');

  }

  function switchSeafoam() {
    $('body').css('background-color', '#a0d6b4');

  }
});