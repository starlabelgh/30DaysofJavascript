// function greet(myName, favColor){
//   alert("Hey my name is " + myName + " and my favourite color is "+ favColor + ".")
// }

// // greet("Moses", "Green")
// // greet("Dada", "Yellow")

// function trippleMe(x){
//   return 3 * x
// }

// //alert(trippleMe(5))
// // let myFavoriteNumber = trippleMe(13)
// // alert(myFavoriteNumber)

// //object
// let cat = {
//   catName : "Adams",
//   age : 6,
//   foods : {
//     favorite : "Fufu",
//     leastFavorite : "Gari"
//   },
//   catColor : "Snow-white",
//   meow() {
//     alert("Meooooow")
//   }
// }

// cat.foods.favorite



// document.addEventListener("click", myAmazingFunction)

// function myAmazingFunction(){
//   alert("Hey you just clicked")
// }

//decision making in js

// let strawberryCount = 5
// if(strawberryCount > 9){
//   document.write("congrats")
// }else{
//   document.write("Sorry, we do not ship orders that small.")
// }

// let strawberryCount = 200

// while (strawberryCount <= 300){
//     document.write("There are " + strawberryCount + " strawberries. <br>")
//     strawberryCount++
// }

// document.addEventListener("click", ourAmazingFunction)

// // function ourAmazingFunction(){
// //   alert("Thank you for clicking.")
// // }

// function createMultiplier(multiplier){
//   return function(x){
//     return x * multiplier
//   }
// }

// let doubleMe =  createMultiplier(2)
// let tripleMe = createMultiplier(3)
// let quadrupleMe = createMultiplier(4)

// document.write(doubleMe(14))

//functions
function tripleMe(x){
    return 3 * x
  }
  
  let myFavoriteNumber = tripleMe(12)
  //alert(myFavoriteNumber)
  
  //object
  let moses = {
    age : 27,
    sex : "male",
    job : "Tech",
    passion(){
      alert("having great sex")
    }
  }
  
  //moses.age
  
  document.addEventListener("click", myAmazingFunction)
  
  function myAmazingFunction(){
    alert("Hello you just clicked")
  }
  
  //array
  let myWords = ["green", "blue", "yellow"]
  myWords.splice(1, 3)
  console.log(myWords)
  
  let myArray = [{sex:"male", age:"27"}, {job: "IT", address : "lomnava"}]
  
  //console.log(myArray[1].address)
  
  //making decisions in js
  
  let pets = [
    {name: "john", species: "cat", age: 5},
    {name: "solash", species: "human", age: 39},
    {name: "akua", species: "human", age: 21}
  ]
  
  console.log(pets.push({name: "nana", species: "human", age: "7"}))
  
  let ourTest = pets.map(nameOnly)
  
  function nameOnly(x){
    return x.name
  }
  
  //console.log(ourTest)
  
  let dogs = pets.filter(onlyDogs)
  
  function onlyDogs(x){
    return x.species == "human"
  }
  
  //console.log("human")
  
  function onlyBabies(x){
    return x.age < 3
  }
  
  let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly)
  console.log(babyDogNames)
  
  
  //contex
  let user = {
    firstname : "Moses",
    lastname : "Samanhyia",
    driveCar(){
      function imaFunctionNotMethod(){
        console.log(this)
      }
      imaFunctionNotMethod()
      console.log(this.firstname + " " + this.lastname + " dirves an ash car")
    }
  }
  
  user.driveCar()
  
  
  let myName = "Moses"
  
  console.log(`Hello my name is ${myName} and I love my girlfriend`)