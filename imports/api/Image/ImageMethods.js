import { Meteor } from 'meteor/meteor';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { _ } from 'meteor/underscore';

import { Images } from '../../../lib/Image.js';

export const Imagesinsert = new ValidatedMethod({
name: 'Imagesinsert',
validate: new SimpleSchema ({
  imagetext: {type: String},
  imagetitle: {type: String},
  imageimage: {type: Object},
}).validator(),

run({imagetext, imagetitle, imageimage}) {

Images.insert({
  textimage: imagetext,
  titleimage: imagetitle,
  imageimage: imageimage,
});
}
});
