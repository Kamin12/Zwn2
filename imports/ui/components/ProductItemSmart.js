import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Mongo } from 'meteor/mongo';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';
import { $ } from 'meteor/jquery';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import './ProductItemSmart.html';

if (Meteor.isClient) {

  Template.ProductItemSmart.helpers({
  productTitleArray() {
  const instance = Template.instance();
  const productTitle = instance.getProductTitle();
  return Products.findOne(productTitle) ? [productTitle] :[];
  },
  productArgs (productTitle) {
    const instance = Template.instance();
    return
      Products.findOne(productTitle);
  }
  });

}
