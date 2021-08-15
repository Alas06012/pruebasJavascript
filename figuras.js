
//Cuadrado
function perimetroCuadrado(ladoCuadrado){

    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado){

    return ladoCuadrado * ladoCuadrado;
}



//Triángulo

function perimetroTriangulo(ladoTrian1, ladoTrian2, ladoTrian3){

    return ladoTrian1 + ladoTrian2 + ladoTrian3;
}

function areaTriangulo(base, altura){

    return (base * altura)/2;
}



//Circulo


function perimetroCirculo(radio){

    return (2 * Math.PI * radio);

}



function areaCirculo(radio){

    const areaCirculo = Math.PI*(radio**2);

    return areaCirculo;
}



//Aqui interactuamos con html

//Perimetros
function calcPerimetroCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultP= document.getElementById("ResultadoP");

    if (value == 0) {
        
        resultP.innerText = "Existen campos vacíos.";
    }else{
        resultP.innerText = "Resultado: "+perimetroCuadrado(value).toFixed(2) + " cm";
    }

    



}



function calcPerimetroTriangulo(){

    const sideA = document.getElementById("inputTriangulo1");
    const sideB = document.getElementById("inputTriangulo2");
    const base = document.getElementById("inputTrianguloBase");
    const resultP2= document.getElementById("ResultadoP2");
    const value1 = sideA.value;
    const value2 = sideB.value;
    const value3 = base.value;
    
    if (value1 == 0 || value2 == 0 || value3 == 0) {
        
        resultP2.innerText = "Existen campos vacíos.";

    }else {

        resultP2.innerText = "Resultado: "+perimetroTriangulo(value1, value2, value3)+ " cm";
    }
    
}

function calcPerimetroCirculo(){

    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultP3= document.getElementById("ResultadoP3");

    if (value == 0) {
        resultP3.innerText = "Existen campos vacíos."
    }else{

        resultP3.innerText = "Resultado: "+perimetroCirculo(value).toFixed(2) + " cm";

    }

    



}



//Areas figuras
function calcAreaCuadrado(){

    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const resultP= document.getElementById("ResultadoP");

    if (value == 0) {
        
        resultP.innerText = "Existen campos vacíos.";
    }else{

        resultP.innerText = "Resultado: "+areaCuadrado(value).toFixed(2) + " cm²";
    }
    

    

}


function calcAreaTriangulo(){

    const value1 = document.getElementById("inputTrianguloBase");
    const value2 = document.getElementById("inputTrianguloHeight");
    const resultP2= document.getElementById("ResultadoP2");
    
    const base = value1.value;
    const height = value2.value;

    if ( height == 0 || base == 0) {
        
        resultP2.innerText = "Existen campos vacíos.";

    }else {

        resultP2.innerText = "Resultado: "+areaTriangulo(base, height).toFixed(2) + " cm²";
    }
    
}


function calcAreaCirculo(){

    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const resultP3 = document.getElementById("ResultadoP3");

    if (value == 0) {
        
        resultP3.innerText = "Existen campos vacíos."
    }else{

        resultP3.innerText = "Resultado: "+areaCirculo(value).toFixed(2) + " cm²";
    }

    

}

//////////////////////////////////////DESCUENTOS/////////////////////////////

function calcDiscount(){

    const input1 = document.getElementById("inputPrice");
    const precio = input1.value;
    const input2 = document.getElementById("inputDiscount");
    const discount = input2.value;
    const ResultadoDiscount = document.getElementById("ResultadoDiscount");

    if (precio == 0) {

        ResultadoDiscount.innerText = "Ingrese el precio.";
        
    }else{

        const precioF = (discount * precio) / 100;

        ResultadoDiscount.innerText = "Descuento "+discount+"%\n" +"$ " + precioF;


    }

}


///////////////////////////////////////////////Estadistica////////////////////



const lista1 = [100,200,300,500];
let sumalista1 = 0;

for (let i = 0; i < lista1.length; i++) {
  
    sumalista1 = sumalista1 + lista1[i];
    
}