// Funcion que genera un numero random entre 2 valores
function numeroAzar(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// <-------------- Variables ------------------->
quest = ["Cual es la bandera de argentina?", "Cual es la bandera de brasil?", "Cual es la bandera de peru?", "Cual es la bandera de canada?"];
banderas = ["argentina", "brasil", "peru", "canada"];
aleatorioid = ["bandera","bandera1"];

var questAleatoria = quest[numeroAzar(0,3)];
var banderaAleatoria = banderas[numeroAzar(0,3)];
var banderaAleatoria1 = banderas[numeroAzar(0,3)];
var imgbandera = document.getElementById(aleatorioid[numeroAzar(0,1)]);
var imgbandera1;
// <--------------------------------------------->

// Funcion que verifica que los id dados a las etiquetas <img> del html no sean iguales
function VerificarId(bandera){
    
    if (bandera.getAttribute('id') == 'bandera'){
        return imgbandera1 = document.getElementById('bandera1');
    }
    else {
        return imgbandera1 = document.getElementById('bandera');
    }
}

VerificarId(imgbandera);

console.log(imgbandera.getAttribute('id'));
console.log(imgbandera1.getAttribute('id'));

// Recupera la etiqueta <p> del html cuyo ID es "pregunta" y se le coloca la pregunta generada
var texto = document.getElementById("pregunta");
texto.innerHTML = questAleatoria;

// Funcion que coloca las imagenes de las banderas, verificando antes que no sean iguales
function PutImg (){

    if (questAleatoria.indexOf(banderaAleatoria) != -1){
        console.log(questAleatoria);
        console.log(banderaAleatoria);
        imgbandera.src = "imgs/" + banderaAleatoria + ".png";
    
    }else {
        while (questAleatoria.indexOf(banderaAleatoria) == -1){
            banderaAleatoria = banderas[numeroAzar(0,3)];
    
            if (questAleatoria.indexOf(banderaAleatoria) != -1){
                console.log(questAleatoria);
                console.log(banderaAleatoria);
                imgbandera.src = "imgs/" + banderaAleatoria + ".png";
                break;
            }
        }
    }
    
    if (banderaAleatoria1 != banderaAleatoria){
        imgbandera1.src = "imgs/" + banderaAleatoria1 + ".png";
    }
    else {
      
        if (banderaAleatoria1 != banderaAleatoria){
            imgbandera1.src = "imgs/" + banderaAleatoria1 + ".png";
        }
        else{
            while (banderaAleatoria1 == banderaAleatoria){
                banderaAleatoria1 = banderas[numeroAzar(0,3)];
        
                if (banderaAleatoria1 != banderaAleatoria){
                    imgbandera1.src = "imgs/" + banderaAleatoria1 + ".png";
                }
            }
        }
    
    }
}

PutImg();

// Recuperar todas las etiquetas <img> que haya en el html
var imagenes = document.getElementsByTagName("img");

// Funcion que al hacer click en una de las imagenes verifica si la imagen clickeada es la correcta o no
function VerificarCorrecta (arr) {
    for (let i=0; i < arr.length; i++){
        arr[i].addEventListener('click', function () {
            if (this.getAttribute('src').includes(banderaAleatoria)){
                console.log("Es la correcta");
            }
            else {
                console.log("No es la correcta");
            }
        })
    }
}

VerificarCorrecta(imagenes);
