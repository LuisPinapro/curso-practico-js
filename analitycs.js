//helpers
const salariesCount = {};
const salariesCol = colombia.map(
    function (person){
        return person.salary;
    }
);
const salariesCol2 = colombia.map(
    function (person){
        return person.salary;
    }
);
const salariesColSorted = salariesCol.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
const salariesColSorted2 = salariesCol2.sort(
    function (salaryA, salaryB){
        return salaryA - salaryB;
    }
);
salariesColSorted.map(function(salarie){
    if(salariesCount[salarie]){
        salariesCount[salarie] += 1;
    }else{
        salariesCount[salarie] = 1;
    }   
});
const salariesCountSorted = Object.entries(salariesCount).sort(function(num1, num2){
    return num1[1] - num2[1];
});
//calcular mediana
//mediana general
const midgeneral = mediana(salariesColSorted);
//top 10%

const spliceStart = parseInt((salariesColSorted2.length * 90) / 100);
const spliceCount = salariesColSorted2.length - spliceStart;
const midTop10 = salariesColSorted2.splice(spliceStart, spliceCount);
//resultado
console.log(midgeneral,`Top 10% de salarios ${midTop10}`);
