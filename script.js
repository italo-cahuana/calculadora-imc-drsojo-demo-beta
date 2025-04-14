document.getElementById('calcular').addEventListener('click', () => main());

function main () {
    // Obtenemos el valor en numero de los input's de peso y altura.
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);

    // Verificamos si el usuario introduce la altura en cm lo convertimos a metros.
    if (altura > 3) { 
        altura = altura / 100
    }
    // Si esta en metros lo dejamos así y avanzamos.
    formula(peso, altura);
}

function formula (peso, altura) {
    console.log(peso, altura)

    // Formula para calcular el IMC: IMC = Peso(kg) / Estatura(m²) 
    let resultado =  peso / (altura * altura); 
    // Tambien pueden utilizar Math.round si desean que no se muestre ningún decimal
    console.log(resultado)
    let imc = resultado.toFixed(1); // Quitamos el exceso de decimales, yo utilizo .toFixed(1) para que me muestre solo un decimal
    return resultados(imc, peso, altura);
}

function resultados(imc, peso, altura) {
    let clasificacion, tips, imagen = "";

    if (!peso || !altura) {
        imc = "es nulo, introduce tu peso y altura en las casillas correspondientes"
        clasificacion = "No se pudo calcular, introduce los valores";
        tips = "Recuerda tu peso debe ser en KG y tu altura puede ser en metros o cm";
        imagen = "src/img/infoerror.png";
    } else if (imc < 18.5) {
        clasificacion = "Bajo peso";
        tips = "Trata de ingerir mas comida y ganar masa musculuar con un poco de ejercicio";
        imagen = "src/img/bajopeso.png";
    } else if (imc < 24.9) {
        clasificacion = "Peso normal";
        tips = "Tienes un peso sano, sigue así y mantente saludable";
        imagen = "src/img/pesonormal.png";
    } else if (imc < 29.9) {
        clasificacion = "Sobrepeso";
        tips = "Trata de hacer ejercicio para perdida de grasa e ingerir menos alimentos altos en carbohidratos";
        imagen = "src/img/sobrepeso.png"
    } else if (imc < 34.9) {
        clasificacion = "Obesidad tipo I";
        tips = "Trata de hacer ejercicio y entrar en dieta combinada con buenos habitos";
        imagen = "src/img/obesidad2.png";
    } else if (imc < 39.9) {
        clasificacion = "Obesidad tipo II";
        tips = "Trara de realizar mucho mas ejercicio combinado con alimentacion saludable y dieta";
        imagen = "src/img/obesidad2.png";
    } else {
        clasificacion = "Obesidad tipo III (mórbida)";
        tips = "Trata de hacer ejercicio y buscar ayuda profesional de manera inmediata";
        imagen = "src/img/obesidad2.png";
    }

    document.getElementById('resultado').innerHTML = 
    `<div class="resultado-container">
        <img src="${imagen}" alt="${clasificacion}" class="resultado-imagen">
        <div class="resultado-texto">
            <strong>Tu IMC es ${imc}</strong>
            <br>→ <span class="resultado-clasificacion">Clasificación: ${clasificacion}</span><br>
            <span class="resultado-tips">${tips}</span>
        </div>
    </div>`;



    // document.getElementById('resultado').innerHTML = 
    //     `Tu Indice de Masas Corporal es ${imc}<br>→ Clasificación: ${clasificacion}<br>${tips}`;
}