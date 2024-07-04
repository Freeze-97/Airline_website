/*
Tommy Yasi
toya1800
toya1800@student.miun.se
*/

/*
* Detect browser and change color depending on screen width
*/
function detectBrowser() {
    // Check which web browser is being used
    let browser;
    if ((navigator.userAgent.indexOf("Opera")) !== -1) {
        browser = "Opera";
    } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        browser = "Google Chrome";
    } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        browser = "Safari";
    } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
        browser = "Firefox";
    } else {
        browser = "Other/Unknown";
    }

    // Different info depending on window width
    const width = window.innerWidth;
    if (width < 480) {
        document.getElementById("info").innerHTML = "Welcome! \n Your width is: " + width +
            ", therefore the color in the contact part will be red! \n " +
            "You are using: " + browser;
    }
    if (width >= 480 && width <= 1024) {
        document.getElementById("info").innerHTML = "Welcome! \n Your width is: " + width +
            ", therefore the color in the contact part will be blue! \n " +
            "You are using: " + browser;
    }
    if (width > 1024) {
        document.getElementById("info").innerHTML = "Welcome! \n Your width is: " + width +
            ", therefore the color in the contact part will be green! \n " +
            "You are using: " + browser;
    }
}
if (window.location.pathname === "/toya1800_laborations_ht19/contact.html") {
    detectBrowser();
}

/*
* Show 4 small images
* User will click on one to show a bigger version of it
*/
function startImage() {
    // Store images in variables
    const image1 = document.getElementById("pic1");
    const image2 = document.getElementById("pic2");
    const image3 = document.getElementById("pic3");
    const image4 = document.getElementById("pic4");
    
    // Make the images clickable
    image1.addEventListener("click", function() {setBigImage(image1.src);});
    image2.addEventListener("click", function() {setBigImage(image2.src);});
    image3.addEventListener("click", function() {setBigImage(image3.src);});
    image4.addEventListener("click", function() {setBigImage(image4.src);});
}

function setBigImage(imageFile) {
    let bigImage = imageFile.replace(".", "-big.");

    let expandedImg = document.getElementById("expanded"); // The big picture
    expandedImg.setAttribute("src",  bigImage);
    expandedImg.setAttribute("alt", "Big image of " + bigImage);
}
if(window.location.pathname.endsWith("/employees.html") ||
window.location.pathname.endsWith("/ourfleet.html")) {
    window.addEventListener("load", startImage, false);
}

/*
* Right side where seats are presented
 */
function seats() {
    for (let i = 1; i < 19; i++) {
        let seat = document.getElementById(i.toString());
        seat.innerHTML = i.toString();
        seat.style.backgroundColor = "green";
        seat.addEventListener("click", function () {userClick(i);});
    }
}

// Input click from user
function userClick(i) {
    let seatNumber = document.getElementById("seatNumberInput");
    let flightClass = document.getElementById("flightClass");
    let seat = document.getElementById(i.toString());

    // If it's already booked
    if(seat.style.backgroundColor === "red") {
        document.getElementById("message").innerHTML = "Already booked";
        return;
    }
    if(seat.style.backgroundColor === "blue"){
        seat.style.backgroundColor = "green";
        seatNumber.setAttribute("value", "");
        return;
    }

    // If any other is still blue, make it green, user can't book more than one place
    for (let x = 1; x < 19; x++) {
        let allSeats = document.getElementById(x.toString());
        if (allSeats.style.backgroundColor === "blue") {
            allSeats.style.backgroundColor = "green";
        }
    }
    seat.style.backgroundColor = "blue";
    seatNumber.setAttribute("value", i);
    if (i >= 1 && i <= 6) {
        flightClass.selectedIndex = 0;
    } else if (i >= 7 && i <= 18) {
        flightClass.selectedIndex = 1;
    }
}

// Reset function
function resetAll() {
    document.getElementById("message").innerHTML = "";

    let name = document.getElementById("nameInput");
    let lastName = document.getElementById("lastNameInput");
    let securityNumber = document.getElementById("securityNumberInput");
    let seatNumber = document.getElementById("seatNumberInput");

    name.value = "";
    lastName.value = "";
    securityNumber.value = null;
    seatNumber.value = null;

    for (let i=1; i < 19; i++) {
        let allSeats = document.getElementById(i.toString());
        if(allSeats.style.backgroundColor === "blue") {
            allSeats.style.backgroundColor = "green";
        }
    }
}

// Session storage so data won't be lost even when changing site
function storeSession() {
    // Create array with rows and columns inside of the row
    let rows = new Array(6);
    for (let i = 0; i < 6; i++) {
        rows[i] = new Array(3); // 3x6 seats
    }

    // Give all indexes a color
    let seatForSeat = 0;
    for (let i = 0; i < 6; i++) {
        for (let index = 0; index < 3; index++) {
            seatForSeat++;
            rows[i][index] = document.getElementById(seatForSeat.toString()).style.backgroundColor;
        }
    }
    // Session storage, save all data about booked flights
    sessionStorage.setItem("arraySeats", JSON.stringify(rows)); // Store
}

function getSessionStorage() {
    if (typeof(Storage) !== "undefined") {
        // Same as above but the other way, copy array to seats
        let jsonString = sessionStorage.getItem("arraySeats");
        let fullArraySeats = JSON.parse(jsonString);

        if(jsonString === null) {
            return;
        }

        let seatNumber = 0;
        for (let i = 0; i < 6; i++) {
            for(let index = 0; index < 3; index++) {
                seatNumber++;
                document.getElementById(seatNumber.toString()).style.backgroundColor = fullArraySeats[i][index];
            }
        }
    } else {
        window.alert("Sorry, your browser does not support Web Storage...");
    }
}

