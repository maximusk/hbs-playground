let hb = require('express-hbs').handlebars;

let partialView = '{{name}}';
hb.registerPartial('myPartial', partialView);

let view = '<div>Rendering basic partial, name is {{> myPartial}}</div>';
let template = hb.compile(view);
let ctx = {name: 'NameFromContext'};
console.log(template(ctx));
