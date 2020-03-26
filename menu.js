var runningTotal = 0;

const burger = 7;
const chicken = 5;
const steak = 12;
const soup = 3;
const sandwich = 4;
const spaghetti = 5;
const pancake = 4;
const waffle = 3;
const omelet = 5;
const salad = 4;
const fries = 4;
const potato = 4;
const bacon = 3;
const hashbrowns = 3;
const fruit = 3;
const milk = 2;

let breakfastOrdered = false;
let lunchOrdered = false;
let dinnerOrdered = false;

let welcomeMessage = alert("Welcome to Bottega Diner!");
let entreeOption = prompt("Would you like breakfast, lunch, or dinner?\n");

// if (entreeOption === "breakfast") {
//   breakfastOrdered = true;
//   alert("\nA great way to start your day!");
// }

// let entreeBreakfastChoice = prompt(
//   "\nWhat would you like? \nPancakes = $4 \nWaffles = $3 \nOmelet = $5\n"
// );

// if (entreeBreakfastChoice === "pancakes") {
//     alert("\nGreat choice! Our chef's famous homemade buttermilk recipe.");
//     runningTotal += pancake;


//     } else if (entreeBreakfastChoice === "waffles") {
//         alert("\nYou will love them - true Belgian style waffles!");
//         runningTotal += waffle;


//         } else if (entreeBreakfastChoice === "omelet") {
//             alert("\nI hope you are hungry!  These are 4 eggers!");
//             runningTotal += omelet;
// };


// let sideOptionBreakfast1 = prompt(
//     "Great! So, now you get to choose your two sides.\n\nWhat would you like for your first? \nFruit = $3 \nBacon = $3 \nHashbrowns = $2\n\n"
// );

//     if (sideOptionBreakfast1 === "fruit") {
//         alert("\nAgain great choice! Fresh seasonal berries.");
//         runningTotal += fruit;

//         } else if (sideOptionBreakfast1 === "bacon") {
//             alert("\nWe have the BEST, thick-cut bacon!");
//             runningTotal += bacon;

//             } else if (sideOptionBreakfast1 === "hashbrowns") {
//                 alert("\nPerfectly seasoned and crispy!");
//                 runningTotal += hashbrowns;
// }

// let sideOptionBreakfast2 = prompt(
//     "\nWhat would you like for your second? \nFruit = $3 \nBacon = $3 \nHashbrowns = $2\n"
// );

//     if (sideOptionBreakfast2 === "fruit") {
//         alert("\nAgain great choice! Fresh seasonal berries.");
//         runningTotal += fruit;

//         } else if (sideOptionBreakfast2 === "bacon") {
//             alert("\nWe have the BEST, thick-cut bacon!");
//             runningTotal += bacon;

//             } else if (sideOptionBreakfast2 === "hashbrowns") {
//                 alert("\nPerfectly seasoned and crispy!");
//                 runningTotal += hashbrowns;

// }



if (entreeOption === "lunch") {
    lunchOrdered = true;
    alert("\nYou got it!  I hear your stomach from here!");
}

    let entreeLunchChoice = prompt(
        "\nWhat would you like? \nSoup = $3 \nSandwich = $4 \nSpaghetti = $5\n"
);

    if (entreeLunchChoice === "soup") {
        alert("\nTastes just like what Grandma used to make.\n");
        runningTotal += soup;

        } else if (entreeLunchChoice === "sandwich") {
            alert("\nWe make great sandwiches.");
            runningTotal += sandwich;

             } else if (entreeLunchChoice === "spaghetti") {
                 alert("\nOur sauce is made from scratch!\n");
                 runningTotal += spaghetti;
}

  
    
let sideOptionLunch1 = prompt(
      "You get two sides.  What would you like for your first? \nSalad = $4 \nFries = $4 \nPotato = $4\n\n"
);

    
    if (sideOptionLinner1 === "salad") {
        alert("\nYou got it.");
        runningTotal += salad;

        } else if (sideOptionLinner1 === "fries") {
            alert("\nOkay!");
            runningTotal += fries;

            } else if (sideOptionLinner1 === "potato") {
             alert("\nYou'll love it!");
                runningTotal += potato;
}

let sideOptionLunch2 = prompt(
      "What would you like for your second? \nSalad = $4 \nFries = $4 \nPotato = $4\n\n"
);

if (sideOptionLinner1 === "salad") {
    alert("\nYou got it. Way to go healthy!");
    runningTotal += salad;

    } else if (sideOptionLinner1 === "fries") {
        alert("\nOkay! Thick cut fries are addictive");
        runningTotal += fries;

        } else if (sideOptionLinner1 === "potato") {
            alert("\nYou'll love it - it's piled high with toppings!");
            runningTotal += potato;

}



// if (entreeOption === "dinner") {
//   dinnerOrdered = true;
//   alert("We serve the best dinner around!");
// }
// if (entreeOption === "dinner") {
//   dinnerOrdered = true;
//   alert("Our dinner choices are wonderful.");
//   var entreeDinnerChoice = prompt(
//     "What would you like? \n 1. Chicken = $5 \n 2. Burger = $7 \n 3. Steak = $12"
//   );
//   if (entreeDinnerChoice === "chicken || 1") {
//     alert("It's delicious! Always rotisserie grilled.");
//     runningTotal += chicken;
//   } else if (entreeDinnerChoice === "burger || 2") {
//     alert("Juiciest burger around.");
//     runningTotal += burger;
//   } else if (entreeDinnerChoice === "steak || 3") {
//     alert(
//       "Our chef prepares them so perfectly medium-rare, they are still moo'ing!"
//     );
//     runningTotal += steak;
//   }
//   if (entreeOption === "dinner") {
//     var sideOptionLinner = prompt(
//       "You get two sides.  What would you like for your first? \n 1. Salad = $4 \n 2. Fries = $4 \n 3. Loaded Baked Potato = $4"
//     );
//     if (sideOptionDinner === "yes") {
//       runningTotal += fries;
//       alert("Okay! I have added homestyle fries to your order!");
//     } else if (sideOptionDinner === "no") {
//       alert("No sides have been added to your order!");
//     }
//   }
// }

alert("I added milk to your order, the calcium will do you good.");
    runningTotal += milk;

alert("Your current total is: " + "$" + runningTotal);
alert("Created by: Angela Miller, Pushed by: Ryan, The Lord of Darkness, GitHub:
