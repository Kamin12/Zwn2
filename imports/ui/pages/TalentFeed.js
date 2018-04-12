/*


import './TalentFeed.html';


if (Meteor.isClient) {

  import { Template } from 'meteor/templating';
  import { FlowRouter } from 'meteor/kadira:flow-router';

  import '../../api/Bookings/Server/BookingPublications.js';
  import '../../api/Bookings/Bookings.js';

  // Components used inside the template


Template.TalentFeed.helpers({

bookingArgs(bookingTitle) {

const instance = Template.instance();
var textTitle = instance.getTextTitle();
   return {
     text(){
       return Texts.findOne(textTitle);
     }
   }
 },
 eventsArgs(eventsTitle) {
 const instance = Template.instance();
 var textTitle = instance.getTextTitle();
    return {
      text(){
        return Texts.findOne(textTitle);
      }
    }
  }
});

Template.TalentFeed.onCreated( function(){
   this.autorun( () => {
     this.subscribe('talentFeed', this.getTalentFeed());
   });
});

}

*/
