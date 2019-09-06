let hb = require('express-hbs').handlebars;

hb.registerHelper('safe-string-helper', function (html) {
    return new hb.SafeString(html);
});

let view = '<div>Escaping expression: {{safe-string-helper html}}</div>';
let template = hb.compile(view);
let ctx = {html: '<span>I should NOT be escaped</span>'};

console.log(template(ctx));
