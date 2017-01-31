/*
 * Hello Team! 
 *   Today you have been tasked with fixing my Drum Kit Code...
 *   ... a lot of it has already been implemented, but I need some help
 *   integrating the data.js object. Hopefully after 3 easy-ish steps we can
 *   have this up and running.
 */

$(document).ready(function() {

    /**
     * Creates a New Button Div in the right place
     * @param {string} character - Single Character String that will be displayed
     *   in the center of the button
     */
    function createButtonDiv(character) {
        var currentCount = $(".pad").children().length + 1
        $(".pad").append('<div class="box pad-' + currentCount + '">' +
            character + '</div>')
    }

    /**
     * Updates the Audio Attribute of the corresponding pad element
     * @param {string} padName - Name of the Pad to Update, Ex: pad-1
     * @param {string} value - The URL of the MP3
     */
    function updateAudioAttribute(padName, value) {
        var className = "." + padName;
        $(className).attr('data-audio', value);
    }

    /**
     * Updates the KeyCode Attribute of the corresponding pad element
     * @param {string} padName - Name of the Pad to Update, Ex: pad-1
     * @param {string} value - The keyboard keycode (Ex. 82) 
     */
    function updateKeyCodeAttribute(padName, value) {
        var className = "." + padName;
        $(className).attr('data-code', value);
    }

    /**
     * Preload Audio Elements
     */
    function preloadAudioElements() {
        for (var i = 0; i < $('.pad').children().length; i++) {
            var ele = $('.pad').children()[i];
            var source = $(ele).attr('data-audio');
            var audioClip = new Audio(source);
            mp3s.push(audioClip);
        }
    }

    /**
     * Bind Click Events
     */
    function createClickBindings() {
        $('.box').mousedown(function(event) {
            var padNumber = /pad-(\d*)/g.exec(event.target.className)[1];
            mp3s[padNumber - 1].load();
            mp3s[padNumber - 1].play();
        });
    }

    /**
     * Bind Keyboard Events
     */
    function createKeyBindings() {
        $(window).keydown(function(e) {
            var code = e.keyCode;
            var kc = String.fromCharCode(e.keyCode);
            var element = $("div[data-code='" + code + "']");

            if (element.length == 0) {
                return;
            }

            element.addClass("active");
            var padNumber = /pad-(\d*)/g.exec(element.attr("class"))[1];

            mp3s[padNumber - 1].load();
            mp3s[padNumber - 1].play();
        });

        $(window).keyup(function(e) {
            var code = e.keyCode;
            $("div[data-code='" + code + "']").removeClass("active");
        });
    }

    /* Retrieve the Javascript Object from an external source -- set the data to 
        a var called data */
    var data = retrieveData();

    /**
     * Task #1: Create a div for each letter in the "Rows" Object. 
     *   (This will be our beat button)
     * 
     *   Note: 
     *   -  A Helper method has already been created for you.
     *      Once in the loop you only need to call "createButtonDiv" with the 
     *      parameter of the letter value.  
     *   -  Once completed our index.html page should render a div similar to the 
     *      following:
     *
     *      ...
     *      <div class="pad">
     *         <div class="box pad-1">R</div>
     *         ...
     *      </div> 
     */
    var rows = data["Rows"];

    for (var i = 0; 1 < rows.length; i++) {
        for (var j = 0; j < rows[i].length; j++) {
            console.log(rows[i][j]);
            createButtonDiv(rows[i][j]);
        }
    }

    /**
     * Task #2: Update our Beat Button to include our Audio Attributes
     * 
     *   Note: 
     *   -  A Helper method has already been created for you.
     *      Once in the loop you only need to call "updateAudioAttribute" with 
     *      two parameters: the name of the beat button (Ex. "pad-1") and the URL 
     *      of the MP3
     *   -  Once completed our index.html page should render a div similar to   the 
     *      following:
     *
     *      ...
     *      <div class="pad">
     *         <div class="box pad-1" data-audio="https://s3-us-west-2.a...mp3">
     *            R
     *         </div>
     *         ...
     *      </div> 
     */
    var buttons = data["Buttons"];
 
    console.log(data["Buttons"])
        for(var key in bF){
     
     
     
     
     
     
     /**
      ** Task #3: Update our Beat Button Divs to include the KeyCodes so we can use  
     *   our keyboard hit the Beat Buttons
     * 
     
     
     
     
     *   Note: 
     *   -  A Helper method has already been created for you.
     *      Once in the loop you only need to call "updateKeyCodeAttribute" with 
     *      two parameters: the name of the beat button (Ex. "pad-1") and the 
     *      keycode relating to the letter on the beat button.
     *   -  Once completed our index.html page should render a div similar to the 
     *      following:
     *
     *      ...
     *      <div class="pad">
     *         <div class="box pad-1" data-audio="https://s3-us-west-2.a...mp3"
                  data-code="82">
     *            R
     *         </div>
     *         ...
     *      </div> 
     */
    var keys = data["Keys"];
    for (var key in keys) {
        var padName = key;
        var value = keys[key];
        updateKeyCodeAttribute(padName, value);
    }

    var mp3s = [];
    preloadAudioElements();
    createClickBindings();
    createKeyBindings();

});
