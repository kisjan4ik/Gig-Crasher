
$(document).ready(function() {
    
                 
    // creating click button to return the departure city
    
    $("#depCity").on("click", function (event) {
        event.preventDefault();
        console.log("it works");
        var depCity=$("#depCity").val();
    
        

    })
})
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm",
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
        "x-rapidapi-key": "f4e7fa0f3amsh07cbec10686c47cp142668jsne2338ac4ac2e"
    }
}

$.ajax(settings).done(function (response) {
    console.log(response);
});

$.ajax({
    type: "GET",
    url: "https://app.ticketmaster.com/discovery/v2/classifications/segments/KZazBEonSMnZfZ7vFta.json?apikey=93yzDEOR3pw5XEs9GHp6f7ZCGLvGZg6d",
    async: true,
    dataType: "json",
    success: function (json) {
        console.log(json);
        // Parse the response.
        // Do other things.
    },
    
});
