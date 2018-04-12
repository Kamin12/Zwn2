if (Meteor.isClient) {

  import { Template } from 'meteor/templating';
  import { FlowRouter } from 'meteor/kadira:flow-router';

  import './ImageFeed.html';
  import '../../api/Image/Server/ImagePublications.js';
  import '../../api/Image/Image.js';


  // Components used inside the template
  import '../components/ImageItemSmart.js';
  import '../components/ImageItemSmart.html';


Template.ImageFeed.helpers({
images(){
return Images.find()
}
});


Template.ImageFeed.onCreated( function(){
   this.autorun( () => {
     this.subscribe('imageFeed', this.getImageFeed());
   });
});

}
