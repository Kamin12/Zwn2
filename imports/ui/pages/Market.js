import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Products } from '../../api/Products/Products.js';

import './Market.html';
import '../../api/Products/Server/ProductsPublications.js';
import '../../api/Products/Products.js';


// Components used inside the template

import '../components/ProductItemSmart.js';
import '../components/ProductItemSmart.html';




Template.Market.helpers({
 products() {
   return Products.find();
 },
 productArgs (productTitle){
     return Products.findOne(productTitle);
   }

});

Template.Market.onCreated( function(){



this.productpurchased = new ReactiveVar(false);
this.productliked = new ReactiveVar(false);
this.productcommented = new ReactiveVar(false);
this.creatorfollowing = new ReactiveVar(false);

});
