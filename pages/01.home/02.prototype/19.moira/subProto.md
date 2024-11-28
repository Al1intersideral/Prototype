---
title: 'L’herbe se cache pour mourir • Moïra Torres'
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
        fontName: Adelphe
        fontWeight: null
        fontstyle: normal
        fontFile: Adelphe-FructidorRegular.ttf
    -
        fontName: vg5000
        fontWeight: null
        fontstyle: normal
        fontFile: VG5000-Regular_web.ttf
    -
        fontName: adelphebold
        fontWeight: null
        fontstyle: normal
        fontFile: Adelphe-FructidorBold.ttf
login: {  }
permissions:
    groups:
        Etudiant:
            create: false
            read: false
            update: false
            delete: false
never_cache_twig: true
media_order: 'Adelphe-FructidorRegular.ttf,VG5000-Regular_web.ttf,Adelphe-FructidorBold.ttf'
child_type: contribution
cssPrint: "body {\n  --paged-layout:booklet;\n}\n\n:root {\n  --base-unit-x: 0.2cm;\n  --base-unit-y: 0.2cm;\n}\n\n\n@page:first {\n  /* background-image: url(/images/bleu.png); */\n\nmargin:0;\npadding: 0;\n  @top-center {\n    /* transform: rotate(-5deg); */\n    font-size: var(--pagedjs-pagebox-width)/10;\n  }\n    @bottom-right {\n      content: '';\n    }\n}\n\n\n@page:nth(12) { \n  margin:0;\n  padding:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(2) { \n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: \"L’herbe se cache pour mourir, Moïra Torres\";\n  }\n }\n\n \n /* @page:nth(6) {\n  height: 105%;\n } */\n\n\n @page:nth(11) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n\n/* @page couverture {}\n\n@page crédit {} */\n\n/* @page: blank {\n  @top-left {\n    content: none;\n  }\n} ; */\n\n@page:left {\n  margin-right:0cm ;\n  /* font-family: 'Necto';\n  font-size: calc(var(--base-unit-x) * 3); */\n  @bottom-left {\n    content: \"L'herbe se cache pour mourir-P\"counter(page);\n    color: rgb(0, 0, 0);\n \n    font-family: 'vg5000';\n    font-size: 11pt;\n    text-transform: uppercase;\n\n    padding-bottom: 0.7cm;\n    \n  }\n  @top-left {\n    content: string(chapter);\n    color: rgb(0, 0, 0);\n\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 1cm;\n  }\n}\n\n\n\n@page:right {\n  margin-left:0cm ;\n  @bottom-right {\n    content: \"L'herbe se cache pour mourir-P\"counter(page);\n    color: rgb(0, 0, 0);\n\n    font-family: 'vg5000';\n    font-size: 11pt;\n    text-transform: uppercase;\n\n    padding-bottom: 0.7cm;\n  \n  }\n  @top-right {\n    content: string(chapter);\n    color: rgb(0, 0, 0);\n    \n    /* transform: rotate(-5deg); */\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 1cm;\n    padding-left: 1cm;\n  }\n}\n\nbody {\n  font-family: 'adelphebold';\n  /* font-size: calc(var(--base-unit-y) * 3); */\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n  font-feature-settings: \"onum\";\n\n}\n\n\n.couleur-1er {\n  color: rgb(0, 0, 0);\n \n  font-size: 17pt;\n  line-height: 22.7pt;\n\n  hyphenate-limit-chars: 8 4 4;\n\n  letter-spacing: -0.02em;\npadding-left: 1cm;\n  padding-top: 0.2cm;\n  z-index: 0;\n}\n\n.couleur-1ere {\n  color: rgb(0, 0, 0);\n \n  font-size: 17pt;\n  line-height: 22.7pt;\n\n  hyphens: auto;\n  hyphenate-limit-chars: 8 3 4;\n\n  letter-spacing: -0.01em;\npadding-left: 1cm;\n  padding-top: 0.2cm;\n  z-index: 0;\n}\n\n\n.couleur-1 {\n  color: rgb(0, 0, 0);\n \n  font-size: 17pt;\n  line-height: 22.7pt;\n\n  hyphenate-limit-chars: 8 5 4;\n\n  letter-spacing: -0.00em;\npadding-left: 1cm;\n  padding-top: 0.2cm;\n  z-index: 0;\n}\n.couleur-11 {\n  color: rgb(0, 0, 0);\n \n  font-size: 17pt;\n  line-height: 22.7pt;\n\n  hyphenate-limit-chars: 8 5 4;\n  \n\n  padding-top: 0.2cm;\npadding-left: 1cm;\nposition: absolute;\n  z-index: 0;\n}\n\n.couleur-10 {\n  color: rgb(0, 0, 0);\n \n  font-size: 17pt;\n  line-height: 22.7pt;\n\n  hyphenate-limit-chars: 8 4 4;\n\n  /* letter-spacing: -0.03em; */\n\n  padding-top: 11cm;\npadding-left: 1cm;\n  z-index: 0;\n}\n\n\n.couleur-2 {\n  color: rgb(255, 0, 0);\n}\n\n\n.couleur-3 {\n  color: rgb(200, 110, 30);\n}\n\n.red {\n  visibility: hidden;\n}\n\n\n.black {\n  font-family:'vg5000' ;\n  font-size: 11pt;\n  color: rgb(0, 0, 0);\n  visibility: visible;\n  page-break-before: always;\n  top:1.4cm;\n  margin-left: 2cm;\n}\n\n#note,\n#chapter {\n  display: none;\n}\n\n.break-after {\n  page-break-after: always;\n}\n\n.break-before {\n  page-break-before: always;\n}\n\n\n.fin {\n  margin-left: 1cm;\n  margin-right: 1cm;\n  margin-top: 800px;\n}\n\n.left {\n  float: left;\n  margin-bottom: 10px;\n}\n\nh1 {\n  margin-left: 1cm;\n  margin-right: 2cm;\n  margin-top: 10cm;\n\n  text-align: center;\n\n  columns: 5;\n  column-gap: 1cm;\n\n  color: rgb(255, 0, 0);\n\n  font-family: 'adelphe';\n  font-size:30pt;\n  line-height: 30pt;\n  transform: scale(1.1, 1);\n\n  string-set: chapter content(text);\n  position: relative;\n  word-break: break-all;\n}\n\n.titre {\n  text-align: center;\n}\n\nh2 {\n  color: white;\n  position: absolute;\n  visibility: hidden;\n  string-set: chapter content(text);\n}\n\nh3 {\n  padding-top: 10px;\n  margin-left: 50px;\n  margin-right: 50px;\n  font-family: 'adelphe';\n  font-size: 38pt;\n  top: 1cm;\n  margin-bottom: 1cm;\n  /* text-align: center; */\n  border: 1px solid #000000;\n  border-radius: 10px;\n  position: relative;\n  word-break: break-all;\n  string-set: note content(text);\n}\n\nh4 {\n  font-family: 'adelphe';\n  font-size: calc(var(--base-unit-x) * 3);\n  page-break-before: always;\n}\n\n\n.container {\n  height: 300px;\n  position: relative;\n  width: 300px;\n}\n\n.intro {\n  margin-top: 50px;\n  margin-left: 1cm;\n  margin-right: 1cm;\n  /* column-count: 2; */\n}\n\n.cover{\nwidth:100%;\nheight:100%;\n}"
---

