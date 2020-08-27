/* global moment */

// When user clicks add-btn
$("#Foods-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    let newFoods = {
      food: $("#food").val().trim(),
      category: $("#category-box").val().trim()
    };
  
    console.log(newFoods);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newFoods)
      // On success, run the following code
      .then(function() {
  
        let row = $("<div>");
        row.addClass("foods");
  
        row.append("<p>" + newFoods.food + "</p>");
        row.append("<p>" + newFoods.category + "</p>");
  
        $("#food-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#food").val("");
    $("#category-box").val("");
  });
  
  // When the page loads, grab all of our foods
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (let i = 0; i < data.length; i++) {
  
        let row = $("<div>");
        row.addClass("foods");
  
        row.append("<p>" + newFoods.food + "</p>");
        row.append("<p>" + newFoods.categor + "</p>");
  
        $("#food-area").prepend(row);
  
      }
  
    }
  
  });