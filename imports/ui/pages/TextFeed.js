if (Meteor.isClient) {


  import { Template } from 'meteor/templating';
  import { FlowRouter } from 'meteor/kadira:flow-router';

  import { Texts } from '../../api/Text/Text.js';

  import './TextFeed.html';
  import '../../api/Text/Server/TextPublications.js';
  import '../../api/Text/Text.js';

  // Components used inside the template

Template.TextFeed.helpers({
 texts() {
   return Texts.find();
 }
});


Template.TextFeed.onCreated( function(){
   this.autorun( () => {
     this.subscribe('textFeed', this.getTextFeed());
   });
});
}
