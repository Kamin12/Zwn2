import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Template } from 'meteor/templating';
import { ActiveRoute } from 'meteor/zimme:active-route';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { _ } from 'meteor/underscore';
import { $ } from 'meteor/jquery';
import { Videos } from '../../../lib/Text.js';
import { Texts } from '../../../lib/Text.js';
import { Audios } from '../../../lib/Text.js';
import { Images } from '../../../lib/Text.js';
import { Products } from '../../../lib/Text.js';





import './Appbody.html';

  Meteor.startup(function() {
    Stripe.setPublishableKey(Meteor.settings.public.stripe);
  });


Template.Appbody.onCreated(function bodyOnCreated() {
  this.state = new ReactiveDict();
  Meteor.subscribe('texts');
});

/*
  Template.join2.events({
    "click .close": function(event, template) {
      var modal = $('#myModal');
      modal.css('display', 'none');
      Blaze.remove(template.view);
    }
  });
*/




Template.StreamMenu.helpers({
  currentitem(){
    return Session.get('selectedItem');
  }
});

 Template.LoginNow.events ({
   'click #loginbutton' (event, template) {
     var modal35 = $('.modal35');
     modal3.css('display', 'none');
     Blaze.remove(template.view);
   },
   'click #signupbutton' (event, template) {
     var modal3 = $('.modal-content');
     modal3.css('display', 'none');
     Blaze.remove(template.view);
   }
 });

/*
 Template.Register.events({
   'submit #userregisterform': function(event, template) {
     event.preventDefault();
     var memberAccount = {
          "image": event.target.userimageone.value,
          "location": event.target.userlocationone.value,
          "bio": event.target.userbioone.value,
        }
        Meteor.call('addUserRegister', memberAccount)
 }
});
*/
