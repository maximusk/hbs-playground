let hb = require('express-hbs').handlebars;

hb.registerHelper('showName', function (options) {
    return this.name;
});

hb.registerHelper('changeName', function (options) {
    return options.fn(innerCtx);
});

let outerCtx = {name: 'OUTER'};
let innerCtx = {name: 'INNER'};

let view = `<div>{{showName}}{{#changeName}}{{showName}}{{/changeName}}</div>`;

let template = hb.compile(view);

console.log(template(outerCtx));

