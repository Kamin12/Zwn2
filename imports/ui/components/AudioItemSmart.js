import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './AudioItemSmart.html';

if (Meteor.isClient) {


Template.AudioItemSmart.helpers({
audioTitleArray() {
const instance = Template.instance();
const audioTitle = instance.getAudioTitle();
return Audios.findOne(audioTitle) ? [audioTitle] :[];
},
audioArgs (audioTitle) {
  const instance = Template.instance();
  return Audios.findOne(audioTitle);
}
});

}
