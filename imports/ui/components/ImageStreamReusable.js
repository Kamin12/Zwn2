import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ImageStreamReusable.html';

Template.StreamImageReusable.onCreated(function listShowOnCreated() {
  this.autorun(() => {
    new SimpleSchema({
      imagetext: { type: String },
      imageimage: { type: String },
      imagetitle  : { type: String },
    }).validate(Template.currentData());
  });
});
