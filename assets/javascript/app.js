var fruits = ["Apple", "Banana", "Peach"];
var fruitAddition = "";
var fruitName = "";


$("#submit").on("click", function() {

    // Capturing the value of the input entry
    fruitAddition = $("#fruit-addition").val().trim();

    // Creating the new button element and attributes
    var newButton = $("<button>");
    newButton.attr("type", "button");
    newButton.attr("data-name", fruitAddition);
    newButton.attr("class", "fruit-button btn-primary btn-secondary");
    
    // Dropping the value to the beginning of the fruits array
    fruits.unshift(fruitAddition);

    // Add the fruitAddition inside the text of the new button
    newButton.text(fruitAddition);

    // Appending the new button
    $("#fruit-buttons").append(newButton);
    
    // Debugging
    console.log(fruitAddition);
    console.log(fruits);

})

$("#fruit-buttons").on("click", ".fruit-button", function() {

    // Capture the text of the element in the 
    fruitName = $(this).text()

    // Declaring URL variable to be used in API call
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    fruitName + "&api_key=dc6zaTOxFJmzC&limit=5";

    $.ajax ({
        url: queryURL,
        method: "GET",
    }).then(function(response){

        var result = (response.data);
        console.log(result);

        for (var i = 0; i < result.length; i++) {

            var gifContainer = $("<div>");
            gifContainer.attr("class", "container");

            var gifImage = $("<img>");
            gifImage.attr("src", result[i].images.fixed_height.url);
            
            gifContainer.prepend(gifImage);

            $("#gifs").prepend(gifContainer);

        }

    })
    

})



// When the user enters in a value and clicks submit an additional button will appear on the screen which shows that value (done)

// This elememnt created will have an ID or data-name that matches the value (done)

// The value will also be added to the beginning of the fruits array (done)

// The value they enter will be captured in fruitAdditions (done)

// This will be an onclick function (done)

// ============================================================================================

// When the user clicks on on of the fruit buttons it will show 50 gifs on that topic 

// We will need to do an .ajax call

// Each button will have an ID or data-name that matches it's value that will be used in the fruitDataName variable to lookup in the API call

// This will be an onclick function


