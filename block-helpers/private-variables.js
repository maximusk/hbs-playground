/*
Block helpers can also inject private letiables into their child templates
This can be useful to add extra information that is not in the original context data
*/

let hb = require('express-hbs').handlebars;

/*
options = {
    data: {},
    fn: ()=>{},
    hash: {},
    inverse: ()=> {},
    name: ''
}
*/

hb.registerHelper('list', function (context, options) {
    let out = '<ul>',
        data;

    if (options.data) {
        data = hb.createFrame(options.data);
        data.myvariable = 'some';
    }

    for (let i = 0; i < context.length; i++) {
        if (data) {
            data.index = i;
        }

        out += '<li>' + options.fn(context[i], {data: data}) + '</li>';
    }

    out += '</ul>';
    return out;
});

let view = `
    {{@some}}
    {{#list users}}
      {{@index}}. {{title}}
    {{/list}}
`;

let ctx = {
    users: [
        {
            title: 'Title 1'
        },
        {
            title: 'Title 2'
        }
    ]
};

let template = hb.compile(view);

// overriding `data` object provided by handlebars to helpers
console.log(template(ctx, {data: {some: 'v'}}));
