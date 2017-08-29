$( document ).ready(function() {

  $("#animal-add").on("click", function() {
    var buttonRow = $("#animal-button");
    var input = $("#input").val();
    var newButton = $("<button>");
    newButton.attr("animal", input)
    newButton.attr("id", "animal");
    newButton.attr("class", "btn btn-dark");
    newButton.attr("type", "animal");
    newButton.html(input);
    buttonRow.append(newButton);
  });


  $("button").on("click", function() {

    var id = String($(this).attr("id"));

    if (id === "animal") {

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
          console.log(animate);
          var image = $("<img>").attr("style", "width:225px; padding: 15px");
          image.attr("src", src);
          image.attr("data-still", src);
          image.attr("data-animate", animate);
          image.attr("data-state", "still");
          image.attr("class", "image");
          $("#images").append(image);
          console.log($(image).attr("class"));
        });
      };

      $( "#images").empty();

      for (var i = 0; i < 10; i++) {
        getanimals(searchTag);
      }
    }
  });

  $(".image").on("click", function() {
    var state = $(this).attr("data-state");
    console.log(state);
    // if (state === "still") {
    //   $(this).attr("src", $(this).attr("data-animate"));
    //   $(this).attr("data-state", "animate");
    // } else {
    //   $(this).attr("src", $(this).attr("data-still"));
    //   $(this).attr("data-state", "still");
    // }
  });
});

// <img src="http://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif"
// data-still="http://media3.giphy.com/media/W6LbnBigDe4ZG/200_s.gif"
// data-animate="http://media3.giphy.com/media/W6LbnBigDe4ZG/200.gif"
// data-state="still" class="gif">