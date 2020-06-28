## Gig-Crasher
An app to search for events through TicketMaster API, and return results together with SkyScanner flight listings in that given location using the SkyScanner API.


## Motivation
This project is to streamline finding any event of choice with a quick way to get there. 
The application gives user an option to search for the flights destinations and there is a space for future improvoement of the application to add an accomodation places sdearch.


## Code style
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)


## Tech/framework used
- JavaScript
- JQuery
- CSS Framework (Bulma)
- HTML
- APIs
*Ex. <b>Built with</b> [Electron](https://electron.atom.io)]*


## Features
This project uses APIs of SkyScanner and Ticketmaster. These APIs combined give an user an opportunity to find more information using just one application. Nice and simple interface is not distracting the customer and the result of the input search has images and an active link to  the event itself that is also very convenient.


## Code Example
Here is a pice of code for the AJAX method using ScyScanner API
     var city = $("#searchDestination").val()

        if (!isChecked) {

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
                $("#flights").empty();
                var flights = "";

                for (let i = 0; i < 5; i++) {
                    $("#flights").html(flights);
                    flights += "<div id='flightsoptions'> Destination Airport:" + [i + 1] + "<br>";
                    flights += "<p>" + response.Places[i].CountryName + "</p>";
                    flights += "<p>" + response.Places[i].PlaceName + "</p>";
                    flights += "<p id='lastitem'>" + response.Places[i].PlaceId + "</p>";
                }
            });
        }


## API Reference
- Ticketmaster
- Skyscanner


## How to use?
- Enter the event by artist, event type, or venue in the input box under "What event would you like to attend?" 
- If you need a flight to get there, enter the city of the event destination.
- If you don't need a flight, check the box and see the event results!
- It's as simple as that!


## Credits
- Christian Wolfe
- Olena Turetska
- Jody Eggleston
- Myrna Cantando


## Screenshoots

![GigCrasher1](https://user-images.githubusercontent.com/63433561/85959164-b86b5280-b968-11ea-8ac1-f9a62eb4f748.PNG)

![GigCrasher2](https://user-images.githubusercontent.com/63433561/85959166-b99c7f80-b968-11ea-8a64-28a50eca244d.PNG)

![GigCrasher3](https://user-images.githubusercontent.com/63433561/85959168-ba351600-b968-11ea-8066-37423dae35cb.PNG)

![GigCrasher4](https://user-images.githubusercontent.com/63433561/85959169-bacdac80-b968-11ea-82ff-92c7764368e1.PNG)


Links to the repository on Github.com and to thesite published  at Github Host are the following:

 https://github.com/kisjan4ik/Gig-Crasher

 https://kisjan4ik.github.io/Gig-Crasher/

© Copyright 2020
