// Finds icons for project images
// Set height and width based on screen width
$(function() {
    var projects = $('.project');

    function addColumnClasses(elements) {
        for (var i = 0; i < elements.length; i++) {
            var width = window.screen.width;
            console.log("device width is: ", width);
            var columnSize = "col-"
            if (width > 1025) {
                // screens bigger than tablets
                columnSize += "lg-4"
            } else if (width < 1025 && width > 400) {
                // tablet screens
                columnSize += "sm-6"
            } else {
                // smart phone screens
                columnSize += "xs-12";
            }
            $(elements[i]).addClass(columnSize);
        };
    }

    addColumnClasses(projects);
})