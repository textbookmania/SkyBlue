/**
 * Created by sorap on 12/14/2015.
 */

if(Meteor.isClient){
    Meteor.call('sendEmail',
        'Android.prok@gmail.com',
        'bob@example.com',
        'Hello from Meteor!',
        'This is a test of Email.send.');

    console.log("email sent");
}


if(Meteor.isServer){
    Meteor.startup(function(){
        process.env.MAIL_URL = 'smtp://postmaster%40sandboxdcd4f48ef10f49fcb182f81c88329310.mailgun.org:9e8c91e97978835bc5b72541b0ba90d1@smtp.mailgun.org'
    });


    Meteor.methods({
        sendEmail: function (to, from, subject, text) {
            check([to, from, subject, text], [String]);

            // Let other method calls from the same client start running,
            // without waiting for the email sending to complete.
            this.unblock();

            Email.send({
                to: to,
                from: from,
                subject: subject,
                text: text
            });
        }
    });
}