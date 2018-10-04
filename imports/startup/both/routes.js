
import { FlowRouter  } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { AccountsTemplates } from 'meteor/useraccounts:core';

// Import to load these templates
import '../../ui/stylesheets/create.css';
import '../../ui/stylesheets/dashboard.css';
import '../../ui/stylesheets/lowernavigation.css';
import '../../ui/stylesheets/main.css';
import '../../ui/stylesheets/messages.css';
import '../../ui/stylesheets/paymentModal.css';
import '../../ui/stylesheets/products.css';
import '../../ui/stylesheets/settings.css';
import '../../ui/stylesheets/talent.css';
import '../../ui/stylesheets/yoursite.css';

import '../../ui/layouts/Appbody.js';
import '../../ui/components/Menu.js';
import '../../ui/pages/ProductStream.js';
import '../../ui/pages/Talent.js';
import '../../ui/pages/Settings.js';
import '../../ui/pages/CreateSmart.js';
import '../../ui/pages/Market.js';
import '../../ui/pages/YourMessagesSmart.js';
import '../../ui/components/AboutReusable.js';
import '../../ui/components/AudioItemReusable.js';
import '../../ui/components/AudioItemSmart.js';
import '../../ui/components/AudioStreamReusable.js';
import '../../ui/components/ImageItemReusable.js';
import '../../ui/components/ImageItemSmart.js';
import '../../ui/components/ImageStreamReusable.js';
import '../../ui/components/LowerNavigator.js';
import '../../ui/components/Message.js';
import '../../ui/components/NewMessageSmart.js';
import '../../ui/components/PaymentModalReusable.js';
import '../../ui/components/ProductItemReusable.js';
import '../../ui/components/ProductItemSmart.js';
import '../../ui/components/ProductStreamReusable.js';
import '../../ui/components/SideMessageReusable.js';
import '../../ui/components/StreamVideoReusable.js';
import '../../ui/components/TextItemSmart.js';
import '../../ui/components/TextItemReusable.js';
import '../../ui/components/TextStreamReusable.js';
import '../../ui/components/UserSiteReusable.js';
import '../../ui/components/VideoItemReusable.js';
import '../../ui/components/VideoItemSmart.js';
import '../../ui/components/YouMenuReusable.js';
import '../../ui/components/NewMessageReusable.js';
import '../../ui/components/YourMessagesReusable.js';
import '../../ui/pages/AudioFeed.js';
import '../../ui/pages/AudioStream.js';
import '../../ui/pages/CreateSmart.js';
import '../../ui/pages/ImageFeed.js';
import '../../ui/pages/ImageStream.js';
import '../../ui/components/Create.js';
import '../../ui/pages/Market.js';
import '../../ui/pages/Media.js';
import '../../ui/pages/ProductStream.js';
import '../../ui/pages/Settings.js';
import '../../ui/pages/Talent.js';
import '../../ui/pages/TalentFeed.js';
import '../../ui/pages/TextStream.js';
import '../../ui/pages/UserSiteSmart.js';
import '../../ui/pages/VideoFeed.js';
import '../../ui/pages/VideoStream.js';
import '../../ui/pages/YourMessagesSmart.js';
import '../../ui/accounts/accounts-templates.js';


FlowRouter.route('/', {
  name: 'Home',
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'Market', footer: 'LowerNavigator' });
},
});


FlowRouter.route('/messages', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'YourMessagesRU', footer: 'LowerNavigator' });
},
});


FlowRouter.route('/welcome', {
action () {
BlazeLayout.render('Appbody', {top:"Menu" });
},
});

FlowRouter.route('/create', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", main:'Create', footer: 'LowerNavigator' });
},
});


FlowRouter.route('/cloud', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", main:'Cloud', footer: 'LowerNavigator' });
},
});

FlowRouter.route('/home', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", footer: 'LowerNavigator' });
},
});

FlowRouter.route('/media', {
action () {
BlazeLayout.render('Appbody', {top:"Menu", footer: 'LowerNavigator' });
},
});


FlowRouter.route('/about', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'About', footer: 'LowerNavigator' });
},
});

FlowRouter.route('/market', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'Market', footer: 'LowerNavigator' });
},
});

FlowRouter.route('/newmessage', {
  action() {
  BlazeLayout.render( 'Appbody', { top: 'Menu', main: 'NewMessage', footer: 'LowerNavigator' });
},
});


FlowRouter.route('/talent', {
  action() {
    BlazeLayout.render('Appbody', {top: 'Menu', main: 'Talent', footer: 'LowerNavigator' });
  },
});

FlowRouter.route('/register', {
  action() {
    BlazeLayout.render('Appbody', { main: 'Register' });
  },
});

FlowRouter.route('/settings', {
  action() {
    BlazeLayout.render('Appbody', {top: 'Menu', main: 'Settings', footer: 'LowerNavigator' });
  },
});

FlowRouter.route('/mysite', {
  action(){
    BlazeLayout.render('Appbody', {main: 'Mysite'});
  },
});

FlowRouter.route('/createproduct', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateProduct'});
  },
});

FlowRouter.route('/createaudio', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateAudio'});
  },
});

FlowRouter.route('/createtext', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateText'});
  },
});

FlowRouter.route('/createvideo', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateVideo'});
  },
});

FlowRouter.route('/createimage', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateImage'});
  },
});

FlowRouter.route('/createbooking', {
  action(){
    BlazeLayout.render('Appbody', { main: 'CreateBooking'});
  },
});


FlowRouter.route('/products/:ProductTitle', {
  name:'StreamProduct',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
},
});


FlowRouter.route('/videos/:video', {
  name:'StreamVideo',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
},
});

FlowRouter.route('/texts/:text', {
  name:'StreamText',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
},
});

FlowRouter.route('/images/:image', {
  name:'StreamImage',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
},
});

FlowRouter.route('/requests/:request', {
  name:'StreamRequest',
  action: function(params) {
    BlazeLayout.render('Appbody', {top:'Menu', main: 'StreamProductMain'});
},
});
