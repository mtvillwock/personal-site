// uses Fisher-Yates shuffle to randomize sayings
// Adds one to tagline div
$(function() {
    var sayings = ["Half measures are as bad as nothing at all.", "Mind your words, they are important.", "It's not fully shipped until it's fast.", "Anything added dilutes everything else."]

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    var shuffledSaying = shuffle(sayings).pop();
    $('.tagline').text(shuffledSaying);
})