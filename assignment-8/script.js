
function tipCal(bill, tip) {
    (bill >= 50 && bill <= 300) ? tip = bill * 0.15
        : (bill < 50 || bill > 300) ? tip = bill * 0.20
            : console.log("you don't pay");
    return `The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`;
}
console.log(tipCal(5));


function celsiusToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}
console.log(`20\xB0C, is ${celsiusToFahrenheit(20)}\xB0F`);

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
console.log(`50\xB0F, is ${fahrenheitToCelsius(50)}\xB0C`);

/*Team Score*/

let calcAverage = (nets, knicks) => {
    nets = (44 + 26 + 71) / 3;
    knicks = (65 + 54 + 49) / 3;

    let checkWinner = (avgNets, avgKnicks) => {
        avgNets = nets;
        avgKnicks = knicks;
        if (avgNets > avgKnicks) {
            return `The Nets win! (${avgNets} vs. ${avgKnicks})`;
        } else if (avgKnicks > avgNets) {
            return `The Knicks win! (${avgKnicks} vs. ${avgNets})`;
        } else {
            return `No team wins`;
        }
    }
    return `${checkWinner(nets, knicks)}`;
}
console.log(calcAverage());


// for(let i=0; i<=bills.length; i++){
//     console.log(bills[i]);
//     if(bills[i] >= 50 && bills[i] <= 300)  {
//        console.log (bills[i] * 0.15);
//     }else if(bills[i] < 50 || bills[i] > 300){ 
//        console.log (bills[i] * 0.20);
//     };

// };
/*
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.
*/
// TEST DATA: 125, 555 and 44



// const totalBill =;

function calcTip(bills) {
 bills = [125, 555, 44];
    for (let i = 0; i <= bills.length; i++) {
        if (bills[i] >= 50 && bills[i] <= 300) {
            console.log(bills[i] * 0.15);
        } else if (bills[i] < 50 || bills[i] > 300) {
            console.log(bills[i] * 0.20);
        };

    };
    // return `The bill was ${bills}, the tip was ${tips}, and the total value ${tips + bills}`;
    return bills;
};
calcTip();

// const tips = [calcTip(bills[0]), calTip(bills[1]), calTip(bills[2])]
