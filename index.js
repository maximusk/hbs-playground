require('./helpers/get-handlebars-version');

let hbs = require('express-hbs');

// let handlebars = require('./handlebars');

let source = "<p>Hello, my name is {{name}}. I am from {{hometown}}. I have " +
    "{{kids.length}} kids:</p>" +
    "<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>";
let template = hbs.handlebars.compile(source);

let data = { "name": "Alan", "hometown": "Somewhere, TX",
    "kids": [{"name": "Jimmy", "age": "12"}, {"name": "Sally", "age": "4"}]};
let result = template(data);
console.log(result);


/*let compiled = engine.compile("<div>{{getHandlebarsVersion}}</div>");
let html = compiled({});
console.log(html);*/

