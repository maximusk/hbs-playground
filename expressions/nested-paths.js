let hb = require('express-hbs').handlebars;

let view = '<div>{{person.firstname}} {{person.lastname}}</div>';
let template = hb.compile(view);
let ctx = {
    person: {
        firstname: "Yehuda",
        lastname: "Katz"
    }
};
console.log(template(ctx));
