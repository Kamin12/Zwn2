import './UserSiteReusable.html';

if (Meteor.isClient) {

Template.UserSite.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    editing: false,
    editingTodo: false
  });
});

}
