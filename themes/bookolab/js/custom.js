document.addEventListener('DOMContentLoaded', function () {
    let articleLinks = document.querySelectorAll("a");
    let index = 4;
    let top = 10;
    let left = 0;
    let firstClic = 0;
    const mediaQuery = window.matchMedia('(min-width: 1200px)');

    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        if (document.getElementById(elmnt.id + "header")) {
            // Si un header est présent, on déplace depuis le header :
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // Sinon, on déplace depuis le parent de l'élément :
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // Position initiale de la souris
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // Appeler une fonction à chaque déplacement de la souris
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // Calculer la nouvelle position du curseur
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            parentElmnt = elmnt.parentNode;
            // Mettre à jour la position de l'élément parent
            parentElmnt.style.top = (parentElmnt.offsetTop - pos2) + "px";
            parentElmnt.style.left = (parentElmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // Arrêter le déplacement quand le bouton de la souris est relâché
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }



    articleLinks.forEach(article => {
        article.addEventListener('click', function (e) {
            index++;
            if(mediaQuery.matches){
            if (top > 33) {
                top = 10;
            }
            else {
                top++;
            }
            if (left > 30) {
                left = 0;
            }
            else {
                left++;
            }}

            e.preventDefault();  // Empêche la redirection par défaut du lien

            let childrenData = article.dataset.children;
            let childrenClass = article.className;
            let imagePoster = this.querySelector('img');
            let userName = this.id;
            imagePoster = imagePoster.src;

            // Générer dynamiquement la div preview avec les enfants
            let previewContent = '<div class="articleHeader"><span class="articleTitre">';
            previewContent += userName;
            previewContent += '</span>';
            previewContent += '<span class="closeMenu">X</span></div>';
            previewContent += '<div class="article">'
            previewContent += '<img class="imageTitre" src="'
            previewContent += imagePoster;
            previewContent += '">';
            previewContent += '<div class="articleContent ';
            previewContent += childrenClass;
            previewContent += '">'
            previewContent += childrenData;  // Insertion directe du contenu HTML brut
            previewContent += '</div>';
            previewContent += '</div>';

            var div = document.createElement('div');
            div.classList.add('articlePreview');
            div.style.zIndex = index;
            div.style.top = top + "%";
            div.style.left = left + "%";
            div.innerHTML = previewContent;  // Assignation correcte

            // Insérer la div dans le DOM
            document.body.insertAdjacentElement('afterbegin', div);

            // Sélectionner et attacher l'événement de fermeture après l'insertion
            let closeButton = div.querySelector(".closeMenu");
            closeButton.addEventListener('click', function () {
                div.remove();
            });

            let elmnt = document.querySelector('.articleHeader');

            elmnt.addEventListener('mouseover', function () {
                dragElement(elmnt);
            });
            elmnt.parentNode.addEventListener('click', function () {
                index++;
                this.style.zIndex = index;
            });

        });
    });


    let aboutButton = document.querySelector('.about');
    let about = document.querySelector('.articleAboutTitre');
    let mid = about.parentNode;
    let invis = mid.parentNode;
    about.addEventListener('mouseover', function () {
        dragElement(about);
    });

    aboutButton.addEventListener('click', function () {
        invis.classList.remove('invisible');
        aboutButton.classList.add('invisible');
        if(mediaQuery.matches){
        invis.style.top = "25%";
        invis.style.left = "25%";
        }
        invis.style.zIndex = "100";
        index++;
    })



    about.addEventListener('click', function () {
        index++;
        this.style.zIndex = index;
        if (firstClic == 0) {
            if(mediaQuery.matches){
                invis.style.top = "25%";
                invis.style.left = "25%";
                }
            firstClic++;
        }

    });
    let closed = mid.querySelector('.closeMenu');
    closed.addEventListener('click', function () {
        invis.classList.add('invisible');
        aboutButton.classList.remove('invisible');
    });

    let protoHead = document.querySelector('.siteTag');
    protoHead.addEventListener('click', function () {
        let allContent = document.querySelectorAll('.articlePreview');
        console.log(allContent)
        allContent.forEach(element => {
            element.remove();
        });
    });


});
