// javascript for the print view
////******************
//************PAGED JS
//********************

class Handler extends Paged.Handler {
	  constructor(chunker, polisher, caller) {

	    super(chunker, polisher, caller);

	  }
	  beforeParsed(content) {

    	// Adjusts the headers by adding a non-breaking space after
    	// all the prepositions listed, and without any whitelisted
		// word.
		if( window.hyphenate ){
			$('p, a, h1, h2, h3, h4, h5, h6, em, i, b, span').hyphenate('fr');
		}
		
		if( window.ragadjust ){
			
			let meta = document.getElementsByTagName("meta");
			let elem = meta["raga_elements"].content === "" ? 'p,h1,h2,h3,h4,h5,h6' : meta["raga_elements"].content ;
			let method = meta["raga_methods"].content === "" ? ['all'] : meta["raga_methods"].content.split(",");
			if(meta["raga_exceptions"]){
				console.log("fr");
				let exception = meta["raga_exceptions"].content === "" ? [] : meta["raga_exceptions"].content.split(",") ; 
				ragadjust(elem, method, exception, content);
			}else{
				console.log("en");
				ragadjust(elem, method);
			}
			
		}
	  }
	  
	  afterParsed(parsed) {
		if (location.hostname == "localhost" && location.hostname == "127.0.0.1"){
			let images = parsed.querySelectorAll("img");
			let chapters = parsed.querySelectorAll(".chapter");
			//add caption ??
			chapters.forEach(function(chapter){	  	 	
					let slug = $(chapter).attr("class").split(" ")[1].split("contrib-")[1];
					let images = $(chapter).find("img");

					for (var i = images.length - 1; i >= 0; i--) {
						let image = images[i];
						let base = image.baseURI.split("#")[0];
						let url = "";
						if (chapters.length > 1) {
							url = base + "/" + slug;
						}else{
							url = base;
						}

						let name = $(image).attr("src");				
						$(image).attr("src",url+'/'+name);
					}
				});
		}
	  	 	
	  }

	  //note de bas de page
	  afterRendered(page) {	    
	    $("a[data-id]").each(function(){

	    	let slug = $(this.offsetParent).find(".chapter").attr("class").split(" ")[1].split("contrib-")[1];

	    	let v = $(this).data("id");
	    	$(this).attr("href", "#"+slug+"-"+v);
	    	$(this).addClass("ref-superscript")
	    });

	     
	  }
}

Paged.registerHandlers(Handler);