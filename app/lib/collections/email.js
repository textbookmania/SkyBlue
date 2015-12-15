/**
 * Created by sorap on 12/14/2015.
 */

if(Meteor.isClient){

    Template.email.events({
        'submit #email-form': function(e,t){
            e.preventDefault();

            var toAddr = t.find('#inputEmail').value;
            var subj = t.find('#inputSubject').value;
            var body = t.find('#inputBody').value;

            Meteor.call('sendEmail',
                toAddr,
                'SkyBlue@textbookmania.com',
                'Your textbook offer has been accepted ',
                'Your offer has been accepted by: ' + Meteor.user().profile.name + '\n' + "user message: \n"  + body  );

            console.log(e.book);
            console.log("address: " + toAddr + "sub: " + subj + " " + Meteor.user().profile.name);
        }
    });

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