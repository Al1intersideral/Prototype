---
title: 'Mad Bimbo • Mimi'
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
login: {  }
permissions:
    groups:
        Etudiant:
            create: false
            read: false
            update: false
            delete: false
never_cache_twig: true
media_order: 'Adelphe-FructidorRegular.ttf,VG5000-Regular_web.ttf'
child_type: contribution
cssPrint: ":root {\n  --base-unit-x: 0.2cm;\n  --base-unit-y: 0.2cm;\n}\n\n@page:first {\n  /* background-image: url(/images/bleu.png); */\n\nmargin:0;\npadding: 0;\n  @top-center {\n    /* transform: rotate(-5deg); */\n    font-size: var(--pagedjs-pagebox-width)/10;\n  }\n    @bottom-right {\n      content: '';\n    }\n}\n\n\n@page:nth(12) { \n  margin:0;\n  padding:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(2) { \n  padding:0;\n  margin-top:0;\n  @bottom-left {\n    content: '';\n  }\n    @top-left {\n      content: '';\n  }\n }\n\n @page:nth(11) { \n  padding:0;\n  margin-top:0;\n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n\n @page:nth(3) { \n  padding:0;\n  margin-top:0;\n  @bottom-right {\n    content: '';\n  }\n    @top-right {\n      content: '';\n  }\n }\n/* @page couverture {}\n\n@page crédit {} */\n\n/* @page: blank {\n  @top-left {\n    content: none;\n  }\n} ; */\n\nbody {\n  font-family: 'adelphe';\n  /* font-size: calc(var(--base-unit-y) * 3); */\n}\n\nh1,\nh2,\nh3,\nh4,\np {\n  margin: 0;\n  padding: 0;\n  font-feature-settings: \"onum\";\n  font-weight: normal;\n\n  hyphens: auto;\n  hyphenate-limit-chars: 8 5 4;\n}\n\n.black {\n  color: rgb(0, 0, 0);\n  font-family: 'vg5000';\n  visibility: visible;\n  page-break-before: always;\n  font-size: 11pt;\n  padding-top: 1.24cm;\n  margin-left: 2cm;\n  z-index: 50;\n}\n\n#note,\n#chapter {\n  display: none;\n}\n\n.break-after {\n  page-break-after: always;\n}\n\n.break-before {\n  page-break-before: always;\n}\n\n\n\n.image1 {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top:0;\n}\n\n.image2 {\n  top:2cm;\n  right:4cm;\n  position: absolute;\n  width: 90%;\n  height: 100%;\n}\n\n.img1{\n  top: 0cm;\n  /* left: 10cm; */\nposition: absolute;\nz-index: 2;\nheight: 29.7cm;\n}\n.img2{\n\n  left: 10cm;\nposition: absolute;\nz-index: 1;\nheight: 29.7cm;\n}\n\n.img3{\n  top: 6cm;\n  left: 12cm;\nposition: absolute;\nz-index: 1;\nwidth: 80%;\n}\n\n.img4{\n  top: 8cm;\n  left: 9cm;\nposition: absolute;\nz-index: 1;\nwidth: 100%;\n}\n\n.cube {\n left: 0cm;\n  width: 100%;\n  position: absolute;\n\n}\nh1 {\n  color: rgb(0, 0, 0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  top:1.3cm;\n  font-family: 'VG5000';\n  position: absolute;\n  z-index: 50;\n\n}\n\n\nh2 {\n  color: rgb(0, 0, 0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  right: 2cm;\n  bottom:1.1cm;\n  font-family: 'VG5000';\n  position: absolute;\n  z-index: 50;\n}\n\n\nh3 {\n  color: rgb(0, 0, 0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  top:1.3cm;\n  font-family: 'VG5000';\n  position: absolute;\n  z-index: 50;\n\n}\n\n\nh4 {\n  color: rgb(0, 0, 0);\n  font-size: 11pt;\n  line-height: 13.5pt;\n  left: 2cm;\n  bottom:1.1cm;\n  font-family: 'VG5000';\n  position: absolute;\n  z-index: 50;\n}\n\n\n\n.couleur-1{\n    margin-right: 1cm;\n  margin-left: 1cm;\n  top: 6.3cm;\n  padding: 2cm;\n}\n\n.couleur-2{\n    margin-right: 1cm;\n  margin-left: 1cm;\n  top:2cm;\n  padding: 2cm;\n  padding-left: 4cm;\n  padding-right: 0cm;\n}\n\n\n.couleur-3{\n    margin-right: 1cm;\n  margin-left: 1cm;\n  top:10.5cm;\n  padding: 2cm;\n  padding-left: 6cm;\n  padding-right: 0cm;\n}\n\np {\n  font-size: 16pt;\n  line-height: 17pt;\n  color: rgb(0, 0, 0);\n\n  position: relative;\n\n  hyphens: auto;\n  letter-spacing: -0.02em;\n  /* word-spacing: -0.01em; */\n\n  widows: 2;\n}\n\n\n.text p {\n\n  height: 100%;\n\n  padding: 0;\n  text-align: left;\n\n}\n\n.text {\n  height: 100%;\n  \n  padding-right: 9.5cm;\n  padding-left: 1cm;\n  padding-top: 1cm;\n\n  text-align: justify;\n  color: rgb(0, 0, 0);\n  position: relative;\n  z-index: 2;\n  margin: 0;\n  /* background: radial-gradient(\n    ellipse at center,\n    rgb(255, 255, 255) 0%,\n    rgb(255, 255, 255) 70%,\n    rgb(0, 0, 0) 70.3%\n  ); */\n  height: 46%;\n  width: 100%;\n}\n\n.text2 {\n  height: 100%;\n\n  padding-left: 9.5cm;\n  padding-right: 1cm;\n  padding-top: 1cm;\n\n  text-align: justify;\n  color: rgb(0, 0, 0);\n  /* color: rgb(200, 110, 30);\n  color: rgb(190, 200, 140); */\n  position: relative;\n  z-index: 2;\n  margin: 0;\n\n  height: 46%;\n  width: 100%;\n}\n\nimg{\n\tmargin:0;\n\n}\n\n.cover{\n  height: auto;\n  padding: 0;\n}"
---

