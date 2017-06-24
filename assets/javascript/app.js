//Refer to the Week 3, Day 5 Activities for help and suggestions for appending and toggling
//Creates a toggling GIPHY page using an APIkey
//ALL ORIGINAL PSEUDOCODING AT THE BOTTOM OF FILE
$(document).ready(function() {

	 //Original array of foods for topic[], you will eventually append to
      var topics = ["Pizza", "Sushi", "Pasta", "Sandwich", "Tacos", "Curry", "Salad", "Pastry"];
      //Function placing the JSON content for each button into the buttonContainer div
      function showGif() {

        var movie = $(this).attr("data-name");
        //add the APIkeyURL you generate on GIPHY for queryURL
        var queryURL = "";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {
          $("#buttonContainer").html(JSON.stringify(response));
          appendButton();
        });
      }
      

//My notes:
//Tools and link references you'll need:
//Public APIkey is unavailable, make your own
//make sure you use "https" instead of "http" at the beginning of URL
//The APIkey from your GIPHY account is ac8ce1f4be214b7f910642165089875a
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