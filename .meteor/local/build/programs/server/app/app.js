var require = meteorInstall({"lib":{"Audio.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/Audio.js                                                                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Mongo = void 0;                                                                               // 1
module.watch(require("meteor/mongo"), {                                                           // 1
  Mongo: function (v) {                                                                           // 1
    Mongo = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Audios = new Mongo.Collection('audio');                                                       // 4
Audios.deny({                                                                                     // 6
  insert: function () {                                                                           // 7
    return true;                                                                                  // 7
  },                                                                                              // 7
  update: function () {                                                                           // 8
    return true;                                                                                  // 8
  },                                                                                              // 8
  remove: function () {                                                                           // 9
    return true;                                                                                  // 9
  }                                                                                               // 9
});                                                                                               // 6
Audios.schema = new SimpleSchema({                                                                // 12
  audioaudioblz: {                                                                                // 13
    type: [Object]                                                                                // 13
  },                                                                                              // 13
  audiomediablz: {                                                                                // 14
    type: [Object]                                                                                // 14
  },                                                                                              // 14
  audiotitleblz: {                                                                                // 15
    type: String                                                                                  // 15
  },                                                                                              // 15
  audiotextblz: {                                                                                 // 16
    type: String                                                                                  // 16
  }                                                                                               // 16
});                                                                                               // 12
Audios.attachSchema(Audios.schema);                                                               // 19
module.exportDefault(Audios);                                                                     // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Bookings.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/Bookings.js                                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Image.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/Image.js                                                                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Mongo = void 0;                                                                               // 1
module.watch(require("meteor/mongo"), {                                                           // 1
  Mongo: function (v) {                                                                           // 1
    Mongo = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Images = new Mongo.Collection('images');                                                      // 4
Images.deny({                                                                                     // 7
  insert: function () {                                                                           // 8
    return true;                                                                                  // 8
  },                                                                                              // 8
  update: function () {                                                                           // 9
    return true;                                                                                  // 9
  },                                                                                              // 9
  remove: function () {                                                                           // 10
    return true;                                                                                  // 10
  }                                                                                               // 10
});                                                                                               // 7
Images.schema = new SimpleSchema({                                                                // 13
  imagetext: {                                                                                    // 14
    type: String                                                                                  // 14
  },                                                                                              // 14
  imagetitle: {                                                                                   // 15
    type: String                                                                                  // 15
  },                                                                                              // 15
  imageimage: {                                                                                   // 16
    type: Object                                                                                  // 16
  },                                                                                              // 16
  imagedate: {                                                                                    // 17
    type: Date                                                                                    // 17
  }                                                                                               // 17
});                                                                                               // 13
Images.attachSchema(Images.schema);                                                               // 20
module.exportDefault(Images);                                                                     // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Products.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/Products.js                                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  Products: function () {                                                                         // 1
    return Products;                                                                              // 1
  }                                                                                               // 1
});                                                                                               // 1
var Products = new Mongo.Collection('products');                                                  // 1
Products.deny({                                                                                   // 3
  insert: function () {                                                                           // 4
    return true;                                                                                  // 4
  },                                                                                              // 4
  update: function () {                                                                           // 5
    return true;                                                                                  // 5
  },                                                                                              // 5
  remove: function () {                                                                           // 6
    return true;                                                                                  // 6
  }                                                                                               // 6
});                                                                                               // 3
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Text.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/Text.js                                                                                    //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  Texts: function () {                                                                            // 1
    return Texts;                                                                                 // 1
  }                                                                                               // 1
});                                                                                               // 1
var Mongo = void 0;                                                                               // 1
module.watch(require("meteor/mongo"), {                                                           // 1
  Mongo: function (v) {                                                                           // 1
    Mongo = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Texts = new Mongo.Collection('texts');                                                        // 6
////////////////////////////////////////////////////////////////////////////////////////////////////

},"Video.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// lib/Video.js                                                                                   //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  Videos: function () {                                                                           // 1
    return Videos;                                                                                // 1
  }                                                                                               // 1
});                                                                                               // 1
var Mongo = void 0;                                                                               // 1
module.watch(require("meteor/mongo"), {                                                           // 1
  Mongo: function (v) {                                                                           // 1
    Mongo = v;                                                                                    // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Videos = new Mongo.Collection('videos');                                                      // 4
Videos.deny({                                                                                     // 6
  insert: function () {                                                                           // 7
    return true;                                                                                  // 7
  },                                                                                              // 7
  update: function () {                                                                           // 8
    return true;                                                                                  // 8
  },                                                                                              // 8
  remove: function () {                                                                           // 9
    return true;                                                                                  // 9
  }                                                                                               // 9
});                                                                                               // 6
Videos.schema = new SimpleSchema({                                                                // 12
  videotitle: {                                                                                   // 13
    type: String                                                                                  // 13
  },                                                                                              // 13
  videotext: {                                                                                    // 14
    type: String                                                                                  // 14
  },                                                                                              // 14
  videovideo: {                                                                                   // 15
    type: Object                                                                                  // 15
  },                                                                                              // 15
  videoimage: {                                                                                   // 16
    type: Object                                                                                  // 16
  },                                                                                              // 16
  videodate: {                                                                                    // 17
    type: String                                                                                  // 17
  }                                                                                               // 17
});                                                                                               // 12
Videos.attachSchema(Videos.schema);                                                               // 20
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"imports":{"api":{"Audio":{"Server":{"AudioPublications.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Audio/Server/AudioPublications.js                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Audios = void 0;                                                                              // 1
module.watch(require("../../../../lib/Audio.js"), {                                               // 1
  Audios: function (v) {                                                                          // 1
    Audios = v;                                                                                   // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
                                                                                                  //
if (Meteor.isServer) {                                                                            // 6
  Meteor.publish('audioStream', function (audioTitle) {                                           // 8
    if (!this.userId) {                                                                           // 9
      return this.ready();                                                                        // 10
    }                                                                                             // 11
                                                                                                  //
    return Audios.findOne({                                                                       // 13
      audioTitle: audioTitle                                                                      // 13
    }, {                                                                                          // 13
      fields: {                                                                                   // 14
        audiomember: 1,                                                                           // 15
        audiomembers: 1,                                                                          // 16
        audiotitle: 1,                                                                            // 17
        audiodate: 1,                                                                             // 18
        audiotext: 1                                                                              // 19
      }                                                                                           // 14
    });                                                                                           // 13
  });                                                                                             // 22
  Meteor.publish('audioFeed', function (audioTitle) {                                             // 25
    if (!this.userId) {                                                                           // 26
      return this.ready();                                                                        // 27
    }                                                                                             // 28
                                                                                                  //
    return Audios.findOne({                                                                       // 30
      audioTitle: audioTitle                                                                      // 30
    }, {                                                                                          // 30
      fields: {                                                                                   // 31
        audiomember: 1,                                                                           // 32
        audiomembers: 1,                                                                          // 33
        audiotitle: 1,                                                                            // 34
        audiodate: 1,                                                                             // 35
        audiotext: 1                                                                              // 36
      }                                                                                           // 31
    });                                                                                           // 30
  });                                                                                             // 39
}                                                                                                 // 40
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"AudioMethods.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Audio/AudioMethods.js                                                              //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  Audioinsert: function () {                                                                      // 1
    return Audioinsert;                                                                           // 1
  }                                                                                               // 1
});                                                                                               // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var ValidatedMethod = void 0;                                                                     // 1
module.watch(require("meteor/mdg:validated-method"), {                                            // 1
  ValidatedMethod: function (v) {                                                                 // 1
    ValidatedMethod = v;                                                                          // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var DDPRateLimiter = void 0;                                                                      // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                // 1
  DDPRateLimiter: function (v) {                                                                  // 1
    DDPRateLimiter = v;                                                                           // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
                                                                                                  //
var _ = void 0;                                                                                   // 1
                                                                                                  //
module.watch(require("meteor/underscore"), {                                                      // 1
  _: function (v) {                                                                               // 1
    _ = v;                                                                                        // 1
  }                                                                                               // 1
}, 4);                                                                                            // 1
var Audios = void 0;                                                                              // 1
module.watch(require("../../../lib/Audio.js"), {                                                  // 1
  Audios: function (v) {                                                                          // 1
    Audios = v;                                                                                   // 1
  }                                                                                               // 1
}, 5);                                                                                            // 1
var Audioinsert = new ValidatedMethod({                                                           // 9
  name: 'Audio.methods.insert',                                                                   // 10
  validate: new SimpleSchema({                                                                    // 11
    audiotitle: {                                                                                 // 12
      type: String                                                                                // 12
    },                                                                                            // 12
    audiotext: {                                                                                  // 13
      type: String                                                                                // 13
    }                                                                                             // 13
  }).validator(),                                                                                 // 11
  run: function (_ref) {                                                                          // 15
    var audiotitle = _ref.audiotitle,                                                             // 15
        audiotext = _ref.audiotext;                                                               // 15
    Audios.insert({                                                                               // 16
      titleaudio: audiotitle,                                                                     // 17
      textaudio: audiotext                                                                        // 18
    });                                                                                           // 16
  }                                                                                               // 20
});                                                                                               // 9
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Bookings":{"Server":{"BookingPublications.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Bookings/Server/BookingPublications.js                                             //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
if (Meteor.isServer) {                                                                            // 2
  Meteor.publish('bookingsStream', function (textTitle) {                                         // 4
    if (!this.userId) {                                                                           // 5
      return this.ready();                                                                        // 6
    }                                                                                             // 7
                                                                                                  //
    return Bookings.findOne({                                                                     // 9
      textTitle: textTitle                                                                        // 9
    }, {                                                                                          // 9
      fields: {                                                                                   // 10
        textmember: 1,                                                                            // 11
        textmembers: 1,                                                                           // 12
        texttitle: 1,                                                                             // 13
        textdate: 1,                                                                              // 14
        texttext: 1                                                                               // 15
      }                                                                                           // 10
    });                                                                                           // 9
  });                                                                                             // 18
  Meteor.publish('bookingsFeed', function (productTitle) {                                        // 20
    if (!this.userId) {                                                                           // 21
      return this.ready();                                                                        // 22
    }                                                                                             // 23
                                                                                                  //
    return Bookings.findOne({                                                                     // 25
      textTitle: textTitle                                                                        // 25
    }, {                                                                                          // 25
      fields: {                                                                                   // 26
        textmember: 1,                                                                            // 27
        texttitle: 1,                                                                             // 28
        textdate: 1,                                                                              // 29
        texttext: 1                                                                               // 30
      }                                                                                           // 26
    });                                                                                           // 25
  });                                                                                             // 33
}                                                                                                 // 35
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"BookingMethods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Bookings/BookingMethods.js                                                         //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Image":{"Server":{"ImagePublications.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Image/Server/ImagePublications.js                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Images = void 0;                                                                              // 1
module.watch(require("../../../../lib/Image.js"), {                                               // 1
  Images: function (v) {                                                                          // 1
    Images = v;                                                                                   // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
                                                                                                  //
if (Meteor.isServer) {                                                                            // 6
  Meteor.publish('imageStream', function (imageTitle) {                                           // 8
    if (!this.userId) {                                                                           // 9
      return this.ready();                                                                        // 10
    }                                                                                             // 11
                                                                                                  //
    return Images.findOne({                                                                       // 13
      imageTitle: imageTitle                                                                      // 13
    }, {                                                                                          // 13
      fields: {                                                                                   // 14
        imagemember: 1,                                                                           // 15
        imagemembers: 1,                                                                          // 16
        imagetitle: 1,                                                                            // 17
        imagedate: 1,                                                                             // 18
        imagetext: 1                                                                              // 19
      }                                                                                           // 14
    });                                                                                           // 13
  });                                                                                             // 22
  Meteor.publish('imageFeed', function (imageTitle) {                                             // 24
    if (!this.userId) {                                                                           // 25
      return this.ready();                                                                        // 26
    }                                                                                             // 27
                                                                                                  //
    return Images.findOne({                                                                       // 29
      imageTitle: imageTitle                                                                      // 29
    }, {                                                                                          // 29
      fields: {                                                                                   // 30
        imagemember: 1,                                                                           // 31
        imagemembers: 1,                                                                          // 32
        imagetitle: 1,                                                                            // 33
        imagedate: 1,                                                                             // 34
        imagetext: 1                                                                              // 35
      }                                                                                           // 30
    });                                                                                           // 29
  });                                                                                             // 38
}                                                                                                 // 40
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ImageMethods.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Image/ImageMethods.js                                                              //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  Imagesinsert: function () {                                                                     // 1
    return Imagesinsert;                                                                          // 1
  }                                                                                               // 1
});                                                                                               // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var ValidatedMethod = void 0;                                                                     // 1
module.watch(require("meteor/mdg:validated-method"), {                                            // 1
  ValidatedMethod: function (v) {                                                                 // 1
    ValidatedMethod = v;                                                                          // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var DDPRateLimiter = void 0;                                                                      // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                // 1
  DDPRateLimiter: function (v) {                                                                  // 1
    DDPRateLimiter = v;                                                                           // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
                                                                                                  //
var _ = void 0;                                                                                   // 1
                                                                                                  //
module.watch(require("meteor/underscore"), {                                                      // 1
  _: function (v) {                                                                               // 1
    _ = v;                                                                                        // 1
  }                                                                                               // 1
}, 4);                                                                                            // 1
var Images = void 0;                                                                              // 1
module.watch(require("../../../lib/Image.js"), {                                                  // 1
  Images: function (v) {                                                                          // 1
    Images = v;                                                                                   // 1
  }                                                                                               // 1
}, 5);                                                                                            // 1
var Imagesinsert = new ValidatedMethod({                                                          // 9
  name: 'Imagesinsert',                                                                           // 10
  validate: new SimpleSchema({                                                                    // 11
    imagetext: {                                                                                  // 12
      type: String                                                                                // 12
    },                                                                                            // 12
    imagetitle: {                                                                                 // 13
      type: String                                                                                // 13
    },                                                                                            // 13
    imageimage: {                                                                                 // 14
      type: Object                                                                                // 14
    }                                                                                             // 14
  }).validator(),                                                                                 // 11
  run: function (_ref) {                                                                          // 17
    var imagetext = _ref.imagetext,                                                               // 17
        imagetitle = _ref.imagetitle,                                                             // 17
        imageimage = _ref.imageimage;                                                             // 17
    Images.insert({                                                                               // 19
      textimage: imagetext,                                                                       // 20
      titleimage: imagetitle,                                                                     // 21
      imageimage: imageimage                                                                      // 22
    });                                                                                           // 19
  }                                                                                               // 24
});                                                                                               // 9
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Products":{"Server":{"ProductsPublications.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Products/Server/ProductsPublications.js                                            //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Products = void 0;                                                                            // 1
module.watch(require("../../../../lib/Products.js"), {                                            // 1
  Products: function (v) {                                                                        // 1
    Products = v;                                                                                 // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
                                                                                                  //
if (Meteor.isServer) {                                                                            // 6
  Meteor.publish('productStream', function (productTitle) {                                       // 8
    if (!this.userId) {                                                                           // 9
      return this.ready();                                                                        // 10
    }                                                                                             // 11
                                                                                                  //
    return Products.findOne({                                                                     // 13
      productTitle: productTitle                                                                  // 13
    }, {                                                                                          // 13
      fields: {                                                                                   // 14
        productmember: 1,                                                                         // 15
        productmembers: 1,                                                                        // 16
        producttitle: 1,                                                                          // 17
        productdate: 1,                                                                           // 18
        producttext: 1                                                                            // 19
      }                                                                                           // 14
    });                                                                                           // 13
  });                                                                                             // 22
  Meteor.publish('productFeed', function (productTitle) {                                         // 24
    if (!this.userId) {                                                                           // 25
      return this.ready();                                                                        // 26
    }                                                                                             // 27
                                                                                                  //
    return Products.findOne({                                                                     // 29
      productTitle: productTitle                                                                  // 29
    }, {                                                                                          // 29
      fields: {                                                                                   // 30
        productmember: 1,                                                                         // 31
        producttitle: 1,                                                                          // 32
        textdate: 1,                                                                              // 33
        texttext: 1                                                                               // 34
      }                                                                                           // 30
    });                                                                                           // 29
  });                                                                                             // 37
}                                                                                                 // 39
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ProductMethods.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Products/ProductMethods.js                                                         //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  Productsinsert: function () {                                                                   // 1
    return Productsinsert;                                                                        // 1
  }                                                                                               // 1
});                                                                                               // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var ValidatedMethod = void 0;                                                                     // 1
module.watch(require("meteor/mdg:validated-method"), {                                            // 1
  ValidatedMethod: function (v) {                                                                 // 1
    ValidatedMethod = v;                                                                          // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var DDPRateLimiter = void 0;                                                                      // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                // 1
  DDPRateLimiter: function (v) {                                                                  // 1
    DDPRateLimiter = v;                                                                           // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
                                                                                                  //
var _ = void 0;                                                                                   // 1
                                                                                                  //
module.watch(require("meteor/underscore"), {                                                      // 1
  _: function (v) {                                                                               // 1
    _ = v;                                                                                        // 1
  }                                                                                               // 1
}, 4);                                                                                            // 1
var Products = void 0;                                                                            // 1
module.watch(require("../../../lib/Products.js"), {                                               // 1
  Products: function (v) {                                                                        // 1
    Products = v;                                                                                 // 1
  }                                                                                               // 1
}, 5);                                                                                            // 1
var Productsinsert = new ValidatedMethod({                                                        // 9
  name: 'Products.methods.insert',                                                                // 10
  validate: new SimpleSchema({                                                                    // 11
    productmedia: {                                                                               // 12
      type: Object                                                                                // 12
    },                                                                                            // 12
    producttitle: {                                                                               // 13
      type: String                                                                                // 13
    },                                                                                            // 13
    producttext: {                                                                                // 14
      type: String                                                                                // 14
    },                                                                                            // 14
    productdate: {                                                                                // 15
      type: Date                                                                                  // 15
    },                                                                                            // 15
    productshiptime: {                                                                            // 16
      type: String                                                                                // 16
    },                                                                                            // 16
    productshipprice: {                                                                           // 17
      type: String                                                                                // 17
    }                                                                                             // 17
  }).validator(),                                                                                 // 11
  run: function (_ref) {                                                                          // 19
    var productmedia = _ref.productmedia,                                                         // 19
        producttitle = _ref.producttitle,                                                         // 19
        producttext = _ref.producttext,                                                           // 19
        productdate = _ref.productdate,                                                           // 19
        productshiptime = _ref.productshiptime,                                                   // 19
        productshipprice = _ref.productshipprice;                                                 // 19
    Products.insert({                                                                             // 20
      mediaproduct: productmedia,                                                                 // 21
      titleproduct: producttitle,                                                                 // 22
      textproduct: producttext,                                                                   // 23
      dateproduct: productdate,                                                                   // 24
      shiptimeproduct: productshiptime,                                                           // 25
      shippriceproduct: productshipprice                                                          // 26
    });                                                                                           // 20
  }                                                                                               // 28
});                                                                                               // 9
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Text":{"Server":{"TextPublications.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Text/Server/TextPublications.js                                                    //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Texts = void 0;                                                                               // 1
module.watch(require("../../../../lib/Text.js"), {                                                // 1
  Texts: function (v) {                                                                           // 1
    Texts = v;                                                                                    // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
                                                                                                  //
if (Meteor.isServer) {                                                                            // 6
  Meteor.publish('textStream', function () {                                                      // 8
    function textTitle() {                                                                        // 8
      return [Texts.find()];                                                                      // 10
    }                                                                                             // 12
                                                                                                  //
    return textTitle;                                                                             // 8
  }());                                                                                           // 8
  Meteor.publish('textFeed', function () {                                                        // 15
    function textFeed() {                                                                         // 15
      return [Texts.find()];                                                                      // 17
    }                                                                                             // 18
                                                                                                  //
    return textFeed;                                                                              // 15
  }());                                                                                           // 15
}                                                                                                 // 20
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"TextMethods.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Text/TextMethods.js                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.export({                                                                                   // 1
  Textsinsert: function () {                                                                      // 1
    return Textsinsert;                                                                           // 1
  }                                                                                               // 1
});                                                                                               // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var ValidatedMethod = void 0;                                                                     // 1
module.watch(require("meteor/mdg:validated-method"), {                                            // 1
  ValidatedMethod: function (v) {                                                                 // 1
    ValidatedMethod = v;                                                                          // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var DDPRateLimiter = void 0;                                                                      // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                // 1
  DDPRateLimiter: function (v) {                                                                  // 1
    DDPRateLimiter = v;                                                                           // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
                                                                                                  //
var _ = void 0;                                                                                   // 1
                                                                                                  //
module.watch(require("meteor/underscore"), {                                                      // 1
  _: function (v) {                                                                               // 1
    _ = v;                                                                                        // 1
  }                                                                                               // 1
}, 4);                                                                                            // 1
var Texts = void 0;                                                                               // 1
module.watch(require("../../../lib/Text.js"), {                                                   // 1
  Texts: function (v) {                                                                           // 1
    Texts = v;                                                                                    // 1
  }                                                                                               // 1
}, 5);                                                                                            // 1
var Textsinsert = new ValidatedMethod({                                                           // 9
  name: 'Texts.methods.insert',                                                                   // 10
  validate: new SimpleSchema({                                                                    // 11
    texttitle: {                                                                                  // 12
      type: String                                                                                // 12
    },                                                                                            // 12
    texttext: {                                                                                   // 13
      type: String                                                                                // 13
    }                                                                                             // 13
  }).validator(),                                                                                 // 11
  run: function (_ref) {                                                                          // 16
    var texttitle = _ref.texttitle,                                                               // 16
        texttext = _ref.texttext,                                                                 // 16
        textmember = _ref.textmember,                                                             // 16
        textmedia = _ref.textmedia;                                                               // 16
    Texts.insert({                                                                                // 18
      titletext: texttitle,                                                                       // 19
      texttexttwo: texttext                                                                       // 20
    });                                                                                           // 18
  }                                                                                               // 22
});                                                                                               // 9
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Video":{"Server":{"VideoPublications.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Video/Server/VideoPublications.js                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var Videos = void 0;                                                                              // 1
module.watch(require("../../../../lib/Video.js"), {                                               // 1
  Videos: function (v) {                                                                          // 1
    Videos = v;                                                                                   // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
                                                                                                  //
if (Meteor.isServer) {                                                                            // 6
  Meteor.publish('videoStream', function (videoTitle) {                                           // 8
    if (!this.userId) {                                                                           // 9
      return this.ready();                                                                        // 10
    }                                                                                             // 11
                                                                                                  //
    return Videos.findOne({                                                                       // 13
      videoTitle: videoTitle                                                                      // 13
    }, {                                                                                          // 13
      fields: {                                                                                   // 14
        videomember: 1,                                                                           // 15
        videomembers: 1,                                                                          // 16
        videotitle: 1,                                                                            // 17
        videodate: 1,                                                                             // 18
        videotext: 1                                                                              // 19
      }                                                                                           // 14
    });                                                                                           // 13
  });                                                                                             // 22
  Meteor.publish('videoFeed', function (imageTitle) {                                             // 25
    if (!this.userId) {                                                                           // 26
      return this.ready();                                                                        // 27
    }                                                                                             // 28
                                                                                                  //
    return Videos.findOne({                                                                       // 30
      imageTitle: imageTitle                                                                      // 30
    }, {                                                                                          // 30
      fields: {                                                                                   // 31
        imagemember: 1,                                                                           // 32
        imagemembers: 1,                                                                          // 33
        imagetitle: 1,                                                                            // 34
        imagedate: 1,                                                                             // 35
        imagetext: 1                                                                              // 36
      }                                                                                           // 31
    });                                                                                           // 30
  });                                                                                             // 39
}                                                                                                 // 41
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"VideoMethods.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Video/VideoMethods.js                                                              //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
var _objectDestructuringEmpty2 = require("babel-runtime/helpers/objectDestructuringEmpty");       //
                                                                                                  //
var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);              //
                                                                                                  //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
                                                                                                  //
module.export({                                                                                   // 1
  Videosinsert: function () {                                                                     // 1
    return Videosinsert;                                                                          // 1
  }                                                                                               // 1
});                                                                                               // 1
var Meteor = void 0;                                                                              // 1
module.watch(require("meteor/meteor"), {                                                          // 1
  Meteor: function (v) {                                                                          // 1
    Meteor = v;                                                                                   // 1
  }                                                                                               // 1
}, 0);                                                                                            // 1
var ValidatedMethod = void 0;                                                                     // 1
module.watch(require("meteor/mdg:validated-method"), {                                            // 1
  ValidatedMethod: function (v) {                                                                 // 1
    ValidatedMethod = v;                                                                          // 1
  }                                                                                               // 1
}, 1);                                                                                            // 1
var SimpleSchema = void 0;                                                                        // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                            // 1
  SimpleSchema: function (v) {                                                                    // 1
    SimpleSchema = v;                                                                             // 1
  }                                                                                               // 1
}, 2);                                                                                            // 1
var DDPRateLimiter = void 0;                                                                      // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                // 1
  DDPRateLimiter: function (v) {                                                                  // 1
    DDPRateLimiter = v;                                                                           // 1
  }                                                                                               // 1
}, 3);                                                                                            // 1
                                                                                                  //
var _ = void 0;                                                                                   // 1
                                                                                                  //
module.watch(require("meteor/underscore"), {                                                      // 1
  _: function (v) {                                                                               // 1
    _ = v;                                                                                        // 1
  }                                                                                               // 1
}, 4);                                                                                            // 1
var Videos = void 0;                                                                              // 1
module.watch(require("../../../lib/Video.js"), {                                                  // 1
  Videos: function (v) {                                                                          // 1
    Videos = v;                                                                                   // 1
  }                                                                                               // 1
}, 5);                                                                                            // 1
var Videosinsert = new ValidatedMethod({                                                          // 9
  name: 'Videos.methods.insert',                                                                  // 10
  validate: new SimpleSchema({                                                                    // 11
    videotitle: {                                                                                 // 12
      type: String                                                                                // 12
    },                                                                                            // 12
    videotext: {                                                                                  // 13
      type: String                                                                                // 13
    },                                                                                            // 13
    videovideo: {                                                                                 // 14
      type: Object                                                                                // 14
    },                                                                                            // 14
    videoimage: {                                                                                 // 15
      type: Object                                                                                // 15
    },                                                                                            // 15
    videodate: {                                                                                  // 16
      type: Date                                                                                  // 16
    }                                                                                             // 16
  }).validator(),                                                                                 // 11
  run: function (_ref) {                                                                          // 18
    (0, _objectDestructuringEmpty3.default)(_ref);                                                // 18
    Videos.insert({                                                                               // 19
      titlevideo: videotitle,                                                                     // 20
      textvideo: videotext,                                                                       // 21
      videovideotwo: videovideo,                                                                  // 22
      imagevideo: videoimage,                                                                     // 23
      datevideo: videodate                                                                        // 24
    });                                                                                           // 19
  }                                                                                               // 26
});                                                                                               // 9
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Messages":{"MessagesMethods.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/api/Messages/MessagesMethods.js                                                        //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/startup/both/index.js                                                                  //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
                                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////

}},"server":{"index.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/startup/server/index.js                                                                //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.watch(require("./register-api.js"));                                                       // 1
module.watch(require("../../api/Audio/AudioMethods.js"));                                         // 1
module.watch(require("../../api/Audio/Server/AudioPublications.js"));                             // 1
module.watch(require("../../api/Bookings/BookingMethods.js"));                                    // 1
module.watch(require("../../api/Bookings/Server/BookingPublications.js"));                        // 1
module.watch(require("../../api/Image/ImageMethods.js"));                                         // 1
module.watch(require("../../api/Image/Server/ImagePublications.js"));                             // 1
module.watch(require("../../api/Messages/MessagesMethods.js"));                                   // 1
module.watch(require("../../api/Products/ProductMethods.js"));                                    // 1
module.watch(require("../../api/Products/Server/ProductsPublications.js"));                       // 1
module.watch(require("../../api/Text/TextMethods.js"));                                           // 1
module.watch(require("../../api/Text/Server/TextPublications.js"));                               // 1
module.watch(require("../../api/Video/VideoMethods.js"));                                         // 1
module.watch(require("../../api/Video/Server/VideoPublications.js"));                             // 1
module.watch(require("../../../lib/Audio.js"));                                                   // 1
module.watch(require("../../../lib/Bookings.js"));                                                // 1
module.watch(require("../../../lib/Image.js"));                                                   // 1
module.watch(require("../../../lib/Products.js"));                                                // 1
module.watch(require("../../../lib/Text.js"));                                                    // 1
module.watch(require("../../../lib/Video.js"));                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

},"register-api.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// imports/startup/server/register-api.js                                                         //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.watch(require("../../api/Audio/AudioMethods.js"));                                         // 1
module.watch(require("../../api/Audio/Server/AudioPublications.js"));                             // 1
module.watch(require("../../api/Bookings/BookingMethods.js"));                                    // 1
module.watch(require("../../api/Bookings/Server/BookingPublications.js"));                        // 1
module.watch(require("../../api/Image/ImageMethods.js"));                                         // 1
module.watch(require("../../api/Image/Server/ImagePublications.js"));                             // 1
module.watch(require("../../api/Messages/MessagesMethods.js"));                                   // 1
module.watch(require("../../api/Products/ProductMethods.js"));                                    // 1
module.watch(require("../../api/Products/Server/ProductsPublications.js"));                       // 1
module.watch(require("../../api/Text/TextMethods.js"));                                           // 1
module.watch(require("../../api/Text/Server/TextPublications.js"));                               // 1
module.watch(require("../../api/Video/VideoMethods.js"));                                         // 1
module.watch(require("../../api/Video/Server/VideoPublications.js"));                             // 1
module.watch(require("../../../lib/Audio.js"));                                                   // 1
module.watch(require("../../../lib/Bookings.js"));                                                // 1
module.watch(require("../../../lib/Image.js"));                                                   // 1
module.watch(require("../../../lib/Products.js"));                                                // 1
module.watch(require("../../../lib/Text.js"));                                                    // 1
module.watch(require("../../../lib/Video.js"));                                                   // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"server":{"main.js":function(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                //
// server/main.js                                                                                 //
//                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                  //
module.watch(require("../imports/startup/server/index.js"));                                      // 1
module.watch(require("../imports/startup/server/register-api.js"));                               // 1
module.watch(require("../imports/startup/both"));                                                 // 1
module.watch(require("../lib/Text.js"));                                                          // 1
module.watch(require("../imports/api/Audio/AudioMethods.js"));                                    // 1
module.watch(require("../imports/api/Audio/Server/AudioPublications.js"));                        // 1
module.watch(require("../imports/api/Bookings/BookingMethods.js"));                               // 1
module.watch(require("../imports/api/Bookings/Server/BookingPublications.js"));                   // 1
module.watch(require("../imports/api/Image/ImageMethods.js"));                                    // 1
module.watch(require("../imports/api/Image/Server/ImagePublications.js"));                        // 1
module.watch(require("../imports/api/Messages/MessagesMethods.js"));                              // 1
module.watch(require("../imports/api/Products/ProductMethods.js"));                               // 1
module.watch(require("../imports/api/Products/Server/ProductsPublications.js"));                  // 1
module.watch(require("../imports/api/Text/TextMethods.js"));                                      // 1
module.watch(require("../imports/api/Text/Server/TextPublications.js"));                          // 1
module.watch(require("../imports/api/Video/VideoMethods.js"));                                    // 1
module.watch(require("../imports/api/Video/Server/VideoPublications.js"));                        // 1
module.watch(require("../lib/Audio.js"));                                                         // 1
module.watch(require("../lib/Bookings.js"));                                                      // 1
module.watch(require("../lib/Image.js"));                                                         // 1
module.watch(require("../lib/Products.js"));                                                      // 1
module.watch(require("../lib/Text.js"));                                                          // 1
module.watch(require("../lib/Video.js"));                                                         // 1
////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});
require("./lib/Audio.js");
require("./lib/Bookings.js");
require("./lib/Image.js");
require("./lib/Products.js");
require("./lib/Text.js");
require("./lib/Video.js");
require("./server/main.js");
//# sourceMappingURL=app.js.map
