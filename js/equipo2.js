document.addEventListener("DOMContentLoaded",cargarDatosIniciales);

function cargarDatosIniciales() {
  fetch("data/doctores2.json")
  .then((response) => response.json())
  .then((data) =>{
      cargarEquipoMedico(data);
      filtrarMedicos();
  })
}

//document.addEventListener("DOMContentLoaded", function() {
function cargarEquipoMedico(data) {
    // Seleccionar el contenedor donde vamos a mostrar la información
    const doctorInfoContainer = document.getElementById("doctor-info");

     // Recorrer todos los doctores en el array `doctores`
    data.forEach(doctor => {
        const { nombre, especialidad, anos_experiencia, disponibilidad, contacto, foto} = doctor;
    // Crear el HTML para mostrar la información en el formato de tarjeta
    const doctorCard = `
      <div class="col">
        <div class="card shadow-sm border-light rounded h-100">
          <img src="${foto}" class="card-img-top" alt="Imagen de ${nombre}" style="object-fit: contain; height: 200px;">
          <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Años de experiencia: ${anos_experiencia}</h6>
            <p class="card-text">${especialidad}</p>
            <h6>Horarios de disponibilidad:</h6>
            <ul>
              ${Object.entries(disponibilidad).map(([dia, horario]) => `
                <li><strong>${dia.charAt(0).toUpperCase() + dia.slice(1)}:</strong> ${horario}</li>
              `).join('')}
            </ul>
            <h6>Contacto:</h6>
            <p><strong>Teléfono:</strong> ${contacto.telefono}</p>
            <p><strong>Correo electrónico:</strong> ${contacto.email}</p>
          </div>
        </div>
      </div>
    `;
  
    // Insertar el HTML generado dentro del contenedor
    doctorInfoContainer.innerHTML += doctorCard;
  });
}

// Función para mostrar solo los médicos con más de 5 años de experiencia
function filtrarMedicos() {
    // Obtener todas las tarjetas de médicos
    const medicos = document.querySelectorAll('.col');

    // Iterar sobre cada tarjeta de médico
    medicos.forEach(medico => {
        // Obtener los años de experiencia desde el contenido de la etiqueta <h6>
        const experienciaText = medico.querySelector('h6').textContent; // Texto dentro del <h6>
        const experiencia = parseInt(experienciaText.replace('Años de experiencia: ', '').trim()); // Extraer el número
        
        // Si la experiencia es 5 años o menos, ocultamos la tarjeta
        if (experiencia <= 5) {
            medico.style.display = 'none';
        } else {
            medico.style.display = 'block';
        }
    });
}

// Llamar a la función para filtrar los médicos cuando se cargue la página
//document.addEventListener('DOMContentLoaded', filtrarMedicos);