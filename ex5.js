let age = parseInt(prompt("entre age"));

function ageValide(age){
    if (age >= 0 && age <=60) {
        document.write("Age valide") ;
    } else {
        document.write("Age invalide") ;
    }  
}