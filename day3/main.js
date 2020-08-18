//SPOTCHECK2

// let users = []

// const getData = function (func) {
//     setTimeout(function () {
//         users = [{ name: "Rick" }, { name: "Morty" }]
//         console.log("Got users") ,func()
//     }, 3000);
// }

// const displayData = function () {
//     console.log("Going to display: " + users)
//     for (user of users) {
//         console.log(user.name)
//     }
// }

// getData(displayData)
//END

//SPOTCHECK3

//   setInterval(function(){
//     console.log(new Date())
//   }, 1000)
//END

//SPOTCHECK4

// const square = (x) => x*x
//END

//SPOTCHECK5

// const getFormalTitle = (title,name) => title+' '+name\
//END

//EX1

// const push = function () {
//     console.log("pushing it!")
//   }

//   const pull = function () {
//     console.log("pulling it!")
//   }
// const pushpull = (func) => func()
//END

// EX2

// const time = new Date()
// const returnTime = function (time) {
//     alert('The current time is: ' + time)
//   }
//   const getTime = (func) => func(time)
// getTime(returnTime(time))
//END

//EX3

// const logData = () => console.log()
// const displayData = function (alertDataFunc, logDataFunc, data) {
//     alertDataFunc(data);
//     logDataFunc(data);
//   };

//   displayData(alert, logData, "I like to party")
//END

//EX4

// const sum = (x,y,z) => console.log(x+y+z)
//END

//EX5

// const capitalize = name => name.toUpperCase()
//END

//EX6

// const determineWeather = temp => {
//     if(temp > 25){
//       return "hot"
//     }
//     return "cold"
//   }
// const commentOnWeather = (temp) => determineWeather(temp)
//END

//EX7

// const explode = (lightFunc, soundFunc, sound) => {
//     lightFunc()
//     soundFunc(sound)
//   }

//   const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"

//   const makeSound = sound => alert(sound)

//   explode(shineLight, makeSound, "BOOM")
//END


//CLOSURES AND MODULES --------------------------------------------------------------------

//SPOT-CHECK1

// const family = () => {
//     const members= []
//     const birth = name => {
//         members.push(name)
//         console.log(members)
//     }
//     return birth
// }
// const giveBirth = family()
// giveBirth('Shoobert')
// giveBirth('Jaklim')
// giveBirth('Pagidon')
//END

// SPOT-CHECK2

// const mathOperations = () => {
//     const add = (x,y) => x+y;
//     const subtract = (x,y) => x-y;
//     const multiply = (x,y) => x*y;
//     const divide = (x,y) => x/y;
//     return {
//         add,
//         subtract,
//         multiply,
//         divide
//     }
// }
// const cal = mathOperations()
// console.log(cal.multiply(7,cal.divide(36,6)))
//END

// SPOT-CHECK3

// const UsersModule = function () {
//     const _users = ['Aaron', 'Avi'];

//     const addUser = function (user) {
//         _users.push(user)
//     }

//     const listUsers = function () {
//         for (let user of _users) {
//             console.log(user)
//         }
//     }

//     return {
//         addUser: addUser,
//         listUsers: listUsers
//     }
// }

// const usersModule = UsersModule()

// usersModule.addUser('Narkis')
// usersModule.addUser('Narki')
// usersModule.addUser('Nark')
// usersModule.listUsers()
// console.log(userModule.users)
//END

//EX1

// const StringFormatter = () => {
// const capitalizeFirst = (name) => 
// {
// console.log(name[0].toUpperCase() + name.slice(1))
// };
// const skewerCase = (name) => {
// console.log(name.replace(' ','-'))
// }
// return {
//     capitalizeFirst,
//     skewerCase
// }
// }
// const formatter = StringFormatter()
// formatter.capitalizeFirst('dorothy')
// formatter.skewerCase('Jim Carry')
//END

//EX2

// const Bank = () => {
// let _money = 500
// const depositCash = (cash) => money += cash
// const checkBalance = () => console.log(money)
// return {
//     deposit: depositCash,
//     showBalance: checkBalance
// }
// }
// const bank = Bank()
// bank.deposit(200)
// bank.deposit(250)
// bank.showBalance()
//END
