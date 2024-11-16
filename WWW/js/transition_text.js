$(document).ready(function() {
    function setupSlideshow(slideshowId, interval) {
        var $slideshow = $(slideshowId);
        $slideshow.children('div:gt(0)').hide();

        setInterval(function() {
            $slideshow.children('div:first').fadeOut(1500, function() {
                $(this).next().fadeIn(1500).end().appendTo($slideshow);
            });
        }, interval);
    }

    // Setup each slideshow
    setupSlideshow('#slideshow', 6000);
    setupSlideshow('#slideshow2', 11000);
});
