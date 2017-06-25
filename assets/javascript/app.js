//Refer to the Week 3, Day 5 Activities for help and suggestions for appending and toggling
//Creates a toggling GIPHY page using an APIkey
//ALL ORIGINAL PSEUDOCODING AT THE BOTTOM OF FILE
$(document).ready(function() {

	 //Original array of foods for topic[], you will eventually append to
	 //maybe rename it as foods[] to make it more explicit
      var foods = ["Pizza", "Sushi", "Pasta", "Sandwich", "Tacos", "Curry", "Salad", "Pastry"];
      //Function placing the JSON content for each button into the buttonContainer div
      function showGif() {

      	//this will hold the attribute for the data-name in a new variable, similar to the movie exercise
        var food = $(this).attr("data-name");
        //add the APIkeyURL you generate on GIPHY for queryURL
        //try ---> https://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC
        //look at the parameters and tinker with how they go into the URL
        //ZOMG this URL works now!!! https://api.giphy.com/v1/gifs/search?q=%22+food+%22&limit=15&api_key=dc6zaTOxFJmzC
        //remember to use https instead of http
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=%22+food+%22&limit=15&api_key=dc6zaTOxFJmzC";

        //gets the response Object from the query URL
        $.ajax({
          url: queryURL,
          method: "GET"
        //this returns your response Object
        //use JSON for the appendingButton div in HTML
        }).done(function(response) {
          $("#appendingButton").html(JSON.stringify(response));
          //make an a function below that can append these buttons into that div
          appendButtons();
        });
      }
      
      //Observe the format for adding class, attributes and texts to a button var from class activities
      function appendButtons() {
        // Clear out buttons before adding new foods into foods[] to avoid repeating the buttons
        $("#appendingButtons").empty();
        // Looping through the array of food string elements
        //This will all refill everything we just emptied 
        for (var i = 0; i < foods.length; i++) {
          //$("<button>") can create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adding a class of food to our button, think class=food within the button tags
          a.addClass("food");

          // Adding a data-attribute
          //YOU MIGHT NEED TO CHANGE THIS OR ADD ANOTHER LATER ON USING STILL & ANIMATE
          a.attr("data-name", foods[i]);
          
          // Providing the initial button text using the strings from foods[]
          a.text(foods[i]);
          // Adding the button to the appendingButtons div
          //This will "var a" to our target div, which we reassigned as a
          $("appendingButtons").append(a);
        }
      }

      //This function will execute when the button for the addGifButton input in HTML is clicked
      $("#addGifButton").on("click", function(event) {
        event.preventDefault();
        // This will grab the input from the textbox, as seen in click-json-solved.html from activities
        var food = $("#gifInput").val().trim();
        // Adding input from the textbox to our food array that becomes the buttons
        foods.push(food);
        console.log(foods)
        // Calling renderButtons which handles the processing of our food array
        appendButtons();
      });
      // Using $(document).on because it adds event listeners to generated elements
      $(document).on("click", ".food", showGif);
      // Calling appendButtons to display the intial buttons
      appendButtons();

//My original notes:
//Tools and link references you'll need:
//Public APIkey is unavailable, make your own
//make sure you use "https" instead of "http" at the beginning of URL
//The APIkey from your GIPHY account is ac8ce1f4be214b7f910642165089875a
//The APIkey from the public beta key is dc6zaTOxFJmzC
//URL for your account APIkey = https://api.giphy.com/v1/gifs/random?api_key=ac8ce1f4be214b7f910642165089875a&tag=&rating=G
//Use the activity queryURL format to do the Giphy API linkage

/*Parameters for GIPHY: 
q - search query term or phrase
limit - (optional) number of results to return, maximum 100. Default 25.
offset - (optional) results offset, defaults to 0.
rating - limit results to those rated (y,g, pg, pg-13 or r).
fmt - (optional) return results in html or json format (useful for viewing responses as GIFs to debug/test)*/


//First thoughts before starting:
//Choose any themed topic, for example, types of foods. Let's do food. 
//Make a <div id="allButtons"> and a <div id="body or wrapper">
//Put your button div references inside "allButtons"; write those button details in JS: think $("#allButtons")
//Start with a (var topics = ["relatedTopics1", "relatedTopics2", etc];)

//*Is this list finite or is it empty/indefinite/filled in later?*//
//topics[] is of string elements, try making a finite list first with 5 elements, then do a .push into it possible
//Add and append of buttons into the original button list 
//You can probably be see how this is done in the Week4, Day 4 activities	

//Shove all the shit below into <div id="buttons"> for the html; $("allButtons").html();
//Iterate across topics[] using (for (i=0;i<topics.length; i++) {}) --> stick createButton() ref here
//(var createButtons = (function() {});) --> create a function that appends buttons
//Inside createButtons, look up ways to .append buttons in Jquery 
//Inside createButtons, find a way to connect these iterations of strings and .append buttons to random GIF links
//These GIF refs can be placed into $("wrapper"), you might need Bootstrap to section it out (fuck).

//You might need to look up a .animate function and a stop .animate command that applies to an on.click function for each .append for topics[]
//This animation command should alternate every time there is an on.click or event.key hit
//If it's moving, then stop (stop animate or "still", the data-state). If it's stopped, then move (.animate) 
//Look at activities from Week 5, Day 5

//Then you want add some kind of input box on your page (look up syntax and linkage)
//For any string the user sticks in here, .pop it up into topics[ "yourOldShit", "theirNewShit"];
//How to clear prevous buttons and append on top of it? Look at Day 4 Activities on adding buttons

});