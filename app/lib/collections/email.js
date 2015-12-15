/**
 * Created by sorap on 12/14/2015.
 */


if(Meteor.isServer){
    Meteor.startup(function(){
        process.env.MAIL_URL = 'smptp://postmaster%40sandboxdcd4f48ef10f49fcb182f81c88329310.mailgun.org:9e8c91e97978835bc5b72541b0ba90d1@smtp.mailgun.org'
        
    });
}