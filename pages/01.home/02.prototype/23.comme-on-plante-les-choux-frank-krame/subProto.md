---
title: 'COMME ON PLANTE LES CHOUX • Frank Krame'
bookWidth: '210'
bookHeight: '297'
rightMarginTop: '20'
rightMarginRight: '0'
rightMarginBottom: '20'
rightMarginLeft: '0'
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
    -
        fontName: mono
        fontWeight: null
        fontstyle: normal
        fontFile: DejaVuSansMono-Bold.ttf
login: {  }
permissions:
    groups:
        Etudiant:
            create: false
            read: false
            update: false
            delete: false
never_cache_twig: true
media_order: 'Adelphe-FructidorRegular.ttf,VG5000-Regular_web.ttf,Adelphe-FructidorBold.ttf,DejaVuSansMono-Bold.ttf'
child_type: contribution
cssPrint: "body {\n  --paged-layout:booklet;\n}\n\n:root {\n  --base-unit-x: 0.2cm;\n  --base-unit-y: 0.2cm;\n}\n\n\n@page:first {\n  /* background-image: url(/images/bleu.png); */\n\nmargin:0;\npadding: 0;\n  @top-center {\n    /* transform: rotate(-5deg); */\n    font-size: var(--pagedjs-pagebox-width)/10;\n  }\n    @bottom-right {\n      content: '';\n    }\n}\n\n\n@page:nth(12) { \n  margin:0;\n  padding:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(2) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n\n /* @page:nth(3) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-right {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n } */\n\n @page:nth(11) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n\n/* @page couverture {}\n\n@page crédit {} */\n\n/* @page: blank {\n  @top-left {\n    content: none;\n  }\n} ; */\n\n@page:left {\n  margin-left:0cm ;\n  margin-right:0cm ;\n  /* font-family: 'Necto';\n  font-size: calc(var(--base-unit-x) * 3); */\n  @bottom-left {\n    content: \"COMME ON PLANTE LES CHOUX-P\"counter(page);\n   color: rgb(0, 0, 0);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-left: 2cm;\n    padding-bottom: 0.7cm;\n    \n  }\n  @top-left {\n    content: string(chapter);\n    color:  rgb(0, 0, 0);\n    /* transform: rotate(-5deg); */\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 1cm;\n    padding-left: 2cm;\n  }\n}\n\n\n@page:right {\n  margin-left:0cm ;\n  margin-right:0cm ;\n  @bottom-right {\n    content: \"COMME ON PLANTE LES CHOUX-P\"counter(page);\n    color: rgb(0, 0, 0);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-bottom: 0.7cm;\n    padding-right: 2cm;\n  }\n  @top-right {\n    content: string(chapter);\n    color:  rgb(0, 0, 0);\n    /* transform: rotate(-5deg); */\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 1cm;\n    padding-right: 2cm;\n  }\n}\n\n\n@font-face {\n  font-family: 'adelphe';\n  src:  url(fonts/Adelphe-FructidorBold.woff2);\n}\n\n@font-face {\n  font-family: 'mono';\n  src:  url(fonts/DejaVuSansMono-Bold.woff);\n}\n\n@font-face {\n  font-family: 'vg5000';\n  src:  url(fonts/VG5000-Regular_web.woff2);\n}\n\n@font-face {\n  font-family: 'mani';\n  src:  url(fonts/ManifontGroteskBold.woff);\n}\n\n@font-face {\n  font-family: 'manibook';\n  src:  url(fonts/ManifontGroteskBook.woff);\n}\n\n\n\nbody {\n  font-family: 'adelphebold';\n  /* font-size: calc(var(--base-unit-y) * 3); */\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n\n  font-feature-settings: \"onum\";\n}\n\n.warning{\n/* position: absolute; */\nz-index: 100;\n}\n\n\n.couleur-1 {\n  color: rgb(0, 0, 0);\n\n  hyphens: none;\n\n  font-family: 'mono';\n\n  font-size: 9pt;\n  line-height: 11.35pt;\n\n  padding-right: 8cm;\n  padding-left: 2cm;\n\n  z-index: 100;\n}\n.couleur-1b {\n  color: rgb(0, 0, 0);\n\n  hyphens: none;\n  hyphenate-limit-chars: ;\n\n  font-family: 'mono';\n\n  font-size: 9pt;\n  line-height: 11.35pt;\n\n  word-spacing: -0.05cm;\n  padding-right: 8cm;\n  padding-left: 2cm;\n\n  z-index: 100;\n}\n\n\n.couleur-2 {\n  color: rgb(255, 255, 0);\n\n  hyphens: none;\n  hyphenate-limit-chars: 5 2 3;\n  \n  font-size: 9pt;\n  line-height: 11.38pt;\n  font-weight: normal;\n\n  padding-right: 2cm;\n  padding-left: 8cm;\n  \n  z-index: 10;\n}\n\n\n.couleur-3 {\n  color: rgb(255, 255, 0);\n}\n\n.red {\n  visibility: hidden;\n}\n\n\n.black {\n  font-family:'vg5000' ;\n  font-size: 11pt;\n  color: rgb(0, 0, 0);\n  visibility: visible;\n  page-break-before: always;\n  page-break-after: always;\n  margin-top: 1.3cm;\n  margin-left: 2cm;\n}\n\n#note,\n#chapter {\n  display: none;\n}\n\n.break-after {\n  page-break-after: always;\n}\n\n.break-before {\n  page-break-before: always;\n}\n\n\n.fin {\n  margin-left: 1cm;\n  margin-right: 1cm;\n  margin-top: 800px;\n}\n\n.left {\n  float: left;\n  margin-bottom: 10px;\n}\n\nh1 {\n  margin-left: 1cm;\n  margin-right: 1cm;\n\n  padding-top:1cm;\n\n  color: rgb(255, 255, 0);\n\n  text-align: center;\n\n  font-size: 30pt;\n  line-height: 40pt;\n\n  font-family: 'mono';\n  transform: scale(1, 7.3);\n\n  string-set: chapter content(text);/\n}\n\nh2{\n  color: rgb(255, 255, 0);\n\n\n  text-align: center;\n  position: relative;\n  word-break: break-all;\n  font-family: 'adelphebold';\n\n  margin-left: 1cm;\n  margin-right: 1cm;\n  margin-top: 19cm;\n\n\n  font-size: 30pt;\n  line-height: 20pt;\n\n  font-family: 'mono';\n  transform: scale(1, 7.3);\n}\n\n.courant{\n  visibility: hidden;\n  position: absolute;\n\n}\n\n.fond1{\n  position: absolute;\n  color: rgb(0, 0, 0);\n  opacity: 100%;\n\n  font-size: 30pt;\n  line-height: 40pt;\n\n  font-family: 'mono';\n  transform: scale(1, 7.3);\n\n  left:2cm;\n  top:17cm;\n  z-index: 1;\n}\n\n.fond2{\n  position: absolute;\n  color: rgb(255, 255, 0);\n  opacity: 100%;\n\n  font-size: 30pt;\n  line-height: 40pt;\n\n  font-family: 'mono';\n  transform: scale(1, 7.3);\n\n  left:2cm;\n  top:20cm;\n  z-index: 1;\n}\n\n\n.carte {\n  top:5.5cm;\n  /* right:0.5cm;\n  left:1cm; */\n  width: 100%;\n\n  z-index: 10;\n  position: absolute;\n}\n\n\n.container {\n  height: 300px;\n  position: relative;\n  width: 300px;\n}\n\n.intro {\n  margin-top: 50px;\n  margin-left: 1cm;\n  margin-right: 1cm;\n  /* column-count: 2; */\n}\n\n\n\np {\n  font-size: 10pt;\n  line-height: 13.5pt;\n  font-weight: normal;\n  /* top: -90px; */\n \n  /* text-align: justify; */\n  hyphens: auto;\n  hyphenate-limit-chars: 6 2 3;\n\n  letter-spacing: -0.01em;\n  word-spacing: -0.01em;\n\n  \n  margin-right: 1cm;\n  margin-left: 1cm;\n}\n\n/* .text {\n  font-size: 11pt;\n\n  font-family: 'mono';\n\n  height: 100%;\n  padding: 0;\n  \n  color: rgb(0, 0, 255);\n\n  background: radial-gradient(\n    ellipse at center,\n    rgb(255, 255, 255) 0%,\n    rgb(255, 255, 255) 70%,\n  );\n \n}\n\n.text p::before {\n  content: \"\";\n  float: left;\n  height: 300%;\n  width: 50%;\n  shape-outside: polygon(0px 0px, 39.61% -7px, 12.64% 13.44%, 43.31% 23.28%, 44.26% 64.06%, 43px 63.89%, 12.24% 72.77%, 28.64% 72.95%, 45.21% 83.13%, 44.14% 98.95%, -0.31% 99.18%)\n}\n\n.text::before {\n  content: \"\";\n  float: right;\n  height: 300%;\n  width: 50%;\n  shape-outside: polygon(111.51% -0.66%, 118.37% -0.27%, 116.5% 99.72%, 13.56% 92.45%, 12.92% 51.32%, 113.54% 50.66%, 113.76% 23.95%, 112.5% 14.27%, 111.89% 8.07%, 112.76% 4.73%)\n} */\n\n\n@media (min-width: 850px) {\n  .quote-wrapper {\n    height: 370px;\n    width: 370px;\n  }\n  .quote-wrapper::before {\n    font-size: 300px;\n  }\n  .text p {\n    font-size: 26px;\n  }\n  .quote-wrapper blockquote footer {\n    bottom: 32px;\n  }\n}\n\n.imgbleu {\n  height:calc(var(--base-unit-y) * 50);\n  display: block;\n  border-radius: 0%;\n\n}\n\n.doublepage {\n                page-break-before: left;\n                page: doublepage;\n            }\n\n            .doublepage img {\n                page-break-after: page;\n                position: absolute;\n                z-index: -1;\n                object-fit: cover;\n                top: 2cm;\n                left: 10cm;\n                height:5cm;\n                width: 12cm;\n                object-position: var(--object-position) 50% ;\n            }\n\n            @page doublepage:left {\n                --object-position: 0;\n                --sidebleed: var(--pagedjs-bleed-left);\n                --left-offset: var(--pagedjs-bleed-left);\n            }\n\n            @page doublepage:right {\n                --object-position: calc(-1 * var(--pagedjs-pagebox-width));\n                --sidebleed: calc(var(--pagedjs-bleed-right) + var(--pagedjs-bleed-left));\n                --left-offset: var(--pagedjs-bleed-right);\n            }\n\n.pimgcouv {\n  width: calc(var(--base-unit-x)*150);\n  height:calc(var(--base-unit-y) * 150);\n  top: 0cm;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n.qimgcouv {\n  width: 100%;\n  height:100%;\n  top: 0cm;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n\n@media screen\n {\n  body {\n      background-color: var(--color-background);\n  }\n  .pagedjs_pages {\n      display: flex;\n      width: calc(var(--pagedjs-width) * 2);\n      flex: 0;\n      flex-wrap: wrap;\n      margin: 0 auto;\n  }\n  .pagedjs_page{\n        --pagedjs-baseline: 10mm;\n        --pagedjs-baseline-position: 9mm;\n        --pagedjs-baseline-color: cyan;\n        background: linear-gradient( var(--color-paper) 0%, var(--color-paper) calc(var(--pagedjs-baseline) - 1px), var(--pagedjs-baseline-color) calc(var(--pagedjs-baseline) - 1px),  var(--pagedjs-baseline-color) var(--pagedjs-baseline)), transparent;\n        background-size: 100% var(--pagedjs-baseline);\n        background-repeat: repeat-y;\n        background-position-y: var(--pagedjs-baseline-position);\n    }\n  }\n"
---

