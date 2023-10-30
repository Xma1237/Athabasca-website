// Author: Xiangyu Ma
// Last day of modification: 2023-3-15
// This js file is used for calendar function

// this is used when the browser load the html page it will call this function
window.addEventListener('load', function () {
    // function that generates calendar
    function generateCalendar(year, month) {
        // Date object for the specified year and month
        var currentDate = new Date(year, month, 1);

        // Get the year and month of the current date
        var currentYear = currentDate.getFullYear();
        var currentMonth = currentDate.getMonth();

        // create array of month names
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // create array of day names
        var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        // number of days in the current month
        // return of currentMont's number is equal to real month-1
        var daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        // Get the index of the first day of the month (0-6)
        var firstDayIndex = new Date(currentYear, currentMonth, 1).getDay();

        // Create a table element to hold the calendar
        var calendarTable = document.createElement("table");

        // Create a row for the month and year
        var monthYearRow = document.createElement("tr");
        var monthYearCell = document.createElement("td");
        // defines 7 columns a cell should span
        monthYearCell.setAttribute("colspan", 7);
        // set names
        monthYearCell.innerHTML = monthNames[currentMonth] + " " + currentYear;
        // attachment of cells to rows and rows to table
        monthYearRow.appendChild(monthYearCell);
        calendarTable.appendChild(monthYearRow);

        // Create a row for the day names
        var dayNamesRow = document.createElement("tr");
        // from sun to sat
        for (var i = 0; i < 7; i++) {
            var dayNameCell = document.createElement("td");
            dayNameCell.innerHTML = dayNames[i];
            dayNamesRow.appendChild(dayNameCell);
        }
        calendarTable.appendChild(dayNamesRow);

        // Create rows for the days of the month
        var currentDay = 1;

        // this is added to calculate the total number of days that take a spot in a month
        var numRows = Math.ceil((firstDayIndex + daysInMonth) / 7); 
        // for (var i = 0; i < 6; i++) { this does not work for some month
        for (var i = 0; i < numRows; i++) {
            var dayRow = document.createElement("tr");
            // each row, there are 7 days
            for (var j = 0; j < 7; j++) {
                var dayCell = document.createElement("td");
                // i==0 is if it's the first row, and the j is less than first day in month
                if (i == 0 && j < firstDayIndex) {
                    // fill empty cells before the first day of the month
                    dayCell.innerHTML = "";
                } else if (currentDay > daysInMonth) {
                    // fill empty cells after the last day of the month
                    dayCell.innerHTML = "";
                } else {
                    // fill cells with the day of the month
                    dayCell.innerHTML = currentDay;
                    currentDay++;
                }
                // This is the function of note adding
                // Add event listeners to each table cell representing a day
                dayCell.addEventListener("click", function () {
                    // get the date of user's selection
                    var selectedDate = new Date(year, month, this.textContent);
                    // pop message
                    var eventText = prompt("Enter event details for " + selectedDate.toDateString() + ":");
                    // checking user input
                    if (eventText !== null) {
                        // create an area to add event
                        var eventElement = document.createElement("div");
                        eventElement.classList.add("event");
                        eventElement.textContent = eventText;
                        this.appendChild(eventElement);
                    }
                });
                dayRow.appendChild(dayCell);
            }
            calendarTable.appendChild(dayRow);
        }

        // create buttons to previous month
        var previousButton = document.createElement("button");
        // name & content
        previousButton.className = "button previous";
        previousButton.textContent = "Previous";
        // when click this button
        previousButton.addEventListener("click", function () {
            // go to previous month
            currentMonth--;
            // when need to change year
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            // clear current month
            calendarTable.remove();
            previousButton.remove();
            nextButton.remove();
            // and make a new month according to current month
            calendarContainer.appendChild(generateCalendar(currentYear, currentMonth));
        });

        // create buttons to next month
        var nextButton = document.createElement("button");
        // name & content
        nextButton.className = "button next";
        nextButton.textContent = "Next";
        // when click this button
        nextButton.addEventListener("click", function () {
            // go to next month
            currentMonth++;
            // when need to change year
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            // clear current month
            calendarTable.remove();
            previousButton.remove();
            nextButton.remove();
            // and make a new month according to current month
            calendarContainer.appendChild(generateCalendar(currentYear, currentMonth));
        });

        // container element to hold the calendar and buttons
        var calendarContainer = document.createElement("div");
        calendarContainer.className = 'calendar';
        calendarContainer.appendChild(calendarTable);
        calendarContainer.appendChild(previousButton);
        calendarContainer.appendChild(nextButton);

        // Return calendar
        return calendarContainer;
    }

    // invoke function with the current year and month
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth();
    var calendar = generateCalendar(currentYear, currentMonth);
    document.body.appendChild(calendar);

})