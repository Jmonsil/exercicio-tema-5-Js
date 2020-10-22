let name1=prompt("Digite o nome da primera pessoa");
let name2=prompt("Digite o nome da segunda  pessoa")

let age1=prompt("Digite a idade da primera pessoa")
let age2=prompt("Digite a idade da segunda pessoa")

let nationality1=prompt("Digite a nacionalidade da primera pessoa")
let nationality2=prompt("Digite a nacionalidade da segunda pessoa")

console.log("Registro de : "  +  name1   +  ' e ' + name2 );
console.log("Idade: "  +age1  )
console.log("Idade: "  +age2  )
console.log("Nacionalidade: " +' '+ nationality1)
console.log("Nacionalidade: " +' '+ nationality2)


if (age1 === age2){
    console.log (  name1 + ' é '   + name2  + "tem a mesma idade")
} 

else if (age1 > age2) {
    console.log ( name1  + ' é mais velho que ' + name2  )
}


 else {
     console.log (  name1  + ' é mais novo que ' + name2)
 }

 
if (nationality1  === nationality2) {
    console.log (  name1 + ' é '   + name2  + "tem a mesma Nacionalidade" )
}


 else if (nationality1  !==  nationality2) {
    console.log (name1 + ' é '   + name2  + " tem diferente nacionalidade ")
}
