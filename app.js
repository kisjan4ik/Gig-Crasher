$(document).ready(function () {

    // onclick event            
    // creating click button to return the departure city

    $("#userinput").on("click", function (event) {
        event.preventDefault();
        console.log("it works");
        var userInput = $("#userinput").val();

        // /global variables for skyscanner search params

        // var country = "US";
        // var currency = "USD";
        // var locale = "en-US";
        // var userDestination = document.getElementById("searchDestination").value;

        // var queryString = country + '/' + currency + '/' + locale + '/' +
        //     userDestination;

        var city = $("#searchDestination").val() || "Stockholm"



        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=" + city,
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
                "x-rapidapi-key": "f4e7fa0f3amsh07cbec10686c47cp142668jsne2338ac4ac2e"
            }
        }


        $.ajax(settings).done(function (response) {
            console.log("Flight info = " + JSON.stringify(response));

            var flights = "";

            for (let i = 0; i < 5; i++) {
                $("#flights").html(flights);
                flights += "<div id='flightsoptions'>";
                flights += "<p>" + response.Places[i].CountryName + "</p>";
                flights += "<p>" + response.Places[i].PlaceName + "</p>";
                flights += "<p>" + response.Places[i].PlaceId + "</p>";
            }

        });

        // assign function to onclick property of checkbox
        document.getElementById("noflight").onclick = function () {
            // access properties using this keyword
            if (this.checked) {
                // if checked ...
                return; //stop the execution of function
            }
        };


        // skyscanner: date to be shown, photo, descritpion, date, location

        var cityVar = "";
        var eventKeyword = $("#eventKeyword").val();
        var eventURL = "https://app.ticketmaster.com/discovery/v2/events?apikey=93yzDEOR3pw5XEs9GHp6f7ZCGLvGZg6d&keyword=";
        $.ajax({
            type: "GET",
            url: eventURL + eventKeyword + "&locale=*&size=5&city=" + cityVar,
            async: true,
            dataType: "json",
            success: function (response) {
                console.log(response);
                for (var i = 0; i < 5; i++) {
                    var eventName = response._embedded.events[i].name;
                    var eventDate = response._embedded.events[i].dates.start.localDate;
                    var eventTime = response._embedded.events[i].dates.start.localTime;
                    var eventImage = response._embedded.events[i].images[0];



                    console.log(eventName);
                    console.log(eventDate);
                    console.log(eventTime);
                    console.log(eventImage);
                }


                // Parse the response.
                // Do other things.
            },
            error: function (xhr, status, err) {
                // This time, we do not end up here!
            }
        })






    })
})



