//make a say hello function
const sayHello = () => console.log('Hello there!');

sayHello();

//change the body of the page using jquery (do this by importing jquery)
    import $ from 'jquery';
$('body').css('background-color', '#FF4571').html('<h1>Hello from nmp!</h1>').css('color', "white");


//call the practice object
const cart  = require ('./practice.js');
console.log(cart.item.color);
console.log(cart.thing.weight);

//import the nice message from the say-hello file
import {niceMessage} from "./say-hello";


//this makes the niceMessage popup on the screen
// $('body').css('background-color', '#FF4571').html('<h1>${niceMessage ()}</h1>').css('color', "white");


//using a require
const $ = require('jquery');
const niceMessage = require('./say-hello.js');

// $('body').css('background-color', '#FF4571').html('<h1>${niceMessage ()}</h1>').css('color', "white");
