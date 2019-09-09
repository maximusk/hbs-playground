let hb = require('express-hbs').handlebars;

// is executed several times if there's `else if` block
// and previous blocks evaluate to `false`

hb.registerHelper('if', function (conditional, options) {
    if (conditional) {
        return options.fn(this);
    } else {
        return options.inverse(this);
    }
});

let view = `
    {{#if isActive}}
      <img src="active.gif" alt="Active">
    {{else if isInactive}}
      <img src="inactive.gif" alt="Inactive">
    {{/if}}
`;

let ctx = {
    isActive: false,
    isInactive: true
};

let template = hb.compile(view);

console.log(template(ctx));
