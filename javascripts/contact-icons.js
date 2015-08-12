// Finds icons for contact icon images
// Set height and width based on screen width
$(function() {
    var icons = $('.icons a div');

    function addContactImageSizes(elements) {
        for (var i = 0; i < elements.length; i++) {
            var screenWidth = window.screen.width,
                height,
                width;

            if (screenWidth > 900) {
                height = "100px";
                width = "100px";
            } else if (screenWidth < 900 && screenWidth > 400) {
                height = "100px";
                width = "100px";
            } else {
                height = "36px";
                width = "36px";
            }
            $(elements[i]).css({
                "width": width,
                "height": height
            });
        };
    }

    addContactImageSizes(icons);
})