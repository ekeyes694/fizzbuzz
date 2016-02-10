$(document).ready(function () {



    for (var counter = 1; counter <= 100; counter++) {

        if (counter % 15 == 0) {
            document.write('<li>FizzBuzz</li>');
        } else if (counter % 3 == 0) {
            document.write('<li>Fizz</li>');
        } else if (counter % 5 == 0) {
            document.write('<li>Buzz</li>');
        } else document.write("<li>" +
            counter + "</li>");

    }

});
