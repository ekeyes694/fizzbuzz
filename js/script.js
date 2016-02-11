$(document).ready(function () {


    function fizzbuzz(limit) {

        function check(n) {
            if (n % 15 == 0) {
                document.write('<li>FizzBuzz</li>');
            } else if (n % 3 == 0) {
                document.write('<li>Fizz</li>');
            } else if (n % 5 == 0) {
                document.write('<li>Buzz</li>');
            } else document.write("<li>" +
                n + "</li>");
        }
        for (var counter = 1; counter <= limit; counter++) {
            $('#results').append(check(counter));
        }
    }
    var limit = prompt('Enter a number to count to to play FizzBuzz!');
    var userInputCorrectFlag = true;

    while (limit.length < 2) {
        var limit = prompt('Please enter at least two digits!');
        userInputCorrect = false;
    }
    while (limit.indexOf(' ') >= 0) {
        var limit = prompt('Please no spaces! Try a number!');
        userInputCorrect = false;
    }
    while (Math.floor(limit) != limit) {
        var limit = prompt("Your limit was not correct. Set it again.");
        userInputCorrectFlag = false;
    }
    if (userInputCorrectFlag = true) {
        fizzbuzz(limit);
    }






});
