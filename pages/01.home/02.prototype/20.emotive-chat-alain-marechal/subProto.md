---
title: 'Emotive Chat • Alain Maréchal'
bookWidth: '210'
bookHeight: '297'
rightMarginTop: '0'
rightMarginRight: '0'
rightMarginBottom: '0'
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
cssPrint: "body {\n  --paged-layout:booklet;\n}\n\n:root {\n  --base-unit-x: 0.2cm;\n  --base-unit-y: 0.2cm;\n}\n\n@page:first {\n  /* background-image: url(/images/bleu.png); */\n\nmargin:0;\npadding: 0;\n  @top-center {\n    /* transform: rotate(-5deg); */\n    font-size: var(--pagedjs-pagebox-width)/10;\n  }\n    @bottom-right {\n      content: '';\n    }\n}\n\n\n@page:nth(12) { \n  margin:0;\n  padding:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(2) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(11) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n\n\n/* @page:left {\n  margin-left:0cm ;\n  margin-right:0cm ;\n  @bottom-left {\n    content: \"HABITÈLE-P\"counter(page);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 0.1cm;\n    padding-left: 1cm;\n    \n  }\n  @top-left {\n    content: string(chapter);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 0.5cm;\n    padding-left: 1cm;\n  }\n} */\n\n\n@page:right {\n  margin-left:0cm ;\n  margin-right:0cm ;\n  @bottom-right {\n    font-family: 'vg5000';\n    font-size: 11pt;\n        padding-right: 1cm;\n        \n  }\n  @top-right {\n    content: string(chapter);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 0.5cm;\n    padding-right: 1cm;\n  }\n} \nbody {\n  font-family: 'adelphe';\n  /* font-size: calc(var(--base-unit-y) * 3); */\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n  font-weight: normal;\n}\n\n.red {\n  visibility: hidden;\n}\n\n\n.black {\n  font-family:'vg5000' ;\n  font-size: 11pt;\n  color: rgb(0, 0, 0);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  visibility: visible;\n  page-break-before: always;\n  top:1.3cm;\n  margin-left: 2cm;\n}\n\n#note,\n#chapter {\n  display: none;\n}\n\n.break-after {\n  page-break-after: always;\n}\n\n.break-before {\n  page-break-before: always;\n}\n\n.img1{\n  position: absolute;\n  top:1.7cm;\n  right:15%;\n  width: 85%;\n}\n\n.img2{\n  position: absolute;\n  top:1.7cm;\n  left:15%;\n  width: 85%;\n}\n\n.img3{\n  position: absolute;\n  top:1.7cm;\n  right:15%;\n  width: 85%;\n}\n\n.img4{\n  position: absolute;\n  top:1.7cm;\n  left:15%;\n  width: 85%;\n}\n\n.img5{\n  position: absolute;\n  top:1.7cm;\n  right:15%;\n  width: 85%;\n}\n\n.img6{\n  position: absolute;\n  top:1.7cm;\n  left:15%;\n  width: 85%;\n}\n.img7{\n  position: absolute;\n  width: 100%;\n}\n.img8{\n  position: absolute;\n  width: 100%;\n}\n\n\n.left {\n  float: left;\n  margin-bottom: 10px;\n}\n\nh1 {\n  color: rgb(0, 0, 0);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  top:1.3cm;\n  font-family: 'VG5000';\n  position: absolute;\n\n}\n\n\nh2 {\n  color: rgb(0, 0, 0);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  bottom:1.1cm;\n  font-family: 'VG5000';\n  position: absolute;\n}\n\n\nh3 {\n  color: rgb(0, 0, 0);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  top:1.3cm;\n  font-family: 'VG5000';\n  position: absolute;\n\n}\n\n\nh4 {\n   color: rgb(0, 0, 0);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  bottom:1.1cm;\n  font-family: 'VG5000';\n  position: absolute;\n}\n\np {\n  font-size: 11pt;\n  line-height: 13.5pt;\n  /* top: -90px; */\n  position: absolute;\n  /* text-align: justify; */\n  hyphens: auto;\n  letter-spacing: -0.01em;\n  word-spacing: -0.01em;\n  margin-right: 1cm;\n  margin-left: 1cm;\n\n  font-feature-settings: \"onum\";\n}\n\n\n.text p {\n  font-size: 17pt;\n  line-height: 22.7pt;\n  height: 100%;\n  /* font-size: 21px;\n  line-height: 1.25; */\n  padding: 0;\n  text-align: center;\n  /* text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3); */\n}\n\n.text {\n  /* top: 1cm; */\n  position: absolute;\n  font-size: 11pt;\n  height: 100%;\n  padding: 0;\n  text-align: center;\n  /* text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.3); */\n  color: rgb(0, 0, 0);\n  position: relative;\n  margin: 0;\n  background: radial-gradient(\n    ellipse at center,\n    rgb(255, 255, 255) 0%,\n    rgb(255, 255, 255) 70%,\n    /* rgb(0, 0, 0) 70.3% */\n  );\n  height: 46%;\n  width: 100%;\n}\n\n.pimgcouv {\n  width: 100%;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n.qimgcouv {\n  width: 100%;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n\n@media screen\n {\n  body {\n      background-color: var(--color-background);\n  }\n  .pagedjs_pages {\n      display: flex;\n      width: calc(var(--pagedjs-width) * 2);\n      flex: 0;\n      flex-wrap: wrap;\n      margin: 0 auto;\n  }\n  .pagedjs_page{\n        --pagedjs-baseline: 10mm;\n        --pagedjs-baseline-position: 9mm;\n        --pagedjs-baseline-color: cyan;\n        background: linear-gradient( var(--color-paper) 0%, var(--color-paper) calc(var(--pagedjs-baseline) - 1px), var(--pagedjs-baseline-color) calc(var(--pagedjs-baseline) - 1px),  var(--pagedjs-baseline-color) var(--pagedjs-baseline)), transparent;\n        background-size: 100% var(--pagedjs-baseline);\n        background-repeat: repeat-y;\n        background-position-y: var(--pagedjs-baseline-position);\n    }\n  }\n"
---

