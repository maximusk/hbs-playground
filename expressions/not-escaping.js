let hb = require('express-hbs').handlebars;

let view = '<div>Escaping expression: {{{html}}}</div>';
let template = hb.compile(view);
let ctx = {html: '<span>I should NOT be escaped</span>'};
console.log(template(ctx));
