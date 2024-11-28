document.getElementById("recommend-button").addEventListener("click", async () => {
  const interests = document.getElementById("interest-input").value.trim();
  const platform = document.getElementById("platform-select").value;

  if (!interests) {
    alert("Por favor, escribe tus intereses.");
    return;
  }

  if (!platform) {
    alert("Por favor, selecciona una plataforma.");
    return;
  }

  // Función para llamar a la API de OpenAI
  const fetchRecommendationsFromOpenAI = async (interests, platform) => {
    const apiKey = "sk-proj-rEqovfxf0olQV01dndvQT3BlbkFJ9c2l5Bu8z6kMoNqPW2DA"; // Reemplaza con tu clave
    const endpoint = "https://api.openai.com/v1/completions";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Genera una lista de cursos y recursos sobre ${interests} en la plataforma ${platform}. Incluye enlaces de ejemplo.`,
          max_tokens: 100,
          temperature: 0.7
        })
      });

      if (!response.ok) {
        throw new Error("Error al obtener recomendaciones de OpenAI.");
      }

      const data = await response.json();
      return data.choices[0].text.trim();
    } catch (error) {
      console.error(error);
      alert("Hubo un problema al obtener las recomendaciones. Inténtalo más tarde.");
      return null;
    }
  };

  // Generar recomendaciones
  const recommendations = await fetchRecommendationsFromOpenAI(interests, platform);

  if (!recommendations) {
    document.getElementById("recommendations-box").innerHTML =
      "<p>No se encontraron recomendaciones para los intereses seleccionados.</p>";
    return;
  }

  // Mostrar recomendaciones
  document.getElementById("recommendations-box").innerHTML = `<h3>Recomendaciones:</h3><p>${recommendations}</p>`;
});
