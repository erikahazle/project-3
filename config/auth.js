module.exports = {
    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOK_GROUP_PROJECT_APP_ID, // your App ID
        'clientSecret'  : process.env.FACEBOOK_GROUP_PROJECT_APP_SECRET, // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    }
};