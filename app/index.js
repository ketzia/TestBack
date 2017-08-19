let personas = require('./routes/persona');


const apiRoutes = function(app){
    app.use('/api',personas);
};

module.exports = apiRoutes;