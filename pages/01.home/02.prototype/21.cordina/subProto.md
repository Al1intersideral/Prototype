---
title: 'Céphaloblast • Cordina'
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
cssPrint: "body {\n  --paged-layout:booklet;\n}\n\n:root {\n  --base-unit-x: 0.2cm;\n  --base-unit-y: 0.2cm;\n}\n\n@page:first {\n  /* background-image: url(/images/bleu.png); */\n\nmargin:0;\npadding: 0;\n  @top-center {\n    /* transform: rotate(-5deg); */\n    font-size: var(--pagedjs-pagebox-width)/10;\n  }\n    @bottom-right {\n      content: '';\n    }\n}\n\n\n@page:nth(12) { \n  margin:0;\n  padding:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(2) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(11) { \n  padding:0;\n  margin-top:0cm;\n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n\n\nbody {\n  font-family: 'adelphe';\n  /* font-size: calc(var(--base-unit-y) * 3); */\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n}\n\n.red {\n  visibility: hidden;\n}\n\n\n.black {\n  font-family:'vg5000' ;\n  font-size: 11pt;\n  color: rgb(0,0,0);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  visibility: visible;\n  page-break-before: always;\n  top:1.38cm;\n  margin-left: 2cm;\n}\n\n#note,\n#chapter {\n  display: none;\n}\n\n.break-after {\n  page-break-after: always;\n}\n\n.break-before {\n  page-break-before: always;\n}\n\n\n\n.img1 {\n  position: absolute;\n  width: 91%;\n  left: 1cm;\n  top: 1.3cm;\n}\n\n.img2 {\n  position: absolute;\n  width: 91%;\n  left: 1cm;\n  top: 1.3cm;\n}\n\n.img21 {\n  position: absolute;\n  width: 89%;\n  left: 1.2cm;\n  top: 0.8cm;\n}\n\n.img22 {\n  position: absolute;\n  width: 96.8%;\n  left: 0.25cm;\n  top: 0.4cm;\n}\n\n.img23 {\n  position: absolute;\n  width: 94.3%;\n  left: 0.6cm;\n  top: 0.8cm;\n}\n\n.img3{\n  \n  position:absolute;\n  width: 90%;\n}\n.img4{\n  position: absolute;\n  width: 90%;\n}\n.img5{\n  position: absolute;\n  width: 90%;\n}\n.img6{\n  position: absolute;\n  width: 90%;\n}\n.img7{\n  position: absolute;\n  width: 90%;\n  transform: rotate(180deg);\n}\n.img8{\n  position: absolute;\n  width: 90%;\n  transform: rotate(180deg);\n}\n\n\n.left {\n  float: left;\n  margin-bottom: 10px;\n}\n\nh1 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  top:1.3cm;\n  font-family: 'VG5000';\n  position: absolute;\n\n  font-weight:normal;\n}\n\n\nh2 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  bottom:1.1cm;\n  font-family: 'VG5000';\n  position: absolute;\n  font-weight:normal;\n}\n\n\nh3 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  top:1.3cm;\n  font-family: 'VG5000';\n  position: absolute;\n\n  font-weight:normal;\n}\n\n\nh4 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  bottom:1.1cm;\n  font-family: 'VG5000';\n  position: absolute;\n  font-weight:normal;\n}\n\nh5 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  top:0.7cm;\n  font-family: 'VG5000';\n  position: absolute;\n\n  font-weight:normal;\n}\n\n\nh6 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  bottom: 0.2cm;\n  font-family: 'VG5000';\n  position: absolute;\n  font-weight:normal;\n}\n\n\nh7 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  top:1.3cm;\n  font-family: 'VG5000';\n  position: absolute;\n\n  font-weight:normal;\n\n}\n\n\nh8 {\n  color: rgb(0,0,0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  bottom:1.1cm;\n  font-family: 'VG5000';\n  position: absolute;\n  font-weight:normal;\n}\n\n\n\np {\n  font-size: 9pt;\n  line-height: 10pt;\n\n  position: absolute;\n  \n  hyphens: auto;\n  hyphenate-limit-chars: 8 4 4;\n\n  letter-spacing: -0.01em;\n  word-spacing: -0.01em;\n  /* margin-right: 0.5cm;\n  margin-left: 0.5cm; */\n\n  font-feature-settings: \"onum\";\n}\n\n.lettre {\n  margin-top: 4.3cm;\n  top: 2cm;\n  margin-left: 4cm;\n  margin-right: 4cm;\n  color: rgb(0,0,0);\n}\n\n.lettredroite {\n  margin-top: 4.3cm;\n  margin-left: 14.8cm;\n  margin-right: 4cm;\n  color: rgb(0,0,0);\n}\n\n  .sc {\n    font-size: 9pt;\n    line-height: 9.9pt;\n    column-count: 2;\n    column-fill: auto;\n    height: 13cm;\n    margin-top: 14.4cm;\n    margin-left: 2.1cm;\n    margin-right: 2.1cm;\n    color: rgb(16, 16, 16);\n}\n\n.sc2 {\n  font-size: 9pt;\n  line-height: 9.9pt;\n  column-count: 2;\n  column-fill: auto;\n  height: 13cm;\n  margin-top: 14.4cm;\n  margin-left: 2.1cm;\n  margin-right: 2.1cm;\n  color: rgb(0,0,0);\n}\n\n.carte {\n  column-count: 2;\n  margin-top: 10cm;\n  margin-left: 3cm;\n  margin-right: 3cm;\n  color: rgb(0,0,0);\n}\n\n/* .carte1 {\n  column-count: 2;\n\n  margin-top: 20cm;\n  margin-left: 2.5cm;\n  margin-right: 2.5cm;\n  color: rgb(0, 0, 255);\n} */\n\n.col{\n  column-count: 2;\n  column-gap: 5.3cm;\n  margin-top: 6cm;\n  margin-left: 2.8cm;\n  margin-right: 2.8cm;\n  color: rgb(0, 0, 255);\n}\n\n.cépha {\n  margin-top: 12.5cm;\n  margin-left: 3.0cm;\n  margin-right: 3.2cm;\n  color: rgb(0,0,0);\n}\n\n.text p {\n  font-size: 17pt;\n  line-height: 22.7pt;\n  height: 100%;\n\n  padding: 0;\n  text-align: center;\n\n}\n\n\n.pimgcouv {\n  width:21cm;\n  height:29.7cm;\n  top: 0cm;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n.qimgcouv {\n  width:21cm;\n  height:29.7cm;\n  top: 0cm;\n  display: block;\n  border-radius: 0%;\n  position:absolute;\n\n}\n\n\n@media screen\n {\n  body {\n      background-color: var(--color-background);\n  }\n  .pagedjs_pages {\n      display: flex;\n      width: calc(var(--pagedjs-width) * 2);\n      flex: 0;\n      flex-wrap: wrap;\n      margin: 0 auto;\n  }\n  .pagedjs_page{\n        --pagedjs-baseline: 10mm;\n        --pagedjs-baseline-position: 9mm;\n        --pagedjs-baseline-color: cyan;\n        background: linear-gradient( var(--color-paper) 0%, var(--color-paper) calc(var(--pagedjs-baseline) - 1px), var(--pagedjs-baseline-color) calc(var(--pagedjs-baseline) - 1px),  var(--pagedjs-baseline-color) var(--pagedjs-baseline)), transparent;\n        background-size: 100% var(--pagedjs-baseline);\n        background-repeat: repeat-y;\n        background-position-y: var(--pagedjs-baseline-position);\n    }\n  }\n\n"
---

