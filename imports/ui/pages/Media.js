import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './Media.html';


Template.Media.helpers({
mediaitems() {
   return Products.find();
 }
});
