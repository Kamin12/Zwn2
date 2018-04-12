import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './TextItemSmart.html';

if (Meteor.isClient) {

Template.TextItemSmart.helpers({
textTitleArray() {
const instance = Template.instance();
const textTitle = instance.getTextTitle();
return Texts.findOne(textTitle) ? [textTitle] :[];
},
textArgs (textTitle) {
  const instance = Template.instance();
  return
    Texts.findOne(textTitle);

}

});

}
