import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Texts } from '../../../../lib/Text.js';

if (Meteor.isServer) {

Meteor.publish('textStream', function textTitle() {

  return [ Texts.find()
    ]
  });


Meteor.publish('textFeed', function textFeed() {

  return [ Texts.find()]
 });

 }
