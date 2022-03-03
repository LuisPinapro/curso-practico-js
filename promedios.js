console.group("Promedio")
const lista1 = [
    100, 200, 300, 400, 500
];

let sumaLista1 = 0;
for(let i = 0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

//funciones
function calcularMediaAritmetica(lista){
    /*let sumaLista = 0;
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, element){
            return valorAcumulado + element;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista
}
console.groupEnd();

//Mediana
console.group("Mediana");
const lista2 = [
    200, 100, 500, 400, 600, 550, 550, 400, 200, 100, 250, 400
];
function compare(a, b){
    return a - b;
}
lista2.sort(compare);
const mitadLista1 = parseInt(lista2.length / 2);

function isPar(num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

function mediana(){
    let mediana;
    if(isPar(lista2.length)){
        const element1 = lista2[mitadLista1 - 1];
        const element2 = lista2[mitadLista1];
        const average = calcularMediaAritmetica([element1, element2]);
        mediana = average;
        return mediana;
    }   
    else{
        mediana = lista2[mitadLista1]
        return mediana
    }
}
console.groupEnd();
//moda
console.group("Moda")
const lista1Count = {};

// Es un ciclo que recorre todo el array y cuando encuentra un nuevo elemento le pone 1
// y cuando lo enuentra de nuevo le suma 1 de nuevo
lista2.map(function (element){
    if(lista1Count[element]){
        lista1Count[element] += 1;
    }
    else{
        lista1Count[element] = 1;
    }

});
//Se hace la funcion en sort para cuando se resten si da 1 es igual si es 0 es menor y si es negativo en mayor
const lista3Array = Object.entries(lista1Count).sort(
    function(valorAcumulado, newValor){
        return valorAcumulado[1] - newValor[1];
    }
);
const mode = lista3Array[lista3Array.length - 1]
console.groupEnd()
//Media Armonica
console.group("Media armonica");
const vel = [120, 20, 100, 130];

function mediaArmonica(vel1){
    var sumVel = 0;
    for (const iterator of vel1) {
        sumVel += 1/iterator 
    }
    return vel1.length/sumVel;
}
console.groupEnd();
console.group("Funciones html")
//funciones y html

lista2.forEach(element => {
    console.log(element)

});
function mostrarLista(){
    const respList = document.getElementById("mostrarlista")
    respList.innerText = ""
    lista2.forEach(element => {
        respList.innerText += " " + element;
    });
   
}
function average(){
    const averg = calcularMediaAritmetica(lista2);
    const resp = document.getElementById("respFinal")
    resp.innerText = `El promedio de la lista es: ${averg}`; 
}
function medium(){
    const middle =  mediana();
    const resp = document.getElementById("respFinal")
    resp.innerText = `La mediana de la lista es: ${middle}`; 

}
function calculatemode(){
    const mode1 = mode [0]
    const mode2 = mode [1] 
    const resp = document.getElementById("respFinal")
    resp.innerText = `La moda de la lista es: ${mode1} con ${mode2} repeticiones`; 
}
function calculateMediaArmonica(){
    const resp = document.getElementById("respArmonica")
    resp.innerText = `La media Armonica es: ${mediaArmonica(vel)} km/h`
}
console.groupEnd();