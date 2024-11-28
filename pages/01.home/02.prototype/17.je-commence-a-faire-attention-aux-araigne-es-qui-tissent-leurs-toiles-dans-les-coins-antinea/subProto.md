---
title: 'Je commence à faire attention aux araigné·es qui tissent leurs toiles dans les coins • Antinéa'
bookWidth: '210'
bookHeight: '297'
rightMarginTop: '20'
rightMarginRight: '20'
rightMarginBottom: '20'
rightMarginLeft: '20'
archived: true
raga: true
hyphen: false
hyphenLang: false
cropcross:
    crop: ''
    cross: ''
bleed: '0'
fontsList:
    -
        fontName: adelphe
        fontWeight: null
        fontstyle: italic
        fontFile: Adelphe-FructidorItalic.ttf
    -
        fontName: vg5000
        fontWeight: null
        fontstyle: normal
        fontFile: VG5000-Regular_web.ttf
login: {  }
permissions:
    groups:
        Etudiant:
            create: false
            read: false
            update: false
            delete: false
never_cache_twig: true
cssPrint: ":root {\n  --base-unit-x: 0.2cm;\n  --base-unit-y: 0.2cm;\n}\n\n  /* All your print styles go here */\n  \n\n\n@page:first {\n  /* background-image: url(/images/bleu.png); */\n\nmargin:0;\npadding: 0;\n  @top-center {\n    /* transform: rotate(-5deg); */\n    font-size: var(--pagedjs-pagebox-width)/10;\n  }\n    @bottom-right {\n      content: '';\n    }\n}\n\n\n@page:nth(12) { \n  margin:0;\n  padding:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(2) { \n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: \"Je commence à faire attention aux araigné·es qui tissent leurs toiles dans les coins, Antinéa\";\n  }\n }\n\n @page:nth(11) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n\n/* @page couverture {}\n\n@page crédit {} */\n\n/* @page: blank {\n  @top-left {\n    content: none;\n  }\n} ; */\n\n@page:left {\n  margin-left:0cm ;\n  margin-right:0cm ;\n  /* font-family: 'Necto';\n  font-size: calc(var(--base-unit-x) * 3); */\n  @bottom-left {\n    content: \"JE COMMENCE À FAIRE ATTENTION AUX ARAIGNÉ·ES QUI TISSENT LEURS TOILES DANS LES COINS-P\"counter(page);\n    z-index: 10;\n    font-family: 'vg5000';\n    font-size: 11pt;\n\n    color: rgb(0, 0, 255);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n\n    \n  }\n  @top-left {\n    content: string(chapter);\n    /* transform: rotate(-5deg); */\n    font-family: 'vg5000';\n    font-size: 11pt;\n\n    color: rgb(0, 0, 255);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n\n\n  }\n}\n\n\n@page:right {\n  margin-left:0cm ;\n  margin-right:0cm ;\n  @bottom-right {\n    content: \"JE COMMENCE À FAIRE ATTENTION AUX ARAIGNÉ·ES QUI TISSENT LEURS TOILES DANS LES COINS-P\"counter(page);\n    z-index: 10;\n    font-family: 'vg5000';\n    font-size: 11pt;\n\n    color: rgb(0, 0, 255);\n    /* color: rgb(200, 110, 30);\n    color: rgb(190, 200, 140); */\n\n  }\n  @top-right {\n    content: string(chapter);\n    /* transform: rotate(-5deg); */\n    font-family: 'vg5000';\n    font-size: 11pt;\n\n    color: rgb(0, 0, 255);\n    /* color: rgb(200, 110, 30);\n    color: rgb(190, 200, 140); */\n\n  }\n}\n\n\nbody {\n  font-family: 'adelphe';\n  /* font-size: calc(var(--base-unit-y) * 3); */\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n\n  font-feature-settings: \"onum\";\n\n  z-index: 10;\n}\n\n.red {\n  visibility: hidden;\n}\n\n\n\n\n#note,\n#chapter {\n  display: none;\n}\n\n.break-after {\n  page-break-after: always;\n}\n\n.break-before {\n  page-break-before: always;\n}\n\n.bete {\n  margin-top: 60px;\n  margin-bottom: 10px;\n\n}\n\n.black {\n  page-break-before: always;\n}\n\n\n.image1 {\n  position: absolute;\n  width: 80%;\n  left:2cm;\n\n  z-index: 1;\n}\n\n.image2 {\n  top:1cm;\n  right:3cm;\n  position: absolute;\n  width: 80%;\n\n  z-index: 1;\n}\n\n.img1{\n  top: 0.5cm;\n  left: 10cm;\nposition: absolute;\nz-index: 1;\nwidth: 100%;\n\n}\n\n\n.left {\n  float: left;\n  margin-bottom: 10px;\n}\n\nh1 {\n  left:2cm;\n  top: 1cm;\n \n  font-family: 'adelphe';\n  font-size: 110pt;\n  line-height: calc(var(--base-unit-y) * 15);\n  string-set: chapter content(text);\n  position: relative;\n  word-break: break-all;\n}\n\n\nh2 {\n  font-size: 80pt;\n  line-height: 70pt;\n  text-align: center;\n\n  padding-top: 12cm;\n\n  visibility: hidden;\n  \n  position: absolute;\n  z-index: 10;\n\n  string-set: chapter content(text);\n}\n\nh3 {\n  font-size: 20pt;\n  line-height: 28pt;\n  text-align: center;\n\n  /* columns: 2;\n  column-gap: 2cm; */\n\n  padding-top: 15.5cm;\n  padding-left: 3.5cm;\n  padding-right: 3.5cm;\n\n  color: rgb(0, 0, 255);\n  \n  position: absolute;\n  z-index: 10;\n}\n\n\n\nh4 {\n  font-family: 'adelphe';\n  font-size: calc(var(--base-unit-x) * 3);\n  page-break-before: always;\n}\n\n\n.container {\n  height: 300px;\n  position: relative;\n  width: 300px;\n}\n\n.intro {\n  margin-top: 50px;\n  margin-left: 1cm;\n  margin-right: 1cm;\n  /* column-count: 2; */\n}\n\n\n\n\n.text p {\n  font-size: 14.5pt;\n  line-height: 17pt;\n  height: 100%;\n\n  text-align: justify;\n\n  padding: 0;\n  text-align: left;\n}\n\n.text {\n  height: 100%;\n  padding: 0;\n  \n  color: rgb(0, 0, 255);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  position: absolute;\n  z-index: 2;\n  margin: 0;\n  background: radial-gradient(\n    ellipse at center,\n    rgb(255, 255, 255) 0%,\n    rgb(255, 255, 255) 70%,\n    /* rgb(0, 0, 0) 70.3% */\n  );\n  height: 46%;\n  width: 100%;\n}\n\n\n.text p::before {\n  content: \"\";\n  float: left;\n  height: 100%;\n  width: 50%;\n  shape-outside: polygon(0px -72px, 100.01% -75px, 45.28% -2.96%, 9.6% 3.14%, 44.09% 24.96%, 17px 48.85%, 7.43% 64.57%, 24.47% 71.34%, 51.69% 73.95%, 101.2% 78.47%, -0.5% 78.07%);\n  shape-margin: 7%;\n}\n\n.text::before {\n  content: \"\";\n  float: right;\n  height: 100%;\n  width: 50%;\n  shape-outside: polygon(25.45% -0.22%, 100% 0%, 98.74% 77.1%, 4.03% 76.72%, 40.93% 68.49%, 86.63% 56.99%, 87.95% 44.41%, 30.89% 36.62%, 66.78% 29.09%, 76.08% 19.39%, 76.2% 3.91%);\n  shape-margin: 7%;\n}\n\n\nbackground: radial-gradient(\n  ellipse at center,\n  rgba(210, 20, 20, 1) 0%,\n  rgba(210, 20, 20, 1) 70%,\n  rgba(210, 20, 20, 0) 70.3%\n);\n\n.quote-wrapper blockquote footer {\n  bottom: 25px;\n  font-size: 17px;\n  font-style: italic;\n  position: absolute;\n  text-align: center;\n  /* text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3); */\n  width: 100%;\n}\n\n.quote-wrapper::before {\n  content: \"\\201C\";\n  color: #ccc;\n  font-family: sans-serif, serif;\n  font-size: 270px;\n  height: 82px;\n  line-height: 1;\n  opacity: .9;\n  position: absolute;\n  top: -48px;\n  left: 0;\n  z-index: 1;\n}\n\n@media (min-width: 850px) {\n  .quote-wrapper {\n    height: 370px;\n    width: 370px;\n  }\n  .quote-wrapper::before {\n    font-size: 300px;\n  }\n  .text p {\n    font-size: 26px;\n  }\n  .quote-wrapper blockquote footer {\n    bottom: 32px;\n  }\n}\n\n.imgbleu {\n  height:calc(var(--base-unit-y) * 50);\n  display: block;\n  border-radius: 0%;\n\n}\n\n.doublepage {\n                page-break-before: left;\n                page: doublepage;\n            }\n\n            .doublepage img {\n                page-break-after: page;\n                position: absolute;\n                z-index: -1;\n                object-fit: cover;\n                top: 2cm;\n                left: 10cm;\n                height:5cm;\n                width: 12cm;\n                object-position: var(--object-position) 50% ;\n            }\n\n            @page doublepage:left {\n                --object-position: 0;\n                --sidebleed: var(--pagedjs-bleed-left);\n                --left-offset: var(--pagedjs-bleed-left);\n            }\n\n            @page doublepage:right {\n                --object-position: calc(-1 * var(--pagedjs-pagebox-width));\n                --sidebleed: calc(var(--pagedjs-bleed-right) + var(--pagedjs-bleed-left));\n                --left-offset: var(--pagedjs-bleed-right);\n            }\n"
media_order: 'Adelphe-FructidorRegular.ttf,VG5000-Regular_web.ttf,Adelphe-FructidorItalic.ttf'
child_type: contribution
---

