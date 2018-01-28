class Person {
    
  constructor(fullName, favColor) {
      
    this.name = fullName;
    this.favoriteCOlor = favColor;

      
  };
    
  greet() {
      
      console.log("Hi mate, my name is "+ this.name +" and  my favorite color is "+ this.favoriteCOlor +".");
      
  }  
    
}

//module.exports = Person;
export default Person;

//console.log("Hello from person.js");
//
//exports.exampleProperty = "Super magical example value";
//exports.exampleFunction = function() {
//    
//    alert("This is an example");
//    
//}