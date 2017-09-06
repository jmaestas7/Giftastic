$( document ).ready(function() {

  $("#animal-add").on("click", function() {
    debugger;
    var buttonRow = $("#animal-button");
    var input = $("#input").val();
    var newButton = $("<button>");
    newButton.attr("animal", input)
    newButton.attr("class", "btn btn-dark animal");
    newButton.html(input);
    buttonRow.append(newButton);
  });

  $(document).on("click", ".animal", function() {

      searchTag = $(this).attr("animal");
      var APIKey = "dc6zaTOxFJmzC";

      function getanimals(tag) {
        var queryURL = "http://api.giphy.com/v1/gifs/random?" + 
        "api_key=" + APIKey +
        "&tag=" + tag;
        $.ajax({
        url: queryURL,
        method: "GET"
        }) 
        .done(function(response) {
          var imageUrl = response.data.image_original_url;
          var src = imageUrl.replace("/giphy.gif", "/200_s.gif");
          var animate = imageUrl.replace("/giphy.gif", "/200.gif");
          var image = $("<img>").attr("style", "width:225px; padding: 15px");
          image.attr("src", src);
          image.attr("data-still", src);
          image.attr("data-animate", animate);
          image.attr("data-state", "still");
          image.attr("class", "gif");
          image.on("click", function() {
          var state = $(this).attr("data-state");
          console.log(state);
          if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
      });
          $("#images").append(image);
        });
      };

      $("#images").empty();

      for (var i = 0; i < 10; i++) {
        getanimals(searchTag);
      }
    // }
  });
});



// <img src="http://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif"
// data-still="http://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif"
// data-animate="http://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif"
// data-state="still" class="gif">