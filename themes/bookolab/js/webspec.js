// javascript for the web view

$(document).ready(function(){
	if (location.hostname == "localhost" && location.hostname == "127.0.0.1"){
		//Image url clean up
		let chapters = $(".chapter");
		//add caption ??
		chapters.each(function(){	
			let chapter = this;	
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

	//note de bas de page
 	$("a:empty").each(function(){

	    //ref anchor ! ajout contrib specific ? 
	    //not sure it will work all the time
		if($(this).closest('.chapter').attr("class") != undefined ){
			let slug = $(this).closest('.chapter').attr("class").split(" ")[1].split("contrib-")[1];

			let v = $(this).attr("id");
			$(this).html(v.replace("ref","")); // to delete 
			$(this).attr("href", "#"+slug+"-"+v.replace("ref",""));
			$(this).addClass("ref-superscript");
		}

	});


	
	
	
});

// function getPageHTML() {
// 	return "<html>" + $("html").html() + "</html>";
// }
  