import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Images } from '../Image.js';

if (Meteor.isServer) {

Meteor.publish('imageStream', function (imageTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Images.findOne({imageTitle}, {
    fields: {
      imagemember: 1,
      imagemembers: 1,
      imagetitle: 1,
      imagedate: 1,
      imagetext: 1
    }
  });
});

Meteor.publish('imageFeed', function (imageTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Images.findOne({imageTitle}, {
    fields: {
      imagemember: 1,
      imagemembers: 1,
      imagetitle: 1,
      imagedate: 1,
      imagetext: 1
    }
  });
});

}
