import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Products } from '../../../../lib/Products.js';

if ( Meteor.isServer ) {

Meteor.publish('productStream', function (productTitle) {
  if (!this.userId) {
  return this.ready();
}

  return Products.findOne({productTitle}, {
      fields: {
        productmember: 1,
        productmembers: 1,
        producttitle: 1,
        productdate: 1,
        producttext: 1
      }
    });
 });

 Meteor.publish('productFeed', function (productTitle) {
   if (!this.userId) {
   return this.ready();
 }

   return Products.findOne({productTitle}, {
       fields: {
         productmember: 1,
         producttitle: 1,
         textdate: 1,
         texttext: 1
       }
     });
  });

}
