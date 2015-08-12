// Finds icons for contact icon images
// Set height and width based on screen width
$(function() {
    var iconDivs = $('.icons .icon');

    function addColumnClasses(elements) {
        for (var i = 0; i < elements.length; i++) {
            var width = window.screen.width;
            console.log("device width is: ", width);
            var columnSize = "col-"
            if (width > 1025) {
                // screens bigger than tablets
                columnSize += "lg-3"
            } else if (width < 1025 && width > 400) {
                // tablet screens
                columnSize += "sm-6"
            } else {
                // smart phone screens
                columnSize += "xs-6 offset-4";
            }
            $(elements[i]).addClass(columnSize);
        };
    }

    addColumnClasses(iconDivs);

    var images = $('.icons .icon img');

    function addContactImageSizes(elements) {
        for (var i = 0; i < elements.length; i++) {
            var screenWidth = window.screen.width,
                height,
                width;

            if (screenWidth > 900) {
                height = "200px";
                width = "200px";
            } else if (screenWidth < 900 && screenWidth > 400) {
                height = "400px";
                width = "400px";
            } else {
                height = "360px";
                width = "360px";
            }
            $(elements[i]).css({
                "width": width,
                "height": height
            });
        };
    }

    addContactImageSizes(images);
})