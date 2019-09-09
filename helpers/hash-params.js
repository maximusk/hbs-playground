let hb = require('express-hbs').handlebars;

hb.registerHelper('link', function (text, url, options) {
    text = hb.Utils.escapeExpression(text);
    url = hb.Utils.escapeExpression(url);
    let result = `<a href='${url}' ${options.hash.blank ? 'target=\'_blank\'\'' : ''}>${text}</a>`;
    return new hb.SafeString(result);
});

/*
// alternative version that uses `this` as context, and gets `options` from the last parameter
hb.registerHelper('link', function (...params) {
    text = hb.Utils.escapeExpression(this.text);
    url = hb.Utils.escapeExpression(this.url);
    let result = `<a href='${url}' ${params.pop().hash.blank ? 'target=\'_blank\'\'' : ''}>${text}</a>`;
    return new hb.SafeString(result);
});
*/

let view = '{{link text url blank="true"}}';
let template = hb.compile(view);
let ctx = {text: 'testing helpers', url: 'https://handlebars-draft.knappi.org'};
console.log(template(ctx));
