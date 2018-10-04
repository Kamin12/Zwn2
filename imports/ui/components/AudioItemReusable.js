import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './AudioItemReusable.html';

Template.AudioItemReusable.onCreated(function listShowOnCreated() {
  this.autorun(() => {
    new SimpleSchema({
      audioaudioblz: {type: [Object]},
      audiomediablz: {type: [Object]},
      audiotitleblz: {type: String},
      audiotextblz: {type: String}
    }).validate(Template.currentData());
  })
});



  Template.AudioItemReusable.helpers({
  pathforAudioStream: function (){
    var audio = this;
    var params = {
      audio : audios.audiotitle
    };
    var channel = "audio";
    var path = FlowRouter.path(channel, params);
    return path;
  }
  });
