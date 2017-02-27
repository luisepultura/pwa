const user = require('../models/user'),
    _ = require('lodash'),
    gcm = require('node-gcm')


const fcm = 'AAAAG8NZDig:APA91bFO3FqiZIeRPTuTcgPT4NFRm4q7J2OkXB-haaUV_EWnWEafUtFWznNKtjJBYO1rWfASB63hmDBjMirDfacloex66TfxyZZP7GKhGpmS7wp49a9q0X8b7wC3IHYcXqbL_qKMTbl1';

function notifyUsers(req, res) {

    const sender = new gcm.Sender(fcm);

    // Prepare a message to be sent
    const message = new gcm.Message({
        notification: {
            title: "Hello, World",
            icon: "ic_launcher",
            body: "Click to see the latest commit"
        }
    });

    const user_ids = user.getAll();
    console.log(user_ids);

    sender.send(message, { registrationTokens: user_ids }, function (err, response) {
        if (err) {
            console.error(err);
            debugger;
        } else {
            return res.json(response);
        }
    });

    // User.find({}, function (err, users) {

    //     // user subscription ids to deliver message to
    //     const user_ids = _.map(users, 'user_id');

    //     console.log("User Ids", user_ids);

    //     console.log(sender);

    //     // Actually send the message
    //     sender.send(message, { registrationTokens: user_ids }, function (err, response) {
    //         if (err) {
    //             console.error(err);
    //         } else {
    //             return res.json(response);
    //         }
    //     });
    // });
}


module.exports = {
    /**
     * Send Notification to Users
     * @param  req
     * @param  res
     * @return json
     */
    notifyUsers
}
