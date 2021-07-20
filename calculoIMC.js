function calcular() {
    var IMC;
    var resultado = document.getElementById("resultado");

    var peso = parseInt(document.getElementById("peso").value);
    document.getElementById("peso-val").textContent = peso + " kg";

    var altura = parseInt(document.getElementById("altura").value);
    document.getElementById("altura-val").textContent = altura + " cm";
    
    var IMC = (peso / ((altura / 100) * (altura / 100))).toFixed(2);

    resultado.textContent = IMC;

    if (IMC < 16) {
        category = "Delgadez severa";
        resultado.style.color = "#ffc44d";
    }
    else if (IMC < 17) {
        category = "Delgadez moderada";
        resultado.style.color = "#0be881";
    }
    else if (IMC < 18.5) {
        category = "Delgadez aceptable";
        resultado.style.color = "#ff884d";
    }
    else if (IMC < 25) {
        category = "Peso Normal";
        resultado.style.color = "#ff884d";
    }
    else if (IMC < 30) {
        category = "Sobrepeso";
        resultado.style.color = "#ff884d";
    }
    else {
        category = "Obesidad";
        resultado.style.color = "#ff5e57";
    }
    document.getElementById("category").textContent = category;
}