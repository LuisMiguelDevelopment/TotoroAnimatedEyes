//comments in English and Spanish
//Totoro Animated
//By : Miguel Alvarez


document.addEventListener('mousemove',(e)=>{ // Agrega un evento de escucha para el movimiento del ratón en el documento || Add an event listener for mouse movement on the document.
    console.log(e)

    const mouseX = e.clientX; // Obtiene las coordenadas horizontales del puntero del ratón ||  Get the horizontal coordinates of the mouse pointer.
    const mouseY = e.clientY; // Obtiene las coordenadas verticales del puntero del ratón ||  Get the vertical coordinates of the mouse pointer.

    const anchor = document.getElementById('anchor');// Obtiene el elemento con el id 'anchor' del DOM || Get the element with the id 'anchor' from the DOM.
    const rekt = anchor.getBoundingClientRect(); // Obtiene las dimensiones y la posición del elemento 'anchor' || Get the dimensions and position of the 'anchor' element.

    const anchorX = rekt.left + rekt.width / 2; // Calcula la coordenada horizontal del centro del elemento 'anchor' ||  Calculate the horizontal coordinate of the center of the 'anchor' element.
    const anchorY = rekt.top + rekt.height / 2; // Calcula la coordenada vertical del centro del elemento 'anchor' || Calculate the vertical coordinate of the center of the 'anchor' element.

    const angleDeg = angle(mouseX , mouseY , anchorX , anchorY); // Calcula el ángulo entre el puntero del ratón y el centro del elemento 'anchor' || Calculate the angle between the mouse pointer and the center of the 'anchor' element.

    console.log(angleDeg);

    const eyes = document.querySelectorAll('.eye');// Selecciona todos los elementos con la clase 'eye' ||  Select all elements with the class 'eye'

    eyes.forEach(eye=>{ // Itera sobre cada elemento 'eye' || // Iterate over each 'eye' element
        eye.style.transform = `rotate(${90 + angleDeg }deg)`; // Aplica una transformación de rotación a cada 'eye' según el ángulo calculado ||  Apply a rotation transformation to each 'eye' based on the calculated angle.
    })

})


function angle(cx , cy , ex , ey){ //  Define una función para calcular el ángulo entre dos puntos ||  Define a function to calculate the angle between two points.
    const dy = ey - cy; // Calcula la diferencia vertical entre los dos puntos ||  Calculate the vertical difference between the two points
    const dx = ex -cx; //  Calcula la diferencia horizontal entre los dos puntos ||  Calculate the horizontal difference between the two points
    const rad = Math.atan2(dy , dx); //range (-PI, PI] // Calcula el ángulo en radianes entre los dos puntos || Calculate the angle in radians between the two points.
    const deg = rad * 180 / Math.PI; // rads to degs , range (-180 , 180] // Convierte el ángulo de radianes a grados ||  Convert the angle from radians to degrees.
   
    // Devuelve el ángulo en grados  || Return the angle in degrees
    return deg;
}


const anchor = document.getElementById('anchor'); // Seleccionar el elemento con el id 'anchor' del DOM || Select the element with the id 'anchor' from the DOM

const totoroAzul = document.querySelector('.totoroAzul'); // Seleccionar el elemento con la clase 'totoroAzul' del DOM || Select the element with the class 'totoroAzul' from the DOM

const totoro = document.querySelector('.totoro'); // // Seleccionar el elemento con la clase 'totoro' del DOM || Select the element with the class 'totoro' from the DOM

const totoroWhite = document.querySelector('.totoroWhite'); // // Seleccionar el elemento con la clase 'totoroWhite' del DOM || Select the element with the class 'totoroWhite' from the DOM


anchor.onmouseover = function() {  // Agregar evento mouseover al elemento 'anchor' || Add mouseover event to the 'anchor' element
   
    totoroAzul.classList.add("funciona"); // Agregar la clase 'funciona' al elemento 'totoroAzul' || Add the 'funciona' class to the 'totoroAzul' element
    
    totoroWhite.classList.add("white");// Agregar la clase 'white' al elemento 'totoroWhite' || Add the 'white' class to the 'totoroWhite' element
    
    totoro.src = "img/totoro.png";  // Cambiar la fuente de la imagen 'totoro' a 'img/totoro.png' || Change the source of the 'totoro' image to 'img/totoro.png'
};


anchor.addEventListener('mouseout', function() { // Agregar evento mouseout al elemento 'anchor' || Add mouseout event to the 'anchor' element
    
    totoroAzul.classList.remove("funciona"); // Quitar la clase 'funciona' del elemento 'totoroAzul' || Remove the 'funciona' class from the 'totoroAzul' element
    
    totoroWhite.classList.remove("white");  // Quitar la clase 'white' del elemento 'totoroWhite' || Remove the 'white' class from the 'totoroWhite' element
    
    totoro.src = "img/totoroboca.png";// Cambiar la fuente de la imagen 'totoro' a 'img/totoroboca.png' || Change the source of the 'totoro' image to 'img/totoroboca.png'
});



//Muchas gracias // Thank you very much 
