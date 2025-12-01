//Barra de navegación se pone estático a rodar rueda del mouse
window.addEventListener("scroll",function(){
    var header =document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0)
})


//Menú responsive
bars = document.querySelector(".bars");
bars.onclick=function(){
  navbar=document.querySelector("nav");
  navbar.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    var menuItems = document.querySelectorAll('.menu-item');
  
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function (event) {
            event.preventDefault();
  
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
  
            // Oculta todas las secciones
            hideAllSections();
            // Muestra la sección correspondiente
            targetSection.style.display = 'block';
            //Oculta el navbar
            navbar.classList.remove("active");
        });
    });
  
    // Activa la primera sección y el primer elemento del menú al cargar la página
    var firstMenuItem = document.querySelector('.menu-item');
    firstMenuItem.click(); // Simula un clic en el primer elemento del menú

    //Muestra la sección de proyectos redirigiendo a otra sección
    var seccionUnica = document.querySelectorAll('.seccion-unica');
    seccionUnica.forEach(function (menuItem) {
      menuItem.addEventListener('click', function (event) {
          event.preventDefault();

          var targetId = this.getAttribute('href').substring(1);
          var targetSection = document.getElementById(targetId);

          // Oculta todas las secciones
          hideAllSections();

          // Muestra la sección correspondiente
          targetSection.style.display = 'block';
      });
  });
  });

  //MUESTRA SOLO UNA SECCIÓN
  function hideAllSections() {
    var sections = document.querySelectorAll('main section');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });
  }
/*--------------------------------------------------------------- Inicio ---------------------------------------------------------------*/
//FILTRO DE AUTOESCRITURA
const textArray = ["Programador", "Desarrollador Web", "Analista de sofware"];
        let index = 0;
        let charIndex = 0;
        let currentText = '';
        let isDeleting = false;

        function type() {
            if (isDeleting) {
                currentText = textArray[index].substring(0, charIndex - 1);
                charIndex--;
            } else {
                currentText = textArray[index].substring(0, charIndex + 1);
                charIndex++;
            }

            document.querySelector('.tipeo').textContent = currentText;

            // Si el texto actual ha terminado de escribirse
            if (charIndex === textArray[index].length) {
                isDeleting = true;
                // Pausa de 1 segundo antes de borrar
                setTimeout(type, 2000); // Espera 1 segundo
            } else if (charIndex === 0) {
                isDeleting = false;
                index = (index + 1) % textArray.length; // Cambia al siguiente texto
                setTimeout(type, 200); // Velocidad de escritura
            } else {
                // Tiempo de escritura y borrado
                setTimeout(type, isDeleting ? 40 : 40);
            }
        }

        type();
        
//EL HOVER DE HOBIES

document.addEventListener('DOMContentLoaded', function () {
  const wrappers = document.querySelectorAll('.hobby-wrapper');

  wrappers.forEach(wrapper => {
    const box = wrapper.querySelector('.hobby-box'); // Elemento que va a cambiar
    const description = wrapper.querySelector('.hobby-description'); // Descripción

    wrapper.addEventListener('mouseenter', () => {
      box.classList.remove('hobby-box');
      box.classList.add('hobby-hover');
      description.style.opacity = '1';
      description.style.maxHeight = '300px'; // Mostrar la descripción
    });

    wrapper.addEventListener('mouseleave', () => {
      box.classList.remove('hobby-hover');
      box.classList.add('hobby-box');
      description.style.opacity = '0';
      description.style.maxHeight = '0'; // Ocultar la descripción
    });
  });
});


/*--------------------------------------------------------------- Proyecto ---------------------------------------------------------------*/

//FILTRO DE LOS PROYECTOS
  document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos relevantes
    var filtroProyecto = document.getElementById('filtroProyecto');
    var proyectos = document.querySelectorAll('.proyecto-item');
    //var tablaProyecto = document.getElementById('tabla-proyecto');

    // Agregar un controlador de eventos para hacer clic en los elementos del filtro
    filtroProyecto.addEventListener('click', function (event) {
      // Verificar si el clic fue en un elemento de filtro
      if (event.target.tagName === 'LI') {
        // Obtener el valor del filtro desde el atributo data-filter
        var filtro = event.target.getAttribute('data-filter');

        // Aplicar el filtro a los proyectos
        proyectos.forEach(function (proyecto) {
          if (filtro === '*' || proyecto.classList.contains(filtro)) {
            proyecto.style.display = 'block'; // Mostrar el proyecto
          } else {
            proyecto.style.display = 'none';  // Ocultar el proyecto
          }
        });

        // Aplicar el filtro a la tabla
        /*var filasTabla = tablaProyecto.querySelectorAll('tbody tr');
        filasTabla.forEach(function (fila) {
          if (filtro === '*' || fila.classList.contains(filtro)) {
            fila.style.display = 'table-row'; // Mostrar la fila de la tabla
          } else {
            fila.style.display = 'none';  // Ocultar la fila de la tabla
          }
        });*/

        // Cambiar la clase activa en el filtro
        var filtros = document.querySelectorAll('#filtroProyecto li');
        filtros.forEach(function (item) {
          item.classList.remove('filtro-activado');
        });
        event.target.classList.add('filtro-activado');
      }
    });
  });

  function openLightbox() {
    // Rutas de las imágenes
    var imagePaths = [
        'img/proyecto/proyecto.jpg',
        'img/proyecto/trabajo.jpg'
        // Agrega más rutas según sea necesario
    ];

    // Genera los elementos del lightbox
    var lightboxContent = '';
    for (var i = 0; i < imagePaths.length; i++) {
        lightboxContent += '<a href="' + imagePaths[i] + '" data-fancybox="proyectos" title="Foto Proyecto ' + (i + 1) + '"></a>';
    }

    // Agrega el contenido al lightbox
    $.fancybox.open(lightboxContent, {
        loop: true, // Permite que las imágenes se repitan en un bucle
        buttons: ["slideShow", "thumbs", "close"], // Muestra botones adicionales
        thumbs: {
            autoStart: true, // Inicia automáticamente la vista en miniatura
        },
    });
}

/*--------------------------------------------------------------- Fondo ---------------------------------------------------------------*/
//RESPLANDOR DEL BODY
const resplandor = document.querySelector('.sombra');

    // Seguir la posición del cursor
    document.addEventListener('mousemove', (event) => {
        // Coloca el resplandor en la posición exacta del cursor
        resplandor.style.left = `${event.pageX}px`;
        resplandor.style.top = `${event.pageY}px`;
    });
    
