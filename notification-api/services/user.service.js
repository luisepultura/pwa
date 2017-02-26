const admin = require("firebase-admin");

// Fetch the service account key JSON file contents
const serviceAccount = require('../../config/messagingFirebaseAccountKey..json');

// Initialize the app with a custom auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://messaging-ab425.firebaseio.com"
});

// The app only has access as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/some_resource");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});