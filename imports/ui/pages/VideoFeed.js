
if (Meteor.isClient) {


  import { Template } from 'meteor/templating';
  import { FlowRouter } from 'meteor/kadira:flow-router';

  import '../../api/Video/Server/VideoPublications.js';

  // Components used inside the template

  import '../components/VideoItemSmart.js';
  import '../components/VideoItemSmart.html';
  import '../pages/VideoFeed.html';


Template.VideoFeed.helpers({
videos(){
return Videos.find()
}
});


Template.VideoFeed.onCreated( function(){
   this.autorun( () => {
     this.subscribe('videoFeed', this.getVideoFeed());
   });
});

}
