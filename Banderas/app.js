quest = ["Cual es la bandera de argentina?", "Cual es la bandera de brasil?", "Cual es la bandera de peru?", "Cual es la bandera de canada?"];
banderas = ["argentina", "brasil", "peru", "canada"];
aleatorioid = ["bandera","bandera1"];
imagenbanderas = ["imgbandera","imgbandera1"];

numaleatorio = Math.floor(Math.random() * quest.length);
numaleatorio1 = Math.floor(Math.random() * banderas.length);
//numaleatorioid = Math.floor(Math.random() * aleatorioid.length);
//numaleatorioid1 = Math.floor(Math.random() * aleatorioid.length);


var imgbandera = document.getElementById("bandera");
var imgbandera1 = document.getElementById("bandera1");
var texto = document.getElementById("pregunta");



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