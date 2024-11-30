// Menú desplegable
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Botón "Volver arriba"
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Efecto en estadísticas: animación de conteo
const stats = document.querySelectorAll('.stat-value');

const updateStatValue = (stat) => {
  const target = +stat.dataset.target;
  let count = 0;

  const update = () => {
    if (count < target) {
      count += Math.ceil(target / 50); // Ajuste de incremento
      stat.textContent = count;
      setTimeout(update, 30); // Animación suave
    } else {
      stat.textContent = target;
    }
  };

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      update();
      observer.disconnect(); // Desconectamos el observer una vez completado
    }
  }, { threshold: 0.5 });

  observer.observe(stat);
};

stats.forEach(updateStatValue);

// Modal dinámico
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

// Función para abrir el modal con la información de la tarjeta
const openModal = (card) => {
  modalTitle.textContent = card.dataset.title;
  modalDescription.textContent = card.dataset.description;
  modal.classList.add('show');
};

// Función para cerrar el modal
const closeModalFunction = () => {
  modal.classList.remove('show');
};

// Asignar eventos de apertura y cierre de modal
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => openModal(card));
});

closeModal.addEventListener('click', closeModalFunction);

// Cerrar modal cuando se hace clic fuera de él
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModalFunction();
  }
});

// Cambiar el fondo de la navbar cuando el usuario hace scroll
window.onscroll = function() {
  let navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};

// Funcionalidad para el menú hamburguesa en dispositivos móviles
document.querySelector('.menu-toggle').addEventListener('click', function() {
  this.classList.toggle('active'); // Alterna la clase 'active' para el menú hamburguesa
  let menu = document.querySelector('.menu');
  menu.classList.toggle('active'); // Muestra u oculta el menú
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});



// Acordeón para la sección Brecha Digital
document.querySelectorAll('#digital-gap .accordion h3').forEach(function (accordion) {
  accordion.addEventListener('click', function () {
    const paragraph = this.nextElementSibling;
    paragraph.style.display = paragraph.style.display === 'block' ? 'none' : 'block';
  });
});

// Hover interactividad en tarjetas
document.querySelectorAll('.card').forEach(function (card) {
  card.addEventListener('mouseenter', function () {
    card.style.transform = 'scale(1.05)';
  });

  card.addEventListener('mouseleave', function () {
    card.style.transform = 'scale(1)';
  });
});



// Función que anima los elementos cuando están visibles en la pantalla
function animateOnScroll() {
  const elements = document.querySelectorAll('.desarrolladora, #contacto, #desarrolladoras, .btn');
  const windowHeight = window.innerHeight;
  
  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) { // Cuando el elemento está dentro del viewport
      el.classList.add('visible');
    }
  });
}

// Inicializar animación
document.addEventListener('DOMContentLoaded', () => {
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
});

// Estilos adicionales para cuando los elementos se vuelven visibles
document.styleSheets[0].insertRule(`
  .desarrolladora.visible, #contacto.visible, #desarrolladoras.visible, .btn.visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
    transition: all 1s ease-out;
  }
`, document.styleSheets[0].cssRules.length);



// contADOR
// Inicializar el contador
let visitas = localStorage.getItem('contador') || 0;

// Mostrar visitas al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('contador').textContent = visitas;
});

// Incrementar contador y redirigir al formulario
document.getElementById('boton-ingreso-formulario').addEventListener('click', () => {
  visitas++;
  localStorage.setItem('contador', visitas);
  document.getElementById('contador').textContent = visitas;

  // Redirigir con parámetros UTM para seguimiento
  window.location.href =
    'https://sensibilizacion.ciberpaz.gov.co/#/data-ciberpaz/response/64?type=public';
});


 
      
