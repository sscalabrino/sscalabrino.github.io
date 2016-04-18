/*
Theme: InstaCard - Responsive Virtual Business Card
Author: graphic_dev
URI:  http://themeforest.net/user/graphic_dev?ref=graphic_dev
jQuery Version: 1.1
*/

$(document).ready(function() {
    // Instagram feed
    var $userID = 30770059; // Change to your Instagram ID (NOT username)
    var $yourAccessToken = "34014639.7e8660b.59c1d6b431f4455687b0c4a1ea580ac6"; //Change to your Access Token
    var $photosToLoad = 24; // Nr of photo's to load each time

    var $buttonText = $('.load-instagram span').text();
    var $nextURL;

    // Load images automatically...
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/" + $userID + "/media/recent/?access_token=" + $yourAccessToken + "&count=" + $photosToLoad,
        success: function(data) {
            for (var i=0; i<$photosToLoad; i++) {
                $(".instagram-feed .photos-here").append("<a href='" + data.data[i].link + "' target='_blank'><img src='" + data.data[i].images.thumbnail.url + "'></img></a>");
            }
            $nextURL = data.pagination.next_url;
        }
    });

    // ...and load more images when button is clicked
    $(".load-instagram").click(function () { 
        $('.load-instagram span').text('Loading...');
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            cache: false,
            url: $nextURL,
            success: function(data) {
                for (var i=0; i<$photosToLoad; i++) {
                    $(".instagram-feed .photos-here").append("<a href='" + data.data[i].link + "' target='_blank'><img src='" + data.data[i].images.thumbnail.url +"'></img></a>");
                }
                $('.load-instagram span').text($buttonText);
                $nextURL = data.pagination.next_url;
            }
        });
    });

    // Mobile navigation
    $('#mobile-nav-button, nav ul li').click(function () {
        $('nav').toggleClass('open');
    });

    // Quotes
    $('.notepad').after('<div class="notepad-bullets"></div>')
    $('.notepad').cycle({
        fx: 'fade',
        timeout: 5000, // Set how long should each quote be shown (1000 = 1 sec)
        after: onAfter,
        pager: '.notepad-bullets',
        pagerAnchorBuilder: function paginate(idx, el) {
            return '<a class="service' + idx + '" href="#" >&bull;</a>';
        }
    }).cycle('pause'); // Remove .cycle('pause') if you want to autoplay
    function onAfter() {
        $(this).parent().css({height: $(this).height()});
    }

    // Skills
    $(function() {
        $('.chart').easyPieChart({
            animate: 3000,
            barColor: "#393939",
            scaleColor: false,
            lineWidth: 3,
            size: 109
        });
    });

    // prettyPhoto
    $("a[rel^='prettyPhoto']").prettyPhoto({
        animation_speed: 'fast', /* fast/slow/normal */
        slideshow: 5000, /* false OR interval time in ms */
        autoplay_slideshow: false, /* true/false */
        opacity: 0.80, /* Value between 0 and 1 */
        show_title: false, /* true/false */
        allow_resize: true, /* Resize the photos bigger than viewport. true/false */
        default_width: 500,
        default_height: 344,
        counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
        theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
        horizontal_padding: 20, /* The padding on each side of the picture */
        hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
        wmode: 'opaque', /* Set the flash wmode attribute */
        autoplay: true, /* Automatically start videos: True/False */
        modal: false, /* If set to true, only the close button will close the window */
        deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
        overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
        keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
        changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
        callback: function(){}, /* Called when prettyPhoto is closed */
        ie6_fallback: true,
        social_tools: false /* html or false to disable */
    });

    // Tabs (Read more here: http://os.alfajango.com/easytabs/)
    $('#tab-container').easytabs({
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        tabs: "nav > ul > li",
        updateHash: true
    });

    $('#portfolio-tabs').easytabs({
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        collapsible: true,
        updateHash: false
    });

    $('#portfolio-tabs').bind('easytabs:ajax:complete', function() {
        // Scroll to Portfolio top
        $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
        }, 100);

        // Fitvids
        $(".portfolio-item").fitVids();

        // Flexslider
        $('.flexslider').flexslider({
            animation: "fade",              //String: Select your animation type, "fade" or "slide"
            easing: "swing",               //{NEW} String: Determines the easing method used in jQuery transitions. jQuery easing plugin is supported!
            direction: "horizontal",        //String: Select the sliding direction, "horizontal" or "vertical"
            reverse: false,                 //{NEW} Boolean: Reverse the animation direction
            animationLoop: true,             //Boolean: Should the animation loop? If false, directionNav will received "disable" classes at either end
            smoothHeight: false,            //{NEW} Boolean: Allow height of the slider to animate smoothly in horizontal mode
            startAt: 0,                     //Integer: The slide that the slider should start on. Array notation (0 = first slide)
            slideshow: false,                //Boolean: Animate slider automatically
            slideshowSpeed: 7000,           //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,            //Integer: Set the speed of animations, in milliseconds
            initDelay: 0,                   //{NEW} Integer: Set an initialization delay, in milliseconds
            randomize: false,               //Boolean: Randomize slide order
             
            // Usability features
            pauseOnAction: true,            //Boolean: Pause the slideshow when interacting with control elements, highly recommended.
            pauseOnHover: false,            //Boolean: Pause the slideshow when hovering over slider, then resume when no longer hovering
            useCSS: true,                   //{NEW} Boolean: Slider will use CSS3 transitions if available
            touch: true,                    //{NEW} Boolean: Allow touch swipe navigation of the slider on touch-enabled devices
            video: false,                   //{NEW} Boolean: If using video in the slider, will prevent CSS3 3D Transforms to avoid graphical glitches
             
            // Primary Controls
            controlNav: true,               //Boolean: Create navigation for paging control of each clide? Note: Leave true for manualControls usage
            directionNav: true,             //Boolean: Create navigation for previous/next navigation? (true/false)
            prevText: "Previous",           //String: Set the text for the "previous" directionNav item
            nextText: "Next",               //String: Set the text for the "next" directionNav item
             
            // Secondary Navigation
            keyboard: true,                 //Boolean: Allow slider navigating via keyboard left/right keys
            multipleKeyboard: false,        //{NEW} Boolean: Allow keyboard navigation to affect multiple sliders. Default behavior cuts out keyboard navigation with more than one slider present.
            mousewheel: false,              //{UPDATED} Boolean: Requires jquery.mousewheel.js (https://github.com/brandonaaron/jquery-mousewheel) - Allows slider navigating via mousewheel
            pausePlay: false,               //Boolean: Create pause/play dynamic element
            pauseText: 'Pause',             //String: Set the text for the "pause" pausePlay item
            playText: 'Play',               //String: Set the text for the "play" pausePlay item
             
            // Special properties
            controlsContainer: "",          //{UPDATED} Selector: USE CLASS SELECTOR. Declare which container the navigation elements should be appended too. Default container is the FlexSlider element. Example use would be ".flexslider-container". Property is ignored if given element is not found.
            manualControls: "",             //Selector: Declare custom control navigation. Examples would be ".flex-control-nav li" or "#tabs-nav li img", etc. The number of elements in your controlNav should match the number of slides/tabs.
            sync: "",                       //{NEW} Selector: Mirror the actions performed on this slider with another slider. Use with care.
            asNavFor: "",                   //{NEW} Selector: Internal property exposed for turning the slider into a thumbnail navigation for another slider
             
            // Carousel Options
            itemWidth: 0,                   //{NEW} Integer: Box-model width of individual carousel items, including horizontal borders and padding.
            itemMargin: 0,                  //{NEW} Integer: Margin between carousel items.
            minItems: 0,                    //{NEW} Integer: Minimum number of carousel items that should be visible. Items will resize fluidly when below this.
            maxItems: 0,                    //{NEW} Integer: Maxmimum number of carousel items that should be visible. Items will resize fluidly when above this limit.
            move: 0,                        //{NEW} Integer: Number of carousel items that should move on animation. If 0, slider will move all visible items.
             
            // Callback API
            start: function(){},            //Callback: function(slider) - Fires when the slider loads the first slide
            before: function(){},           //Callback: function(slider) - Fires asynchronously with each slider animation
            after: function(){},            //Callback: function(slider) - Fires after each slider animation completes
            end: function(){},              //Callback: function(slider) - Fires when the slider reaches the last slide (asynchronous)
            added: function(){},            //{NEW} Callback: function(slider) - Fires after a slide is added
            removed: function(){}           //{NEW} Callback: function(slider) - Fires after a slide is removed
        });

        // prettyPhoto
        $("a[rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast', /* fast/slow/normal */
            slideshow: 5000, /* false OR interval time in ms */
            autoplay_slideshow: false, /* true/false */
            opacity: 0.80, /* Value between 0 and 1 */
            show_title: false, /* true/false */
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            default_width: 500,
            default_height: 344,
            counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
            theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
            horizontal_padding: 20, /* The padding on each side of the picture */
            hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
            wmode: 'opaque', /* Set the flash wmode attribute */
            autoplay: true, /* Automatically start videos: True/False */
            modal: false, /* If set to true, only the close button will close the window */
            deeplinking: true, /* Allow prettyPhoto to update the url to enable deeplinking. */
            overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
            keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
            changepicturecallback: function(){}, /* Called everytime an item is shown/changed */
            callback: function(){}, /* Called when prettyPhoto is closed */
            ie6_fallback: true,
            social_tools: false /* html or false to disable */
        });
    });

    //Tooltips (Read more here: http://onehackoranother.com/projects/jquery/tipsy/)
    $('.social-icons a, .download-resume a').tipsy({gravity: 'e'});

    // Contact Form
    $("#contact-form").validate({
        submitHandler: function(form) {
            $(form).ajaxSubmit(options); 
            $('#form-output').show();
            $('#form-output p').remove();
            $('#form-output').append('<p class="loading">Sending your message...</p>');
            return false; 
        }
    });
    var options = { 
        target: '#form-output',
        clearForm: true  /* clear all form fields after successful submit */
    };

    // Form placeholder fix for IE
    $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
        }).blur(function() {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur().parents('form').submit(function() {
            $(this).find('[placeholder]').each(function() {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
            }
        })
    });

    // start jqtweet!
    JQTWEET.loadTweets();

});