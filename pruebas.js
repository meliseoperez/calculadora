let number = 5;

if(number % 2 === 0){
    console.log("El número es par.");
}else{
    console.log("El número es impart.");
}

let sum = 0;
for (let i=1;i<=number; i++){
    sum += i;
}

console.log("La suma es: ", sum);

let count = 0;

while (count<number){
    console.log("Contando ...",count); 
    count++;
}
