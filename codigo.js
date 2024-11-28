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
  if (platform === "") {
    alert("Por favor, selecciona una plataforma.");
    return;
  }

  // Función para generar recomendaciones basadas en los intereses y plataforma seleccionada
  const generateRecommendations = (interests, platform) => {
    // Definir los cursos disponibles por plataforma
    const courses = {
      Coursera: [
        `Introducción a ${interests} en Coursera`,
        `Avanzado en ${interests} en Coursera`
      ],
      Udemy: [
        `Fundamentos de ${interests} en Udemy`,
        `Proyecto en ${interests} en Udemy`
      ],
      Platzi: [
        `Desarrollo de ${interests} en Platzi`,
        `Taller práctico de ${interests} en Platzi`
      ],
      Edx: [
        `Curso completo de ${interests} en Edx`,
        `Certificación en ${interests} en Edx`
      ]
    };

    // Si la plataforma seleccionada es "todas", se incluyen todas las plataformas
    if (platform === "todas") {
      return [
        ...courses.Coursera,
        ...courses.Udemy,
        ...courses.Platzi,
        ...courses.Edx
      ];
    }

    // Si no es "todas", se muestran los cursos de la plataforma seleccionada
    return courses[platform] || [];
  };

  // Generar las recomendaciones
  const recommendations = generateRecommendations(interests, platform);

  // Si no hay recomendaciones, mostrar mensaje
  if (recommendations.length === 0) {
    document.getElementById("recommendations-box").innerHTML = "<p>No se encontraron recomendaciones para los intereses seleccionados.</p>";
    return;
  }

  // Mostrar las recomendaciones en el contenedor
  let recommendationsHTML = `<h3>Recomendaciones:</h3><ul>`;
  recommendations.forEach(course => {
    recommendationsHTML += `<li>${course}</li>`;
  });
  recommendationsHTML += `</ul>`;
  
  // Insertar las recomendaciones en el contenedor
  document.getElementById("recommendations-box").innerHTML = recommendationsHTML;
});
