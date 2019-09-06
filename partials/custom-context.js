let hb = require('express-hbs').handlebars;

let partialView = '{{name}}';
hb.registerPartial('myPartial', partialView);

let view = '<div>Rendering basic partial, name is {{> myPartial myOtherContext }}</div>';
let template = hb.compile(view);
let ctx = {name: 'NameFromContext', myOtherContext: {name: 'NameFromOtherContext'}};
console.log(template(ctx));
