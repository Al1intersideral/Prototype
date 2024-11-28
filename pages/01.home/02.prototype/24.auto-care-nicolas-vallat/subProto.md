---
title: 'Auto-Care • Nicolas Vallat'
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
cssPrint: "body {\n  --paged-layout:booklet;\n}\n\n:root {\n  --base-unit-x: 0.2cm;\n  --base-unit-y: 0.2cm;\n}\n\n@page:first {\n  /* background-image: url(/images/bleu.png); */\n\nmargin:0;\npadding: 0;\n  @top-center {\n    /* transform: rotate(-5deg); */\n    font-size: var(--pagedjs-pagebox-width)/10;\n  }\n    @bottom-right {\n      content: '';\n    }\n}\n\n@page:nth(11) { \n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n\n@page:nth(12) { \n  margin:0;\n  padding:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(2) { \n  @bottom-left {\n    content: '';\n  }\n }\n\n\n @page:left {\n  /* font-family: 'Necto';\n  font-size: calc(var(--base-unit-x) * 3); */\n  @bottom-left {\n    content: \"AUTO-CARE-P\"counter(page);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-bottom: 0.7cm;\n    \n  }\n  @top-left {\n    content: string(chapter);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 1cm;\n  }\n}\n\n\n@page:right {\n  @bottom-right {\n    content: \"AUTO-CARE-P\"counter(page);\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-bottom: 0.7cm;\n  }\n  @top-right {\n    content: string(note);\n    text-transform: uppercase;\n    font-family: 'vg5000';\n    font-size: 11pt;\n    padding-top: 1cm;\n  }\n}\n\nbody {\n  font-family: 'adelphe';\n  color: rgb(0, 0, 255);\n  /* font-size: calc(var(--base-unit-y) * 3); */\n}\n\nh1,\nh2,\nh3,\nh4 {\n  margin-top: -0.2cm;\n  padding: 0;\n  color: rgb(255, 0, 0);\n  font-size: 16pt;\n  line-height: 22pt;\n\n  string-set: chapter content(text);\n  string-set: note content(text);\n}\n\nh1{\n  font-size: 22pt;\n  line-height: 22pt;\n  padding-bottom: 0.5cm;\n\n  text-align: center;\n  color: rgb(255, 0, 0);\n}\n\np {\n  hyphens: auto;\n\n  margin-top: -0.5cm;\n  margin-left: 1cm;\n  margin-right: 1cm;\n  padding: 0;\n\n  color: rgb(0, 0, 255);\n\n  font-size: 13.5pt;\n  line-height: 17pt;\n}\n\n.black {\n  color: rgb(255, 255, 255);\n  \n  font-family: 'vg5000';\n  visibility: none;\n  page-break-before: always;\n  font-size: 11pt;\n  padding-top: 1cm;\n  padding-right: 1cm;\n}\n\n.gpt{\n  margin-top:7cm;\n}\n\n.chat{\n  margin-top:3cm;\n}\n\n.espace{\n  margin-top: 1cm;\n}\n\n.creator{\n  color: rgb(255, 0, 0);\n  padding-right: 2cm;\n}\n\n.machine{\n  color: rgb(0, 0, 255);\n  padding-left: 1cm;\n}\n\n.pec {\n  padding-top:2cm;\n  width: 100%;\n}\n\n.glove {\n  right: 1cm;\n  width: 65%;\n  margin-top: 1cm;\n  position: absolute;\n}\n\n.glove1 {\n  left: 1cm;\n  width: 65%;\n  position: absolute;\n}\n\n/* .dalle1 {\n  width: 70%;\n  right: -3cm;\n  top: 0cm;\n  position: absolute;\n  }\n.dalle2 {\n  width: 16cm;\n  height: 10cm;\n  left: 2cm;\n  top: 15.5cm;\n  position: absolute;\n  }\n.dalle3 {\n  width: 30%;\n  right: 0cm;\n  top: 7cm;\n  position: absolute;\n  } */\n  \n.dalle1 {\n  width: 65%;\n  right:9cm;\n  top: 5.6cm;\n\n  position: absolute;\n  }\n.dalle2 {\n  width: 65%;\n  left: 3cm;\n  top: 5.6cm;\n\n  position: absolute;\n  }\n.dalle3 {\n  width: 28%;\n  left: 12cm;\n  top: 6cm;\n  position: absolute;\n  }\n/* .dalle3 {\n  width: 29cm;\n  height: 16cm;\n  left: -5cm;\n  top: -0.5cm;\n  \n  position: absolute;\n  } */\n\n.silver{\n  margin-top:8cm;\n}\n\n.head{\n  width: 75%;\n  left: 2cm;\n  position: absolute;\n}\n\n.head1{\n  top: 13cm;\n  left: 2cm;\n  width: 75%;\n  position: absolute;\n}\n\n.head2{\n  top: 0cm;\n  left: 2cm;\n  width: 75%;\n  position: absolute;\n}\n\n#note,\n#chapter {\n  display: none;\n}\n\n.break-after {\n  page-break-after: always;\n}\n\n.break-before {\n  page-break-before: always;\n}\n\n\n\n@media (min-width: 850px) {\n  .quote-wrapper {\n    height: 370px;\n    width: 370px;\n  }\n  .quote-wrapper::before {\n    font-size: 300px;\n  }\n  .text p {\n    font-size: 26px;\n  }\n  .quote-wrapper blockquote footer {\n    bottom: 32px;\n  }\n}\n\n\n.pimgcouv {\n  width: 100%;\n  height:100%;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n.qimgcouv {\n  width: 100%;\n  height:100%;\n  top: 0cm;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n\n@media screen\n {\n  body {\n      background-color: var(--color-background);\n  }\n  .pagedjs_pages {\n      display: flex;\n      width: calc(var(--pagedjs-width) * 2);\n      flex: 0;\n      flex-wrap: wrap;\n      margin: 0 auto;\n  }\n  .pagedjs_page{\n        --pagedjs-baseline: 10mm;\n        --pagedjs-baseline-position: 9mm;\n        --pagedjs-baseline-color: cyan;\n        background: linear-gradient( var(--color-paper) 0%, var(--color-paper) calc(var(--pagedjs-baseline) - 1px), var(--pagedjs-baseline-color) calc(var(--pagedjs-baseline) - 1px),  var(--pagedjs-baseline-color) var(--pagedjs-baseline)), transparent;\n        background-size: 100% var(--pagedjs-baseline);\n        background-repeat: repeat-y;\n        background-position-y: var(--pagedjs-baseline-position);\n    }\n  }\n"
---

