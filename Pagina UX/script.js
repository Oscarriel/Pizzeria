// Obtiene la referencia al área donde se mostrará la información del Power-Up
const infoDisplay = document.getElementById('info-display');

// Datos de los Power-Ups (8 rebanadas)
const sliceData = {
    'slice-2': { 
    title: '8-BIT PEPPERONI', 
    text: '¡Salud al 100%! Has desbloqueado el Power-Up más potente.' 
  },
  'slice-1': { 
    title: 'GREEN SHIELD & BACON BLAST', 
    text: '¡Combinación estratégica! El brócoli te da un escudo de defensa (+20 DEF) y el bacon un ataque sorpresa (+30 ATK). ¡Perfecto para los niveles difíciles!' 
  },
  'slice-8': { 
    title: 'SHADOW FORAGER\'S SLICE', 
    text: 'Explora el lado oscuro... pero delicioso. Las aceitunas te otorgan visión nocturna y los champiñones, un sprint de velocidad (+15 SPD) para escapar de los enemigos.' 
  },
  'slice-4': { 
    title: 'TROPICAL RUMBLE', 
    text: '¡ERROR 404: Lógica no encontrada! Esta rebanada genera controversia, pero su dulzura te da un \'Charm\' que confunde a los enemigos. ¡Atrévete con el desafío!' 
  },
  'slice-5': { 
    title: 'SPICY MUSHROOM MAZE', 
    text: '¡Cuidado, es picante! Los jalapeños desorientan a tus rivales (-10 ATK a ellos) y los champiñones te permiten encontrar el camino oculto.' 
  },
  'slice-6': { 
    title: 'CHEESE OVERLOAD (LVL MAX)', 
    text: '¡Felicidades, has alcanzado el máximo nivel de queso! Esta rebanada regenera tu energía a tope y te da una barrera de curación pasiva.' 
  },
  'slice-7': { 
    title: 'ITALIAN LEGACY BOOST', 
    text: 'Un clásico atemporal. Restaura tu stamina y te da un aura de \'Encanto Antiguo\' que pacifica a los monstruos de bajo nivel. ¡Pura historia!' 
  },
  'slice-3': { 
    title: 'ONION RING OF POWER', 
    text: 'La cebolla potencia tus sentidos (+10 PER) y el pepperoni te da un impulso de fuerza bruta (+20 STR). ¡Ideal para enfrentamientos directos!'  }
};

// 1. Obtener todas las rebanadas
const slices = document.querySelectorAll('.slice');

// 2. Asignar el evento 'click' a cada rebanada
slices.forEach(slice => {
    slice.addEventListener('click', handleSliceClick);
});

/**
 * Función que se ejecuta cuando se hace clic en una rebanada.
 * Muestra el Power-Up correspondiente en el panel de información.
 * @param {Event} event - El objeto de evento del clic.
 */
function handleSliceClick(event) {
    // Obtiene el ID del botón que fue clickeado (ej: 'slice-1')
    const sliceId = event.currentTarget.id; 
    
    // Busca los datos correspondientes en el objeto sliceData
    const data = sliceData[sliceId];

    if (data && infoDisplay) {
        // Actualiza el contenido del div #info-display con el Power-Up
        infoDisplay.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.text}</p>
        `;
        
        // OPCIONAL: Deshabilitar la rebanada para que no se pueda volver a hacer clic (efecto de "recogida")
        // event.currentTarget.disabled = true; 
        // event.currentTarget.style.cursor = 'default';
    }
}