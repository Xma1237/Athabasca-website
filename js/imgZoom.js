// Author: Xiangyu Ma
// Last day of modification: 2023-3-9
// This js file is used for zooming img

// this is used when the browser load the html page it will call this function
window.addEventListener('load', function () {
    // select list save to list
    // var list = this.document.querySelector('.list');
    var list = this.document.querySelectorAll('.list');

    // Need to use forEach to bind all images!
    list.forEach(i => {

        // select small img save to listImg
        // var listImg = this.document.querySelector('.listImg');
        var listImg = i.children[0];

        // select shade block save to shade
        // var shade = this.document.querySelector('.shade');
        var shade = i.children[1];

        // select div containing zoomed img save to zoom
        // var zoom = this.document.querySelector('.zoom');
        var zoom = i.children[2];

        // select zoomed img save to zoomImg
        // var zoomImg = this.document.querySelector('.zoomImg');
        var zoomImg = i.children[2].children[0];

        /* 
            list.addEventListener('mouseover', function () {
            // change the display to 'block' to show img and shade
            shade.style.display = 'block';
            zoom.style.display = 'block';
        }) */


        // add function when mouse is over the small img
        i.addEventListener('mouseover', function () {
            // change the display to 'block' to show img and shade
            shade.style.display = 'block';
            zoom.style.display = 'block';
        });

        // The basic idea is from https://www.tutorialrepublic.com/faq/how-to-find-mouse-position-relative-to-an-element-using-jquery.php
        // I used the listImg's parent node position help calculation
        // minus half of box shade's width and height to make the mouse on center of shade
        i.addEventListener('mousemove', function (e) {
            // continues giving the x and y position to shade
            // get x and y of the mouse within the img
            var mouseX = e.pageX - listImg.parentNode.offsetLeft;
            var mouseY = e.pageY - listImg.parentNode.offsetTop;

            // this shadeX/Y is adjusted to center
            var shadeX = mouseX - (shade.offsetWidth / 2);
            var shadeY = mouseY - (shade.offsetHeight / 2);

            // checking the position of mouse
            // if shade touch left side, let it stop at left side
            if (shadeX <= 0) {
                shadeX = 0;
                // if shade touch the middle line, let it stop at middle
                // since I made this shade half size of listImg
            } else if (shadeX >= (listImg.offsetWidth / 2)) {
                shadeX = (listImg.offsetWidth / 2);
            }

            // same thing apply to the Y position of shade
            if (shadeY <= 0) {
                shadeY = 0;
            } else if (shadeY >= (listImg.offsetHeight / 2)) {
                shadeY = (listImg.offsetHeight / 2);
            }

            // this is used to debug
            // console.log(e.pageY, list.offsetTop, listImg.offsetTop, listImg.parentNode.offsetTop);

            // apply shadeX/Y to shade
            shade.style.left = shadeX + 'px';
            shade.style.top = shadeY + 'px';

            // using shadeX/Y to calculate the acccording zoomImg's x and y
            // and apply the calculated positions to zoomImg(opposite number)
            zoomImg.style.left = -(shadeX * (zoomImg.offsetWidth - zoom.offsetWidth) / (listImg.offsetWidth / 2)) + 'px';
            zoomImg.style.top = -(shadeY * (zoomImg.offsetHeight - zoom.offsetHeight) / (listImg.offsetHeight / 2)) + 'px';
        });

        // add function when mouse leaves the small img
        i.addEventListener('mouseout', function () {
            // change the display to 'none' to hide img and shade
            shade.style.display = 'none';
            zoom.style.display = 'none';
        });

    })
})