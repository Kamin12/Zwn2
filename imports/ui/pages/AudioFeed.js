if (Meteor.isClient) {

  import { Template } from 'meteor/templating';
  import { FlowRouter } from 'meteor/kadira:flow-router';

  import './AudioFeed.html';
  import '../../api/Audio/Server/AudioPublications.js';
  import '../../api/Audio/Audio.js';


  // Components used inside the template


Template.AudioFeed.helpers({
tracks() {
   return Audio.find();
 }
});

Template.AudioFeed.onCreated( function(){
   this.autorun( () => {
     this.subscribe('audioFeed', this.getAudioFeed());
   });
});

}
