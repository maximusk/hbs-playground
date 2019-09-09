let hb = require('express-hbs').handlebars;

hb.registerHelper("name", function() {
    return `Helper took precedence`;
});

let view = '{{name}}';

/*
// define like this for field to take precedence
let view = '{{./name}}';
*/

let template = hb.compile(view);
let ctx = {name: 'Field took precedence'};
console.log(template(ctx));

