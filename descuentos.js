//Teoria
console.group("Teoria descuentos")
const precioOriginal = 100;
const descuento = 15;

const procentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * procentajePrecioConDescuento) / 100
console.log({
    precioOriginal, descuento, procentajePrecioConDescuento, precioConDescuento
});
console.groupEnd();
//uso de funciones
console.group("Uso de funciones")
function calcularPrecioConDescuento(precio, descuento){
    const procentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * procentajePrecioConDescuento) / 100
    return precioConDescuento
}
console.groupEnd();
//Js con html
const coupons = [
    {
        name: "batman",
        discount: 5,
    },
    {
        name: "superman",
        discount: 25,
    },
    {
        name: "spiderman",
        discount: 50,
    },
];
//const userCoupon = document.getElementById("inputCoupon");
//const coupon = userCoupon.value
//const isCouponValid = coupons.find(isCouponValid => isCouponValid.name === "batman");
//console.log(isCouponValid.discount);
//const name = coupons.name;
function cuponValid(){
    const userCoupon = document.getElementById("inputCoupon");
    const coupon = userCoupon.value
    const isCouponValid = coupons.find(isCouponValid => isCouponValid.name === coupon);
    if(isCouponValid){
        return Number(isCouponValid.discount);
    }
    else{
    }
}

function calcularDiscountPrice(){ 
    const inputPrice = document.getElementById("inputPrice");
    const value = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    var value2 = inputDiscount.value;
    if(!cuponValid()){
        const preciofinal = calcularPrecioConDescuento(value, value2);
        const resultP = document.getElementById("precioFinal");
        resultP.innerText = "Sin cupon/ cupon erroneo\nTotal a pagar con descuento  $" + preciofinal
    }
    else{
        const preciofinal = calcularPrecioConDescuento(value, (Number(value2) + cuponValid()));
        const resultP = document.getElementById("precioFinal");
        resultP.innerText = "Total a pagar con descuento y cupon agregado $" + preciofinal
    }
    
}

//cupones
