/******************Menu**************/
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
        $abrir = $btnMenu.firstElementChild,
        $cerrar = $btnMenu.lastElementChild,
        $menu = d.querySelector(".menu");
    $btnMenu.addEventListener('click', () => {
        $abrir.classList.toggle("none");
        $cerrar.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener('click', (e) => {
        //Si el elemento no lo origino ningun elemento a que esta dentro de la clase menu
        if (!e.target.matches(".menu a")) {
            return false;
        }
        else {
            $abrir.classList.remove("none");
            $cerrar.classList.add("none");
            $menu.classList.remove("is-active");
        }
    });

})(document);




/***********************************Animaciones**************** */
((d) => {

    const animateCSS = (element, animation, prefix = 'animate__') =>
        // We create a Promise and return it
        new Promise((resolve, reject) => {
            const animationName = `${prefix}${animation}`;
            const node = document.querySelector(element);

            node.classList.add(`${prefix}animated`, animationName);

            // When the animation ends, we clean the classes and resolve the Promise
            function handleAnimationEnd(event) {
                event.stopPropagation();
                node.classList.remove(`${prefix}animated`, animationName);
                resolve('Animation ended');
            }

            node.addEventListener('animationend', handleAnimationEnd, { once: true });
        });



    d.querySelector('#link-acerca').addEventListener('click', () => {
        const element = d.querySelector('.acerca-title');
        const carrusel=d.querySelector('.acerca-carrusel');
        element.classList.add('animate__animated', 'animate_flash');
        animateCSS('.acerca-title', 'flash');
        carrusel.classList.add('animate__animated','animate__backInLeft');
        animateCSS('.acerca-carrusel', 'backInLeft');

    });

    d.querySelector('#link-nosotros').addEventListener('click', () => {
        const element = d.querySelector('.nosotros-numero');
        element.classList.add('animate__animated', 'animate__slideInLeft');
        animateCSS('.nosotros-numero', 'slideInLeft');
        const element1 = d.querySelector('.nosotros-numero-2');
        element1.classList.add('animate__animated', 'animate__slideInRight');
        animateCSS('.nosotros-numero-2', 'slideInRight');
        const element2 = d.querySelector('.nosotros-numero-3');
        element2.classList.add('animate__animated', 'animate__slideInUp');
        animateCSS('.nosotros-numero-3', 'slideInUp');     
    });
    d.querySelector('#link-dirigimos').addEventListener('click', () => {
        const element = d.querySelector('.dirigimos-animacion-1');
        const element1=d.querySelector('.dirigimos-animacion-2');
        element.classList.add('animate__animated', 'animate__rotateOut');
        animateCSS('.dirigimos-animacion-1', 'rotateOut');
        element1.classList.add('animate__animated','animate__backInLeft');
        animateCSS('.dirigimos-animacion-2', 'backInLeft');

    });   

})(document);