document.getElementById("recommend-button").addEventListener("click", () => {
  // Obtener los datos de la entrada
  const interests = document.getElementById("interest-input").value.trim();
  const platform = document.getElementById("platform-select").value;

  // Validar que el campo de intereses no esté vacío
  if (!interests) {
    alert("Por favor, escribe tus intereses.");
    return;
  }

  // Función para generar recomendaciones basadas en los intereses
  const generateRecommendations = (interests, platform) => {
    let recommendations = [];
    
    // Lógica de recomendación simulada
    if (platform === "todas" || platform === "Coursera") {
      recommendations.push(`Curso 1: Introducción a ${interests} en Coursera`);
      recommendations.push(`Curso 2: Avanzado en ${interests} en Coursera`);
    }
    if (platform === "todas" || platform === "Udemy") {
      recommendations.push(`Curso 3: Fundamentos de ${interests} en Udemy`);
      recommendations.push(`Curso 4: Proyecto en ${interests} en Udemy`);
    }
    if (platform === "todas" || platform === "Platzi") {
      recommendations.push(`Curso 5: Desarrollo de ${interests} en Platzi`);
      recommendations.push(`Curso 6: Taller práctico de ${interests} en Platzi`);
    }
    if (platform === "todas" || platform === "Edx") {
      recommendations.push(`Curso 7: Curso completo de ${interests} en Edx`);
      recommendations.push(`Curso 8: Certificación en ${interests} en Edx`);
    }

    return recommendations;
  };

  // Generar las recomendaciones y mostrarlas
  const recommendations = generateRecommendations(interests, platform);
  
  // Mostrar las recomendaciones en el contenedor
  let recommendationsHTML = `<h3>Recomendaciones:</h3><ul>`;
  recommendations.forEach(course => {
    recommendationsHTML += `<li>${course}</li>`;
  });
  recommendationsHTML += `</ul>`;
  
  document.getElementById("recommendations-box").innerHTML = recommendationsHTML;
});
