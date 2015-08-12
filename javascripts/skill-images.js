// Finds icons for skill images
// Set height and width based on screen width
$(function() {
    var ruby = document.getElementsByClassName('ruby')[0];
    var js = document.getElementsByClassName('js')[0];
    var skills = [ruby, js];

    function addSkillsImageSizes(elements) {
        for (var i = 0; i < elements.length; i++) {
            var screenWidth = window.screen.width,
                height,
                width;

            if (screenWidth > 900) {
                height = "200px";
                width = "200px";
            } else if (screenWidth < 900 && screenWidth > 400) {
                height = "200px";
                width = "200px";
            } else {
                height = "72px";
                width = "72px";
            }
            $(elements[i]).css({
                "width": width,
                "height": height
            });
        };
    }

    addSkillsImageSizes(skills);
})