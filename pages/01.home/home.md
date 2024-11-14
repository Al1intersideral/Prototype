---
title: Home
access:
    site.login: true
    admin.login: true
body_classes: 'title-center title-h1h2'
custom:
    listesections:
        -
            nomsection: 'Écrire &&nbsp;designer des livres à&nbsp;plusieurs&nbsp;!'
            textesection: '[BOOKOLAB](http://bookolab.coalitioncyborg.org/) est un&nbsp;outil collaboratif permettant d''éditer et&nbsp;de&nbsp;mettre en&nbsp;forme des publications pour différents supports de&nbsp;lecture&nbsp;: version imprimable (PDF) & version écran (page web).'
        -
            nomsection: Caractéristiques
            textesection: "• Travail éditorial collaboratif en&nbsp;ligne\_: relecture et&nbsp;édition synchrone ou&nbsp;asynchrone<br>\n• Mise en&nbsp;forme graphique en&nbsp;ligne&nbsp;: feuilles de&nbsp;style par projet et&nbsp;par contribution<br>\n• Multiples formats d’exportation&nbsp;: site web statique + PDF<br>\n• Gestion de&nbsp;projets\_parallèles&nbsp;: configuration des droits d’accès par utilisateur<br>\n• Saisie en langage naturel&nbsp;: html ou&nbsp;markdown non prérequis<br>\n• Sauvegarde et&nbsp;versionnage automatisé&nbsp;: git"
    credits: "Conception et&nbsp;coordination&nbsp;: [Lucile&nbsp;Haute](http://lucilehaute.fr/) <br>\nDéveloppement et&nbsp;réalisation&nbsp;: [Arman&nbsp;Mohtadji](https://www.armansansd.net/) & [Benjamin&nbsp;Dumond](http://benjamindumond.fr/) ([Bonjour&nbsp;Monde](https://bonjourmonde.net/en))<br>\nCahier des charges&nbsp;: [Lucile&nbsp;Haute](http://lucilehaute.fr/) & [Quentin Juhel](https://juhel-quentin.fr/) <br>\nSystème de&nbsp;gestion de&nbsp;contenu&nbsp;: [GRAV](https://getgrav.org/)<br>\nLibrairie de mise en page PDF&nbsp;: [Paged.js](https://pagedjs.org/)<br>\nCode source du&nbsp;projet&nbsp;: [gitlab.com/armansansd/bookolab](https://gitlab.com/armansansd/bookolab)<br>\nRéalisé avec le&nbsp;soutien de&nbsp;: [Laboratoire Projekt](https://projekt.unimes.fr/bookolab/) & [Licence Design](https://lid.unimes.fr/projet-thematique-de-loption-design-et-cultures-numeriques-l3/) ([Université de&nbsp;Nîmes](https://unimes.fr)) "
nomsite: 'Plain Text'
couleur1: '#080808'
couleur2: '#c2c2c2'
couleur3: '#e07337'
introduction: '<p>Petit texte d''intro pour le style.</p>'
---

# Say Hello to Grav!
## installation successful...

Congratulations! You have installed the **Base Grav Package** that provides a **simple page** and the default **Quark** theme to get you started.

!! If you see a **404 Error** when you click `Typography` in the menu, please refer to the [troubleshooting guide](http://learn.getgrav.org/troubleshooting/page-not-found).

### Find out all about Grav

* Learn about **Grav** by checking out our dedicated [Learn Grav](http://learn.getgrav.org) site.
* Download **plugins**, **themes**, as well as other Grav **skeleton** packages from the [Grav Downloads](http://getgrav.org/downloads) page.
* Check out our [Grav Development Blog](http://getgrav.org/blog) to find out the latest goings on in the Grav-verse.

!!! If you want a more **full-featured** base install, you should check out [**Skeleton** packages available in the downloads](http://getgrav.org/downloads).

### Edit this Page

To edit this page, simply navigate to the folder you installed **Grav** into, and then browse to the `user/pages/01.home` folder and open the `default.md` file in your [editor of choice](http://learn.getgrav.org/basics/requirements).  You will see the content of this page in [Markdown format](http://learn.getgrav.org/content/markdown).

### Create a New Page

Creating a new page is a simple affair in **Grav**.  Simply follow these simple steps:

1. Navigate to your pages folder: `user/pages/` and create a new folder.  In this example, we will use [explicit default ordering](http://learn.getgrav.org/content/content-pages) and call the folder `03.mypage`.
2. Launch your text editor and paste in the following sample code:

        ---
        title: My New Page
        ---
        # My New Page!

        This is the body of **my new page** and I can easily use _Markdown_ syntax here.

3. Save this file in the `user/pages/03.mypage/` folder as `default.md`. This will tell **Grav** to render the page using the **default** template.
4. That is it! Reload your browser to see your new page in the menu.

! NOTE: The page will automatically show up in the Menu after the "Typography" menu item. If you wish to change the name that shows up in the Menu, simple add: `menu: My Page` between the dashes in the page content. This is called the YAML front matter, and it is where you configure page-specific options.
