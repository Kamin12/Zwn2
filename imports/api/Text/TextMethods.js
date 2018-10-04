import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Texts } from '../../../lib/Text.js';

export const Textsinsert = new ValidatedMethod({
  name : 'Texts.methods.insert',
  validate: new SimpleSchema ({
    texttitle: { type: String },
    texttext: {type: String },
  }).validator(),

  run({ texttitle, texttext, textmember, textmedia}) {

                   Texts.insert({
      titletext: texttitle,
      texttexttwo: texttext,
    });
  }
});
