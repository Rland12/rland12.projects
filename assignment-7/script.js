/*Temperature*/
let celsius= 20;
let fahrenheit = 5;

let convertF = (celsius* 9/5)+32;
let convertC = (fahrenheit-32)*5/9;

console.log(`${celsius}\xB0C, is ${convertF}\xB0F`);
console.log(`${fahrenheit}\xB0F, is ${convertC}\xB0C`);

/*Bmi*/
let johnWeight=150/2.205;
let johnHeight=70/39.37;
let lucasWeight=120/2.205;
let lucasHeight=70/39.37;

let Jbmi= johnWeight/(johnHeight**2);
let Lbmi= lucasWeight/(lucasHeight**2);

if(Lbmi>Jbmi){
    console.log(`Lucas BMI (${Lbmi.toFixed(1)}) is higher than John's BMI (${Jbmi.toFixed(1)})!`);
}else if(Jbmi>Lbmi){
    console.log(`John's BMI (${Jbmi.toFixed(1)}) is higher than Lucas BMI (${Lbmi.toFixed(1)})`);
};

/*Team Score*/
nets_Scores=(97+112+101)/3;
knicks_Scores=(109+95+106)/3;

score=100;

if (nets_Scores>knicks_Scores && nets_Scores>=score){
    console.log("The Nets win!");
}else if (knicks_Scores>nets_Scores && knicks_Scores>=score) {
    console.log("The Knicks win!");
}else if (nets_Scores=knicks_Scores){
    console.log("It is a draw");
}else{
    console.log("No team wins the trophy");
};

