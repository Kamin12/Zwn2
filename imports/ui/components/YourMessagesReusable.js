import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';


import './YourMessagesReusable.html';
import './NewMessageSmart.html';

if (Meteor.isClient) {

Template.YourMessagesRU.helpers({
  "user": function() {
    return Meteor.userId.username();
  }
});

Template.YourMessagesRU.events({
  "click .close3": function(event, template) {
    var modal3 = $('#messageswhole');
    modal3.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #calltojoin': function(event, template) {
    var modal3 = $('#messageswhole');
    modal3.css('display', 'none');
    Blaze.remove(template.view);
  },
  'click #addmessages': function(event, template){
  Blaze.render(Template.NewMessage, template.$('#conversation').get(0));
},
'change #fileInput': function(event,template){
  if (e.currentTarget.files && e.currentTarget.files[0]) {
    // We upload only one file, in case
    // multiple files were selected
    var upload = Images.insert({
      file: e.currentTarget.files[0],
      streams: 'dynamic',
      chunkSize: 'dynamic'
    }, false);

    upload.on('start', function () {
      template.currentUpload.set(this);
    });

    upload.on('end', function (error, fileObj) {
      if (error) {
        alert('Error during upload: ' + error);
      } else {
        alert('File "' + fileObj.name + '" successfully uploaded');
      }
      template.currentUpload.set(false);
    });

    upload.start();
  }
}
});

Template.YourMessagesRU.onRendered(function() {
  Meteor.setTimeout(() => {
    var modal3 = $('.modal35');
    modal3.css('display', 'block');
  }, 500);
});




Template.YourMessagesRU.helpers({
  'messages': function(){
    return Messages.find({});
  }
});




 Template.YourMessagesRU.helpers({
  isLoading() {
    return Template.instance().loading.get();
  },
  isDirect() {
    return Template.instance().isDirect.get();
  },
  username() {
    return FlowRouter.getParam( 'channel' );
  }
  });

  Template.Sidebar.helpers({
    currentChannel( name ) {
   let current = FlowRouter.getParam( 'channel' );
   if ( current ) {
     return current === name || current === `@${ name }` ? 'active' : false;
   }
 },
messages (message){
  return Messages.find({});
}
  });

  Template.Sidebar.onCreated( () => {
  let template = Template.instance();
  template.subscribe( 'sidebar' );
});

      Template.YourMessagesRU.helpers({
        messageArgs(channel)  {
        return {
        isLoading:  Template.instance().loading.get(),
        isDirect: Template.instance().isDirect.get(),
        username: FlowRouter.getParam( 'channel' ),
        currentChannel( name ) {
         let current = FlowRouter.getParam( 'channel' );
         if ( current ) {
           return current === name || current === `@${ name }` ? 'active' : false;
         }},}},
      messages(){ Messages.find();
      }
    });
    }
