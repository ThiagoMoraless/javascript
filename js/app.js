// console.log("Aguante All Boys")
// /*Variable cajon donde voy a guardar algo (puede ser numero, letra o lo que yo quiera)*/
// /*Cuando le pongo = a algo, ese suceso se llama asignación */
// const Numeroqueinvente = 2; /*Number*/
// console.log(Numeroqueinvente)
// const Letraqueinvente = "T"/*String*/
// console.log(Letraqueinvente) 
// /*Const= variable que es constante y no cambia */
// /*Let y Var son variables que si cambian */
// let Nombre = "Pepe"
// console.log(Nombre)
// Nombre = "Tito"
// console.log(Nombre)
// /*El tipo de variable que puede ser const let o var mas el nombre de la variable, se le llama declaración */
// let Thiago;
// Thiago = 5
// console.log(Thiago)
// let NumeroA = 1
// let NumeroB = 2
// let NumeroC = 3
// console.log(NumeroA + NumeroB + NumeroC)
// let TextoA = "Mauri"
// let TextoB = "Cucco"
// console.log(TextoA +" " +TextoB)
// Prompt te permite ingresar lo que vos quieras y lo guarda en una variable (En este caso en NombreIngresado) */
// alert("Bienvenido a la página de Surf mas famosa del país")

// let NombreIngresado = prompt("Ingrese su nombre");
// if (NombreIngresado == ""){
//     alert("No Ingresaste tu Nombre")
// } else{
//     console.log(NombreIngresado)
//     alert("Bienvenido " + NombreIngresado)
// }/*
/*"=" es igual a asignar una variable
"==" es igual a comparar y puede ser falso o verdadero
"===" es ESCTRICTAMENTE igual*/
// let NombreIngresado = prompt("Ingrese su Nombre");
// let ApellidoIngresado = prompt("Ingrese su apellido");
// if ((NombreIngresado !="") && (ApellidoIngresado!="")){
//     alert("Nombre: "+NombreIngresado +"\nApellido: "+ApellidoIngresado);
// }else{
//     alert("Error: Ingresar Nombre y Apellido");
// }
/*let NombreIngresado = prompt("Ingrese su Nombre");
if ((NombreIngresado == "Thiago") || (NombreIngresado == "Thiago")){
    alert("El nombre ingresado es Thiago");
} else{
    alert("El nombre ingresado NO ES Thiago");
}*/
let NombreIngresado = prompt("Ingrese su Nombre");
if ((NombreIngresado !="") && ((NombreIngresado == "Thiago") || (NombreIngresado == "THIAGO"))){
    alert("Hola Thiago");
} else{
    alert("Error: Ingresar Nombre válido");
}
// for (let i = 1; i < 10; i++){
//     // console.log("Valor de i:", i)
//     if (i == 5){
//         continue
//     }
//     if (i == 6){
//         continue
//     }
//     if (i == 7){
//         continue
//     }
//     console.log("valor de i", i)
// }
let ingresarNumero = parseInt(prompt("Ingresar Número"))
for (let i = 1; i <= 5; i++){
let resultado = ingresarNumero * i ;
console.log("valor de i:", i)
console.log(ingresarNumero + "X" + i + "=" + resultado)
}
// let Nombre = "Pedro"
// switch (Nombre) {
//     case "Mauri":
//         console.log("Es Mauri")
//         break;
//     case "Juchis":
//         console.log("Es Juchis")
//         break;
//     case "Thiaguito":
//         console.log("Es Thiaguito")
//         break;
//     default: 
//         console.log("No es nadie :(")
//         break;
// }
// function saludar (Nombre, Apellido) {
//     console.log("Hola" +" " +Nombre + " " + Apellido);
// };
// saludar("Martin", "Palermo");
// saludar("Juan Roman", "Riquelme");
// saludar("Tomás", "Amilivia");
let Neoprene = 25000;
let NeopreneMujer = 22000;
let NeopreneNinio = 16000;
function SumarProductos (PrimerProducto, SegundoProducto, TercerProducto) {
    return PrimerProducto + SegundoProducto + TercerProducto;
}
let resultado = SumarProductos(Neoprene, NeopreneMujer, NeopreneNinio);
console.log("La suma de la compra es:" + resultado);