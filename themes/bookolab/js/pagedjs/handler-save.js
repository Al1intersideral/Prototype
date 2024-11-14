// javascript for the print view
////******************
//************PAGED JS
//********************
let contenusArticlesEn = [];
let u = -1;
var tempheight = 0;
var lh = 3.730625;

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

			let chapters = content.querySelectorAll(".chapter");
			chapters.forEach(function(chapter){
				let imgs = chapter.querySelectorAll('img');
				imgs.forEach((img) => {
					let spancolo = document.createElement("span");
					spancolo.innerText='';
					spancolo.className='coloration-image';
					let descri = img.alt;
					let description = document.createElement("p");
					description.innerText=descri;
					description.className='legende-img';
					img.after(spancolo);
					img.after(description);
					let slug = $(chapter).attr("class").split(" ")[1].split("contrib-")[1];
					let url = window.location.href;
					let name = img.src;
					img.removeAttribute("height");
					img.src=url+'/'+slug+'/'+name;
				});
			});


			createToc({
			        content: content,
			        tocElement: "#my-toc-content",
			        titleElements: [".titre-en"],
			});

	  }

	  afterParsed(parsed) {
			// let images = parsed.querySelectorAll("img");
			// let chapters = parsed.querySelectorAll(".chapter");
			// //add caption ??
			// chapters.forEach(function(chapter){
			// 		let slug = $(chapter).attr("class").split(" ")[1].split("contrib-")[1];
			// 		let images = $(chapter).find("img");
			//
			// 		for (var i = images.length - 1; i >= 0; i--) {
			// 			let image = images[i];
			// 			let url = window.location.href;
			// 			let name = $(image).attr("src");
			// 			$(image).attr("src",url+'/'+slug+'/'+name);
			// 		}
			// 	});

			let contribElements = parsed.querySelectorAll('.contrib-en');
			contribElements.forEach(element => {
				contenusArticlesEn.push(element.innerHTML);
				element.parentNode.removeChild(element);
			});

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

		afterPageLayout(pageElement, page, breakToken){
			console.log(pages);
			// On duplique les div fr à la même taille en les décalants
			let containerfr = pageElement.querySelectorAll(".contrib-fr");
			
			containerfr.forEach(function(containerfr){
				if (containerfr.querySelector('.contrib-fr-start')) {
					u++;
					tempheight = 0;
				}

				let encontainer = containerfr.cloneNode(true);
				encontainer.style.marginLeft = "50%";
				encontainer.style.position = "absolute";
				encontainer.style.overflow = "hidden";
				encontainer.style.height = containerfr.offsetHeight+"px";
				encontainer.innerHTML = contenusArticlesEn[u];
				encontainer.style.top = containerfr.offsetTop+"px";
				encontainer.classList.remove('contrib-fr');
				encontainer.classList.remove('column-left');
				encontainer.classList.add('column-right');
    			encontainer.classList.add('contrib-en-new');
				containerfr.parentNode.appendChild(encontainer);

				var wrapper = encontainer.querySelector(".en-wrapper");
				wrapper.style.marginTop = "-"+tempheight+"px";

				tempheight = tempheight + containerfr.offsetHeight;

				// var test = parseInt((containerfr.offsetHeight)/lh);

				// tempheight = tempheight + (test * lh);
			});

			
		};

		afterRendered(pages){
			// let containerennew = pages.querySelectorAll(".contrib-en-new");
			// containerennew.forEach(function(containerennew){
			// 	console.log(containerennew);
			// });
			// pages.forEach(function(lespages){
			// 	var lescontrib = lespages.element.querySelectorAll(".contrib-en-new");
			// 	lescontrib.forEach(function(contrib){
			// 		while (contrib.scrollHeight  contrib.clientHeight) {
			// 			// Enlever le dernier caractère du innerHTML
			// 			contrib.innerHTML = contrib.innerHTML.slice(0, -1);
			// 		}
			// 	});
			// });
		}

}

Paged.registerHandlers(Handler);
