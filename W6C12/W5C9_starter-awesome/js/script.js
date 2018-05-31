$(document).ready(function() {
  /*********** PUT THINGS HERE ****************/

  /****** QUESTION 1 ************/
  document.getElementById('return5th_submit').onclick = function() {
    var text = document.getElementById('return5th_input').value;
    document.getElementById('return5th_display').innerHTML = text.charAt(4);
  }

  /****** QUESTION 2 ************/
  // Same as above except output second to last char of a input string
  document.getElementById('returnLast_submit').onclick = function() {
    var text = document.getElementById('returnLast_input').value;
    document.getElementById('returnLast_display').innerHTML = text.substr(-2, 1);
  }


  /****** QUESTION 3 ************/
  // Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not
  document.getElementById('checkWork_submit').onclick = function() {
    var text = document.getElementById('checkWork_input').value;
    var paragraph = document.getElementById('ps3').getElementsByTagName('p')[0].innerHTML;
    var answer = paragraph.search(text);
    if (answer < 0) {
      response = "No! *loud horn*";
    } else {
      response = "Yes! *ding ding ding*";
    }
    //response = answer === -1 ? "No" : "Yes";
    document.getElementById('checkWork_display').innerHTML = response;
  }


  /****** QUESTION 4 ************/
  // Reverse string inputted by user
  document.getElementById('reverseString_submit').onclick = function() {
    var text = document.getElementById('reverseString_input').value;
    document.getElementById('reverseString_display').innerHTML = reverseString(text);
  }

  function reverseString(str) {
    return str.split("").reverse().join("");
  }


  /****** QUESTION 5 ************/
  document.getElementById('helloworld_submit').onclick = function() {
    var greeting = "HELLO WORLD";
    document.getElementById('helloworld_display').innerHTML = greeting;
  }
  // Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable



  /****** QUESTION 6 ************/
  document.getElementById('greet1_submit').onclick = function() {
    var greeting = "Hello " + document.getElementById('greet1_input').value + ", welcome to the website.";
    document.getElementById('greet1_display').innerHTML = greeting;
  }
  // Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display



  /****** QUESTION 7 ************/
  // Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME
  document.getElementById('greet2_submit').onclick = function() {
    var text = document.getElementById('greet2_input').value;
    if (text === "Alice" || text === "Bob" || text === "Amanda") {
      response = "Hello " + text + ", welcome to the website.";
    } else {
      response = "Go Away!";
    }
    document.getElementById('greet2_display').innerHTML = response;
  }


  /****** QUESTION 8 ************/
  // Accept two integers from the user and display the larger
  document.getElementById('integerMax_submit').onclick = function() {
    var integer1 = document.getElementById('integerMax_input1').value;
    var integer2 = document.getElementById('integerMax_input2').value;
    if (integer1 > integer2) {
      response = integer1;
    } else {
      response = integer2;
    }
    document.getElementById('integerMax_display').innerHTML = response;
  }


  /****** QUESTION 9 ************/
  // Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)
  document.getElementById('integerSign_submit').onclick = function() {
    var integer1 = document.getElementById('integerSign_input1').value;
    var integer2 = document.getElementById('integerSign_input2').value;
    var integer3 = document.getElementById('integerSign_input3').value;
    var answer = integer1 * integer2 * integer3;
    if (answer < 0) {
      response = "-";
    } else {
      response = "+";
    }

    document.getElementById('integerSign_display').innerHTML = answer;
  }



  /****** QUESTION 10 ************/
  // Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest
  document.getElementById('integerSort_submit').onclick = function() {
    var integer1 = document.getElementById('integerSort_input1').value;
    var integer2 = document.getElementById('integerSort_input2').value;
    var integer3 = document.getElementById('integerSort_input3').value;
    var response = [integer1, integer2, integer3];
    document.getElementById('integerSort_display').innerHTML = response.sort(function(a, b) {
      return b - a;
    });;
  }



  /****** QUESTION 11 ***********/
  // Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function
  document.getElementById('rps_submit').onclick = function() {
    var player1 = document.getElementById('rps_player1').value;
    var player2 = document.getElementById('rps_player2').value;
    var player1win = "You win, player 1!";
    var player2win = "You win, player 2!";
    var tie = "It's a tie!";

    if (player1 === "paper" && player2 === "rock") {
      response = player1win;
    }
    if (player1 === "paper" && player2 === "paper") {
      response = tie;
    }
    if (player1 === "paper" && player2 === "scissors") {
      response = player2win;
    }
    if (player1 === "rock" && player2 === "rock") {
      response = tie;
    }
    if (player1 === "rock" && player2 === "paper") {
      response = player2win;
    }
    if (player1 === "rock" && player2 === "scissors") {
      response = player1win;
    }
    if (player1 === "scissors" && player2 === "rock") {
      response = player2win;
    }
    if (player1 === "scissors" && player2 === "paper") {
      response = player1win;
    }
    if (player1 === "scissors" && player2 === "scissors") {
      response = tie;
    }
    document.getElementById('rps_winner_display').innerHTML = response;
  }


  /****** QUESTION 12 ***********/
  // Calculate the factoral of a number inputted by the user



  /****** QUESTION 13 ***********/
  //Write a JavaScript program to construct the following pattern:
  //*
  //**
  //***
  //****
  //*****
  document.getElementById('star_submit').onclick = function() {
    var response = "";
    var asterisk = "";
    for (i = 0; i < 5; i++) {
      asterisk += "*";
      response += asterisk + "<br>";
    }
    document.getElementById('star_display').innerHTML = response;
  }


  /****** QUESTION 14 ***********/
  //Write a function that multiplies a base by itself a certain number of times (exponent)

  /****** QUESTION 15 ***********/
  //Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"

  /****** QUESTION 16 ***********/
  //Create an array of peoples names, then loop through the array and output the names"

  /****** QUESTION 17 ***********/
  //Create an array of car objects. Each object has the following properties: make, year, color. Loop through the array of cars and output each car to display their properties: make: FORD, year: 2008, color: tan"
});