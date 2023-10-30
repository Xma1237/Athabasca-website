// Author: Xiangyu Ma
// Last day of modification: 2023-3-23
// This js file is used for mode switching
$(document).ready(function () {
    // Function to toggle dark and light modes
    function switchTheme() {
        var $body = $('body');

        // Check if the body has the 'dark-mode' class
        if ($body.hasClass('dark-mode')) {
            // If dark mode is active, switch to light mode
            $body.removeClass('dark-mode').addClass('light-mode');
        } else {
            // If light mode is active, switch to dark mode
            $body.removeClass('light-mode').addClass('dark-mode');
        }
    }

    // Attach the switchTheme function to the button's click event
    $('#modeSwitch').on('click', switchTheme);

});