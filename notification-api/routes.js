const User = require('./controllers/user.controller'),
    Notification = require('./controllers/notification.controller');

function routes(app) {

    app.get('/api', User.welcome);

    app.get('/api/users', User.getUsers);
    app.get('/api/user/:user_id', User.getUser);
    app.post('/api/users', User.createUser);
    app.delete('/api/user/:user_id', User.deleteUser);

    app.post('/api/notify', Notification.notifyUsers);
}

module.exports = routes;