// Submit booking
function submitAll() {
    document.getElementById("message").innerHTML = "";

    let name = document.getElementById("nameInput");
    let lastName = document.getElementById("lastNameInput");
    let securityNumber = document.getElementById("securityNumberInput");
    let seatNumber = document.getElementById("seatNumberInput");
    let flightClass = document.getElementById("flightClass");

    if (name.value === "" || lastName.value === "" || securityNumber.value === null
        || seatNumber.value === null) {
        document.getElementById("message").innerHTML = "Fields cannot be empty!";
        return;
    }

    // What seat has been selected on the right side
    let selectedSeat;
    for (let i = 1; i < 19; i++) {
        if (document.getElementById(i.toString()).style.backgroundColor === "blue") {
            selectedSeat = document.getElementById(i.toString()).innerHTML;
        }
    }

    if (flightClass.selectedIndex === 0 && selectedSeat > 6) {
        document.getElementById("message").innerHTML = "Flight class and seat number is not matching!";
        return;
    }
    if (flightClass.selectedIndex === 1 && selectedSeat < 7) {
        document.getElementById("message").innerHTML = "Flight class and seat number is not matching!";
        return;
    }

    if (selectedSeat !== seatNumber.value) {
        document.getElementById("message").innerHTML = "The seat numbers don't match!";
        return;
    }

    // From here, the submit is valid and accepted
    let blueSeatToRed;
    for (let i = 1; i < 19; i++) {
        if (document.getElementById(i.toString()).style.backgroundColor === "blue") {
            blueSeatToRed = document.getElementById(i.toString());
        }
    }
    blueSeatToRed.style.backgroundColor = "red";

    storeSession(); // Create array based on seats and save data
    boardingCard(); // Print boarding card on new window
}

// New index showing booking info
function boardingCard() {
    let boardingCardWindow = window.open("BoardingCard");
    boardingCardWindow.document.write("<!DOCTYPE html>");
    // Header part
    boardingCardWindow.document.write("<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>BoardingCard</title>\n" +
        "    <!-- link style sheet -->\n" +
        "    <link rel=\"stylesheet\"\n" +
        "          type = \"text/css\"\n" +
        "          href=\"css/style.css\" />\n" +
        "    <script src=\"js/main.js\" defer></script>\n" +
        "</head>\n" +
        "<body>\n" +
        "<header>\n" +
        "    <img class=\"main\" src=\"img/cartoon-plane.jpg\" alt = \"Cartoon plane\"/>\n" +
        "    <h1>Welcome!</h1>\n" +
        "    <nav>\n" +
        "        <h3>Links:</h3>\n" +
        "        <a href=\"index.html\">Index</a> <br/>\n" +
        "        <a href=\"booking.html\">Booking</a> <br/>\n" +
        "        <a href=\"contact.html\">Contact</a> <br/>\n" +
        "        <a href=\"employees.html\">Employees</a> <br/>\n" +
        "        <a href=\"ourfleet.html\">Ourfleet</a> <br/>\n" +
        "    </nav>\n" +
        "</header>");

    // Info, name, seat number etc
    let name = document.getElementById("nameInput");
    let lastName = document.getElementById("lastNameInput");
    let securityNumber = document.getElementById("securityNumberInput");
    let seatNumber = document.getElementById("seatNumberInput");
    let flightClass = document.getElementById("flightClass");

    if(flightClass.selectedIndex === 0) {
        flightClass = "Business class";
    } else {
        flightClass = "Economic class";
    }

    // main part with the boarding card information
    boardingCardWindow.document.writeln("<main>");
    boardingCardWindow.document.writeln("<div id='card'>");
    boardingCardWindow.document.writeln("<h1 id='boarding_header'> US Airways </h1>");
    boardingCardWindow.document.writeln("<h2 id='boarding_ticket'> Boarding ticket </h2>");
    boardingCardWindow.document.writeln("<p> First name: " + name.value + "</p>");
    boardingCardWindow.document.writeln("<p> Last name: " + lastName.value + "</p>");
    boardingCardWindow.document.writeln("<p> Security number: " + securityNumber.value + "</p>");
    boardingCardWindow.document.writeln("<p> Seat number: " + seatNumber.value + "</p>");
    boardingCardWindow.document.writeln("<p> Flight class: " + flightClass + "</p>");
    boardingCardWindow.document.writeln("</div>");
    boardingCardWindow.document.writeln("</main>");


    // Footer part
    boardingCardWindow.document.write("<footer>\n" +
        "    <h6>&copy: 2019-2019 US Airways. All Rights Reserved</h6>\n" +
        "    Company: US Airways<br>\n" +
        "    Country: United States of America\n" +
        "    <address>\n" +
        "        Contact: <a href=\"mailto:us-airways@airways.com\">us-airways@airways.com</a>\n" +
        "    </address>\n" +
        "</footer>\n" +
        "</body>\n" +
        "</html>");

    // reset name, last name and security number on the left side
    name.value = "";
    lastName.value = "";
    securityNumber.value = null;
}

// User submit or clear right side with info
function submitOrReset() {
    let submit = document.getElementById("submit");
    let reset = document.getElementById("reset");

    submit.addEventListener("click", function () {submitAll();});
    reset.addEventListener("click", function () {resetAll()});
}
if(window.location.pathname.endsWith("/booking.html")) {
    window.addEventListener("load", seats, false);
    window.addEventListener("load", submitOrReset, false);
    window.addEventListener("load", getSessionStorage, false);
}