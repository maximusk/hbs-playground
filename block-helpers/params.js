let hb = require('express-hbs').handlebars;

hb.registerHelper('with', function (subCtx, options) {
    return options.fn(subCtx);
});

let view = `
    <div class="entry">
      <h1>{{title}}</h1>
      {{#with story}}
        <div class="intro">{{{intro}}}</div>
        <div class="body">{{{body}}}</div>
      {{/with}}
    </div>
`;

let ctx = {
    title: 'First Post',
    story: {
        intro: 'Before the jump',
        body: 'After the jump'
    }
};

let template = hb.compile(view);

console.log(template(ctx));
