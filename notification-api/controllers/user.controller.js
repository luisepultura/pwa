const user = require('../models/user');


function welcome(req, res) {
    return res.status(200).json({ message: 'Welcome to the API that powers the push notifications for https://ril-pwa.firebaseapp.com' });
}

function createUser(req, res) {
    // var user = new User();
    // user.user_id = req.body.user_id;



    // user.save(function (err, users) {
    //     if (err) {
    //         return res.json({ Error: err });
    //     } else {
    //         return res.status(201).json({ success: true, message: "User Created successfully." });
    //     }
    // });

    user.save({ user_id: req.body.user_id });
    return res.status(201).json({ success: true, message: "User Created successfully." });
}

function deleteUser(req, res, next) {
    user.remove({ user_id: req.params.user_id });
    res.json({ success: true, message: 'Delete Successful' });
    next();
    // var userId = req.params.user_id;

    // console.log(userId);

    // User.remove({ user_id: userId }, function (err, user) {
    //     if (err) {
    //         return res.status(404).json({ success: false, message: 'User Details Not Found' });
    //     }

    //     res.json({ success: true, message: 'Delete Successful' });
    //     next();
    // });
}

function getUser(req, res) {
    res.json({ success: true, user: user.find({ user_id: req.params.user_id }) });
}

function getUsers(req, res) {
    res.json({ success: true, users: user.getAll() });
}


module.exports = {

    /**
     * Welcome Notice
     * @param  req
     * @param  res
     * @return Void
     */
    welcome,

    /**
     * Register User with subscription ID
     * @param  req
     * @param  res
     * @return json
     */
    createUser,

    /**
     * Delete A User
     * @param  req
     * @param  res
     * @param  next
     * @return json
     */
    deleteUser,

    getUser,
    getUsers
};