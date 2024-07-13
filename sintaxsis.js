'use strict'




document.querySelector("#formulario2").addEventListener("input", () => {
    document.querySelector("#primer-elemento").innerHTML = document.querySelector("#formulario2").value + "  " + ":";
})

document.querySelector("#formulario5").addEventListener("input", ()=> {
    document.querySelector("#segundo-elemento").innerHTML = document.querySelector("#formulario5").value + " " + ":";
})

document.querySelector("#formulario8").addEventListener("input", ()=> {
    document.querySelector("#tercer-elemento").innerHTML = document.querySelector("#formulario8").value + " " + ":";
})


var boton = document.querySelector("#boton");
boton.addEventListener('click', () => {


    var form1 = parseFloat(document.getElementById("formulario1").value);
    var form3 = parseFloat(document.getElementById("formulario3").value);
    var form4 = parseFloat(document.getElementById("formulario4").value);
    var form6 = parseFloat(document.getElementById("formulario6").value);
    var form7 = parseFloat(document.getElementById("formulario7").value);
    var form9 = parseFloat(document.getElementById("formulario9").value);

    var form2 = document.getElementById("formulario2").value.trim();
    var form5 = document.getElementById("formulario5").value.trim();
    var form8 = document.getElementById("formulario8").value.trim();

    var mostrarunidades6 = document.getElementById("unidades6");

    var moles1 = document.getElementById("gramos1").value.trim();
    var moles2 = document.getElementById("gramos2").value.trim();
    var moles3 = document.getElementById("gramos3").value.trim();


    var resultadopotencia2 = moles1 ** form1;
    var resultadopotencia5 = moles2 ** form4;
    var resultadopotencia8 = moles3 ** form7;


    var Kc = resultadopotencia8 / (resultadopotencia5 * resultadopotencia2) ;


    mostrarunidades6.innerHTML = `Kc:   ${Kc}`;






});




