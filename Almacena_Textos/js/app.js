//Variables 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#listaTweets');
let tweets = [];


//Event Listeners
eventListeners();

function eventListeners(){
    formulario.addEventListener('submit', agregarTweet);
}

//Funciones
function agregarTweet(e){
    e.preventDefault();


    //Text Area donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;
    
    //validacion
    if(tweet === ''){
        mostrarError('Un mensaje no puede ir vacio');
        return; //evita que se ejecuten mas lineas
    }

    const tweetObj = {
        id: Date.now(),
        texto: tweet
    }
    //Añadiendo al array de tweets
    tweets = [...tweets, tweetObj];
   
    //Crear el html
    //crearHTML();

    //reiniciar el formulario
    formulario.reset();
}


//Mostrar mensaje de error
function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //Insertar en el contenedor
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //Elimina la alerta despues de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);
}


//Muestra el listado de los tweets
function crearHTML(){

    //limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            //
            const li = document.createElement('li');

            //añadir el texto
            li.innerText = tweet.tweet;

            //insertar en el HTML
            listaTweets.appendChild();
        });
    }
}

// //Limpiar el HTML
// function limpiarHTML(){
//     while(listaTweets.firstChild){
//         listaTweets.removeChild(listaTweets.firstChild);
//     }
// } 




















