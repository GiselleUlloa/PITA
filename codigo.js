document.getElementById("recommend-button").addEventListener("click", () => {
  // Obtener los datos de la entrada
  const interests = document.getElementById("interest-input").value.trim();
  const platform = document.getElementById("platform-select").value;

  // Validar que el campo de intereses no esté vacío
  if (!interests) {
    alert("Por favor, escribe tus intereses.");
    return;
  }

  // Validar que se haya seleccionado una plataforma
  if (!platform) {
    alert("Por favor, selecciona una plataforma.");
    return;
  }

  // Función para generar recomendaciones con precios y enlaces
  const generateRecommendations = (interests, platform) => {
    // Definir los cursos disponibles por plataforma con precios y enlaces
    const courses = {
      Coursera: [
        { title: `Introducción a ${interests} en Coursera`, link: "https://www.coursera.org", price: "$49" },
        { title: `Avanzado en ${interests} en Coursera`, link: "https://www.coursera.org", price: "$79" }
      ],
      Udemy: [
        { title: `Fundamentos de ${interests} en Udemy`, link: "https://www.udemy.com", price: "$14.99" },
        { title: `Proyecto en ${interests} en Udemy`, link: "https://www.udemy.com", price: "$19.99" }
      ],
      Platzi: [
        { title: `Desarrollo de ${interests} en Platzi`, link: "https://platzi.com", price: "Suscripción: $12/mes" },
        { title: `Taller práctico de ${interests} en Platzi`, link: "https://platzi.com", price: "Suscripción: $12/mes" }
      ],
      Edx: [
        { title: `Curso completo de ${interests} en Edx`, link: "https://www.edx.org", price: "Gratis (Certificación: $50)" },
        { title: `Certificación en ${interests} en Edx`, link: "https://www.edx.org", price: "$199" }
      ],
      OpenAI: [
        { title: `Introducción a ${interests} con OpenAI`, link: "https://openai.com", price: "Gratis (Recursos Generales)" },
        { title: `Avanzado en ${interests} con OpenAI`, link: "https://openai.com", price: "Consulta en OpenAI" }
      ]
    };

    // Si la plataforma seleccionada es "todas", se incluyen todas las plataformas
    if (platform === "todas") {
      return [
        ...courses.Coursera,
        ...courses.Udemy,
        ...courses.Platzi,
        ...courses.Edx,
        ...courses.OpenAI
      ];
    }

    // Si no es "todas", se muestran los cursos de la plataforma seleccionada
    return courses[platform] || [];
  };

  // Generar las recomendaciones
  const recommendations = generateRecommendations(interests, platform);

  // Si no hay recomendaciones, mostrar mensaje
  if (recommendations.length === 0) {
    document.getElementById("recommendations-box").innerHTML = 
      "<p>No se encontraron recomendaciones para los intereses seleccionados.</p>";
    return;
  }

  // Mostrar las recomendaciones en el contenedor
  let recommendationsHTML = `<h3>Recomendaciones:</h3><ul>`;
  recommendations.forEach(course => {
    recommendationsHTML += `<li>
      <a href="${course.link}" target="_blank">${course.title}</a> - <strong>${course.price}</strong>
    </li>`;
  });
  recommendationsHTML += `</ul>`;

  // Insertar las recomendaciones en el contenedor
  document.getElementById("recommendations-box").innerHTML = recommendationsHTML;

  // Guardar recomendaciones en Local Storage
  const savedRecommendations = JSON.parse(localStorage.getItem("recommendations")) || [];
  savedRecommendations.push({ interests, platform, courses: recommendations });
  localStorage.setItem("recommendations", JSON.stringify(savedRecommendations));
});
