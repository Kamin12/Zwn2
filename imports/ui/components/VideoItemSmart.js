import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './VideoItemSmart.html';

if (Meteor.isClient) {

Template.VideoItemSmart.helpers({
videoTitleArray() {
const instance = Template.instance();
const videoTitle = instance.getVideoTitle();
return Videos.findOne(videoTitle) ? [videoTitle] :[];
},
videoArgs (videoTitle) {
  const instance = Template.instance();
  return
    Videos.findOne(videoTitle);
}
});

}
