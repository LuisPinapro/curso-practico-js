//Codigo del Cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado es: " + areaCuadrado);
console.groupEnd();

//Codigo del triangulo
console.group("Triangulo");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 7;
const baseTriangulo = 4;
const alturaTriangulo = 4.5;

console.log("Los lados del trianguo y la altura miden: " + ladoTriangulo1 + ", " + ladoTriangulo2 + ", " + baseTriangulo + ", " + alturaTriangulo);
const perimetoTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimeto de mi triangulo es : " + perimetoTriangulo);
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El area del triangulo es: " + areaTriangulo);
console.groupEnd();

//Codigo circulos
console.group("Circulos")
// Radio
const radioCirculo = 4;
// PI
const pi = Math.PI;
//Diametro
const diametroCirculo = radioCirculo * 2;
//Circunferencia
const perimetroCirculo = diametroCirculo * pi;
console.log("EL perimetro del circulo es: " + perimetroCirculo);
//Info
console.log("El radio del circulo es: " + radioCirculo + "Diametro del circulo: " + diametroCirculo);
//Area
const areaCirculo = (radioCirculo * radioCirculo) * pi;
console.log("El area del circulo es: " + areaCirculo);
console.groupEnd();
 //Uso de funciones
console.group("Uso de funciones en figuras geometricas")
console.log("Ingresa en las funciones lo requerido: ");
//Cuadrado
function perimetroCuadrado2(lado){
    return lado * 4;
}
function AreaCuadrado2(lado){
    return lado * lado;
}
//Triangulo 
function perimetroTriangulo2(lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
}
function areaTriangulo2(base, altura){
    return (base * altura) / 2;
}
//Circulo
function perimetroCirculo2(radio){
    return (radio * 2) * (pi);
}
function areaCirculo2(radio){
    return pi * (radio * radio);
}
//triangulo Isoceles
function alturaTrianguloIsoceles(ladoA, ladoB, base){
    if(ladoA === ladoB && base !== ladoA && base !== ladoB){
        altura = Math.sqrt((ladoA*ladoA) - ((base*base)/4));
        return altura;
    } 
    else{
        return "Los lados no corresponden a un triangulo Isoseles"
    }
}
console.groupEnd();



//Interactuando con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado2(value);
    const resp = document.getElementById("respSquare");
    resp.innerText = perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = AreaCuadrado2(value);
    const resp = document.getElementById("respSquare");
    resp.innerText = area;
}
function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("InputTriangulo1");
    const value1 = input1.value;
    const input2 = document.getElementById("InputTriangulo2");
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3");
    const value3 = input3.value;
    const perimetro = perimetroTriangulo2(value1, value2, value3);
    const resp = document.getElementById("respTri");
    resp.innerText = perimetro;
}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("InputTriangulo3");
    const value1 = input1.value;
    const input2 = document.getElementById("InputAltura");
    const value2 = input2.value;
    const area = areaTriangulo2(value1, value2);
    const resp = document.getElementById("respTri");
    resp.innerText = area;
}
function calcularPerimetroCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const value = input1.value;
    const perimetro = perimetroCirculo2(value);
    const resp = document.getElementById("respCir");
    resp.innerText = perimetro;
}
function calcularAreaCirculo(){
    const input1 = document.getElementById("inputCirculo");
    const value = input1.value;
    const area = areaCirculo2(value);
    const resp = document.getElementById("respCir");
    resp.innerText = area;

}
function calcularAlturaIsoceles(){
    const input = document.getElementById("inputlado1");
    const value = input.value;
    const input1 = document.getElementById("inputlado2");
    const value1 = input1.value;
    const input2 = document.getElementById("inputbase");
    const value2 = input2.value;
    const altura = alturaTrianguloIsoceles(value, value1, value2);
    const resp = document.getElementById("respTriIso");
    resp.innerText = altura;
}