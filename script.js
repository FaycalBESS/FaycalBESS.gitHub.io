window.addEventListener('scroll', function () { //je déclenche un écouteur d'évenements, dans ce cas là, j'écoute le scroll de la fenêtre

    var scroll = document.documentElement.scrollTop //je stocke la quantité de pixels scrollés par le browser
    var navbar = document.getElementById('navbar');
    var menu = document.getElementById('menu'); // je crée deux variables contenant chacune un élément de mon DOM identifié par son id
    var offset = (menu.offsetTop); //je stock dans une variable la position par rapport au bord supérieur de la page de mon menu
    if (scroll >= offset) { // je crée mes conditions, si l'utilisateur scroll plus de pixels que la position de mon menu
        navbar.classList.replace('navbar', 'navbar-fixed'); // je remplace la class existante par la seconde créée à cet effet
    } else {
        navbar.classList.replace('navbar-fixed', 'navbar'); // je remets la classe initiale

    }
})