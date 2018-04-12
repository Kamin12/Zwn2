import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Audio } from '../Audio.js';

if (Meteor.isServer) {

Meteor.publish('audioStream', function (audioTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Audio.findOne({audioTitle}, {
    fields: {
      audiomember: 1,
      audiomembers: 1,
      audiotitle: 1,
      audiodate: 1,
      audiotext: 1
   }
 });
});


Meteor.publish('audioFeed', function (audioTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Audio.findOne({audioTitle}, {
    fields: {
      audiomember: 1,
      audiomembers: 1,
      audiotitle: 1,
      audiodate: 1,
      audiotext: 1
   }
 });
});
}
