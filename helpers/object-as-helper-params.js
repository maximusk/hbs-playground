let hb = require('express-hbs').handlebars;

hb.registerHelper("object-as-helper-params", function(ctx) {
    return new hb.SafeString(ctx.data.root.html);
});

let view = '<div>Escaping expression: {{object-as-helper-params}}</div>';
let template = hb.compile(view);
let ctx = {html: '<span>I should NOT be escaped</span>'};

console.log(template(ctx));
