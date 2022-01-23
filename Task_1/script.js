/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(event) {
    event.preventDefault(); //sustabdo formos(tinklapio) perkrovima
    const result = document.querySelector("input[id=search]").value;
    
    document.querySelector("h2[id=svarai]").textContent = "Svarai: " + result / 0.001 + " lb";
    document.querySelector("h2[id=gramai]").textContent = "Gramai: " + result * 2.2046 + " g";
    document.querySelector("h2[id=uncijos]").textContent = "Uncijos: " + result * 35.274 + " oz";
}