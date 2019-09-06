const hbs = require('express-hbs');

hbs.registerHelper('getHandlebarsVersion', function() {
    return hbs.handlebars.VERSION;
});
