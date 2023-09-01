const axios = require('axios'); // Asegúrate de tener instalada la biblioteca axios

// URL de la API que deseas acceder
const apiUrl = "https://api.example.com/data";

// Realiza una solicitud GET a la API
axios.get(apiUrl)
  .then(response => {
    // La respuesta contiene los datos en formato JSON
    const responseData = response.data;
    console.log(responseData);
    // Aquí puedes trabajar con los datos
  })
  .catch(error => {
    console.error("Error al obtener datos:", error);
  });
