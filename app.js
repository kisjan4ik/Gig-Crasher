$(document).ready(function() {
    
                 
    // creating click button to return the departure city
    
    $("#depCity").on("click", function (event) {
        event.preventDefault();
        console.log("it works");
        var depCity=$("#depCity").val();
    
        

    })

// /global variables for skyscanner search params


// onclick event
// date to be shwon: photo, descritpion, date, location

var country = "US";
var currency = "USD";
var locale = "en-US";
var userDestination = document.getElementById("searchDestination").value;

var queryString = country + '/' + currency + '/' + locale + '/' +
    userDestination;



var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/" + queryString,
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "f4e7fa0f3amsh07cbec10686c47cp142668jsne2338ac4ac2e"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});



// ticketmaster ajax test 
// ?
$.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=93yzDEOR3pw5XEs9GHp6f7ZCGLvGZg6d",
    async: true,
    dataType: "json",
    success: function (json) {
        console.log(json);
        document.getElementById('')
        // Parse the response.
        // Do other things.
    },
    error: function (xhr, status, err) {
        // This time, we do not end up here!
    }
});

// assign function to onclick property of checkbox
document.getElementById("noflight").onclick = function() {
    // access properties using this keyword
    if ( this.checked ) {
        // if checked ...
        alert("No flight search");
    } else {
        // if not checked: search for flights
    }
};

})