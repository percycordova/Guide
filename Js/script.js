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


/***********************ScrollBtn ******************************/
((d) => {
    const w = window;
    const $scrollBtn = d.querySelector(".scroll-top-btn");
    w.addEventListener("scroll", (e) => {
        //console.log(w.pageYOffset, d.documentElement.scrollTop);
        let scrollTop = d.documentElement.scrollTop || w.pageYOffset;
        if (scrollTop > 900) {
            $scrollBtn.classList.remove("hidden");
        } else {
            $scrollBtn.classList.add("hidden");
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target.matches(".scroll-top-btn")) {
            w.scrollTo({
                behavior: "smooth", //el comportamiento
                top: 0 //a donde quieres que regrese la barra vertical
                //lef:0
            });
        }

    });
})(document);
/***********************Modal***************************/
((d) => {

    const $portfolios = d.querySelectorAll(".portfolio-grid a"),      //Recibo todos las etiquetas a que esten dentro de mi .grid-portfolio
        $trabajos = d.querySelectorAll("article.modal .modal-close"), //Recibo todos los div con la clase .modal-close que esten dentro de article.modal  
        $contentModal = d.querySelector(".modal-content"); //Recibo la div del contenedor del modall
    const $modalesTRabajos = d.querySelectorAll("#modales-proyectos article");

    $portfolios.forEach(el => {

        el.addEventListener("click", () => {

            $modalesTRabajos.forEach(tra => {

                if (`#${tra.id}` === (el.attributes[0].value)) {
                    d.querySelector(`#${tra.id}`).classList.add("open-modal");
                    d.querySelector(`#${tra.id} .modal-content`).classList.remove("close-modal-close");
                }
            });
        });
    });

    $modalesTRabajos.forEach(el => {
        (el.querySelector("div a")).addEventListener('click', () => {
            d.querySelector(`#${el.id} .modal-content`).classList.add("close-modal-close");
            d.querySelector(`#${el.id}`).classList.remove("open-modal");
        })
    });

    /* $trabajos.forEach((el, acc) => {
         el.addEventListener("click", () => {
             $contentModal.classList.add("close-modal-close");
             d.querySelector(`#trabajo-${acc + 1}`).classList.remove("open-modal");
         });
     });*/
})(document);

/* ********** ContactForm ********** */




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