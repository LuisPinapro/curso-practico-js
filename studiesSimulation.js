// Hacer una tabla con el promedio, la moda, la mediana y los top 3 salarios de Colombia

// Primero mostraremos todos los salarios con sus nombres

const $table = document.querySelector("#viewTable");

//Recorrer todos los salarios
colombia.forEach(salaries => { 
    const $tr = document.createElement("tr");
    //creamos el td de la primera columna y lo adjuntamos al tr
    let $tdName = document.createElement("td");
    $tdName.textContent = salaries.name;
    $tr.appendChild($tdName);
    //creamos la segunda columna la de salarios
    let $tdSalary = document.createElement("td");
    $tdSalary.textContent = salaries.salary;
    $tr.appendChild($tdSalary);
    $table.appendChild($tr);
});
// Se le da la opcion de ver la tabla ordenada

const compare2 = function(num1, num2){
    return num1.salary - num2.salary;
}
const colombiaSorted =  colombia.sort(compare2);
//vaciar lista para que no se duplique
function vaciarLista(){
    $headTable.textContent = " "
    $tableSort.textContent = " ";
};
//mostrar lista ordenada
const $tableSort = document.querySelector("#viewSortList");
const $headTable = document.querySelector("#tHead");
function viewSortedList(){
    vaciarLista();
    const info = document.getElementById("infoSortList");
    info.innerText = " "
    info.innerText = "Lista ordenada: "
    const $trTitle = document.createElement("tr");
    let $thTitleName = document.createElement("th");
    $thTitleName.textContent = "Nombre";
    $trTitle.appendChild($thTitleName);
    let $thTitleSalary = document.createElement("th");
    $thTitleSalary.textContent = "Salario";
    $trTitle.appendChild($thTitleSalary);
    $headTable.appendChild($trTitle);
    colombiaSorted.forEach(salaries => { 
        const $tr = document.createElement("tr");
        //creamos el td de la primera columna y lo adjuntamos al tr
        let $tdName = document.createElement("td");
        $tdName.textContent = salaries.name;
        $tr.appendChild($tdName);
        //creamos la segunda columna la de salarios
        let $tdSalary = document.createElement("td");
        $tdSalary.textContent = salaries.salary;
        $tr.appendChild($tdSalary);
        $tableSort.appendChild($tr);
    });
}
//funciones conectar html con botones
const resp = document.getElementById("respView");
function viewAverage(){
    const average = (calcularMediaAritmetica(salariesColSorted)).toFixed(2);
    resp.innerText = `${average} pesos Colombianos`;

};
function viewAverageArmonic(){
    const avergaReal = mediaArmonica(salariesColSorted).toFixed(2);
    resp.innerText = `${avergaReal} pesos Colombianos\nEsto se debe ya que la media armonica no es sensible a valores grandes`;
};
function viewMode(){
    const mode = salariesCountSorted[salariesCountSorted.length - 1];
    let mode1 = mode[0];
    let reps = mode[1];
    resp.innerText = `El salario mas repetido es ${mode1} con ${reps} similitudes`;
};
function viewMedium(){
    const medium = mediana(salariesColSorted);
    resp.innerText = `La mediana es ${medium}`
}