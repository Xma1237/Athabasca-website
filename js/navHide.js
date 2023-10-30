// Author: Xiangyu Ma
// Last day of modification: 2023-3-23
// This js file is used for dynamic navigation bar

/*
Old codes

// this is used when the browser load the html page it will call this function
window.addEventListener('load', function () {
    // navButton is the variable from tag <div class="navButton">
    var navButton = document.querySelector('.navButton');

    // flag is the variable used to store the status of opened/closed navigation bar
    // default value of 0 is equal to closed navigation bar
    var flag = 0;

    // bind the button with 'click' event to function below
    navButton.addEventListener('click', function () {

        // select the navigation bar, store to 'navList'
        var navList = document.querySelector('.nav');

        // use 'if' statement to check the status of navigation bar
        if (flag == 0) {    // case 0 means nav is closed
            navList.style.display = 'block';    //change the display to 'block' to open nav
            flag = 1;   // change the status of nav to 1 which is opened
        } else {    // if flag is 1, means nav is opened
            navList.style.display = 'none'; // chang display to 'none' to hide it
            flag = 0;   // and change the status to 0
        }
    })

    // this could be done with CSS, but I tried to use JS do it
    // bind the navButton with another function which changes cursor type
    navButton.addEventListener('mouseover',function(){
        // change the cursor style of navButton to pointer when mouse is over it
        navButton.style.cursor = 'pointer';
    })
})
*/


// These codes will run after DOM is ready for JS to be executed.
$(document).ready(function () {
    // navButton is the variable from tag <div class="navButton">
    var navButton = $('.navButton');

    // flag is the variable used to store the status of opened/closed navigation bar
    // default value of 0 is equal to closed navigation bar
    var flag = 0;

    // bind the button with 'click' event to function below
    navButton.on('click', function () {

        // select the navigation bar, store to 'navList'
        var navList = $('.nav');

        // use 'if' statement to check the status of navigation bar
        if (flag == 0) {    // case 0 means nav is closed
            navList.slideDown();    //use the slideDown function to open nav
            flag = 1;   // change the status of nav to 1 which is opened
        } else {    // if flag is 1, means nav is opened
            navList.slideUp(); // use the slideUp function to hide it
            flag = 0;   // and change the status to 0
        }
    })

    // this could be done with CSS, but I tried to use JS do it
    // bind the navButton with another function which changes cursor type
    navButton.on('mouseover', function () {
        // change the cursor style of navButton to pointer when mouse is over it
        navButton.css('cursor', 'pointer');
    })
});

