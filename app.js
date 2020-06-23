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