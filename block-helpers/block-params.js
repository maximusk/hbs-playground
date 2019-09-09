// https://handlebars-draft.knappi.org/guide/block-helpers.html#block-parameters

let hb = require('express-hbs').handlebars;

hb.registerHelper('list', function (context, options) {
    let out = '<ul>';

    for (let i = 0; i < context.length; i++) {
        let blockParams = [context[i], context[i].id];
        let data = hb.createFrame(options.data);
        out += '<li>' + options.fn(context[i], data, blockParams) + '</li>';
    }

    out += '</ul>';
    return out;
});

let view = `
    {{#each users as |user userId|}}
      Id: {{userId}} Name: {{user.name}}
    {{/each}}
`;

let ctx = {
    users: [
        {
            id: '1',
            name: 'John'
        },
        {
            id: '2',
            name: 'Anna'
        }
    ]
};

let template = hb.compile(view);

console.log(template(ctx));
