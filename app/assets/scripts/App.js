import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import $ from 'jquery';

var mobileMenu     = new MobileMenu();
//var revealOnScroll = new RevealOnScroll();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
var stickyHeader = new StickyHeader();


//function person(name, favColor) {
//    
// console.log("Hello, my name is "+ name +" and  my favorite color is "+ favColor +".");
//   
//    
//}
//
//
//var john = {
//    
//    name: "John Doe",
//    favoriteColor: "blue",
//    greet: function() {
//        
//        console.log("hello, my name is "+john.name+" and my color is "+john.favoriteColor+"");
//        
//    }
//    
//}
//
//
//john.greet();
//person(john.name, john.favoriteColor);
//person("Jane Smith", "green");

//var $ = require('jquery');
//
////var Person = require('./modules/Person');
//import Person from './modules/Person';
//
////alert("ABC 321");
//
//class Adult extends Person {
//    
//  payTaxes() {
//      
//      console.log(this.name + " now owes $0 in taxes.");
//      
//  }  
//    
//}
//
////console.log(Person.exampleProperty);
////Person.exampleFunction();
//var john = new Person("John Doe","Blue");
//john.greet();
//var jane = new Adult("Jane Smith", "Orange");
//jane.greet();
//jane.payTaxes();
//
//$("h1").remove();