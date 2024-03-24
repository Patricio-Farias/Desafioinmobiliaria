
//funcion agregarpropiedades acepta dos propiedades
function agregarPropiedades(propiedades, tipo) {
    const contenedor = document.getElementById(`${tipo.toLowerCase()}Container`);

    //se inicia for recorreda array propiedades

    for (let i = 0; i < propiedades.length; i++) {

      //determina los iconos a mostrar smoke o pets
      const smokeIcon = propiedades[i].smoke ? '🚬' : '🚭';
      const petsIcon = propiedades[i].pets ? '🐾' : '🚫';

      //establecen los mensajes a mostrar
      const smokeMessage = propiedades[i].smoke ? 'Permitido fumar' : 'No se permite fumar';
      const petsMessage = propiedades[i].pets ? 'Mascotas permitidas' : 'No se permiten mascotas';

      //determina las clases css a aplicar
      const smokeClass = propiedades[i].smoke ? 'permitido' : 'prohibido';
      const petsClass = propiedades[i].pets ? 'permitido' : 'prohibido';

      //representa estructura html de un elemento que sera añadido al contenedor
      const template = `
        <div class="contenedor">
            <div class="propiedad">
                    <img src="${propiedades[i].src}" alt="${propiedades[i].nombre}"  onclick="mostrarAlerta('${propiedades[i].nombre}', '${smokeMessage}', '${petsMessage}')">
                <div class="interior">
                    <h3>${propiedades[i].nombre}</h3>
                    <p>${propiedades[i].descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> Ubicación: ${propiedades[i].ubicacion}</p>
                    <p><i class="fas fa-bed"></i> Habitaciones: ${propiedades[i].habitaciones}</p>
                    <p><i class="fas fa-bath"></i> Baños: ${propiedades[i].banos}</p>
                    <p>${tipo === 'Venta' ? 'Costo' : 'Costo Mensual'}: $${tipo === 'Venta' ? propiedades[i].costo : propiedades[i].costo}</p>
                    <p>Fumar: <span class="${smokeClass}">${smokeIcon} ${smokeMessage}</span></p>
                    <p>Mascotas: <span class="${petsClass}">${petsIcon} ${petsMessage}</span></p>
                </div>
            </div>
        </div>
      `;

      //agrega la plantilla html al final del contenido del elemento contenedor
      contenedor.innerHTML += template;

      //cierre funcion agregar propiedades
    }
  }

  //funcion mostraralerta acepta tres parametros nombrepropiedad, smokemessage, petsmessage

  function mostrarAlerta(nombrePropiedad, smokeMessage, petsMessage) {

    //determinan el icono a mostrar
    const smokeIconToShow = smokeMessage.includes('Permitido') ? '🚬' : '🚭';
    const petsIconToShow = petsMessage.includes('Mascotas') ? '🐾' : '🚫';
  
    //crea mensaje de alerta en html 
    const alertMessage = `
      <strong>${nombrePropiedad}</strong>
      <br>
      <br>${smokeIconToShow} ${smokeMessage} 
      <br>${petsIconToShow} ${petsMessage}
    `;
  
    //funcion alertcentered mostrar mensaje de alerta
    alertCentered(alertMessage);

    //termina func mostraralerta
  }
  
  //funcion alercentered acepta parametro message
  function alertCentered(message) {

    //crea div en el doc y establecen estilo para aparecer en ventana emergente
    const alertDiv = document.createElement('div');
    alertDiv.style.position = 'fixed';
    alertDiv.style.top = '50%';
    alertDiv.style.left = '50%';
    alertDiv.style.transform = 'translate(-50%, -50%)';
    alertDiv.style.backgroundColor = 'white';
    alertDiv.style.padding = '40px'; 
    alertDiv.style.borderRadius = '14px';
    alertDiv.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.5)'; 
    alertDiv.style.zIndex = '9999';
    alertDiv.style.fontSize = '18px';
    
    //establece contenido elemento div
    alertDiv.innerHTML = `<div>${message}</div>`;
  
    //añade div al cuerpo del doc
    document.body.appendChild(alertDiv);
  
    //temporizador elimina elemento div de ventana emergente despues de 5 segundos
    setTimeout(() => {
        document.body.removeChild(alertDiv);
      }, 5000);

      //termina funcion alertcentered
    }