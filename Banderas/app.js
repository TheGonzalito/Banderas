quest = ["Cual es la bandera de argentina?", "Cual es la bandera de brasil?", "Cual es la bandera de peru?", "Cual es la bandera de canada?"];
banderas = ["argentina", "brasil", "peru", "canada"];
aleatorioid = ["bandera","bandera1"];

max = 1;
min = 0;
numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
numeroAleatorio1 = Math.floor(Math.random() * (max - min + 1)) + min;

numaleatorio = Math.floor(Math.random() * quest.length);
numaleatorio1 = Math.floor(Math.random() * banderas.length);
//numaleatorioid = Math.floor(Math.random() * aleatorioid.length);
//numaleatorioid1 = Math.floor(Math.random() * aleatorioid.length);


var imgbandera = document.getElementById(aleatorioid[numeroAleatorio]);
var imgbandera1 = document.getElementById(aleatorioid[numeroAleatorio1]);
var texto = document.getElementById("pregunta");

idbandera = imgbandera.getAttribute('id');
idbandera1 = imgbandera1.getAttribute('id');
console.log( "Primer ID " + idbandera);
console.log( "Primer ID " + idbandera1);

if (imgbandera1.getAttribute('id') == imgbandera.getAttribute('id')){
    while (imgbandera1.getAttribute('id') == imgbandera.getAttribute('id')){
        numeroAleatorio1 = Math.floor(Math.random() * (max - min + 1)) + min;
        var imgbandera1 = document.getElementById(aleatorioid[numeroAleatorio1]);
    }
}

console.log(idbandera);
console.log(idbandera1);

questAleatoria = quest[numaleatorio];
texto.innerHTML = questAleatoria;
banderaAleatoria = banderas[numaleatorio];

if (questAleatoria.includes(banderaAleatoria)){
    console.log(questAleatoria);
    console.log(banderaAleatoria);
    imgbandera.src = "imgs/" + banderaAleatoria + ".png";
}

segundabandera = banderas[numaleatorio1]
if (segundabandera != banderaAleatoria){
    imgbandera1.src = "imgs/" + segundabandera + ".png";
}
else{
    while (segundabandera == banderaAleatoria){
        numaleatorio1 = Math.floor(Math.random() * quest.length);
        segundabandera = banderas[numaleatorio1];

        if (segundabandera != banderaAleatoria){
            imgbandera1.src = "imgs/" + segundabandera + ".png";
        }
    }
}
