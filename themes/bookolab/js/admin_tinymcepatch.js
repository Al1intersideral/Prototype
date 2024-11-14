

$(document).ready(function(){
    console.log("cool", $(".tox-tbtn"));
    $("body").on('mouseover',".tox-tbtn",function(){
        if($(this).attr("title") == "Source code"){
            console.log("cool");
            waitForElm('.tox-textarea').then((elm) => {
			
        console.log('Element is ready', elm);
        // add id to textarea 
        $(elm).attr("id","editing");
        $(elm).attr("spellcheck","false");
        //generate pre
        copyelement(elm);
        //manipulate textarea content
        
        $(elm).bind('input propertychange', function(){
            update($(this).val());
        })

        $(elm).on('scroll',function(){
            
            sync_scroll(this);

        });
        $(elm).on('update',function(){
            update($(this).val());
            sync_scroll(this);
        });
        $(elm).on('keydown',function(e){
            check_tab(elm, e)
            
        });
        $( window ).on( "resize", function() {
            updateOnResize(elm);
        });
    });
        }
    });

    
});


function waitForElm(selector) {
    return new Promise(resolve => {
    if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(mutations => {
        if (document.querySelector(selector)) {
            resolve(document.querySelector(selector));
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});
}


function update(text) {
    let result_element = document.querySelector("#highlighting-content");
    // Handle final newlines (see article)
    // if(text[text.length-1] == "\n") {
    // 	text += " ";
    // }
    // Update code
    result_element.innerHTML = text.replace(new RegExp("&", "g"), "&amp;").replace(new RegExp("<", "g"), "&lt;"); /* Global RegExp */
    // Syntax Highlight
    Prism.highlightElement(result_element);
    }

    function sync_scroll(element) {
    /* Scroll result to scroll coords of event - sync with textarea */
    let result_element = document.querySelector("#highlighting");
    // Get and set x and y
    result_element.scrollTop = element.scrollTop;
    result_element.scrollLeft = element.scrollLeft;
    }

    function check_tab(element, event) {
    let code = element.value;
    if(event.key == "Tab") {
        /* Tab key pressed */
        event.preventDefault(); // stop normal
        let before_tab = code.slice(0, element.selectionStart); // text before tab
        let after_tab = code.slice(element.selectionEnd, element.value.length); // text after tab
        let cursor_pos = element.selectionStart + 1; // where cursor moves after tab - moving forward by 1 char to after tab
        element.value = before_tab + "\t" + after_tab; // add tab char
        // move cursor
        element.selectionStart = cursor_pos;
        element.selectionEnd = cursor_pos;
        update(element.value); // Update text to include indent
    }
    }

function copyelement(elem) {

    let originalElement = $(elem);
    let newelem = $("<pre id='highlighting' class='editor' aria-hidden='true'><code class='language-html' id='highlighting-content'></code></pre>");
    
    $(originalElement).parent().append(newelem);
    $(newelem).addClass('copy-textarea');
    if ($(".editor").length > 1) {
        $(".editor").not(':last').remove()
    }
    //not the same size ?? 
    let width = originalElement.outerWidth();
      let height = originalElement.outerHeight();
    $(newelem).css({
        "position" : "absolute",
        "width": width,
        "height": height
    });
    update($(elem).val());
}
function updateOnResize(elem){
    let originalElement = $(elem);
    let newelem = $("#highlighting");
    let width = originalElement.outerWidth();
      let height = originalElement.outerHeight();
    $(newelem).css({
        "position" : "absolute",
        "width": width,
        "height": height
    });
    update($(elem).val());
}
