import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './Menu.html';

Template.Menu.events({
    'click .maintext3' (event, template) {
      Blaze.render(Template.Login, document.body);
    },

    'click #waveicon' (event, template) {
      Blaze.render(Template.WreadAbout, document.body);
    }
});

Template.Menu.helpers({
 NotLoggedIn() {
   if ( !Meteor.user() & !Meteor.loggingIn()) { return false; } else { return true; }
 }
});


Template.StreamMenu.helpers({
  currentitem(){
    return Session.get('selectedItem');
  }
});
