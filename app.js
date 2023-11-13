document.addEventListener("DOMContentLoaded", function () {
  // Wait for the DOM to be fully loaded before attaching event listeners

  // Get the button element
  var searchButton = document.getElementById("searchButton");

  // Attach a click event listener to the button
  searchButton.addEventListener("click", function () {
    // Perform AJAX request to superheroes.php
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          // If the request is successful, display the superhero list in an alert
          var superheroList = JSON.parse(xhr.responseText);
          var aliases = superheroList
            .map(function (superhero) {
              return superhero.alias;
            })
            .join(", ");

          alert("Superheroes:\n" + aliases);
        } else {
          // If there's an error, log it to the console
          console.error("Error fetching superheroes:", xhr.status);
        }
      }
    };

    // Open the AJAX request
    xhr.open("GET", "superheroes.php", true);

    // Send the request
    xhr.send();
  });
});
