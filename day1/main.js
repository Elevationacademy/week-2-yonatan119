// EX1-SCOPE

//===================================================================================
//Section 1
//===================================================================================
// const run = true

// if (run) {
//     let distance = 8
//     for (var i = 0; i < distance; i++) {
//         console.log("running")
//     }
//     console.log("Finished running " + distance + " miles")
// }


// console.log("Damn, you see this gal? She ran " + distance + " miles")
//returns error, "distance" is in a local scope of if function
//===================================================================================//Section 2//===================================================================================
// if (13 == "space") {
//     let cowSound = "moo"
// }
// else {
//     console.log("Cow says " + cowSound)
// }   //returns error because cowSound is from a local scope of the if function and else is
//a diferent function with a different local scope

//===================================================================================
//Section 3
//===================================================================================
// const serveOrders = function (orders) {

//     for (let order of orders) {
//         let specialOrder = "special " + order
//         console.log("Served a " + specialOrder)
//     }

//     console.log("Finished serving all the orders: " + orders)
// }
// const allOrders = ["fish", "lettuce plate", "curious cheese"]
// serveOrders(allOrders)
//the function will work perfectly. there are 20 local scopes of the function serveOrders
//and finnaly the array allOrders is from a global scope.
//===================================================================================
//Section 4
//===================================================================================
// const pot = "red pot with earth in it"

// const getSeed = function () {
//     const seed = "brown seed"
// }

// const plant = function () {
//     getSeed()
//     console.log("Planting the " + seed + " inside a " + pot)
// }

// plant()
//return an error becuase of trying to achieve the seed variable from outside of its local scope
//===================================================================================
//Section 5 - Optional(if you have time)
//===================================================================================
// const doesUserExist = function (name) {
//     const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
//     for (let u of users) {
//         if (u.name == name) {
//             const found = true
//         } }  return found }
// const userExists = doesUserExist("Lucius")
// if (userExists) {
//     console.log("We found the ragamuffin!")}
// else {
//     console.log("No idea where this person is.")}
// the variable 'found' isnt defined inside the local scope of doesUserExist (or the global scope)
// therefore there will be an error
//===================================================================================
//Section 6 - Optional (if you have time)
//===================================================================================
// let isEnough = false

// const makeEnough = function () {
//     for (let i = 0; i < 10; i++) {
//         if (i > 5) {
//             isEnough = true
//         }
//     }
// }

// makeEnough()
// if (isEnough) {
//     console.log("Finally, sheesh")
// }
// else {
//     console.log("Here we go again...")
// }
// will work perfectly. the isEnough is a variable from the global scope!
// it will log "Finally, sheesh"
// we will not be able to enable the else with the given functions.



//THIS-SPOTCHECK
// const person = {
//     username: "Felicia",
//     introduce: function(){
//       console.log(`Hi, I'm ${this.username}`)
//     }
//   }
//   person.introduce() //prints "Hi, I'm Felicia"
//   END

// THIS-EX1

// const person = {
//     hungry: true,

//     feed: function () {
//       if (this.hungry) {
//         hungry = false;
//         alert('Im no longer hungry!')
//       }
//     }
//   }
//   person.feed() //should alert "I'm no longer hungry"

// END

// THIS-EX2

// const pump = function (amount) {
//     this.liters += amount;
//     console.log('You put ' + amount + ' liters in ' + this.name);
//   };

//   const garage = {
//     car1: {
//       name: 'Audi',
//       liters: 3,
//       fillTank: pump
//     },
//     car2: {
//       name: 'Mercedes',
//       liters: 1,
//       fillTank: pump
//     }
//   };

//   garage.car1.fillTank(2);
//   console.log('Audi should have 5 liters: ',  garage.car1.liters);

//   garage.car2.fillTank(30);
//   console.log('Mercedes should have 31 liters: ', garage.car2.liters);

// END

// THIS-EX3

// const pumpFuel = function (plane) {
//     plane.fuel += 1;
//   };
//     const airplane = {
//       fuel : 0,
//     fly: function () {
//       if (this.fuel < 2) {
//         return 'on the ground!';
//       }
//       else {
//         return 'flying!';
//       }
//     }
//   };

//   console.log('The plane should not be able to fly (yet): ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('The plane should STILL not be able to fly: ' + airplane.fly());

//   pumpFuel(airplane);
//   console.log('Take off! ' + airplane.fly());

//  END

// THIS-EX4

// const tipJar = {
//     coinCount: 20,
//     tip: function () {
//       this.coinCount += 1;
//     },
//     stealCoins: function (x){
//        this.coinCount -= x
//     }
//   };

//   tipJar.tip();
//   console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(3);
//   console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

//   tipJar.stealCoins(10);
//   console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);

// END

//THIS-EX5

// const revealSecret = function () {
//     return this.secret;
//   };

//   const shoutIt = function (person, func) {
//     person.revealItAll = func;
//     const result = person.revealItAll();
//     alert(person.name + " said: " + result);
//   };

//   const avi = {
//     name: "Avi",
//     secret: "Im scared of snakes!"
//   };

//   const narkis = {
//     name: "Narkis",
//     secret: "I dont have secrets because I'm zen like that."
//   };

//   shoutIt(avi, revealSecret);
//   shoutIt(narkis, revealSecret);

// END

// THIS-EX6

// const coffeeShop = {
//     beans: 40,
//     money: 100,
//     drinkRequirements: {
//         latte: 10,
//         americano: 5,
//         doubleShot: 15,
//         frenchPress: 12
//     },

//     makeDrink: function (drinkType) {
//         if (this.drinkRequirements[drinkType] === undefined) {
//             console.log(`Sorry, we dont make ${drinkType}`)
//         }
//         if (coffeeShop.beans < this.drinkRequirements[drinkType]) {
//             console.log('sorry we dont have enough beans')
//         }
//         if (this.drinkRequirements[drinkType]) {
//             coffeeShop.beans -= this.drinkRequirements[drinkType]
//         }
//     },

//     buyBeans: function (numBeans) {
//        this.money -= 10 * numBeans
//     }
// }
// coffeeShop.makeDrink("latte");
// coffeeShop.makeDrink("americano");
// coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
// coffeeShop.makeDrink("doubleShot");
// coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"

// coffeeShop.buyBeans(3)
// console.log(coffeeShop.money)

//END