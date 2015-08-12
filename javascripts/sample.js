$(function() {

    /* Important pre-selected DOM elements for use */
    var mediaContainer = $('main section#mediaContainer');
    var loadingGifContainer = $('#loadingGifContainer');
    // tracking which post to retrieve
    var postCounter = 1;

    /**
     * Takes a JSON obj representation of a blog post and returns DOM structure
     * string ready to be displayed
     * @param object    Blog post object, should have id, body, and title attrs
     * @param string    Twitter Bootstrap column class for responsive col handling
     *                  - should display 3 cols on a large (say 1300px width) screen,
     *                    2 cols on a smaller screen (say 900px), and 1 col on small
     *                    mobile screen (like a 400px phone)
     */
    var generateBlogPostHtml = function(blogPost, bootstrapColumnClass) {
        if (typeof blogPost.id !== 'number' ||
            typeof blogPost.body !== 'string' ||
            typeof blogPost.title !== 'string') {
            return '<div style="color:FF0000">Bad data format</div>';
        }

        var mediaBlock = '<div class="media ' + bootstrapColumnClass + '">';
        mediaBlock += '<div class="media-left"><h3 class="text-primary">' + blogPost.id + '</h3></div>';
        mediaBlock += '<div class="media-body">';
        mediaBlock += '<h4>' + blogPost.title + '</h4>';
        mediaBlock += blogPost.body;
        mediaBlock += '</div></div>';

        return mediaBlock;
    };

    /**
     * Handler for Get New Post button click
     * -- Should request next blog post, then get html representation
     *    via generateBlogPostHtml and display it in mediaContainer
     */
    $('button#getNewPost').on('click', function() {
        showLoadingGif();
        var baseUrl = 'http://jsonplaceholder.typicode.com/posts/';
        var deviceWidth = window.screen.width;

        var calculateColumnSize = function(width) {
            if (width > 900) {
                return "lg-4"
            } else if (width < 900 && width > 400) {
                return "sm-6"
            } else {
                return "xs-12";
            }
        };

        var columnSize = calculateColumnSize(deviceWidth);
        var bootstrapColumnClass = "col-" + columnSize;

        $.ajax({
            type: 'GET',
            url: baseUrl + postCounter,
            dataType: 'json'
        })
            .done(function(response) {
                mediaContainer.append(generateBlogPostHtml(response, bootstrapColumnClass));
                postCounter++;
                hideLoadingGif();
            }).fail(function(response) {
                return response;
            }).always(function(response) {
                console.log("always response is: ", response);
            })
    });

    /**
     * Handler for Reset button click
     * -- Should clear all blog posts and reset post counter so next post
     *    retrieved/displayed is the first one
     */
    $('button#resetAll').on('click', function() {
        mediaContainer.empty();
        postCounter = 1;
    });

    // The above event handlers/functions may not be enough to implement
    // all of the desired functionality, so feel free to write more
    // as needed.
    /**
     * Handler for hiding individual posts on click
     * -- Should hide the clicked post
     */
    mediaContainer.on('click', '.media', function() {
        $(this).hide();
    });

    /**
     * Handler for displaying loading gif while AJAX calls are running
     * -- Should display loading gif while AJAX is being completed
     */
    function showLoadingGif() {
        $(loadingGifContainer).removeClass('hidden');
    }
    /**
     * Handler for hiding loading gif once AJAX calls finish
     * -- Should hide loading gif when AJAX call is completed
     */
    function hideLoadingGif() {
        $(loadingGifContainer).addClass('hidden');
    }
});