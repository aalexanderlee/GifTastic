


      var topics = ["Pizza", "Tacos", "Ramen", "Sushi", "Salad"];

      function displayfoodInfo() {
        var food = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&limit=10&api_key=dc6zaTOxFJmzC";
        // Creating an AJAX call for the specific food button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          for(i=0; i<response.data.length; i++){
          // Creating a div to hold the food
          var foodDiv = $("<div class='food'>");
          // Storing the rating data
          var rating = response.data[];

          // Creating an element to have the rating displayed
          var pOne = $("<p>").text("Rating: " + rating);
          // Displaying the rating
          foodDiv.append(pOne);
          
          // Retrieving the URL for the image
          var imgURL = response.Poster;
          // Creating an element to hold the image
          var image = $("<img>").attr("src", imgURL);
          // Appending the image
          foodDiv.append(image);
          // Putting the entire food above the previous foods
          $("#food-view").prepend(foodDiv);
      	}
        
        });
      }







      // Function for displaying food data
      function renderButtons() {
        // Deleting the food buttons prior to adding new food buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#foods-view").empty();
        // Looping through the array of foods
        for (var i = 0; i < topics.length; i++) {
          // Then dynamicaly generating buttons for each food in the array.
          // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class
          a.addClass("food");
          // Adding a data-attribute with a value of the food at index i
          a.attr("data-name", topics[i]);
          // Providing the button's text with a value of the food at index i
          a.text(topics[i]);
          // Adding the button to the HTML
          $("#foods-view").append(a);
        }
      }
      // This function handles events where one button is clicked
      $("#add-food").on("click", function(event) {
        // event.preventDefault() prevents the form from trying to submit itself.
        // We're using a form so that the user can hit enter instead of clicking the button if they want
        event.preventDefault();
        // This line will grab the text from the input box
        var food = $("#food-input").val();
        // The food from the textbox is then added to our array
        foods.push(food);
        // calling renderButtons which handles the processing of our food array
        renderButtons();
      });
      // Calling the renderButtons function at least once to display the initial list of foods
      renderButtons();




    </script>
  </div>
</body>
</html>