
import './SideMessageReusable.html';

if (Meteor.isClient) {

Template.SideMessageReusable.onCreated( ()=> {
   new SimpleSchema({
     Member: {type: string},
     Group: {type: string},
     Message: {type: string},
   }).validate(Template.currentData());
   });

}
