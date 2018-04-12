import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ImageItemSmart.html';

if (Meteor.isClient) {

  Template.ImageItemSmart.helpers({
  imageTitleArray() {
  const instance = Template.instance();
  const imageTitle = instance.getImageTitle();
  return Images.findOne(imageTitle) ? [imageTitle] :[];
  },
  imageArgs (imageTitle) {
    const instance = Template.instance();
    return
      Images.findOne(imageTitle);
  }
  });

}
