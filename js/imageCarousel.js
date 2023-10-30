/* 
Author: Xiangyu Ma
Last day of modification: 2023-3-23
js file for Index.html
*/
// run the script when the document is ready
$(document).ready(function () {
  // Initialize the carousel
  function initCarousel() {
    // select the carousel container and its elements
    var $carousel = $('.image-carousel');
    var $images = $carousel.find('img');
    var $prevBtn = $carousel.find('.prev');
    var $nextBtn = $carousel.find('.next');
    // track the currently image index
    var currentIndex = 0;
    // set the interval duration
    var intervalDuration = 2000;
    // set the duration for fadeIn and fadeOut animations
    var animationDuration = 500; 

    // Set up the timer for automatic image change
    // save this timer to a variable for later use
    var timer = setInterval(showNextImage, intervalDuration);

    // function to reset the timer
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(showNextImage, intervalDuration);
    }


    // function to change the displayed image
    function changeImage(newIndex) {
      // remove 'active' class from the current image
      $images.eq(currentIndex).fadeOut(animationDuration, function () {
        $(this).removeClass('active');
      });
      // update current index
      currentIndex = newIndex;
      // add 'active' class to the new current image
      $images.eq(currentIndex).fadeIn(animationDuration, function () {
        $(this).addClass('active');
      });
    }

    // function to show previous image
    function showPrevImage() {
      // calculate the index of the previous image, considering the circular nature of the carousel
      var preIndex = (currentIndex - 1 + $images.length) % $images.length;
      // call changeImage with the new index
      changeImage(preIndex);
      // call resset timer function
      resetTimer();
    }

    // function to show next image
    function showNextImage() {
      // calculate the index of the next image, considering the circular nature of the carousel
      var nextIndex = (currentIndex + 1) % $images.length;
      // call changeImage with the new index
      changeImage(nextIndex);
      // call resset timer function
      resetTimer();
    }

    // attach click event listeners to buttons
    $prevBtn.on('click', showPrevImage);
    $nextBtn.on('click', showNextImage);

    // Hide all images except the current one
    $images.not(':eq(' + currentIndex + ')').hide();
    $images.eq(currentIndex).addClass('active');
  }

  // Call the initCarousel function to set up the carousel
  initCarousel();
});