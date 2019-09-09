let hb = require('express-hbs').handlebars;

hb.registerHelper('each', function (list, options) {
    let ret = '';

    for (let i = 0, j = list.length; i < j; i++) {
        ret = ret + options.fn(list[i]);
    }

    return ret;
});

let view = `
    <div class="comments">
      {{#each comments}}
        <div class="comment">
          <h2>{{subject}}</h2>
        </div>
      {{/each}}
    </div>
`;

let ctx = {
    comments: [
        {
            subject: 'Awesome article!',
        },
        {
            subject: 'Looking for more',
        }
    ]
};

let template = hb.compile(view);

console.log(template(ctx));
