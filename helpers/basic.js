let hb = require('express-hbs').handlebars;

hb.registerHelper("link", function(text, url) {
    text = hb.Utils.escapeExpression(text);
    url = hb.Utils.escapeExpression(url);
    var result = '<a href="' + url + '">' + text + "</a>";
    return new hb.SafeString(result);
});

let view = '{{link text url}}';
let template = hb.compile(view);
let ctx = {text: 'testing helpers', url: 'https://handlebars-draft.knappi.org'};
console.log(template(ctx));

