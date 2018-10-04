var require = meteorInstall({"imports":{"ui":{"components":{"AboutReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AboutReusable.html                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.AboutReusable.js");                                                               // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.AboutReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.AboutReusable.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("About");                                                                                         // 2
Template["About"] = new Template("Template.About", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div class="master-navbartwo1"></div>\n  <div class="master-navbarthree1"></div>\n  <div class="master-navbar"></div>\n  <div id="mastermenu"></div>\n  <p id="creatornetwork"> The Creator Network </p>');
}));                                                                                                                   // 6
                                                                                                                       // 7
Template.__checkName("WreadAbout");                                                                                    // 8
Template["WreadAbout"] = new Template("Template.WreadAbout", (function() {                                             // 9
  var view = this;                                                                                                     // 10
  return HTML.Raw('<div class="modal2345" id="myyyModal1">\n  <div class="modal-contentyou0">\n    <span class="closeyou1"> CLOSE X </span>\n    <div id="wread2">\n    <a id="about" href="/about"> ABOUT </a>\n    <br>\n    <a id="termsandconditions" href="/settings"> TERMS AND CONDITIONS </a>\n    <br>\n    <a id="advertise" href="/advertise"> ADVERTISE </a>\n    <br>\n    <a id="investors" href="/investors"> INVESTORS </a>\n    <br>\n    <a id="careers" href="/careers"> CAREERS </a>\n    </div>\n  </div>\n  </div>');
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioItemReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AudioItemReusable.html                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.AudioItemReusable.js");                                                           // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.AudioItemReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.AudioItemReusable.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("AudioItemReusable");                                                                             // 2
Template["AudioItemReusable"] = new Template("Template.AudioItemReusable", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "image_div"                                                                                                    // 6
  }, "\n          ", HTML.P({                                                                                          // 7
    class: "normal",                                                                                                   // 8
    style: "float:left;"                                                                                               // 9
  }, " ", Blaze.View("lookup:audio.Date", function() {                                                                 // 10
    return Spacebars.mustache(Spacebars.dot(view.lookup("audio"), "Date"));                                            // 11
  })), "\n          ", HTML.P({                                                                                        // 12
    class: "normal",                                                                                                   // 13
    style: "float:left;"                                                                                               // 14
  }, " ", Blaze.View("lookup:audio.Location", function() {                                                             // 15
    return Spacebars.mustache(Spacebars.dot(view.lookup("audio"), "Location"));                                        // 16
  })), "\n          ", HTML.P({                                                                                        // 17
    class: "tag",                                                                                                      // 18
    style: "float:right;"                                                                                              // 19
  }, Blaze.View("lookup:audio.Tags", function() {                                                                      // 20
    return Spacebars.mustache(Spacebars.dot(view.lookup("audio"), "Tags"));                                            // 21
  })), "\n        ", HTML.DIV({                                                                                        // 22
    class: "music_info_image"                                                                                          // 23
  }, Blaze.View("lookup:audio.Image", function() {                                                                     // 24
    return Spacebars.mustache(Spacebars.dot(view.lookup("audio"), "Image"));                                           // 25
  })), HTML.Raw('\n        <div class="like_button_dark" style="margin-left:30%;"><p class="music_info_buttons_text"> LIKE </p></div>\n        <div class="save_button_dark"><p class="music_info_buttons_text"> SAVE </p></div>\n        <div class="share_button_dark"><p class="music_info_buttons_text"> SHARE </p></div>\n        '), HTML.DIV({
    class: "song_title",                                                                                               // 27
    style: "float:left;"                                                                                               // 28
  }, HTML.P(Blaze.View("lookup:audio.Title", function() {                                                              // 29
    return Spacebars.mustache(Spacebars.dot(view.lookup("audio"), "Title"));                                           // 30
  }))), "\n        ", HTML.DIV({                                                                                       // 31
    class: "creator_name",                                                                                             // 32
    colspan: "4"                                                                                                       // 33
  }, HTML.P(Blaze.View("lookup:audio.CreatorsImage", function() {                                                      // 34
    return Spacebars.mustache(Spacebars.dot(view.lookup("audio"), "CreatorsImage"));                                   // 35
  })), " "), "\n      ");                                                                                              // 36
}));                                                                                                                   // 37
                                                                                                                       // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioItemSmart.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AudioItemSmart.html                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.AudioItemSmart.js");                                                              // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.AudioItemSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.AudioItemSmart.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("AudioItemSmart");                                                                                // 2
Template["AudioItemSmart"] = new Template("Template.AudioItemSmart", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("audioTitleArray")),                                                       // 7
      _variable: "audioTitle"                                                                                          // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 11
      return Spacebars.dataMustache(view.lookup("audioArgs"), view.lookup("audioTitle"));                              // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("AudioItemReusable"));                                              // 14
    }), "\n" ];                                                                                                        // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioStreamReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AudioStreamReusable.html                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.AudioStreamReusable.js");                                                         // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.AudioStreamReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.AudioStreamReusable.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("StreamAudioReusable");                                                                           // 2
Template["StreamAudioReusable"] = new Template("Template.StreamAudioReusable", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    id: "bg"                                                                                                           // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    id: "music_info_div"                                                                                               // 8
  }, "\n        ", HTML.Raw('<div id="music_info_image" style="display:inline-block;"></div>'), "\n                  ", HTML.P({
    class: "music_info_text2"                                                                                          // 10
  }, Blaze.View("lookup:CreatorsAudio", function() {                                                                   // 11
    return Spacebars.mustache(view.lookup("CreatorsAudio"));                                                           // 12
  }), " "), "\n                  ", HTML.P({                                                                           // 13
    class: "date_text_dark"                                                                                            // 14
  }, " ", Blaze.View("lookup:DateAudio", function() {                                                                  // 15
    return Spacebars.mustache(view.lookup("DateAudio"));                                                               // 16
  })), "\n                  ", HTML.P({                                                                                // 17
    class: "date_text_dark"                                                                                            // 18
  }, " ", Blaze.View("lookup:LocationAudio", function() {                                                              // 19
    return Spacebars.mustache(view.lookup("LocationAudio"));                                                           // 20
  })), "\n                  ", HTML.P({                                                                                // 21
    colspan: "4",                                                                                                      // 22
    class: "music_info_text3",                                                                                         // 23
    style: "float:left;"                                                                                               // 24
  }, Blaze.View("lookup:TitleAudio", function() {                                                                      // 25
    return Spacebars.mustache(view.lookup("TitleAudio"));                                                              // 26
  })), "\n                  ", HTML.Raw('<div class="like_button_dark" style="float: left; margin-right:10px;"><p class="music_info_buttons_text"> LIKE </p> </div>'), "\n                  ", HTML.Raw('<div class="save_button_dark" style="float: left; margin-right:10px;"><p class="music_info_buttons_text"> SAVE </p> </div>'), "\n                  ", HTML.Raw('<div class="share_button_dark" style="float: left; margin-right:10px;"><p class="music_info_buttons_text"> SHARE </p></div>'), "\n                    ", Blaze.View("lookup:AddAudio", function() {
    return Spacebars.mustache(view.lookup("AddAudio"));                                                                // 28
  }), "\n                      ", HTML.Raw('<p class="music_info_buttons_text"> SHARE <img src="sharebutton.png" width="8" height="8"> </p>'), "\n                      ", HTML.DIV({
    class: "share_box",                                                                                                // 30
    style: "display:none;"                                                                                             // 31
  }, "\n                          ", Blaze._TemplateWith(function() {                                                  // 32
    return Spacebars.dataMustache(view.lookup("getSharingData"), Spacebars.dot(view.lookup("."), "title"), Spacebars.dot(view.lookup("."), "url"));
  }, function() {                                                                                                      // 34
    return Spacebars.include(view.lookupTemplate("shareit"));                                                          // 35
  }), "\n                      "), "\n                  "), "\n                  ", HTML.Raw('<div class="buy_button_dark" style="float: left; margin-right:10px;"><p class="music_info_buttons_text"> BUY </p> </div>'), "\n      "), "\n      ", HTML.DIV({
    id: "music_details"                                                                                                // 37
  }, "\n        ", HTML.TABLE({                                                                                        // 38
    style: "float:left;margin-left:2em;"                                                                               // 39
  }, "\n                  ", HTML.TR("\n                      ", HTML.TD({                                             // 40
    class: "music_details_text"                                                                                        // 41
  }, " Comments"), " ", HTML.CharRef({                                                                                 // 42
    html: "&nbsp;",                                                                                                    // 43
    str: " "                                                                                                           // 44
  }), "\n                      ", HTML.TD(" ", HTML.SPAN({                                                             // 45
    class: "music_details_text"                                                                                        // 46
  }, " Leave a message "), " "), "\n                  "), "\n                  ", HTML.IMG({                           // 47
    src: function() {                                                                                                  // 48
      return Spacebars.mustache(Spacebars.dot(view.lookup("profilePic"), "url"));                                      // 49
    },                                                                                                                 // 50
    width: "42",                                                                                                       // 51
    height: "42",                                                                                                      // 52
    class: "inline"                                                                                                    // 53
  }), "\n                  ", HTML.TR("\n                      ", HTML.TD({                                            // 54
    class: "music_details_text"                                                                                        // 55
  }, "Purchases"), HTML.CharRef({                                                                                      // 56
    html: "&nbsp;",                                                                                                    // 57
    str: " "                                                                                                           // 58
  }), "\n                      ", HTML.TD({                                                                            // 59
    class: "music_details_text"                                                                                        // 60
  }, "In # of clouds"), HTML.CharRef({                                                                                 // 61
    html: "&nbsp;",                                                                                                    // 62
    str: " "                                                                                                           // 63
  }), "\n                      ", HTML.TD({                                                                            // 64
    class: "music_details_text"                                                                                        // 65
  }, " In # of streams "), HTML.CharRef({                                                                              // 66
    html: "&nbsp;",                                                                                                    // 67
    str: " "                                                                                                           // 68
  }), "\n                      ", HTML.TD({                                                                            // 69
    class: "music_details_text"                                                                                        // 70
  }, " Likes"), HTML.CharRef({                                                                                         // 71
    html: "&nbsp;",                                                                                                    // 72
    str: " "                                                                                                           // 73
  }), "\n                      ", HTML.TD({                                                                            // 74
    class: "music_details_text"                                                                                        // 75
  }, " tag"), " ", HTML.CharRef({                                                                                      // 76
    html: "&nbsp;",                                                                                                    // 77
    str: " "                                                                                                           // 78
  }), "\n                      ", HTML.TD({                                                                            // 79
    class: "music_details_text"                                                                                        // 80
  }, " ", Blaze.View("lookup:TagsAudio", function() {                                                                  // 81
    return Spacebars.mustache(view.lookup("TagsAudio"));                                                               // 82
  }), " "), "\n                  "), "\n              "), "\n              ", HTML.DIV({                               // 83
    class: "recommendedaudio"                                                                                          // 84
  }, "\n                ", HTML.P("More from ", Blaze.View("lookup:user.profile.lname", function() {                   // 85
    return Spacebars.mustache(Spacebars.dot(view.lookup("user"), "profile", "lname"));                                 // 86
  }), ": "), "\n              "), "\n      "), "\n      ", Spacebars.include(view.lookupTemplate("CommentArea")) ];    // 87
}));                                                                                                                   // 88
                                                                                                                       // 89
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Create.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Create.html                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.Create.js");                                                                      // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Create.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.Create.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Create");                                                                                        // 2
Template["Create"] = new Template("Template.Create", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n", HTML.DIV({                                                                                          // 8
      class: "modal2",                                                                                                 // 9
      id: "myModal"                                                                                                    // 10
    }, "\n", Spacebars.include(view.lookupTemplate("CreateNavigator")), "\n", HTML.A({                                 // 11
      class: "close"                                                                                                   // 12
    }, "x"), "\n", HTML.UL({                                                                                           // 13
      class: "modal-content"                                                                                           // 14
    }, "\n", HTML.A({                                                                                                  // 15
      id: "ProductSelection2",                                                                                         // 16
      href: ""                                                                                                         // 17
    }, " Product  "), "\n", HTML.A({                                                                                   // 18
      id: "AudioSelection",                                                                                            // 19
      href: ""                                                                                                         // 20
    }, " Audio "), "\n", HTML.A({                                                                                      // 21
      id: "VideoSelection",                                                                                            // 22
      href: ""                                                                                                         // 23
    }, " Video "), "\n", HTML.A({                                                                                      // 24
      id: "TextSelection",                                                                                             // 25
      href: ""                                                                                                         // 26
    }, " Text "), "\n", HTML.A({                                                                                       // 27
      id: "ImageSelection",                                                                                            // 28
      href: ""                                                                                                         // 29
    }, " Image "), "\n", HTML.A({                                                                                      // 30
      id: "RequestSelection",                                                                                          // 31
      href: ""                                                                                                         // 32
    }, " Request "), "\n"), "\n"), "\n" ];                                                                             // 33
  }, function() {                                                                                                      // 34
    return "\n\n";                                                                                                     // 35
  });                                                                                                                  // 36
}));                                                                                                                   // 37
                                                                                                                       // 38
Template.__checkName("CreateNavigator");                                                                               // 39
Template["CreateNavigator"] = new Template("Template.CreateNavigator", (function() {                                   // 40
  var view = this;                                                                                                     // 41
  return HTML.DIV({                                                                                                    // 42
    id: "createnav"                                                                                                    // 43
  }, HTML.Raw('\n\n  <a id="ProductSelection"> Create</a>  '), HTML.A({                                                // 44
    id: "PShelper"                                                                                                     // 45
  }, " ", Blaze.View("lookup:currentForm", function() {                                                                // 46
    return Spacebars.mustache(view.lookup("currentForm"));                                                             // 47
  }), " "), "\n\n");                                                                                                   // 48
}));                                                                                                                   // 49
                                                                                                                       // 50
Template.__checkName("CreateProject");                                                                                 // 51
Template["CreateProject"] = new Template("Template.CreateProject", (function() {                                       // 52
  var view = this;                                                                                                     // 53
  return HTML.FORM({                                                                                                   // 54
    class: "addProject"                                                                                                // 55
  }, HTML.Raw('\n        <div id="projimages">\n        <input class="file fileInput" name="MediaProject" id="projectImg" type="file" accept=".jpg"><br>\n       </div>\n        Title: <input name="TitleProject" type="text" placeholder="Project Title" id="projectTitle" class="title"><br>\n        Description: <input name="TextProject" id="productdescription" type="text" placeholder="Describe Your Product"><br>\n        Location: <input name="LocationProject" id="productdescription" type="text" placeholder="Describe Your Product"><br>\n      <br>\n      <fieldset id="TimeandMoney">\n        Project Start: <input name="StartProject" type="text" placeholder="Project Start" id="projectTitle" class="title"><br>\n        Project End: <input name="EndProject" type="text" placeholder="Project End" id="projectTitle" class="title"><br>\n      <br>\n      </fieldset>\n      <br>\n    '), HTML.DIV({
    id: "lowerlowernav"                                                                                                // 57
  }, "\n  ", HTML.A({                                                                                                  // 58
    id: function() {                                                                                                   // 59
      return Spacebars.mustache(view.lookup("back"));                                                                  // 60
    },                                                                                                                 // 61
    class: "formback"                                                                                                  // 62
  }, " BACK "), " ", HTML.A({                                                                                          // 63
    id: function() {                                                                                                   // 64
      return Spacebars.mustache(view.lookup("next"));                                                                  // 65
    },                                                                                                                 // 66
    class: "formnext"                                                                                                  // 67
  }, " NEXT "), "\n    "), HTML.Raw('\n      <input id="shareproduct" type="submit" value="SHARE"><br>\n    '));       // 68
}));                                                                                                                   // 69
                                                                                                                       // 70
Template.__checkName("CreateProduct");                                                                                 // 71
Template["CreateProduct"] = new Template("Template.CreateProduct", (function() {                                       // 72
  var view = this;                                                                                                     // 73
  return [ HTML.Raw('<a class="back" href=""> CREATE MENU </a>\n'), HTML.DIV({                                         // 74
    id: "addProductdiv1"                                                                                               // 75
  }, "\n  ", HTML.DIV({                                                                                                // 76
    id: "addProductdiv2"                                                                                               // 77
  }, "\n    ", HTML.FORM({                                                                                             // 78
    class: "addProduct"                                                                                                // 79
  }, "\n        ", HTML.Raw('<input id="mediaproductt" name="MediaProduct" type="file" placeholder="Upload Media Items">'), HTML.Raw("<br>"), "\n        ", HTML.Raw("<br>"), "\n        ", HTML.Raw('<input name="TitleProduct" type="text" placeholder="Enter Product Title" id="productTitle" class="title">'), HTML.Raw("<br>"), "\n        ", HTML.Raw('<input name="TextProduct" id="productdescription" type="text" placeholder="Enter Product Description">'), HTML.Raw("<br>"), "\n      ", HTML.Raw("<br>"), "\n      ", HTML.Raw('<input name="PriceProduct" id="productprice" type="text" placeholder="Enter Product Price">'), "\n      ", HTML.Raw("<br>"), "\n      ", HTML.Raw('<input name="ShipPriceProduct" type="text" id="shipment-option-cost" class="form-control" placeholder="Enter Shipping Price">'), "\n      ", HTML.Raw("<br>"), "\n      ", HTML.Raw('<input name="ShipTimeProduct" type="text" id="shipment-option-time" class="form-control" placeholder="Enter Delivery Time">'), "\n      ", HTML.Raw("<br>"), "\n      ", HTML.Raw('<input name="AddSearchMembers" type="text" id="addsearchmembers" placeholder="Search to Add Members..">'), " ", HTML.Raw('<a id="addmembbutton"> ADD </a>'), "\n      ", HTML.Raw("<br>"), "\n    ", HTML.Raw("<div>  </div>"), "\n\n\n\n\n      ", HTML.Raw('<button id="productlocationbutton" type="”button”" name="LocationText" value="”Location”">ADD LOCATION</button>'), "\n      ", HTML.Raw("<br>"), "\n      ", HTML.IMG({
    src: function() {                                                                                                  // 81
      return Spacebars.mustache(view.lookup("memberimage"));                                                           // 82
    }                                                                                                                  // 83
  }), "\n      ", HTML.Raw('<button id="shareproduct" type="submit"> CREATE </button>'), "\n    "), "\n  "), "\n") ];  // 84
}));                                                                                                                   // 85
                                                                                                                       // 86
Template.__checkName("CreateVideo");                                                                                   // 87
Template["CreateVideo"] = new Template("Template.CreateVideo", (function() {                                           // 88
  var view = this;                                                                                                     // 89
  return [ HTML.Raw('<a class="back" href=""> CREATE MENU </a>\n'), HTML.FORM({                                        // 90
    id: "CreateVideoForm"                                                                                              // 91
  }, "\n", HTML.Raw('<input name="VideoVideo" type="file" accept="video/*" id="VideoFile" placeholder="Add Video">'), "\n", HTML.Raw("<br>"), "\n", HTML.Raw('<input name="TitleVideo" type="text" id="VideoTitle" placeholder="Add a Title">'), "\n", HTML.Raw("<br>"), "\n", HTML.TEXTAREA({
    name: "TextVideo",                                                                                                 // 93
    id: "VideoText",                                                                                                   // 94
    placeholder: "Add Text..."                                                                                         // 95
  }), "\n", HTML.Raw("<br>"), "\n", HTML.Raw('<input name="MembersVideo" id="VideoCreator" type="text" placeholder="Search to Add Members">'), "\n", HTML.Raw("<br>"), "\n", HTML.Raw('<button id="videolocationbutton" type="”button”" name="LocationText" value="”Location”">ADD LOCATION</button>'), "\n\n", HTML.Raw('<button id="CreateVideo" type="submit" class="btn btn-success">PUBLISH</button>'), "\n") ];
}));                                                                                                                   // 97
                                                                                                                       // 98
Template.__checkName("CreateText");                                                                                    // 99
Template["CreateText"] = new Template("Template.CreateText", (function() {                                             // 100
  var view = this;                                                                                                     // 101
  return [ HTML.Raw('<a class="back" href=""> CREATE MENU </a>\n'), HTML.FORM({                                        // 102
    id: "CreateText",                                                                                                  // 103
    method: "post"                                                                                                     // 104
  }, "\n", HTML.DIV({                                                                                                  // 105
    class: "article_container"                                                                                         // 106
  }, "\n", HTML.Raw('<img id="textcreatordisplay" src="">'), "\n", HTML.Raw('<input type="text" id="TextTitle" name="TitleText" placeholder="Add a Title.">'), "\n", HTML.Raw("<br>"), "\n", HTML.TEXTAREA({
    id: "TextText",                                                                                                    // 108
    name: "TextText",                                                                                                  // 109
    placeholder: "Add Text..."                                                                                         // 110
  }), "\n", HTML.Raw("<br>"), "\n", HTML.Raw('<a id="textlocationbutton" name="LocationText" value="”Location”">ADD LOCATION</a>'), "\n", HTML.Raw('<button id="createtextbutton" type="submit" class="btn btn-success">PUBLISH</button>'), "\n"), "\n") ];
}));                                                                                                                   // 112
                                                                                                                       // 113
Template.__checkName("CreateBooking");                                                                                 // 114
Template["CreateBooking"] = new Template("Template.CreateBooking", (function() {                                       // 115
  var view = this;                                                                                                     // 116
  return [ HTML.Raw('<a class="back" href=""> CREATE MENU </a>\n'), HTML.FORM({                                        // 117
    id: "CreateBooking",                                                                                               // 118
    method: "post"                                                                                                     // 119
  }, "\n", HTML.DIV({                                                                                                  // 120
    class: "article_container"                                                                                         // 121
  }, "\n", HTML.Raw('<img id="textcreatordisplay" src="">'), "\n", HTML.A(Blaze.View("lookup:Member", function() {     // 122
    return Spacebars.mustache(view.lookup("Member"));                                                                  // 123
  }), " is inquiring about"), "\n", HTML.Raw('<input type="text" id="TextTitle" name="TitleText" placeholder="Enter Fields">'), "\n", HTML.Raw("<a>for</a>"), "\n", HTML.TEXTAREA({
    id: "TextText",                                                                                                    // 125
    name: "TextText",                                                                                                  // 126
    placeholder: "Enter Amount"                                                                                        // 127
  }), "\n", HTML.Raw('<!--\n{{#if locationvisual}}\n<input type="text" id="TextTitle" name="TitleText" placeholder="Enter Location">\n{{#else}}\n<button id="textlocationbutton" type=”button” name="LocationText" value=”Location”>ADD LOCATION</button>\n{{/if}}\n-->'), "\n", HTML.Raw('<button id="createtextbutton" type="submit" class="btn btn-success">CREATE</button>'), "\n"), "\n") ];
}));                                                                                                                   // 129
                                                                                                                       // 130
Template.__checkName("CreateImage");                                                                                   // 131
Template["CreateImage"] = new Template("Template.CreateImage", (function() {                                           // 132
  var view = this;                                                                                                     // 133
  return [ HTML.Raw('<a class="back" href=""> CREATE MENU </a>\n'), HTML.FORM({                                        // 134
    id: "createimage"                                                                                                  // 135
  }, "\n", HTML.Raw('<input name="ImageImage" type="file" accept="video/*" id="ImageFile" placeholder="Upload Image(s)">'), "\n", HTML.Raw("<br>"), "\n", HTML.Raw('<input name="ImageTitle" type="text" colspan="4" id="ImageTitle" placeholder="Add Title...">'), "\n", HTML.Raw("<br>"), "\n", HTML.TEXTAREA({
    name: "TextImage",                                                                                                 // 137
    id: "ImageText",                                                                                                   // 138
    placeholder: "Add Text..."                                                                                         // 139
  }), "\n", HTML.Raw("<br>"), "\n", HTML.Raw('<input name="MemberImage" type="text" colspan="4" id="userviacreate" placeholder="Search for Members">'), "\n", HTML.Raw("<br>"), "\n", HTML.Raw('<button id="createimage" type="submit" class="btn btn-success">CREATE</button>'), "\n") ];
}));                                                                                                                   // 141
                                                                                                                       // 142
Template.__checkName("CreateAudio");                                                                                   // 143
Template["CreateAudio"] = new Template("Template.CreateAudio", (function() {                                           // 144
  var view = this;                                                                                                     // 145
  return HTML.Raw('<a class="back" href=""> CREATE MENU </a>\n<form id="createaudio">\n<!-- Audio Title -->\n<input name="TitleAudio" type="text" id="AudioTitle" placeholder="Add a Title">\n<!--\n<div id="music_info_image" style="display:inline-block;">\n\n<p style="text-align:center;">Click below to add audio files </p>\n<input name="AudioAudio" type="file" accept="audio/*"  id="AudioFile" >\n<button id="audiolocationbutton" type=”button” name="LocationText" value=”Location”>ADD LOCATION</button>\n<input type="text" name="MemberAudio" id="userviacreate">\n-->\n<input name="TextAudio" id="AudioText" placeholder="Add Text">\n<br>\n\n\n<button id="createaudiobutton" type="submit" class="btn btn-success"> PUBLISH </button>\n</form>');
}));                                                                                                                   // 147
                                                                                                                       // 148
Template.__checkName("CreateEvent");                                                                                   // 149
Template["CreateEvent"] = new Template("Template.CreateEvent", (function() {                                           // 150
  var view = this;                                                                                                     // 151
  return HTML.FORM(HTML.Raw('\n<div name="creator" id="eventCreator" class="music_info_text2"> </div>\n <input type="text" id="EventTitle" name="”EventTitle" placeholder="Add a Title.">\n    <div id="form-group">\n      <input type="text" id="eventLocation" value="" placeholder="Enter Location" class="form-control">\n    </div>\n    <div id="DateandTime">\n    <label for="eventDescription">Begin:</label>\n          <select value="Hour" id="hourSelect" name=""></select> :\n          <select value="Minute" id="minsSelect" name=""></select>\n            <option>AM</option>\n            <option>PM</option>\n    <label for="eventDescription">End:</label>\n    <input type="text" id="createdate" value="Pick a Date">\n    <select value="Hour" id="hourSelect" name=""></select> :\n    <select value="Minute" id="minsSelect" name=""></select>\n      <option>AM</option>\n      <option>PM</option>\n    </div>\n'), HTML.TEXTAREA({
    id: "EventText",                                                                                                   // 153
    name: "”TextEvent”",                                                                                               // 154
    placeholder: "”Add",                                                                                               // 155
    "text..”": ""                                                                                                      // 156
  }), HTML.Raw('\n<input type="file" accept="[|audio/*|video/*|image/*|]" id="”EventMediaFile”" name="”AddEventMedia”" placeholder="Add Media">\n    '), HTML.DIV({
    id: "form-group"                                                                                                   // 158
  }, "\n      ", HTML.TEXTAREA({                                                                                       // 159
    id: "eventDescription",                                                                                            // 160
    rows: "4",                                                                                                         // 161
    cols: "40",                                                                                                        // 162
    class: "form-control"                                                                                              // 163
  }), "\n    "), HTML.Raw('\n      <div id="form-group">\n  </div>\n      <div id="addtags">\n            <input type="text" id="EventsTags" name="TagsEvent" placeholder="Add a Tag">\n              <button id="btn btn-default" type="button">Add</button>\n          </div>\n          <div id="displaytags">\n          </div>\n        <div id="attendees">\n </div>\n    <button type="submit" id="btn btn-success">Create Event</button>\n  '));
}));                                                                                                                   // 165
                                                                                                                       // 166
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageItemReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ImageItemReusable.html                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ImageItemReusable.js");                                                           // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ImageItemReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.ImageItemReusable.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ImageItemReusable");                                                                             // 2
Template["ImageItemReusable"] = new Template("Template.ImageItemReusable", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "image_div"                                                                                                    // 6
  }, "\n          ", HTML.P({                                                                                          // 7
    class: "normal",                                                                                                   // 8
    style: "float:left;"                                                                                               // 9
  }, " ", Blaze.View("lookup:image.imagedate", function() {                                                            // 10
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imagedate"));                                       // 11
  })), "\n          ", HTML.P({                                                                                        // 12
    class: "normal",                                                                                                   // 13
    style: "float:left;"                                                                                               // 14
  }, " ", Blaze.View("lookup:image.imageimage", function() {                                                           // 15
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imageimage"));                                      // 16
  })), HTML.Raw('\n        <div class="like_button_dark" style="margin-left:30%;"><p class="music_info_buttons_text"> LIKE </p></div>\n        <div class="save_button_dark"><p class="music_info_buttons_text"> SAVE </p></div>\n        <div class="share_button_dark"><p class="music_info_buttons_text"> SHARE </p></div>\n        '), HTML.DIV({
    class: "song_title",                                                                                               // 18
    style: "float:left;"                                                                                               // 19
  }, HTML.P(Blaze.View("lookup:image.imagetitle", function() {                                                         // 20
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imagetitle"));                                      // 21
  }))), "\n      ");                                                                                                   // 22
}));                                                                                                                   // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageItemSmart.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ImageItemSmart.html                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ImageItemSmart.js");                                                              // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ImageItemSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.ImageItemSmart.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ImageItemSmart");                                                                                // 2
Template["ImageItemSmart"] = new Template("Template.ImageItemSmart", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("imageTitleArray")),                                                       // 7
      _variable: "imageTitle"                                                                                          // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 11
      return Spacebars.dataMustache(view.lookup("imageArgs"), view.lookup("imageTitle"));                              // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("ImageItemReusable"));                                              // 14
    }), "\n" ];                                                                                                        // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageStreamReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ImageStreamReusable.html                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ImageStreamReusable.js");                                                         // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ImageStreamReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.ImageStreamReusable.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("StreamImageReusable");                                                                           // 2
Template["StreamImageReusable"] = new Template("Template.StreamImageReusable", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    class: "image_head"                                                                                                // 6
  }, "\n", HTML.IMG({                                                                                                  // 7
    height: "430",                                                                                                     // 8
    src: function() {                                                                                                  // 9
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                               // 10
    }                                                                                                                  // 11
  }), "\n", HTML.P({                                                                                                   // 12
    class: "image_title"                                                                                               // 13
  }, Blaze.View("lookup:image.imagetitle", function() {                                                                // 14
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imagetitle"));                                      // 15
  })), "\n", HTML.P({                                                                                                  // 16
    colspan: "4",                                                                                                      // 17
    class: "music_info_text3",                                                                                         // 18
    style: "float:left;"                                                                                               // 19
  }, Blaze.View("lookup:image.imagetext", function() {                                                                 // 20
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imagetext"));                                       // 21
  })), "\n", HTML.IMG({                                                                                                // 22
    src: function() {                                                                                                  // 23
      return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "media"));                                         // 24
    },                                                                                                                 // 25
    width: "300",                                                                                                      // 26
    height: "300",                                                                                                     // 27
    class: "inline"                                                                                                    // 28
  }), "\n", HTML.P({                                                                                                   // 29
    class: "inline image_creator"                                                                                      // 30
  }, Blaze.View("lookup:image.imagemember", function() {                                                               // 31
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imagemember"));                                     // 32
  })), "\n"), "\n", HTML.P({                                                                                           // 33
    class: "music_info_text2"                                                                                          // 34
  }, " ", Blaze.View("lookup:image.imagemembers", function() {                                                         // 35
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imagemembers"));                                    // 36
  }), " "), "\n", HTML.IMG({                                                                                           // 37
    src: function() {                                                                                                  // 38
      return Spacebars.mustache(Spacebars.dot(view.lookup("profilePic"), "url"));                                      // 39
    },                                                                                                                 // 40
    width: "42",                                                                                                       // 41
    height: "42",                                                                                                      // 42
    class: "inline"                                                                                                    // 43
  }), "\n", HTML.P({                                                                                                   // 44
    class: "date_text_dark"                                                                                            // 45
  }, " ", Blaze.View("lookup:image.imagedate", function() {                                                            // 46
    return Spacebars.mustache(Spacebars.dot(view.lookup("image"), "imagedate"));                                       // 47
  })), HTML.Raw("\n<br>\n"), HTML.DIV("\n  ", Spacebars.include(view.lookupTemplate("CommentArea")), "\n") ];          // 48
}));                                                                                                                   // 49
                                                                                                                       // 50
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LowerNavigator.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/LowerNavigator.html                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.LowerNavigator.js");                                                              // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.LowerNavigator.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.LowerNavigator.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("LowerNavigator");                                                                                // 2
Template["LowerNavigator"] = new Template("Template.LowerNavigator", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "network_nav"                                                                                                  // 6
  }, "\n", Blaze.If(function() {                                                                                       // 7
    return Spacebars.call(view.lookup("currentUser"));                                                                 // 8
  }, function() {                                                                                                      // 9
    return [ "\n    ", HTML.SVG({                                                                                      // 10
      version: "1.1",                                                                                                  // 11
      id: "cloudicon",                                                                                                 // 12
      "xmlns:cc": "http://creativecommons.org/ns#",                                                                    // 13
      "xmlns:svg": "http://www.w3.org/2000/svg",                                                                       // 14
      "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",                                                 // 15
      "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",                                          // 16
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",                                                                  // 17
      "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",                                                      // 18
      xmlns: "http://www.w3.org/2000/svg",                                                                             // 19
      "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                   // 20
      x: "0px",                                                                                                        // 21
      y: "0px",                                                                                                        // 22
      viewBox: "0 0 1000 1000",                                                                                        // 23
      "enable-background": "new 0 -100 1000 1000",                                                                     // 24
      "xml:space": "preserve"                                                                                          // 25
    }, "\n    ", HTML.G({                                                                                              // 26
      transform: "translate(0,-952.36218)"                                                                             // 27
    }, "\n    \t", HTML.PATH({                                                                                         // 28
      fill: "#FFFFFF",                                                                                                 // 29
      d: "M564,1136.4c99.9,0,169.7,89.7,160.8,178.3c58.8,11.5,103.2,63.5,103.2,125.8c0,70.7-57.3,128-128,128H308\n    \t\tc-81.3,0-136-53.4-136-120c0-55.7,39.2-110.5,96-120c0-96,88-136,152-104C444,1176.4,495.6,1136.4,564,1136.4L564,1136.4z"
    }), "\n    "), "\n    "), "\n\n  ", HTML.SVG({                                                                     // 31
      version: "1.1",                                                                                                  // 32
      id: "createicon",                                                                                                // 33
      xmlns: "http://www.w3.org/2000/svg",                                                                             // 34
      "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                   // 35
      x: "0px",                                                                                                        // 36
      y: "0px",                                                                                                        // 37
      viewBox: "0 100 1000 1000",                                                                                      // 38
      "enable-background": "new 0 0 1000 1000",                                                                        // 39
      "xml:space": "preserve"                                                                                          // 40
    }, "\n", HTML.PATH({                                                                                               // 41
      fill: "#FFFFFF",                                                                                                 // 42
      stroke: "#FFFFFF",                                                                                               // 43
      "stroke-width": "10",                                                                                            // 44
      "stroke-miterlimit": "10",                                                                                       // 45
      d: "M528.9,463.2c0,6.4,10.3,6.4,10.3,0V358.9h109.1\n\tc6.6,0,6.6-9.8,0-9.9H539.2V244.7c0-6.4-10.3-6.4-10.3,0V349H419.8c-6.7,0-6.7,9.9,0,9.9h109.1V463.2z"
    }), "\n", HTML.RECT({                                                                                              // 47
      x: "44",                                                                                                         // 48
      y: "736",                                                                                                        // 49
      fill: "none",                                                                                                    // 50
      width: "1136",                                                                                                   // 51
      height: "356"                                                                                                    // 52
    }), "\n"), "\n\n    ", HTML.SVG({                                                                                  // 53
      version: "1.1",                                                                                                  // 54
      id: "messages",                                                                                                  // 55
      xmlns: "http://www.w3.org/2000/svg",                                                                             // 56
      "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                   // 57
      x: "0px",                                                                                                        // 58
      y: "0px",                                                                                                        // 59
      viewBox: "0 150 500 1000",                                                                                       // 60
      "enable-background": "new 0 0 1000 1000",                                                                        // 61
      "xml:space": "preserve"                                                                                          // 62
    }, "\n    ", HTML.PATH({                                                                                           // 63
      fill: "#FFFFFF",                                                                                                 // 64
      stroke: "#FFFFFF",                                                                                               // 65
      "stroke-width": "14",                                                                                            // 66
      "stroke-miterlimit": "10",                                                                                       // 67
      d: "M351.6,350.8l-0.2-2.5l-0.2-2.3l-0.3-2.2l-0.3-2\n    \tl-0.4-2L350,338l-0.4-1.9l-0.5-1.8l-0.5-1.8l-0.6-1.8l-0.6-1.7l-0.6-1.7l-0.7-1.7l-0.7-1.6l-0.8-1.6l-0.8-1.6l-0.9-1.5l-0.9-1.5\n    \tl-0.9-1.5l-1-1.4l-1-1.4l-1.1-1.4l-1.1-1.3l-1.1-1.3l-1.2-1.3l-1.2-1.2l-1.3-1.2l-1.3-1.2l-1.3-1.1l-1.4-1.1l-1.4-1.1l-1.4-1.1\n    \tl-1.5-1l-1.5-1l-1.6-1l-1.6-0.9l-1.6-0.9l-1.7-0.9l-1.7-0.8l-1.7-0.8l-1.8-0.8l-1.8-0.7l-1.9-0.7l-1.9-0.7l-1.9-0.6l-2-0.6l-2.1-0.6\n    \tl-2.1-0.5l-2.1-0.5l-2.2-0.5l-2.2-0.4l-2.3-0.4l-2.3-0.4l-2.4-0.3l-2.5-0.3l-2.5-0.3l-2.6-0.2l-2.8-0.2l-2.9-0.2l-3.1-0.1l-3.4-0.1\n    \tl-4.6-0.1l-4.6,0.1l-3.4,0.1l-3.1,0.1l-2.9,0.2l-2.7,0.2l-2.6,0.2l-2.6,0.3l-2.5,0.3l-2.4,0.3l-2.3,0.4l-2.3,0.4l-2.2,0.4l-2.2,0.5\n    \tl-4.2,1l-2.1,0.6l-2,0.6l-1.9,0.6l-1.9,0.7l-1.9,0.7l-1.8,0.7l-1.8,0.8l-1.7,0.8l-1.7,0.8l-1.6,0.8l-3.2,1.8l-1.6,1l-1.5,1l-1.5,1\n    \tl-1.4,1.1l-1.4,1.1l-1.4,1.1l-1.3,1.1l-1.3,1.2l-1.3,1.2l-1.2,1.2l-1.3,1.3l-1.1,1.3l-1.1,1.3l-1.1,1.4l-1,1.4l-1,1.4l-0.9,1.5\n    \tl-0.9,1.5l-0.9,1.5l-0.8,1.6l-0.8,1.6l-0.7,1.6l-0.7,1.7l-0.7,1.7l-0.6,1.7l-1.1,3.6l-0.5,1.8l-0.4,1.9l-0.4,1.9l-0.4,2l-0.3,2.2\n    \tl-0.3,2.2l-0.2,2.3l-0.2,2.3v18.1l0.2,2.5l0.2,2.3l0.3,2.2l0.3,2l0.4,2l0.4,1.9l0.9,3.7l0.5,1.8l0.6,1.8l0.6,1.7l0.7,1.7l0.7,1.7\n    \tl0.7,1.6l0.8,1.6l0.8,1.6l0.9,1.5l0.9,1.5l0.9,1.5l1,1.4l1,1.4l1.1,1.4l1.1,1.3l2.3,2.6l1.2,1.2l1.3,1.2l1.3,1.2l1.3,1.1l1.4,1.1\n    \tl1.4,1.1l1.4,1.1l1.5,1l1.5,1l1.6,1l1.6,0.9l1.6,0.9l1.7,0.9l1.7,0.8l1.7,0.8l1.8,0.8l1.8,0.7l1.9,0.7l1.9,0.7l3.9,1.2l2.1,0.6\n    \tl2.1,0.5l2.1,0.5l2.2,0.5l2.2,0.4l2.3,0.4l2.3,0.4l2.4,0.3l2.5,0.3l2.5,0.3l5.3,0.4l2.9,0.2l3.1,0.1l3.4,0.1l4.6,0.1l4.6-0.1\n    \tl3.4-0.1l3.1-0.1l2.9-0.2l2.7-0.2l2.6-0.2l2.6-0.3l1.9-0.2l24.7,16.2c1.8,1.2,3.7,1.8,5.4,1.8l0,0c1.7,0,3.2-0.7,4.3-1.8\n    \tc1-1.1,1.5-2.7,1.5-4.6v-22.1l2-1.1l1.6-1l1.5-1l1.5-1l1.4-1.1l1.4-1.1l1.4-1.1l1.3-1.1l1.3-1.2l1.3-1.2l1.2-1.2l1.2-1.3l1.1-1.3\n    \tl1.1-1.3l1.1-1.4l1-1.4l1-1.4l0.9-1.5l0.9-1.5l0.9-1.5l0.8-1.6l0.8-1.6l0.7-1.6l0.7-1.7l0.7-1.7l0.6-1.7l0.6-1.8l0.5-1.8l0.5-1.8\n    \tl0.4-1.9l0.4-1.9l0.4-2l0.3-2.2l0.3-2.2l0.2-2.3l0.2-2.3l0.2-9.1L351.6,350.8z M346.5,368.7l-0.2,2.2l-0.2,2.1l-0.3,2.1l-0.3,2\n    \tl-0.3,1.9l-0.4,1.8l-0.4,1.8l-0.4,1.7l-0.5,1.7l-0.5,1.6l-0.6,1.6l-0.6,1.6l-0.6,1.5l-0.7,1.5l-0.7,1.5l-0.7,1.4l-0.8,1.4l-0.8,1.4\n    \tl-0.9,1.3l-0.9,1.3l-0.9,1.3l-1,1.3l-1,1.2l-1,1.2l-1.1,1.2l-1.1,1.1l-1.2,1.1l-1.2,1.1l-1.2,1.1l-1.3,1l-1.3,1l-1.3,1l-1.4,0.9\n    \tl-1.4,0.9l-1.4,0.9l-1.5,0.9l-1.5,0.8l-1.5,0.8v25.1c0,0.7-0.2,1-0.3,1.2c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-1.2-0.1-2.6-1l-26.3-17.1\n    \tl-3.7,0.4l-2.5,0.2l-2.6,0.2l-2.7,0.2l-2.8,0.2l-3,0.1l-3.4,0.1l-4.6,0.1l-4.6-0.1l-3.4-0.1l-3-0.1l-2.8-0.2l-2.7-0.2l-2.6-0.2\n    \tl-2.5-0.2l-2.4-0.3l-2.3-0.3l-2.1-0.5l-2.2-0.4l-2.1-0.4l-2.1-0.4l-2.1-0.5l-2-0.5l-1.9-0.5l-1.9-0.6l-1.8-0.6l-1.8-0.6l-1.7-0.7\n    \tl-1.7-0.7l-1.7-0.7l-1.6-0.7l-1.6-0.8l-1.6-0.8l-1.5-0.8l-1.5-0.9l-1.4-0.9l-1.4-0.9l-1.4-0.9l-1.3-1l-1.3-1l-1.3-1l-1.2-1.1\n    \tl-1.2-1.1l-1.2-1.1l-1.1-1.1l-1.1-1.2l-1-1.2l-1-1.2l-1-1.3l-0.9-1.3l-0.9-1.3l-0.9-1.3l-0.8-1.4l-0.8-1.4l-0.7-1.4l-0.7-1.5\n    \tl-0.7-1.5l-0.6-1.5l-0.6-1.6l-0.6-1.6l-0.5-1.6l-0.5-1.7l-0.4-1.7l-0.4-1.8l-0.4-1.8l-0.3-1.9l-0.3-1.9l-0.3-2.1l-0.2-2.1l-0.2-2.3\n    \tl-0.2-8.8l0.2-8.8l0.2-2.2l0.2-2.1l0.3-2.1l0.3-2l0.3-1.9l0.4-1.8l0.4-1.8l0.4-1.7l0.5-1.7l0.5-1.6l0.6-1.6l0.6-1.6l0.6-1.5l0.7-1.5\n    \tl0.7-1.5l0.7-1.4l0.8-1.4l0.8-1.4l0.9-1.3l0.9-1.3l0.9-1.3l1-1.3l1-1.2l1-1.2l1.1-1.2l1.1-1.1l1.2-1.1l1.2-1.1l1.2-1.1l1.3-1l1.3-1\n    \tl1.3-1l1.4-0.9l1.4-0.9l1.4-0.9l1.5-0.9l1.5-0.8l1.5-0.8l1.6-0.8l1.6-0.7l1.7-0.7l1.7-0.7l1.8-0.7l1.8-0.6l1.8-0.6l1.9-0.6l1.9-0.5\n    \tl2-0.5l2.1-0.5l2.1-0.4l2.1-0.4l2.2-0.4l2.3-0.3l2.3-0.3l2.4-0.3l2.5-0.2l2.6-0.2l2.7-0.2l2.8-0.2l3-0.1l3.4-0.1l4.6-0.1l4.6,0.1\n    \tl3.4,0.1l3,0.1l2.8,0.2l2.7,0.2l2.6,0.2l2.5,0.2l2.4,0.3l2.3,0.3l2.3,0.3l2.2,0.4l2.1,0.4l2.1,0.4l2.1,0.5l2,0.5l1.9,0.5l1.9,0.6\n    \tl1.8,0.6l1.8,0.6l1.7,0.7l1.7,0.7l1.7,0.7l1.6,0.7l1.6,0.8l1.6,0.8l1.5,0.8l1.5,0.9l1.4,0.9l1.4,0.9l1.4,0.9l1.3,1l1.3,1l1.3,1\n    \tl1.2,1.1l1.2,1.1l1.2,1.1l1.1,1.1l1.1,1.2l1,1.2l1,1.2l1,1.3l0.9,1.3l0.9,1.3l0.9,1.3l0.8,1.4l0.8,1.4l0.7,1.4l0.7,1.5l0.7,1.5\n    \tl0.6,1.5l0.6,1.6l0.6,1.6l0.5,1.6l0.5,1.7l0.4,1.7l0.4,1.8l0.4,1.8l0.3,1.9l0.3,1.9l0.3,2.1l0.2,2.1l0.2,2.3l0.2,8.8L346.5,368.7z"
    }), "\n    ", HTML.PATH({                                                                                          // 69
      fill: "#FFFFFF",                                                                                                 // 70
      stroke: "#FFFFFF",                                                                                               // 71
      "stroke-miterlimit": "10",                                                                                       // 72
      d: "M344,344.5l-9.7-25.2L317.8,304l-21.9-9.2l-22.4-3.4l-30.3-0.2\n    \tl-30.7,5.2l-28.8,17.9L172,335.6l-3,26.2l2.2,22.7l6.1,15.6l11.1,13.5l4.1,2.8c0.3,0.1,0.7,0.3,1,0.6c5.7,4.4,13.3,5.9,19.9,8.6\n    \tc2.4,1,4.9,2,7.3,3c1.2,0.2,2.4,0.3,3.6,0.4c0.7-0.5,1.5-0.7,2.6-0.6c4.1,0.4,8.1,0.5,11.9,1.5c5.9-0.5,12-1.4,17.9-1.4\n    \tc1.5-0.3,3.1-0.5,4.6-0.6c3.7-0.8,7.5-1.6,10.9,0.7c0.1,0.1,0.3,0.2,0.4,0.3c0.6,0.1,1.1,0.4,1.7,0.9c7.3,2.4,14.2,6.9,20.4,12\n    \tc2.9,2.2,5.6,4.6,8.4,7.1c1,0.6,2,1.1,3,1.7c0.9,0.5,1.8,1.1,2.7,1.6c0.3,0.1,0.5,0.2,0.8,0.3c-0.5-9.2-1.5-18.3-1-27.5\n    \tc0-0.5-0.1-1.1-0.1-1.6c-0.7-2.1,0-4.6,2.6-5.4c0.8-0.5,1.8-0.8,2.7-0.7c6.6-1.7,13.9-4.7,17.8-10.5c2.6-3.8,5.4-7.8,7.6-12\n    \tl5.3-21.7L344,344.5z"
    }), "\n    "), "\n\n\n   ", HTML.SVG({                                                                             // 74
      version: "1.1",                                                                                                  // 75
      id: "usericon",                                                                                                  // 76
      "xmlns:cc": "http://creativecommons.org/ns#",                                                                    // 77
      "xmlns:svg": "http://www.w3.org/2000/svg",                                                                       // 78
      "xmlns:inkscape": "http://www.inkscape.org/namespaces/inkscape",                                                 // 79
      "xmlns:sodipodi": "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",                                          // 80
      "xmlns:dc": "http://purl.org/dc/elements/1.1/",                                                                  // 81
      "xmlns:rdf": "http://www.w3.org/1999/02/22-rdf-syntax-ns#",                                                      // 82
      xmlns: "http://www.w3.org/2000/svg",                                                                             // 83
      "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                   // 84
      x: "0px",                                                                                                        // 85
      y: "0px",                                                                                                        // 86
      viewBox: "0 0 1000 1000",                                                                                        // 87
      "enable-background": "new 0 -100 1000 1000",                                                                     // 88
      "xml:space": "preserve"                                                                                          // 89
    }, "\n   ", HTML.G({                                                                                               // 90
      transform: "translate(0,-952.36218)"                                                                             // 91
    }, "\n   \t", HTML.PATH({                                                                                          // 92
      fill: "#FFFFFF",                                                                                                 // 93
      d: "M500,1072.4c-75.1,0-136,60.9-136,136s60.9,136,136,136s136-60.9,136-136S575.1,1072.4,500,1072.4z\n   \t\t M500,1392.4c-163.5,0-296,107.5-296,240h592C796,1499.8,663.5,1392.4,500,1392.4z"
    }), "\n   "), "\n   "), "\n   " ];                                                                                 // 95
  }, function() {                                                                                                      // 96
    return [ "\n  ", HTML.A({                                                                                          // 97
      id: "loginbuttonnav",                                                                                            // 98
      href: "/signin"                                                                                                  // 99
    }, " LOGIN "), "\n  ", HTML.A({                                                                                    // 100
      id: "signupbuttonnav",                                                                                           // 101
      href: "/join"                                                                                                    // 102
    }, " SIGN-UP "), "\n   " ];                                                                                        // 103
  }), "\n  ");                                                                                                         // 104
}));                                                                                                                   // 105
                                                                                                                       // 106
Template.__checkName("join");                                                                                          // 107
Template["join"] = new Template("Template.join", (function() {                                                         // 108
  var view = this;                                                                                                     // 109
  return HTML.Raw('<form id="signupform">\n<input type="text" id="joingemail" placeholder="E-Mail">\n<button id="login"> LOG IN </button>\n<button id="signup"> SIGN UP </button>\n</form>');
}));                                                                                                                   // 111
                                                                                                                       // 112
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Menu.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Menu.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.Menu.js");                                                                        // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Menu.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.Menu.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Menu");                                                                                          // 2
Template["Menu"] = new Template("Template.Menu", (function() {                                                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.SVG({                                                                                                  // 5
    "enable-background": "new ",                                                                                       // 6
    id: "waveicon",                                                                                                    // 7
    version: "1.1",                                                                                                    // 8
    viewBox: "225 125 530 530",                                                                                        // 9
    x: "0px",                                                                                                          // 10
    "xml:space": "preserve",                                                                                           // 11
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                     // 12
    xmlns: "http://www.w3.org/2000/svg",                                                                               // 13
    y: "0px"                                                                                                           // 14
  }, "\n        ", HTML.PATH({                                                                                         // 15
    d: "M632.8,422.2c0.1-2.9,0.3-5.9,0.6-8.8c-0.2,0.1-0.4,0.1-0.6,0.1c-6.2,2.8-12.9,4.4-19.9,4.9c-1,0.2-2,0.3-3.1,0.4\n        c-12,1.4-22.5-2.6-29.6-11c-7-8.4-9.5-20.1-6.8-31.8c0.3-1.8,0.6-3.6,1.1-5.4c0.2-6.8-5.7-9.8-6.4-10.2\n        c-49.1-24.9-77.5,1.3-102.6,24.5c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.3,3,1.8,5.6,4,7.5\n        c1,0,1.9,0.2,2.6,0.6c0.6,0,1.3,0,1.9,0.1c10.2,2.2,21.4-1.8,30.8-5.4c17.6-8,31.4-20.8,44-32.5c12.4-11.5,23.1-21.3,35.3-25.7\n        c7-3.2,14.4-5.3,21.9-7c1-0.3,2.1-0.6,3.1-0.7c0.6-0.2,1.2-0.3,1.8-0.5c1.1-0.4,2.3-0.6,3.4-0.9c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0\n        c0.5-0.1,1-0.3,1.4-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.5-0.1c1.3-0.3,2.5-0.7,3.8-0.9c0.6-0.1,0.8,0.7,0.4,0.9\n        c0,0,0,0.1-0.1,0.1c-0.5,0.5-0.9,1.1-1.2,1.7c-0.1,0.4-0.3,0.8-0.4,1.2c0,0,0,0.1,0,0.1c0,0.4-0.1,0.7-0.3,1.1c0,0.1,0,0.2,0,0.3\n        c0,0.1-0.1,0.2-0.1,0.3c0,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3-0.1,0.4c0,0.2,0,0.3-0.1,0.5c0,0.2,0,0.3-0.1,0.5\n        c0,0.3,0,0.7-0.1,1c-0.1,0.3-0.1,0.7-0.2,1c0,0.3-0.1,0.7-0.2,1c0,0.4-0.1,0.7-0.2,1.1c0,0,0,0,0,0c-2,16.5,2.4,32.9,12.7,45.1\n        c10.6,12.6,25.9,19.4,42.8,19.4c1.9,0,3.8-0.1,5.7-0.3c0.4,0,0.9,0,1.3-0.1c7.8-0.9,15-2.7,21.7-5.3\n        C633.3,431.7,632.7,426.6,632.8,422.2z"
  }), "\n        ", HTML.POLYLINE({                                                                                    // 17
    points: "531,350.5 571.5,345.2 572,363.8 579,354.3 592,343.3 585,343.3 576,343.3 550.9,353.6 569,365.3 569,350.5 "
  }), "\n        ", HTML.PATH({                                                                                        // 19
    d: "M535,354.3"                                                                                                    // 20
  }), "\n        ", HTML.PATH({                                                                                        // 21
    d: "M587.9,350.1l4.1-6.8l-6.9,9.2C586,351.7,586.9,350.9,587.9,350.1z"                                              // 22
  }), "\n        ", HTML.PATH({                                                                                        // 23
    d: "M577.5,362.7c0.1-0.1,0.1-0.2,0.2-0.3l-3.7,4.9l0.3,4.3C575,368.5,576,365.5,577.5,362.7z"                        // 24
  }), "\n        ", HTML.PATH({                                                                                        // 25
    d: "M553.9,351.1c-1.1,0.8-2.5,0.7-3.9,0.6c0.5,0.1,0.9-0.1,1.3-0.3c-0.7,0.1-1.3,0.2-2,0.3c0.7-0.1,1.3-0.3,2-0.4\n        c-1.3,0.5-2.7,0.5-4,0.1c2.1,0,4.2,0,6.3,0c-2.1,0-4.2,0-6.3,0c2,0,4,0,6,0c-0.7,0-1.3,0-2,0c0.8,0,1.6,0,2.3,0\n        c-2.8,0-4.3,0.8-7-0.4C549.1,351,551.5,351,553.9,351.1z",
    fill: "none"                                                                                                       // 27
  }), "\n        ", HTML.POLYGON({                                                                                     // 28
    fill: "#FFFFFF",                                                                                                   // 29
    points: "543.1,351.7 535,350.5 551.3,351.3 555.6,351.7 "                                                           // 30
  }), "\n        ", HTML.PATH({                                                                                        // 31
    d: "M577.5,362.7c3.1-6,7.4-10.7,12.7-14.3l5.8-8.7l-70,10.8l48.8,19C575.5,367.1,576.4,364.9,577.5,362.7z"           // 32
  }), "\n        ", HTML.PATH({                                                                                        // 33
    d: "M437.5,419.5c0.1-3.6,0.4-7.2,0.8-10.8c-7.2,3.8-15,6.5-23.8,7.5c-12,1.4-22.5-2.6-29.6-11c-2.6-3.1-4.6-6.7-5.9-10.6\n        c-1.2-1.1-2.1-2.6-2.1-4.6c-0.1-3.4,0-6.8,0.3-10.2c0.1-0.8,0.1-1.7,0.3-2.5c-0.3-1.2-0.2-2.6,0.3-4c-0.1-1.2,0.1-2.4,0.6-3.5\n        c0.2-1.1,0.5-2.2,0.8-3.2c0,0,0-0.1,0-0.1c-0.7-5.7-5.7-8.3-6.3-8.6c-49.1-24.9-77.5,1.3-102.6,24.5c-17.4,16.1-33.8,31.2-57.6,33.8\n        c-6.3,0.7-10.9,6.4-10.2,12.7c0.7,5.9,5.6,10.3,11.4,10.3c0.4,0,0.9,0,1.3-0.1c31.4-3.4,52.3-22.8,70.7-39.8\n        c12.4-11.5,23.1-21.3,35.3-25.7c7-3.2,14.4-5.3,21.9-7c1-0.3,2.1-0.6,3.1-0.7c0.6-0.2,1.2-0.3,1.8-0.5c1.1-0.4,2.3-0.6,3.4-0.9\n        c0.1,0,0.1,0,0.2,0c0,0,0,0,0,0c0.5-0.1,1-0.3,1.4-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.5-0.1c1.3-0.3,2.5-0.7,3.8-0.9\n        c0.6-0.1,0.8,0.7,0.4,0.9c0,0,0,0.1-0.1,0.1c-0.5,0.5-0.9,1.1-1.2,1.7c-0.1,0.4-0.3,0.8-0.4,1.2c0,0,0,0.1,0,0.1\n        c0,0.4-0.1,0.7-0.3,1.1c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.3c0,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3-0.1,0.4\n        c0,0.2,0,0.3-0.1,0.5c0,0.2,0,0.3-0.1,0.5c0,0.3,0,0.7-0.1,1c-0.1,0.3-0.1,0.7-0.2,1c0,0.3-0.1,0.7-0.2,1c0,0.4-0.1,0.7-0.2,1.1\n        c0,0,0,0,0,0c-2,16.5,2.4,32.9,12.7,45.1c10.6,12.6,25.9,19.4,42.8,19.4c1.9,0,3.8-0.1,5.7-0.3c0.4,0,0.9,0,1.3-0.1\n        c6.8-0.7,13.1-2.2,19-4.3c0.5-0.2,1.1-0.4,1.6-0.6c0.4-0.1,0.7-0.3,1.1-0.4C438,429,437.3,423.9,437.5,419.5z"
  }), "\n        ", HTML.POLYLINE({                                                                                    // 35
    points: "335.7,347.8 376.1,342.5 376.7,361.1 383.7,351.7 396.7,340.7 389.7,340.7 380.7,340.7 355.6,351 373.7,362.7\n        373.7,347.8 "
  }), "\n        ", HTML.PATH({                                                                                        // 37
    d: "M339.7,351.7"                                                                                                  // 38
  }), "\n        ", HTML.PATH({                                                                                        // 39
    d: "M393.2,346.3l3.4-5.6l-5.8,7.7C391.6,347.7,392.4,347,393.2,346.3z"                                              // 40
  }), "\n        ", HTML.PATH({                                                                                        // 41
    d: "M379,366.6c0.1-1.3,0.6-2.6,1.5-3.6c0.5-1,1-2,1.7-3l-3.5,4.6l0.2,2.7C378.9,367,378.9,366.8,379,366.6z"          // 42
  }), "\n        ", HTML.PATH({                                                                                        // 43
    d: "M358.5,348.4c-1.1,0.8-2.5,0.7-3.9,0.6c0.5,0.1,0.9-0.1,1.3-0.3c-0.7,0.1-1.3,0.2-2,0.3c0.7-0.1,1.3-0.3,2-0.4\n        c-1.3,0.5-2.7,0.5-4,0.1c2.1,0,4.2,0,6.3,0c-2.1,0-4.2,0-6.3,0c2,0,4,0,6,0c-0.7,0-1.3,0-2,0c0.8,0,1.6,0,2.3,0\n        c-2.8,0-4.3,0.8-7-0.4C353.7,348.3,356.1,348.3,358.5,348.4z",
    fill: "none"                                                                                                       // 45
  }), "\n        ", HTML.POLYGON({                                                                                     // 46
    fill: "#FFFFFF",                                                                                                   // 47
    points: "347.8,349 339.7,347.8 356,348.6 360.2,349 "                                                               // 48
  }), "\n        ", HTML.PATH({                                                                                        // 49
    d: "M380.5,362.9c0.8-1.7,1.9-3.4,3-5c2.5-4.5,5.9-8.6,10-11.8c1.1-1.3,2.3-2.4,3.5-3.6l3.7-5.5l-70,10.8l48.3,18.8\n        C379.1,365.2,379.6,364,380.5,362.9z"
  }), "\n        ", HTML.PATH({                                                                                        // 51
    d: "M639.7,411.4c-1.9,0.8-4,1.5-6.1,2l0.4,23.1c0,0,0,0,8.9-3.2c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0.1,0,0.2-0.1\n        c0.3-0.2,0.5-0.3,0.8-0.4c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.2,0.6-0.4,0.9-0.5c3.7-3.2,5.7-7.6,3.8-13.7\n        C648.1,413.2,644.1,411.5,639.7,411.4z"
  }), "\n        ", HTML.PATH({                                                                                        // 53
    d: "M633.5,413.4l-1.7,24l5.2-1.9l-3.3-22.1C633.7,413.3,633.6,413.4,633.5,413.4z"                                   // 54
  }), "\n        ", HTML.PATH({                                                                                        // 55
    d: "M633.1,413.5l-4.2,12.9l10-0.9l-4.8-12.3C633.7,413.3,633.4,413.4,633.1,413.5z"                                  // 56
  }), "\n        ", HTML.PATH({                                                                                        // 57
    d: "M716.8,378.2c2.2-1.9,4.8-2.8,7.3-4.3c2-1.1,3.9-2.2,5.8-3.2c1.8-1.2,3.7-2.2,5.7-3.2c7.8-6.1,17.4-10.4,27.2-12.6\n        c-1.4-0.5-2.8-0.9-4.1-1.3c-20.6,0.5-41.2,5.5-60.1,13.2c-4.8,3-9.5,5.9-14.4,8.8c-3.6,3.2-7.1,6.4-10.6,9.6\n        c-8.5,7.9-16.8,15.5-25.8,21.5c-0.9,0.7-1.7,1.3-2.7,1.9c-0.1,0.1-0.3,0.2-0.5,0.3c-0.9,0.5-1.8,1.1-2.8,1.5\n        c-7.8,4.4-16.2,7.6-25.9,8.6c-6.3,0.7-10.9,6.4-10.2,12.7c0.7,5.9,5.6,10.3,11.4,10.3c0.4,0,0.9,0,1.3-0.1\n        c24.1-2.6,42-14.6,57.3-27.8c0.3-0.8,0.8-1.6,1.5-2.1c3.8-2.9,7.5-6.1,11.1-9.2c0.2-0.2,0.5-0.4,0.7-0.7c4.3-4,8.3-7.7,12.3-11.1\n        c4.3-4.7,9.5-9.1,15-12.5C716.6,378.4,716.7,378.3,716.8,378.2z"
  }), "\n        ", HTML.PATH({                                                                                        // 59
    d: "M768.4,358.9C768.4,358.9,768.5,358.9,768.4,358.9c1.2-1.3,2-3,1.9-4.7c-10.3-4.2-19.6-6.2-28.2-6.4\n        c-2.6,0.5-5.2,0.9-7.9,1.5c-2.8,0.6-5.5,1.4-8.3,2.1c-1.9,0.7-3.7,1.3-5.5,2c-7.5,2.6-15,5.3-21.8,9.5c-8.2,5.9-15.6,12.8-22.9,19.5\n        c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.3,3,1.8,5.6,4,7.5c1,0,1.9,0.2,2.6,0.6c0.6,0,1.3,0,1.9,0.1\n        c10.2,2.2,21.4-1.8,30.8-5.4c17.6-8,31.4-20.8,44-32.5c5.8-5.3,11.1-10.3,16.5-14.5c2.7-2.3,5.6-4.5,8.6-6.3\n        c0.1-0.1,0.2-0.2,0.3-0.3c2.2-1.9,4.8-2.8,7.3-4.3c6.3-3.6,12.1-6.8,19.1-8.7c7.2-2,15.2-2,22.2-4.7c0.4-0.2,0.9-0.4,1.4-0.5\n        c0.1-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.4-0.3,0.6-0.4C768.3,359,768.4,358.9,768.4,358.9z"
  }), "\n        ", HTML.PATH({                                                                                        // 61
    d: "M768.5,358.9C768.5,358.9,768.5,358.9,768.5,358.9c1.9-2.1,2.8-4.9,0.9-7.6c-2.4-3.5-6.6-4.1-10.5-4.4\n        c-3.5-0.2-7.1-0.2-10.6,0l-1.7,0.3c0,0,0,0,0,0l-2.4,0.4c-0.3,0.1-0.6,0.2-0.9,0.2c-0.1,0-0.2,0-0.2,0l-0.5,0.1\n        c-2.7,0.6-5.5,1-8.2,1.6c-2.8,0.6-5.5,1.4-8.3,2.1c-1,0.4-2,0.7-3,1.1l28.6,11.1c4.7-0.7,9.4-1.4,13.7-3.1c0.4-0.2,0.9-0.3,1.4-0.5\n        c0.1-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.4-0.3,0.6-0.4C768.3,359,768.4,358.9,768.5,358.9z"
  }), "\n        ", HTML.PATH({                                                                                        // 63
    d: "M972.1,333.7c0.6,0.2,1.2,0.6,1.4,1.4c0,0.1,0,0.1,0.1,0.2c0-0.5,0.1-1,0.2-1.5c-0.6-1.1-1.1-2.2-1.5-3.4\n        c0,0.1-0.1,0.1-0.1,0.2V333.7z"
  }), "\n        ", HTML.PATH({                                                                                        // 65
    d: "M994.4,320.6c-0.1,0-0.2,0.1-0.3,0.1c-0.5,3.9-0.9,7.7-1,11.6C993.6,328.4,994,324.5,994.4,320.6z"                // 66
  }), "\n        ", HTML.PATH({                                                                                        // 67
    d: "M1020.1,317.6c0,0.3,0,0.7,0.1,1c0.3,0.1,0.6,0.3,0.8,0.5c0.2,0.2,0.3,0.4,0.4,0.6c0.2-1.5,0.3-3,0.4-4.6\n        c-0.8,0.1-1.7,0.2-2.5,0.3c0,0.2-0.1,0.3-0.1,0.5C1019.8,316.3,1020.1,316.8,1020.1,317.6z"
  }), "\n        ", HTML.PATH({                                                                                        // 69
    d: "M999.6,328.6c-0.4-1.6-0.9-3.2-1.3-4.9c-0.3,4.5-0.6,9.1-0.8,13.6c0.2-0.1,0.3-0.3,0.5-0.4c0.9-2.4,1.8-4.7,2.8-7\n        C1000.2,329.7,999.7,329.3,999.6,328.6z"
  }), "\n        ", HTML.PATH({                                                                                        // 71
    d: "M963.7,360.2c0.3-0.7,0.6-1.5,0.9-2.2c-0.1-1.5-0.1-3-0.1-4.5c-0.2,2.2-0.5,4.3-0.7,6.5C963.7,360,963.7,360.1,963.7,360.2z\n        "
  }), "\n        ", HTML.PATH({                                                                                        // 73
    d: "M962.2,335c-0.3,0.2-0.5,0.3-0.8,0.5c0.2,1,0.3,2,0.4,3C962,337.3,962.1,336.1,962.2,335z"                        // 74
  }), "\n      "), HTML.Raw('\n      <a id="prelaunch">\n        Pre Launch Version 1.0 : Special Collection Release\n      </a>\n      <nav id="navstyling">\n      <li style="color:white;" data-page="market" id="mainiconstwo" role="presentation">\n        <a style="color:white;" class="maintext2" href="/market">MARKET</a>\n      </li>\n      <li style="color:white;" data-page="market" id="mainiconstwo" role="presentation">\n        <a style="color:white;" class="maintext2" href="/market">MEDIA</a>\n      </li>\n      <li style="color:white;" data-page="market" id="mainiconstwo" role="presentation">\n        <a style="color:white;" class="maintext2" href="/market">TALENT</a>\n      </li>\n    </nav>') ];
}));                                                                                                                   // 76
                                                                                                                       // 77
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Message.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Message.html                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.Message.js");                                                                     // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Message.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.Message.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Message");                                                                                       // 2
Template["Message"] = new Template("Template.Message", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<img src="imageimageee">\n'), HTML.A({                                                            // 5
    id: "membertexttt"                                                                                                 // 6
  }, " ", Blaze.View("lookup:message.Member", function() {                                                             // 7
    return Spacebars.mustache(Spacebars.dot(view.lookup("message"), "Member"));                                        // 8
  }), " "), "\n", HTML.A({                                                                                             // 9
    id: "messagetexttt"                                                                                                // 10
  }, " ", Blaze.View("lookup:message.Message", function() {                                                            // 11
    return Spacebars.mustache(Spacebars.dot(view.lookup("message"), "Message"));                                       // 12
  }), " ") ];                                                                                                          // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NewMessageReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NewMessageReusable.html                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.NewMessageReusable.js");                                                          // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NewMessageReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.NewMessageReusable.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("RealNewMessage");                                                                                // 2
Template["RealNewMessage"] = new Template("Template.RealNewMessage", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "createnewmessage"                                                                                             // 6
  }, "\n  ", HTML.FORM({                                                                                               // 7
    id: "newmessage"                                                                                                   // 8
  }, "\n  ", HTML.A(Blaze.View("lookup:currentUser", function() {                                                      // 9
    return Spacebars.mustache(view.lookup("currentUser"));                                                             // 10
  })), "\n  ", HTML.Raw('<label id="Tooo">To</label>'), HTML.Raw('<input id="tomessage" placeholder="Enter Username...">'), HTML.Raw('<a id="creategroup">CREATE GROUP</a>'), "\n  ", HTML.Raw('<input id="newmessaging" placeholder="Begin Typing Message">'), "\n  ", HTML.Raw('<input id="attach" type="file" placeholder="ATTACH">'), HTML.Raw('<button type="submit" id="send2" placeholder="Enter Message..." href="/mymessages"> SEND </button>'), "\n  "), "\n  ");
}));                                                                                                                   // 12
                                                                                                                       // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NewMessageSmart.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NewMessageSmart.html                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.NewMessageSmart.js");                                                             // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.NewMessageSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.NewMessageSmart.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("NewMessage");                                                                                    // 2
Template["NewMessage"] = new Template("Template.NewMessage", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return [ Spacebars.include(view.lookupTemplate("Sidebar")), HTML.Raw('\n<div id="messagenavigator"> <a id="backmessage"> BACK </a><a id="current"> New Message </a><a id="closecurrent"> X </a></div>\n'), Spacebars.include(view.lookupTemplate("RealNewMessage")) ];
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"PaymentModalReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/PaymentModalReusable.html                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.PaymentModalReusable.js");                                                        // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.PaymentModalReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.PaymentModalReusable.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("paymentModal");                                                                                  // 2
Template["paymentModal"] = new Template("Template.paymentModal", (function() {                                         // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    class: "modal",                                                                                                    // 6
    id: "myModal"                                                                                                      // 7
  }, "\n    ", HTML.Raw("<!-- Modal content -->"), "\n    ", HTML.DIV({                                                // 8
    class: "modal-content"                                                                                             // 9
  }, "\n      ", HTML.Raw('<span class="close">x</span>'), "\n          ", HTML.FORM({                                 // 10
    id: "payment-form"                                                                                                 // 11
  }, "\n          ", HTML.DIV({                                                                                        // 12
    class: "row"                                                                                                       // 13
  }, "\n            ", HTML.LABEL({                                                                                    // 14
    id: "sizes"                                                                                                        // 15
  }, "\n              ", HTML.A({                                                                                      // 16
    value: function() {                                                                                                // 17
      return Spacebars.mustache(view.lookup("item"));                                                                  // 18
    },                                                                                                                 // 19
    name: "listingfam"                                                                                                 // 20
  }, "Selection: ", Blaze.View("lookup:item", function() {                                                             // 21
    return Spacebars.mustache(view.lookup("item"));                                                                    // 22
  })), "\n              ", HTML.Raw("<br>"), "\n              ", HTML.Raw('<span class="paymenttext">Select a Size:</span>'), "\n                ", HTML.Raw('<div id="sizecreate">\n              <select name="sizes" id="selectsizes" required="">\n                <option placeholder="Select"></option>\n                <option value="small">SMALL</option>\n                <option value="medium">MEDIUM</option>\n                <option value="large">LARGE</option>\n                <option value="extra-large">X-LARGE</option>\n                <option value="two-extra-large">2X-LARGE</option>\n                <option value="three-extra-large">3X-LARGE</option>\n              </select>\n            </div>'), "\n            "), "\n          "), "\n\n", HTML.Raw('<div class="row">\n  <input name="fullnameone" id="fullnameone" placeholder="Full Name" type="text">\n  <input name="email" id="e-mail" placeholder="E-Mail" type="text">\n</div>'), "\n    ", HTML.Raw('<div class="row">\n      <input data-stripe="name" id="fullname" placeholder="Confirm Full Name" type="text">\n      <input data-stripe="email" id="e-mail" placeholder="Confirm E-Mail" type="text">\n    </div>'), "\n        ", HTML.Raw('<div class="row">\n          <input data-stripe="number" id="cardnumber" placeholder="Card Number" type="text">\n          <input data-stripe="cvc" id="cardcvc" placeholder="CVC" type="text">\n        </div>'), "\n\n        ", HTML.Raw('<div class="row">\n          <input data-stripe="exp_month" id="cardmonth" placeholder="MM" type="text">\n          <input data-stripe="exp_year" id="cardyear" placeholder="YYYY" type="text">\n        </div>'), "\n\n        ", HTML.Raw('<p id="addresslabel">\n          Shipping Address\n        </p>'), "\n\n        ", HTML.Raw('<div class="row">\n          <input data-stripe="address_line1" id="streetaddress1" placeholder="Street Address 1" type="text">\n        </div>'), "\n\n        ", HTML.Raw('<div class="row">\n          <label>\n            <input data-stripe="address_city" id="city" placeholder="City" type="text">\n            <input data-stripe="address_state" id="state" placeholder="State" type="text">\n            <input data-stripe="address_zip" id="zipcode" placeholder="Zip Code" type="text">\n          </label>\n        </div>'), "\n", HTML.Raw("<br>"), "\n        ", HTML.Raw('<div class="row" style="margin-top: .8em;">\n          <a id="ordertotaling2"> TOTAL: 38.00 </a>\n        </div>'), "\n        ", HTML.Raw('<button href="" id="paymentz" type="submit">Buy Now</button>'), "\n          "), "\n        ", Blaze.If(function() {
    return Spacebars.call(view.lookup("errorMessage"));                                                                // 24
  }, function() {                                                                                                      // 25
    return [ "\n          ", HTML.DIV({                                                                                // 26
      class: "payment-errors"                                                                                          // 27
    }, Blaze.View("lookup:errorMessage", function() {                                                                  // 28
      return Spacebars.mustache(view.lookup("errorMessage"));                                                          // 29
    })), "\n        " ];                                                                                               // 30
  }), "\n        ", Blaze.If(function() {                                                                              // 31
    return Spacebars.call(view.lookup("errormessageorder"));                                                           // 32
  }, function() {                                                                                                      // 33
    return [ "\n        ", HTML.DIV({                                                                                  // 34
      class: "payment-errors"                                                                                          // 35
    }, Blaze.View("lookup:errormessageorder", function() {                                                             // 36
      return Spacebars.mustache(view.lookup("errormessageorder"));                                                     // 37
    })), "\n\n        " ];                                                                                             // 38
  }), "\n      "), "\n    "), "\n\n", Blaze.If(function() {                                                            // 39
    return Spacebars.call(view.lookup("successful"));                                                                  // 40
  }, function() {                                                                                                      // 41
    return [ "\n", HTML.DIV({                                                                                          // 42
      id: "successful"                                                                                                 // 43
    }, "\n", HTML.A({                                                                                                  // 44
      id: "successmain"                                                                                                // 45
    }, "\nSUCCESS!\n"), "\n", HTML.A({                                                                                 // 46
      id: "successmessage"                                                                                             // 47
    }, "\nCongratulations. Your purchase was succcessful and is being processed.\n", HTML.BR(), "\nTo check the status of your purchase, contact Society @ societycontrolled@gmail.com .\n"), "\n"), "\n" ];
  }) ];                                                                                                                // 49
}));                                                                                                                   // 50
                                                                                                                       // 51
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProductItemReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ProductItemReusable.html                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ProductItemReusable.js");                                                         // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ProductItemReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.ProductItemReusable.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ProductItemReusable");                                                                           // 2
Template["ProductItemReusable"] = new Template("Template.ProductItemReusable", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    href: "/{ { pathForProductStream } }",                                                                             // 6
    id: "Images"                                                                                                       // 7
  }, "\n  ", HTML.IMG({                                                                                                // 8
    href: function() {                                                                                                 // 9
      return [ "/", Spacebars.mustache(view.lookup("id")) ];                                                           // 10
    },                                                                                                                 // 11
    id: "picture",                                                                                                     // 12
    src: function() {                                                                                                  // 13
      return Spacebars.mustache(Spacebars.dot(view.lookup("product"), "productimage"));                                // 14
    }                                                                                                                  // 15
  }), "\n"), "\n", HTML.DIV({                                                                                          // 16
    id: "sweatshirtinfo"                                                                                               // 17
  }, "\n  ", HTML.Raw('<button data-choice="Rightside" href="" id="lovebutton"><a id="commentscount"></a> LOVE</button>'), "\n  ", HTML.Raw('<button data-choice="Rightside" href="" id="buydarkfeed"><a id="price"></a> BUY</button>'), "\n  ", HTML.A({
    href: function() {                                                                                                 // 19
      return [ "/", Spacebars.mustache(view.lookup("Account")) ];                                                      // 20
    },                                                                                                                 // 21
    id: "account"                                                                                                      // 22
  }, " ", Blaze.View("lookup:product.productmember", function() {                                                      // 23
    return Spacebars.mustache(Spacebars.dot(view.lookup("product"), "productmember"));                                 // 24
  }), " "), "\n  ", HTML.A({                                                                                           // 25
    href: function() {                                                                                                 // 26
      return [ "/", Spacebars.mustache(view.lookup("Title")) ];                                                        // 27
    },                                                                                                                 // 28
    id: "title"                                                                                                        // 29
  }, " ", Blaze.View("lookup:product.producttitle", function() {                                                       // 30
    return Spacebars.mustache(Spacebars.dot(view.lookup("product"), "producttitle"));                                  // 31
  }), " "), "\n") ];                                                                                                   // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProductItemSmart.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ProductItemSmart.html                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ProductItemSmart.js");                                                            // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ProductItemSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.ProductItemSmart.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ProductItemSmart");                                                                              // 2
Template["ProductItemSmart"] = new Template("Template.ProductItemSmart", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("productTitleArray")),                                                     // 7
      _variable: "product"                                                                                             // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 11
      return Spacebars.dataMustache(view.lookup("prodArgs"), view.lookup("product"));                                  // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("ProductItemReusable"));                                            // 14
    }), "\n" ];                                                                                                        // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProductStreamReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ProductStreamReusable.html                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ProductStreamReusable.js");                                                       // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ProductStreamReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.ProductStreamReusable.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ProductStreamReusable");                                                                         // 2
Template["ProductStreamReusable"] = new Template("Template.ProductStreamReusable", (function() {                       // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "streamproductcontainer"                                                                                       // 6
  }, "\n\n  ", HTML.DIV({                                                                                              // 7
    id: "mediacontainer"                                                                                               // 8
  }, "\n    ", HTML.DIV({                                                                                              // 9
    class: function() {                                                                                                // 10
      return Spacebars.mustache(view.lookup("leftarrowhelper"));                                                       // 11
    },                                                                                                                 // 12
    id: "leftarrowstyle"                                                                                               // 13
  }, "\n      ", HTML.SVG({                                                                                            // 14
    "enable-background": "new 0 0 1000 1000",                                                                          // 15
    id: "leftarrowicon",                                                                                               // 16
    version: "1.1",                                                                                                    // 17
    viewBox: "0 0 1000 1000",                                                                                          // 18
    x: "0px",                                                                                                          // 19
    "xml:space": "preserve",                                                                                           // 20
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                     // 21
    xmlns: "http://www.w3.org/2000/svg",                                                                               // 22
    y: "0px"                                                                                                           // 23
  }, "\n       ", HTML.G("\n            ", HTML.PATH({                                                                 // 24
    d: "M605.3,908.4l-343.4-412l343.4-412c15.2-18.2,12.7-45.3-5.5-60.5s-45.3-12.7-60.5,5.5L172.9,468.9c-6.7,8-10,17.7-10,27.5\n    \t\t    c0,9.8,3.3,19.6,10,27.5l366.3,439.5c15.2,18.2,42.3,20.7,60.5,5.5C618,953.6,620.5,926.6,605.3,908.4z"
  }), "\n      "), "\n    "), "\n  "), "\n  ", HTML.IMG({                                                              // 26
    id: "mainimages",                                                                                                  // 27
    src: function() {                                                                                                  // 28
      return Spacebars.mustache(view.lookup("mainimagehref"));                                                         // 29
    }                                                                                                                  // 30
  }), "\n    ", HTML.DIV({                                                                                             // 31
    class: function() {                                                                                                // 32
      return Spacebars.mustache(view.lookup("rightarrowhelper"));                                                      // 33
    },                                                                                                                 // 34
    id: "rightarrowstyle"                                                                                              // 35
  }, "\n      ", HTML.SVG({                                                                                            // 36
    "enable-background": "new 0 0 1000 1000",                                                                          // 37
    id: "rightarrowicon",                                                                                              // 38
    version: "1.1",                                                                                                    // 39
    viewBox: "0 0 1000 1000",                                                                                          // 40
    x: "0px",                                                                                                          // 41
    "xml:space": "preserve",                                                                                           // 42
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                     // 43
    xmlns: "http://www.w3.org/2000/svg",                                                                               // 44
    y: "0px"                                                                                                           // 45
  }, "\n        ", HTML.G("\n          ", HTML.PATH({                                                                  // 46
    d: "M846.2,464.2l-431-439.1c-17.8-18.2-49.7-20.7-71.1-5.5c-21.5,15.2-24.4,42.2-6.5,60.4l404.1,411.6L337.6,903.3\n        c-17.8,18.2-14.9,45.2,6.5,60.4c21.4,15.2,53.3,12.7,71.1-5.5l431-439.1c7.9-8,11.8-17.8,11.8-27.5\n        C858,481.9,854.1,472.2,846.2,464.2z"
  }), "\n        "), "\n      "), "\n    "), "\n  "), "\n");                                                           // 48
}));                                                                                                                   // 49
                                                                                                                       // 50
Template.__checkName("AboutProduct");                                                                                  // 51
Template["AboutProduct"] = new Template("Template.AboutProduct", (function() {                                         // 52
  var view = this;                                                                                                     // 53
  return HTML.DIV({                                                                                                    // 54
    id: "aboutcontainer"                                                                                               // 55
  }, HTML.Raw('\n    <p id="accountid">\n      Creators:\n    </p>\n    '), HTML.IMG({                                 // 56
    id: "accountimage1",                                                                                               // 57
    src: function() {                                                                                                  // 58
      return Spacebars.mustache(view.lookup("creatorimage"));                                                          // 59
    }                                                                                                                  // 60
  }), HTML.Raw('\n    <p id="accounttextid">\n    </p>\n    <img id="aboutaccountimage2" src="">\n    <p id="accounttextid">\n    </p>\n    <img id="aboutaccounimage3" src="">\n    <p id="shippingid">\n      Shipping:\n    </p>\n    '), HTML.P({
    id: "shippingtextid"                                                                                               // 62
  }, "\n      This item will ship within ", Blaze.View("lookup:product.productshiptime", function() {                  // 63
    return Spacebars.mustache(Spacebars.dot(view.lookup("product"), "productshiptime"));                               // 64
  }), " or your order.\n    "), "\n  ");                                                                               // 65
}));                                                                                                                   // 66
                                                                                                                       // 67
Template.__checkName("ProductNavigator");                                                                              // 68
Template["ProductNavigator"] = new Template("Template.ProductNavigator", (function() {                                 // 69
  var view = this;                                                                                                     // 70
  return [ HTML.DIV({                                                                                                  // 71
    id: "streamnavigatorone"                                                                                           // 72
  }, "\n  ", HTML.A({                                                                                                  // 73
    id: "accountstream"                                                                                                // 74
  }, Blaze.View("lookup:product.productmember", function() {                                                           // 75
    return Spacebars.mustache(Spacebars.dot(view.lookup("product"), "productmember"));                                 // 76
  }), "\n  "), "\n  ", HTML.A({                                                                                        // 77
    id: "titlestream"                                                                                                  // 78
  }, "\n", Blaze.View("lookup:product.producttitle", function() {                                                      // 79
    return Spacebars.mustache(Spacebars.dot(view.lookup("product"), "producttitle"));                                  // 80
  }), "  "), "\n"), "\n", HTML.DIV({                                                                                   // 81
    id: "streamnavigatortwo"                                                                                           // 82
  }, "\n  ", HTML.Raw('<a href="" id="buybuttonnavigator">\n    BUY </a>'), "\n    ", HTML.SPAN({                      // 83
    id: "pricey"                                                                                                       // 84
  }, "\n", Blaze.View("lookup:product.productprice", function() {                                                      // 85
    return Spacebars.mustache(Spacebars.dot(view.lookup("product"), "productprice"));                                  // 86
  }), "    "), "\n  ", HTML.Raw('<a id="mediatab">\n    MEDIA\n  </a>'), "\n  ", HTML.Raw('<a id="abouttab">\n    DETAILS\n  </a>'), "\n") ];
}));                                                                                                                   // 88
                                                                                                                       // 89
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SideMessageReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/SideMessageReusable.html                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.SideMessageReusable.js");                                                         // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.SideMessageReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.SideMessageReusable.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("SideMessageReusable");                                                                           // 2
Template["SideMessageReusable"] = new Template("Template.SideMessageReusable", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.A({                                                                                                    // 5
    id: "sidename"                                                                                                     // 6
  }, Blaze.View("lookup:message.creator", function() {                                                                 // 7
    return Spacebars.mustache(Spacebars.dot(view.lookup("message"), "creator"));                                       // 8
  }), ">"), "\n    ", HTML.IMG({                                                                                       // 9
    src: function() {                                                                                                  // 10
      return Spacebars.mustache(Spacebars.dot(view.lookup("message"), "creatorimage"));                                // 11
    }                                                                                                                  // 12
  }) ];                                                                                                                // 13
}));                                                                                                                   // 14
                                                                                                                       // 15
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StreamVideoReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/StreamVideoReusable.html                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.StreamVideoReusable.js");                                                         // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.StreamVideoReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.StreamVideoReusable.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("StreamVideoReusable");                                                                           // 2
Template["StreamVideoReusable"] = new Template("Template.StreamVideoReusable", (function() {                           // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    id: "VideoInformation"                                                                                             // 6
  }, "\n          ", HTML.IMG({                                                                                        // 7
    src: function() {                                                                                                  // 8
      return Spacebars.mustache(Spacebars.dot(view.lookup("profilePic"), "url"));                                      // 9
    },                                                                                                                 // 10
    width: "42",                                                                                                       // 11
    height: "42",                                                                                                      // 12
    class: "inline"                                                                                                    // 13
  }), "\n          ", HTML.P({                                                                                         // 14
    id: "VideoCreator"                                                                                                 // 15
  }, Blaze.View("lookup:video.videomember", function() {                                                               // 16
    return Spacebars.mustache(Spacebars.dot(view.lookup("video"), "videomember"));                                     // 17
  })), "\n          ", HTML.P({                                                                                        // 18
    id: "VideoTitle"                                                                                                   // 19
  }, Blaze.View("lookup:video.videotitle", function() {                                                                // 20
    return Spacebars.mustache(Spacebars.dot(view.lookup("video"), "videotitle"));                                      // 21
  })), "\n"), "\n    ", HTML.DIV({                                                                                     // 22
    class: "video_overlay"                                                                                             // 23
  }, "\n          ", HTML.VIDEO({                                                                                      // 24
    width: "605",                                                                                                      // 25
    controls: "",                                                                                                      // 26
    autoplay: "",                                                                                                      // 27
    class: "video_display",                                                                                            // 28
    id: "media"                                                                                                        // 29
  }, "\n            ", HTML.SOURCE({                                                                                   // 30
    src: function() {                                                                                                  // 31
      return Spacebars.mustache(Spacebars.dot(view.lookup("."), "url"));                                               // 32
    },                                                                                                                 // 33
    type: function() {                                                                                                 // 34
      return Spacebars.mustache(Spacebars.dot(view.lookup("original"), "type"));                                       // 35
    }                                                                                                                  // 36
  }), "\n          "), "\n      "), HTML.Raw('\n      <div id="VideoInformationTwo">\n        <p id="VideoViews">Test</p>\n        <p id="VideoMembers">Test</p>\n        <p id="VideoDate">Test</p>\n        <p id="VideoLocation"> Test</p>\n      </div>') ];
}));                                                                                                                   // 38
                                                                                                                       // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextItemReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/TextItemReusable.html                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.TextItemReusable.js");                                                            // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.TextItemReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.TextItemReusable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("TextItemReusable");                                                                              // 2
Template["TextItemReusable"] = new Template("Template.TextItemReusable", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "image_div"                                                                                                    // 6
  }, "\n        ", HTML.P({                                                                                            // 7
    class: "normal",                                                                                                   // 8
    style: "float:left;"                                                                                               // 9
  }, " ", Blaze.View("lookup:text.imagedate", function() {                                                             // 10
    return Spacebars.mustache(Spacebars.dot(view.lookup("text"), "imagedate"));                                        // 11
  }), "  "), "\n        ", HTML.P({                                                                                    // 12
    class: "normal",                                                                                                   // 13
    style: "float:left;"                                                                                               // 14
  }, " ", Blaze.View("lookup:text.imageimage", function() {                                                            // 15
    return Spacebars.mustache(Spacebars.dot(view.lookup("text"), "imageimage"));                                       // 16
  }), " "), HTML.Raw('\n        <div class="like_button_dark" style="margin-left:30%;"><p class="music_info_buttons_text"> LIKE </p></div>\n        <div class="save_button_dark"><p class="music_info_buttons_text"> SAVE </p></div>\n        <div class="share_button_dark"><p class="music_info_buttons_text"> SHARE </p></div>\n        '), HTML.DIV({
    class: "song_title",                                                                                               // 18
    style: "float:left;"                                                                                               // 19
  }, HTML.P(Blaze.View("lookup:text.imagetitle", function() {                                                          // 20
    return Spacebars.mustache(Spacebars.dot(view.lookup("text"), "imagetitle"));                                       // 21
  }))), "\n      ");                                                                                                   // 22
}));                                                                                                                   // 23
                                                                                                                       // 24
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextItemSmart.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/TextItemSmart.html                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.TextItemSmart.js");                                                               // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.TextItemSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.TextItemSmart.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("TextItemSmart");                                                                                 // 2
Template["TextItemSmart"] = new Template("Template.TextItemSmart", (function() {                                       // 3
  var view = this;                                                                                                     // 4
  return Blaze._TemplateWith(function() {                                                                              // 5
    return Spacebars.dataMustache(view.lookup("pathForTextItem"), view.lookup("textTitle"));                           // 6
  }, function() {                                                                                                      // 7
    return Spacebars.include(view.lookupTemplate("TextItemReusable"));                                                 // 8
  });                                                                                                                  // 9
}));                                                                                                                   // 10
                                                                                                                       // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextStreamReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/TextStreamReusable.html                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.TextStreamReusable.js");                                                          // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.TextStreamReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.TextStreamReusable.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("StreamTextReusable");                                                                            // 2
Template["StreamTextReusable"] = new Template("Template.StreamTextReusable", (function() {                             // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    class: "article_header"                                                                                            // 6
  }, "\n    ", HTML.P({                                                                                                // 7
    class: "article_title"                                                                                             // 8
  }, Blaze.View("lookup:text.texttitle", function() {                                                                  // 9
    return Spacebars.mustache(Spacebars.dot(view.lookup("text"), "texttitle"));                                        // 10
  })), "\n    ", HTML.DIV({                                                                                            // 11
    class: "article_creator"                                                                                           // 12
  }, "\n      ", HTML.P({                                                                                              // 13
    class: "inline article_creator"                                                                                    // 14
  }, Blaze.View("lookup:text.textmember", function() {                                                                 // 15
    return Spacebars.mustache(Spacebars.dot(view.lookup("text"), "textmember"));                                       // 16
  })), "\n    "), "\n  "), HTML.Raw('\n  <div class="like_button_dark" style="margin-left:30%;"><p class="music_info_buttons_text"> LIKE </p></div>\n  <div class="save_button_dark"><p class="music_info_buttons_text"> SAVE </p></div>\n  <div class="share_button_dark"><p class="music_info_buttons_text"> SHARE </p></div>\n  '), HTML.DIV({
    class: "article_content"                                                                                           // 18
  }, "\n  ", Blaze.View("lookup:text.texttext", function() {                                                           // 19
    return Spacebars.mustache(Spacebars.dot(view.lookup("text"), "texttext"));                                         // 20
  }), "\n  "), HTML.Raw('\n  <div class="article_footer">\n  </div>') ];                                               // 21
}));                                                                                                                   // 22
                                                                                                                       // 23
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserSiteReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/UserSiteReusable.html                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.UserSiteReusable.js");                                                            // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.UserSiteReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.UserSiteReusable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("UserSite");                                                                                      // 2
Template["UserSite"] = new Template("Template.UserSite", (function() {                                                 // 3
  var view = this;                                                                                                     // 4
  return HTML.Raw('<div id="info">\n<img src="" id="userimagemain">\n<a></a>\n<a id="membersitelocation"></a>\n<a></a>\n<div id="contact">\n<button id="messagez"> MESSAGE </button>\n<button id="connect" class=""> CONNECT </button>\n<button id="request" display=""> REQUEST </button>\n<div id="page">\n<button id="save"> SAVE </button>\n</div>\n</div>\n</div>');
}));                                                                                                                   // 6
                                                                                                                       // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoItemReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/VideoItemReusable.html                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.VideoItemReusable.js");                                                           // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.VideoItemReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.VideoItemReusable.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("VideoItemReusable");                                                                             // 2
Template["VideoItemReusable"] = new Template("Template.VideoItemReusable", (function() {                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "image_div"                                                                                                    // 6
  }, "\n        ", HTML.DIV({                                                                                          // 7
    class: "music_info_image",                                                                                         // 8
    href: function() {                                                                                                 // 9
      return [ "/", Spacebars.mustache(view.lookup("pathforVideoStream")) ];                                           // 10
    }                                                                                                                  // 11
  }), Blaze.View("lookup:video.videoimage", function() {                                                               // 12
    return Spacebars.mustache(Spacebars.dot(view.lookup("video"), "videoimage"));                                      // 13
  }), HTML.Raw('\n        <div class="like_button_dark" style="margin-left:30%;"><p class="music_info_buttons_text"> LIKE </p></div>\n        <div class="save_button_dark"><p class="music_info_buttons_text"> SAVE </p></div>\n        <div class="share_button_dark"><p class="music_info_buttons_text"> SHARE </p></div>\n        '), HTML.DIV({
    class: "song_title",                                                                                               // 15
    style: "float:left;",                                                                                              // 16
    href: function() {                                                                                                 // 17
      return [ "/", Spacebars.mustache(view.lookup("pathforVideoStream")) ];                                           // 18
    }                                                                                                                  // 19
  }, HTML.P(Blaze.View("lookup:video.videotitle", function() {                                                         // 20
    return Spacebars.mustache(Spacebars.dot(view.lookup("video"), "videotitle"));                                      // 21
  }))), "\n        ", HTML.DIV({                                                                                       // 22
    class: "song_title",                                                                                               // 23
    style: "float:left;"                                                                                               // 24
  }, HTML.P(Blaze.View("lookup:video.videovideo", function() {                                                         // 25
    return Spacebars.mustache(Spacebars.dot(view.lookup("video"), "videovideo"));                                      // 26
  }))), "\n        ", HTML.DIV({                                                                                       // 27
    class: "creator_name",                                                                                             // 28
    colspan: "4"                                                                                                       // 29
  }, HTML.P(Blaze.View("lookup:video.videomember", function() {                                                        // 30
    return Spacebars.mustache(Spacebars.dot(view.lookup("video"), "videomember"));                                     // 31
  })), " "), "\n      ");                                                                                              // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoItemSmart.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/VideoItemSmart.html                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.VideoItemSmart.js");                                                              // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.VideoItemSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.VideoItemSmart.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("VideoItemSmart");                                                                                // 2
Template["VideoItemSmart"] = new Template("Template.VideoItemSmart", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("videoTitleArray")),                                                       // 7
      _variable: "videoTitle"                                                                                          // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 11
      return Spacebars.dataMustache(view.lookup("videoArgs"), view.lookup("videoTitle"));                              // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("VideoItemReusable"));                                              // 14
    }), "\n" ];                                                                                                        // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"YouMenuReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/YouMenuReusable.html                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.YouMenuReusable.js");                                                             // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.YouMenuReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.YouMenuReusable.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("YouMenu");                                                                                       // 2
Template["YouMenu"] = new Template("Template.YouMenu", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return Blaze.If(function() {                                                                                         // 5
    return Spacebars.call(view.lookup("NotLoggedIn"));                                                                 // 6
  }, function() {                                                                                                      // 7
    return [ "\n  ", Spacebars.include(view.lookupTemplate("join")), "\n  " ];                                         // 8
  }, function() {                                                                                                      // 9
    return [ "\n", HTML.DIV({                                                                                          // 10
      class: "modal234",                                                                                               // 11
      id: "myyyModal"                                                                                                  // 12
    }, "\n", HTML.DIV({                                                                                                // 13
      class: "modal-contentyou"                                                                                        // 14
    }, "\n  ", HTML.SPAN({                                                                                             // 15
      class: "closeyou"                                                                                                // 16
    }, " CLOSE X "), "\n  ", HTML.DIV({                                                                                // 17
      id: "youmenu"                                                                                                    // 18
    }, "\n  ", HTML.A({                                                                                                // 19
      class: "site3",                                                                                                  // 20
      href: "/:Membername"                                                                                             // 21
    }, " YOUR SITE "), "\n  ", HTML.BR(), "\n  ", HTML.A({                                                             // 22
      class: "site4",                                                                                                  // 23
      href: "/dashboard"                                                                                               // 24
    }, " DASHBOARD "), "\n  ", HTML.BR(), "\n  ", HTML.A({                                                             // 25
      id: "settings2",                                                                                                 // 26
      href: "/settings"                                                                                                // 27
    }, " SETTINGS "), "\n  ", HTML.BR(), "\n  ", HTML.A({                                                              // 28
      id: "logout2",                                                                                                   // 29
      href: ""                                                                                                         // 30
    }, " LOGOUT "), "\n  "), "\n"), "\n"), "\n" ];                                                                     // 31
  });                                                                                                                  // 32
}));                                                                                                                   // 33
                                                                                                                       // 34
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"YourMessagesReusable.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/YourMessagesReusable.html                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.YourMessagesReusable.js");                                                        // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.YourMessagesReusable.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/template.YourMessagesReusable.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("YourMessagesRU");                                                                                // 2
Template["YourMessagesRU"] = new Template("Template.YourMessagesRU", (function() {                                     // 3
  var view = this;                                                                                                     // 4
  return [ HTML.Raw('<div id="conversation" class="conversationn" name="conversationn">\n\n</div>\n'), Blaze.Each(function() {
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("messages")),                                                              // 7
      _variable: "message"                                                                                             // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n\n", Blaze._TemplateWith(function() {                                                                  // 11
      return Spacebars.dataMustache(view.lookup("messageArgs"), view.lookup("channel"));                               // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("Message"));                                                        // 14
    }), "\n\n", Spacebars.include(view.lookupTemplate("Sidebar")), "\n\n", HTML.A({                                    // 15
      class: "newmessage"                                                                                              // 16
    }, " NEW MESSAGE"), "\n\n", HTML.DIV({                                                                             // 17
      class: "message-input"                                                                                           // 18
    }, "\n   ", HTML.INPUT({                                                                                           // 19
      name: "message",                                                                                                 // 20
      placeholder: "Type your message here..."                                                                         // 21
    }), "\n    ", HTML.INPUT({                                                                                         // 22
      id: "attach",                                                                                                    // 23
      type: "file",                                                                                                    // 24
      placeholder: "ATTACH"                                                                                            // 25
    }), "\n    ", HTML.BUTTON({                                                                                        // 26
      type: "submit",                                                                                                  // 27
      id: "send2",                                                                                                     // 28
      placeholder: "Enter Message...",                                                                                 // 29
      href: "/mymessages"                                                                                              // 30
    }, " SEND "), "\n "), "\n\n" ];                                                                                    // 31
  }, function() {                                                                                                      // 32
    return [ "\n", HTML.P({                                                                                            // 33
      id: "nomessages"                                                                                                 // 34
    }, "You have no messages. "), "\n", HTML.P({                                                                       // 35
      id: "addmessages"                                                                                                // 36
    }, " CREATE MESSAGE "), "\n" ];                                                                                    // 37
  }) ];                                                                                                                // 38
}));                                                                                                                   // 39
                                                                                                                       // 40
Template.__checkName("Sidebar");                                                                                       // 41
Template["Sidebar"] = new Template("Template.Sidebar", (function() {                                                   // 42
  var view = this;                                                                                                     // 43
  return HTML.UL({                                                                                                     // 44
    id: "recentmess"                                                                                                   // 45
  }, "\n", Blaze.Each(function() {                                                                                     // 46
    return {                                                                                                           // 47
      _sequence: Spacebars.call(view.lookup("messages")),                                                              // 48
      _variable: "message"                                                                                             // 49
    };                                                                                                                 // 50
  }, function() {                                                                                                      // 51
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 52
      return {                                                                                                         // 53
        message: Spacebars.call(view.lookup("message"))                                                                // 54
      };                                                                                                               // 55
    }, function() {                                                                                                    // 56
      return Spacebars.include(view.lookupTemplate("SideMessage"));                                                    // 57
    }), "\n" ];                                                                                                        // 58
  }), "\n");                                                                                                           // 59
}));                                                                                                                   // 60
                                                                                                                       // 61
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AboutReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AboutReusable.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./AboutReusable.html"));                                                                         // 1
Template.WreadAbout.events({                                                                                           // 4
  "click .closeyou1": function (event, template) {                                                                     // 5
    var modal3z = $('.modal-contentyou0');                                                                             // 6
    modal3z.css('display', 'none');                                                                                    // 7
    Blaze.remove(template.view);                                                                                       // 8
  }                                                                                                                    // 9
});                                                                                                                    // 4
Template.WreadAbout.onRendered(function () {                                                                           // 12
  Meteor.setTimeout(function () {                                                                                      // 13
    var modal512 = $('#myyyModal1');                                                                                   // 14
    modal512.css('display', 'block');                                                                                  // 15
  }, 500);                                                                                                             // 16
});                                                                                                                    // 17
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioItemReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AudioItemReusable.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./AudioItemReusable.html"));                                                                     // 1
Template.AudioItemReusable.onCreated(function () {                                                                     // 12
  function listShowOnCreated() {                                                                                       // 12
    this.autorun(function () {                                                                                         // 13
      new SimpleSchema({                                                                                               // 14
        audioaudioblz: {                                                                                               // 15
          type: [Object]                                                                                               // 15
        },                                                                                                             // 15
        audiomediablz: {                                                                                               // 16
          type: [Object]                                                                                               // 16
        },                                                                                                             // 16
        audiotitleblz: {                                                                                               // 17
          type: String                                                                                                 // 17
        },                                                                                                             // 17
        audiotextblz: {                                                                                                // 18
          type: String                                                                                                 // 18
        }                                                                                                              // 18
      }).validate(Template.currentData());                                                                             // 14
    });                                                                                                                // 20
  }                                                                                                                    // 21
                                                                                                                       //
  return listShowOnCreated;                                                                                            // 12
}());                                                                                                                  // 12
Template.AudioItemReusable.helpers({                                                                                   // 25
  pathforAudioStream: function () {                                                                                    // 26
    var audio = this;                                                                                                  // 27
    var params = {                                                                                                     // 28
      audio: audios.audiotitle                                                                                         // 29
    };                                                                                                                 // 28
    var channel = "audio";                                                                                             // 31
    var path = FlowRouter.path(channel, params);                                                                       // 32
    return path;                                                                                                       // 33
  }                                                                                                                    // 34
});                                                                                                                    // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioItemSmart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AudioItemSmart.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./AudioItemSmart.html"));                                                                        // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.AudioItemSmart.helpers({                                                                                    // 15
    audioTitleArray: function () {                                                                                     // 16
      var instance = Template.instance();                                                                              // 17
      var audioTitle = instance.getAudioTitle();                                                                       // 18
      return Audios.findOne(audioTitle) ? [audioTitle] : [];                                                           // 19
    },                                                                                                                 // 20
    audioArgs: function (audioTitle) {                                                                                 // 21
      var instance = Template.instance();                                                                              // 22
      return Audios.findOne(audioTitle);                                                                               // 23
    }                                                                                                                  // 24
  });                                                                                                                  // 15
}                                                                                                                      // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioStreamReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/AudioStreamReusable.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./AudioStreamReusable.html"));                                                                   // 1
Template.StreamAudioReusable.onCreated(function () {                                                                   // 12
  this.autorun(function () {                                                                                           // 13
    new SimpleSchema({                                                                                                 // 14
      audioaudioblz: {                                                                                                 // 15
        type: [Object]                                                                                                 // 15
      },                                                                                                               // 15
      audiomediablz: {                                                                                                 // 16
        type: [Object]                                                                                                 // 16
      },                                                                                                               // 16
      audiotitleblz: {                                                                                                 // 17
        type: String                                                                                                   // 17
      },                                                                                                               // 17
      audiotextblz: {                                                                                                  // 18
        type: String                                                                                                   // 18
      }                                                                                                                // 18
    }).validate(Template.currentData());                                                                               // 14
  });                                                                                                                  // 21
});                                                                                                                    // 22
;                                                                                                                      // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Create.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Create.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./Create.html"));                                                                                // 1
var displayError = void 0;                                                                                             // 1
module.watch(require("../lib/errors.js"), {                                                                            // 1
  displayError: function (v) {                                                                                         // 1
    displayError = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 8);                                                                                                                 // 1
var Textsinsert = void 0;                                                                                              // 1
module.watch(require("../../api/Text/TextMethods.js"), {                                                               // 1
  Textsinsert: function (v) {                                                                                          // 1
    Textsinsert = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 9);                                                                                                                 // 1
var Videoinsert = void 0;                                                                                              // 1
module.watch(require("../../api/Video/VideoMethods.js"), {                                                             // 1
  Videoinsert: function (v) {                                                                                          // 1
    Videoinsert = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 10);                                                                                                                // 1
var Productinsert = void 0;                                                                                            // 1
module.watch(require("../../api/Products/ProductMethods.js"), {                                                        // 1
  Productinsert: function (v) {                                                                                        // 1
    Productinsert = v;                                                                                                 // 1
  }                                                                                                                    // 1
}, 11);                                                                                                                // 1
var Imagesinsert = void 0;                                                                                             // 1
module.watch(require("../../api/Image/ImageMethods.js"), {                                                             // 1
  Imagesinsert: function (v) {                                                                                         // 1
    Imagesinsert = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 12);                                                                                                                // 1
var Audioinsert = void 0;                                                                                              // 1
module.watch(require("../../api/Audio/AudioMethods.js"), {                                                             // 1
  Audioinsert: function (v) {                                                                                          // 1
    Audioinsert = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 13);                                                                                                                // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 41
  Template.Create.helpers({                                                                                            // 44
    'NotLoggedIn': function () {                                                                                       // 45
      if (!Meteor.user() & !Meteor.loggingIn()) {                                                                      // 46
        return false;                                                                                                  // 46
      } else {                                                                                                         // 46
        return true;                                                                                                   // 46
      }                                                                                                                // 46
    },                                                                                                                 // 47
    'FormRendered': function () {                                                                                      // 48
      return Template.instance().rendered.get();                                                                       // 49
    }                                                                                                                  // 50
  });                                                                                                                  // 44
  Template.CreateNavigator.onCreated(function () {                                                                     // 54
    var renderedtemplate = Session.get('currentForm');                                                                 // 55
    var ham = 'template.Create';                                                                                       // 56
    var completeham = ham.concat(renderedtemplate);                                                                    // 57
  }); /*                                                                                                               // 58
      Template.Create.onRendered(function CreatingisCreation(){                                                        //
      Session.set('rendered', false);                                                                                  //
                                                                                                                       //
        this.formnext = new ReactiveVar('fone');                                                                       //
        this.formback = new ReactiveVar('fone');                                                                       //
        this.errormessagecreate = new ReactiveVar('null');                                                             //
      });                                                                                                              //
      */                                                                                                               //
  Template.CreateVideo.events({                                                                                        // 72
    /*                                                                                                                 // 73
    'submit #CreateVideoForm': function(event) {                                                                       //
      event.preventDefault();                                                                                          //
    	var instance = Template.instance();                                                                               //
    var videodata = {                                                                                                  //
     videotitle : event.target.TitleVideo.value,                                                                       //
     videotext : event.target.TextVideo.value,                                                                         //
       videovideo : event.target.VideoVideo.value,                                                                     //
       videoimage : event.target.ImageVideo.value,                                                                     //
     videomembers : event.target.MembersVideo.value,                                                                   //
     videodate : event.target.DateVideo.value                                                                          //
    },                                                                                                                 //
    pass = true,                                                                                                       //
    missingElement;                                                                                                    //
       for (var key in videodata) {                                                                                    //
        if (!memberDetails[key]) {                                                                                     //
          pass = false;                                                                                                //
          missingElement = key;                                                                                        //
          template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');                               //
        }                                                                                                              //
      }                                                                                                                //
    if (pass) {                                                                                                        //
      Videoinsert.call('createVideo', videodata, function (err,response) {                                             //
       }                                                                                                               //
    });                                                                                                                //
    }                                                                                                                  //
    },                                                                                                                 //
    */'click .back': function (event, template) {                                                                      //
      Blaze.remove(Template.instance().view);                                                                          // 105
      Session.set('SelectedForm', '+++');                                                                              // 106
    }                                                                                                                  // 107
  });                                                                                                                  // 72
  Template.CreateImage.events({                                                                                        // 111
    'submit #createimage': function (event) {                                                                          // 112
      event.preventDefault();                                                                                          // 113
      var imagedata = {                                                                                                // 114
        imagetext: event.target.TextImage.value,                                                                       // 115
        imagetitle: event.target.TextImage.value,                                                                      // 116
        imageimage: event.target.ImageImage.value                                                                      // 117
      };                                                                                                               // 114
      Imagesinsert.call({                                                                                              // 119
        imagedata: imagedata                                                                                           // 119
      }, displayError);                                                                                                // 119
    },                                                                                                                 // 120
    'click .back': function (event, template) {                                                                        // 121
      Blaze.remove(Template.instance().view);                                                                          // 122
      Session.set('SelectedForm', '+++');                                                                              // 123
    }                                                                                                                  // 124
  });                                                                                                                  // 111
  Template.CreateText.onRendered(function () {                                                                         // 127
    function createlocationvar() {                                                                                     // 127
      Session.set('rendered', true);                                                                                   // 128
      var template = Template.instance();                                                                              // 129
      template.locationamount = new ReactiveVar(false);                                                                // 130
      template.collaborators = new ReactiveVar(false);                                                                 // 131
    }                                                                                                                  // 133
                                                                                                                       //
    return createlocationvar;                                                                                          // 127
  }());                                                                                                                // 127
  Template.CreateImage.onRendered(function () {                                                                        // 135
    function createlocationvar() {                                                                                     // 135
      Session.set('rendered', true);                                                                                   // 136
      var template = Template.instance();                                                                              // 137
      template.locationamount = new ReactiveVar(false);                                                                // 138
      template.collaborators = new ReactiveVar(false);                                                                 // 139
    }                                                                                                                  // 141
                                                                                                                       //
    return createlocationvar;                                                                                          // 135
  }());                                                                                                                // 135
  Template.CreateAudio.onRendered(function () {                                                                        // 143
    function createlocationvar() {                                                                                     // 143
      Session.set('rendered', true);                                                                                   // 144
      var template = Template.instance();                                                                              // 145
      template.locationamount = new ReactiveVar(false);                                                                // 146
      template.collaborators = new ReactiveVar(false);                                                                 // 147
    }                                                                                                                  // 149
                                                                                                                       //
    return createlocationvar;                                                                                          // 143
  }());                                                                                                                // 143
  Template.CreateProduct.onRendered(function () {                                                                      // 151
    function createlocationvar() {                                                                                     // 151
      Session.set('rendered', true);                                                                                   // 152
      var template = Template.instance();                                                                              // 153
      template.locationamount = new ReactiveVar(false);                                                                // 154
      template.collaborators = new ReactiveVar(false);                                                                 // 155
    }                                                                                                                  // 157
                                                                                                                       //
    return createlocationvar;                                                                                          // 151
  }());                                                                                                                // 151
  Template.CreateVideo.onRendered(function () {                                                                        // 159
    function createlocationvar() {                                                                                     // 159
      Session.set('rendered', true);                                                                                   // 160
      var template = Template.instance();                                                                              // 161
      template.locationamount = new ReactiveVar(false);                                                                // 162
      template.collaborators = new ReactiveVar(false);                                                                 // 163
    }                                                                                                                  // 165
                                                                                                                       //
    return createlocationvar;                                                                                          // 159
  }());                                                                                                                // 159
  Template.CreateText.events({                                                                                         // 168
    'submit #createtextbutton': function (event, template) {                                                           // 169
      event.preventDefault();                                                                                          // 170
      var instance = Template.instance();                                                                              // 172
      var textdata = {                                                                                                 // 174
        texttitle: event.target.TitleText.value,                                                                       // 175
        texttext: event.target.TextText.value                                                                          // 176
      };                                                                                                               // 174
      Textsinsert.call(textdata, function (err, res) {                                                                 // 179
        if (err) {                                                                                                     // 180
          if (err.error === 'validation-error') {                                                                      // 181
            var errors = {                                                                                             // 182
              email: [],                                                                                               // 183
              description: [],                                                                                         // 184
              amount: []                                                                                               // 185
            };                                                                                                         // 182
            err.details.forEach(function (fieldError) {                                                                // 187
              errors[fieldError.name].push(fieldError.type);                                                           // 188
            });                                                                                                        // 189
            instance.errors.set(errors);                                                                               // 190
          }                                                                                                            // 191
        }                                                                                                              // 192
      });                                                                                                              // 193
    },                                                                                                                 // 194
    'click .back': function (event, template) {                                                                        // 195
      Blaze.remove(Template.instance().view);                                                                          // 196
      Session.set('SelectedForm', '+++');                                                                              // 197
    },                                                                                                                 // 198
    'click #textlocationbutton': function (event, template) {                                                          // 199
      template.locationamount.set(true);                                                                               // 200
      $('#textlocationbutton').hide();                                                                                 // 201
                                                                                                                       //
      function getLocation() {                                                                                         // 203
        if (navigator.geolocation) {                                                                                   // 204
          navigator.geolocation.getCurrentPosition(showPosition);                                                      // 205
        } else {                                                                                                       // 206
          x.innerHTML = "Geolocation is not supported by this browser.";                                               // 207
        }                                                                                                              // 208
      }                                                                                                                // 209
                                                                                                                       //
      function showPosition(position) {                                                                                // 211
        x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;         // 212
      }                                                                                                                // 214
                                                                                                                       //
      var locationlatitude = getlocation();                                                                            // 216
    }                                                                                                                  // 218
  });                                                                                                                  // 168
  Template.CreateText.helpers({                                                                                        // 221
    locationvisual: function () {                                                                                      // 222
      return template.locationamount.get();                                                                            // 223
    },                                                                                                                 // 224
    location: function () {                                                                                            // 225
      return getLocation();                                                                                            // 226
    }                                                                                                                  // 227
  });                                                                                                                  // 221
  Template.CreateAudio.events({                                                                                        // 231
    'submit #createaudio': function (event, template) {                                                                // 232
      event.preventDefault();                                                                                          // 233
      var instance = Template.instance();                                                                              // 235
      var data = {                                                                                                     // 237
        audiotitle: event.target.TitleAudio.value,                                                                     // 238
        audiotext: event.target.TextAudio.value                                                                        // 239
      };                                                                                                               // 237
      Audio.methods.addtext.call(data);                                                                                // 241
    },                                                                                                                 // 242
    'click .back': function (event, template) {                                                                        // 243
      Blaze.remove(Template.instance().view);                                                                          // 244
      Session.set('SelectedForm', '+++');                                                                              // 245
    }                                                                                                                  // 246
  }); /*                                                                                                               // 231
      Template.CreateProject.events({                                                                                  //
        'submit #createproject': function(event) {                                                                     //
        var instance = Template.instance();                                                                            //
        var data ={                                                                                                    //
            projecttitle : event.target.TitleProject.value,                                                            //
            projecttext : event.target.TextProject.value,                                                              //
            projectdatestart : event.target.StartProject.value,                                                        //
            projectdateend : event.target.EndProject.value,                                                            //
            projectmember : event.target.MemberProject.value,                                                          //
            projectmedia : event.target.MediaProject.value,                                                            //
            projectmembers : event.target.MembersProject.value,                                                        //
        },                                                                                                             //
        pass = true,                                                                                                   //
        missingElement;                                                                                                //
                                                                                                                       //
          for (var key in videodata) {                                                                                 //
            if (!memberDetails[key]) {                                                                                 //
              pass = false;                                                                                            //
              missingElement = key;                                                                                    //
              template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');                           //
            }                                                                                                          //
          }                                                                                                            //
        if (pass) {                                                                                                    //
          Meteor.call('createVideo', videodata);                                                                       //
        }                                                                                                              //
        }                                                                                                              //
      });                                                                                                              //
                                                                                                                       //
      Template.CreateRequest.events({                                                                                  //
        'submit #createrequest': function(event) {                                                                     //
      var instance = Template.instance();                                                                              //
      var requestdata ={                                                                                               //
            requesttitle : event.target.TitleRequest.value,                                                            //
            requesttext : event.target.TextRequest.value,                                                              //
            requestdate : event.target.DateRequest.value,                                                              //
            requestmember : event.target.MemberRequest.value,                                                          //
            requestmedia : event.target.MediaRequest.value,                                                            //
            requestmembers : event.target.MembersRequest.value,                                                        //
        },                                                                                                             //
        pass = true,                                                                                                   //
        missingElement;                                                                                                //
                                                                                                                       //
          for (var key in videodata) {                                                                                 //
            if (!memberDetails[key]) {                                                                                 //
              pass = false;                                                                                            //
              missingElement = key;                                                                                    //
              template.errormessagecreate.set('Error: Please Enter'+ missingElement + '!!');                           //
            }                                                                                                          //
          }                                                                                                            //
        if (pass) {                                                                                                    //
          Meteor.call('createRequest', requestdata);                                                                   //
        }                                                                                                              //
        }                                                                                                              //
      });                                                                                                              //
      */                                                                                                               //
  Template.CreateText.onRendered(function () {                                                                         // 306
    $("#createtext").slideUp(3000, "slow");                                                                            // 307
  });                                                                                                                  // 308
  Template.CreateImage.onRendered(function () {                                                                        // 310
    $("#createimage").slideUp(3000, "slow");                                                                           // 311
  });                                                                                                                  // 312
  Template.CreateAudio.onRendered(function () {                                                                        // 314
    $("#createaudio").slideUp(3000, "slow");                                                                           // 315
  });                                                                                                                  // 316
  Template.Create.helpers({                                                                                            // 319
    back: function () {                                                                                                // 320
      return Template.instance().formback.get();                                                                       // 321
    },                                                                                                                 // 322
    next: function () {                                                                                                // 323
      return Template.instance().formnext.get();                                                                       // 324
    }                                                                                                                  // 325
  });                                                                                                                  // 319
  Template.CreateNavigator.helpers({                                                                                   // 328
    currentForm: function () {                                                                                         // 329
      return Session.get('SelectedForm');                                                                              // 330
    }                                                                                                                  // 331
  });                                                                                                                  // 328
  Template.Create.onRendered(function () {                                                                             // 334
    Session.set('SelectedForm', '+++');                                                                                // 335
    Meteor.setTimeout(function () {                                                                                    // 336
      var modal2 = $('.modal2');                                                                                       // 337
      modal2.css('display', 'block');                                                                                  // 338
    }, 500);                                                                                                           // 339
  });                                                                                                                  // 340
  Template.Create.events({                                                                                             // 342
    'click #AudioSelection': function (event, template) {                                                              // 343
      Session.set('SelectedForm', 'Audio');                                                                            // 344
      Blaze.render(Template.CreateAudio, template.$('#createnav').get(0));                                             // 345
    },                                                                                                                 // 346
    'click #TextSelection': function (event, template) {                                                               // 347
      Session.set('SelectedForm', 'Text');                                                                             // 348
      Blaze.render(Template.CreateText, template.$('#createnav').get(0));                                              // 349
    },                                                                                                                 // 350
    'click #ImageSelection': function (event, template) {                                                              // 351
      Session.set('SelectedForm', 'Image');                                                                            // 352
      Blaze.render(Template.CreateImage, template.$('#createnav').get(0));                                             // 353
    },                                                                                                                 // 354
    'click #VideoSelection': function (event, template) {                                                              // 355
      Session.set('SelectedForm', 'Video');                                                                            // 356
      Blaze.render(Template.CreateVideo, template.$('#createnav').get(0));                                             // 357
    },                                                                                                                 // 358
    'click #RequestSelection': function (event, template) {                                                            // 359
      Session.set('SelectedForm', 'Request');                                                                          // 360
      Blaze.render(Template.CreateRequest, template.$('#createnav').get(0));                                           // 361
    },                                                                                                                 // 362
    'click #ProductSelection2': function (event, template) {                                                           // 363
      Session.set('SelectedForm', 'Product');                                                                          // 364
      Blaze.render(Template.CreateProduct, template.$('#createnav').get(0));                                           // 365
    },                                                                                                                 // 366
    'click .close': function (event, template) {                                                                       // 367
      Blaze.remove(Template.instance().view);                                                                          // 368
      Session.set('SelectedForm', '+++');                                                                              // 369
    }                                                                                                                  // 370
  });                                                                                                                  // 342
  Template.CreateProduct.events({                                                                                      // 375
    'submit .addproduct': function (event, template) {                                                                 // 376
      event.preventDefault();                                                                                          // 377
      var productDetails = {                                                                                           // 378
        productmedia: event.target.MediaProduct.value,                                                                 // 379
        producttitle: event.target.TitleProduct.value,                                                                 // 380
        producttext: event.target.TextProduct.value,                                                                   // 381
        productprice: event.target.PriceProduct.value,                                                                 // 382
        productshipprice: event.target.ShipPriceProduct.value,                                                         // 383
        productshiptime: event.target.ShipTimeProduct.value                                                            // 384
      },                                                                                                               // 378
          pass = true,                                                                                                 // 378
          missingElement;                                                                                              // 378
                                                                                                                       //
      for (var key in meteorBabelHelpers.sanitizeForInObject(productDetails)) {                                        // 388
        if (!productDetails[key]) {                                                                                    // 389
          pass = false;                                                                                                // 390
          missingElement = key;                                                                                        // 391
          Template.instance().errormessagecreate.set('Error: Please Enter' + missingElement + '!!');                   // 392
        }                                                                                                              // 393
      }                                                                                                                // 394
                                                                                                                       //
      if (pass) {                                                                                                      // 395
        Meteor.call('createProduct', productDetails, function (err, response) {                                        // 396
          if (err) {                                                                                                   // 397
            alert(err.messsage);                                                                                       // 398
          } else {                                                                                                     // 399
            Session.set('rendered', false);                                                                            // 400
          }                                                                                                            // 401
        });                                                                                                            // 402
      }                                                                                                                // 403
    },                                                                                                                 // 404
    'click #addmember': function (event, template) {                                                                   // 405
      var memberval = event.target.AddSearchMembers.value;                                                             // 406
      $('#addmember').hide();                                                                                          // 407
      template.l;                                                                                                      // 408
    },                                                                                                                 // 410
    'click #fone': function (event) {                                                                                  // 411
      Template.instance().formback.set('ProductSelection2');                                                           // 412
      Template.instance().formnext.set('ftwo');                                                                        // 413
    },                                                                                                                 // 414
    'click #ftwo': function (event) {                                                                                  // 415
      Template.instance().formback.set('fone');                                                                        // 416
      Template.instance().formnext.set('fthree');                                                                      // 417
    },                                                                                                                 // 418
    'click #fthree': function (event) {                                                                                // 419
      Template.instance().formback.set('ftwo');                                                                        // 420
    },                                                                                                                 // 421
    'click .back': function (event, template) {                                                                        // 422
      Blaze.remove(Template.instance().view);                                                                          // 423
      Session.set('SelectedForm', '+++');                                                                              // 424
    }                                                                                                                  // 425
  });                                                                                                                  // 375
  Template.CreateProject.events({                                                                                      // 429
    'click #gone': function (event) {                                                                                  // 430
      Template.instance().formback.set('ProductSelection2');                                                           // 431
      Template.instance().formnext.set('ftwo');                                                                        // 432
    },                                                                                                                 // 433
    'click #gtwo': function (event) {                                                                                  // 434
      Template.instance().formback.set('fone');                                                                        // 435
      Template.instance().formnext.set('fthree');                                                                      // 436
    },                                                                                                                 // 437
    'click #gthree': function (event) {                                                                                // 438
      Template.instance().formback.set('ftwo');                                                                        // 439
    }                                                                                                                  // 440
  });                                                                                                                  // 429
  Template.CreateNavigator.helpers({                                                                                   // 444
    CurrentSelection: function (event, template) {                                                                     // 445
      return Session.get('SelectedForm');                                                                              // 446
    }                                                                                                                  // 447
  });                                                                                                                  // 444
}                                                                                                                      // 450
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageItemReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ImageItemReusable.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./ImageItemReusable.html"));                                                                     // 1
Template.ImageItemReusable.helpers({                                                                                   // 12
  pathforImageStream: function () {                                                                                    // 13
    var image = this;                                                                                                  // 14
    var params = {                                                                                                     // 15
      image: image.imagetitle                                                                                          // 16
    };                                                                                                                 // 15
    var channel = "images";                                                                                            // 18
    var path = FlowRouter.path(channel, params);                                                                       // 19
    return path;                                                                                                       // 20
  }                                                                                                                    // 21
});                                                                                                                    // 12
Template.ImageItemReusable.onCreated(function () {                                                                     // 27
  function imageShowOnCreated() {                                                                                      // 27
    this.autorun(function () {                                                                                         // 30
      new SimpleSchema({                                                                                               // 31
        imagemember: {                                                                                                 // 32
          type: String                                                                                                 // 32
        },                                                                                                             // 32
        imagetitle: {                                                                                                  // 33
          type: String                                                                                                 // 33
        },                                                                                                             // 33
        imageimage: {                                                                                                  // 34
          type: Mongo.Cursor                                                                                           // 34
        }                                                                                                              // 34
      }).validate(Template.currentData());                                                                             // 31
    });                                                                                                                // 36
  }                                                                                                                    // 38
                                                                                                                       //
  return imageShowOnCreated;                                                                                           // 27
}());                                                                                                                  // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageItemSmart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ImageItemSmart.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./ImageItemSmart.html"));                                                                        // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.ImageItemSmart.helpers({                                                                                    // 14
    imageTitleArray: function () {                                                                                     // 15
      var instance = Template.instance();                                                                              // 16
      var imageTitle = instance.getImageTitle();                                                                       // 17
      return Images.findOne(imageTitle) ? [imageTitle] : [];                                                           // 18
    },                                                                                                                 // 19
    imageArgs: function (imageTitle) {                                                                                 // 20
      var instance = Template.instance();                                                                              // 21
      return;                                                                                                          // 22
      Images.findOne(imageTitle);                                                                                      // 23
    }                                                                                                                  // 24
  });                                                                                                                  // 14
}                                                                                                                      // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageStreamReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ImageStreamReusable.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./ImageStreamReusable.html"));                                                                   // 1
Template.StreamImageReusable.onCreated(function () {                                                                   // 12
  function listShowOnCreated() {                                                                                       // 12
    this.autorun(function () {                                                                                         // 13
      new SimpleSchema({                                                                                               // 14
        imagetext: {                                                                                                   // 15
          type: String                                                                                                 // 15
        },                                                                                                             // 15
        imageimage: {                                                                                                  // 16
          type: String                                                                                                 // 16
        },                                                                                                             // 16
        imagetitle: {                                                                                                  // 17
          type: String                                                                                                 // 17
        }                                                                                                              // 17
      }).validate(Template.currentData());                                                                             // 14
    });                                                                                                                // 19
  }                                                                                                                    // 20
                                                                                                                       //
  return listShowOnCreated;                                                                                            // 12
}());                                                                                                                  // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"LowerNavigator.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/LowerNavigator.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./LowerNavigator.html"));                                                                        // 1
Template.LowerNavigator.events({                                                                                       // 14
  'click #createicon': function (event, template) {                                                                    // 15
    Blaze.render(Template.Create, template.$('#network_nav').get(0));                                                  // 16
  },                                                                                                                   // 17
  'click #messages': function (event, template) {                                                                      // 18
    FlowRouter.go('/messages');                                                                                        // 19
  },                                                                                                                   // 20
  'click #cloudicon': function (event, template) {                                                                     // 21
    FlowRouter.go('/cloud');                                                                                           // 22
  },                                                                                                                   // 23
  'click #usericon': function (event, template) {                                                                      // 24
    Blaze.render(Template.YouMenu, template.$('#network_nav').get(0));                                                 // 25
  }                                                                                                                    // 26
});                                                                                                                    // 14
Template.LowerNavigator.helpers({                                                                                      // 30
  NotLoggedIn: function () {                                                                                           // 31
    if (!Meteor.user() & !Meteor.loggingIn()) {                                                                        // 32
      return false;                                                                                                    // 32
    } else {                                                                                                           // 32
      return true;                                                                                                     // 32
    }                                                                                                                  // 32
  }                                                                                                                    // 33
});                                                                                                                    // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Menu.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Menu.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./Menu.html"));                                                                                  // 1
Template.Menu.onCreated(function () {                                                                                  // 13
  function Menu() {                                                                                                    // 13
    Meteor.subscribe('textFeed');                                                                                      // 15
  }                                                                                                                    // 17
                                                                                                                       //
  return Menu;                                                                                                         // 13
}());                                                                                                                  // 13
Template.Menu.events({                                                                                                 // 21
  'click .maintext3': function (event, template) {                                                                     // 22
    Blaze.render(Template.Login, document.body);                                                                       // 23
  },                                                                                                                   // 24
  'click #waveicon': function (event, template) {                                                                      // 26
    Blaze.render(Template.WreadAbout, document.body);                                                                  // 27
  }                                                                                                                    // 28
});                                                                                                                    // 21
Template.Menu.helpers({                                                                                                // 33
  NotLoggedIn: function () {                                                                                           // 34
    if (!Meteor.user() & !Meteor.loggingIn()) {                                                                        // 35
      return false;                                                                                                    // 35
    } else {                                                                                                           // 35
      return true;                                                                                                     // 35
    }                                                                                                                  // 35
  }                                                                                                                    // 36
});                                                                                                                    // 33
Template.StreamMenu.helpers({                                                                                          // 40
  currentitem: function () {                                                                                           // 41
    return Session.get('selectedItem');                                                                                // 42
  }                                                                                                                    // 43
});                                                                                                                    // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Message.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/Message.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./Message.html"));                                                                               // 1
Template.Message.onCreated(function () {                                                                               // 13
  this.autorun(function () {                                                                                           // 14
    new SimpleSchema({                                                                                                 // 15
      Member: {                                                                                                        // 16
        type: String                                                                                                   // 16
      },                                                                                                               // 16
      Message: {                                                                                                       // 17
        type: String                                                                                                   // 17
      }                                                                                                                // 17
    }).validate(Template.currentData());                                                                               // 15
  });                                                                                                                  // 19
});                                                                                                                    // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NewMessageReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NewMessageReusable.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./NewMessageReusable.html"));                                                                    // 1
Template.RealNewMessage.events({                                                                                       // 12
  'click #send2': function (event, template) {                                                                         // 13
    handleMessageInsert(event, template);                                                                              // 14
  },                                                                                                                   // 15
  'click #close4': function (event, template) {                                                                        // 16
    var modal300 = $('#createnewmessage');                                                                             // 17
    modal300.css('display', 'none');                                                                                   // 18
    Blaze.remove(template.view);                                                                                       // 19
  },                                                                                                                   // 20
  'click #creategroup': function (event, template) {                                                                   // 21
    Blaze.render(Template.CreateGroup, createnewmessage);                                                              // 22
  },                                                                                                                   // 23
  'change #fileInput': function (event, template) {                                                                    // 24
    if (e.currentTarget.files && e.currentTarget.files[0]) {                                                           // 25
      // We upload only one file, in case                                                                              // 26
      // multiple files were selected                                                                                  // 27
      var upload = Messages.insert({                                                                                   // 28
        file: e.currentTarget.files[0],                                                                                // 29
        streams: 'dynamic',                                                                                            // 30
        chunkSize: 'dynamic'                                                                                           // 31
      }, false);                                                                                                       // 28
      upload.on('start', function () {                                                                                 // 34
        template.currentUpload.set(this);                                                                              // 35
      });                                                                                                              // 36
      upload.on('end', function (error, fileObj) {                                                                     // 38
        if (error) {                                                                                                   // 39
          alert('Error during upload: ' + error);                                                                      // 40
        } else {                                                                                                       // 41
          alert('File "' + fileObj.name + '" successfully uploaded');                                                  // 42
        }                                                                                                              // 43
                                                                                                                       //
        template.currentUpload.set(false);                                                                             // 44
      });                                                                                                              // 45
      upload.start();                                                                                                  // 47
    }                                                                                                                  // 48
  }                                                                                                                    // 49
});                                                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"NewMessageSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/NewMessageSmart.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"PaymentModalReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/PaymentModalReusable.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./PaymentModalReusable.html"));                                                                  // 1
Template.paymentModal.helpers({                                                                                        // 12
  pathforitemStream: function () {                                                                                     // 13
    var video = this;                                                                                                  // 14
    var params = {                                                                                                     // 15
      vtitle: video.videotitle                                                                                         // 16
    };                                                                                                                 // 15
    var channel = "videos";                                                                                            // 18
    var path = FlowRouter.path(channel, params);                                                                       // 19
    return path;                                                                                                       // 20
  }                                                                                                                    // 21
});                                                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProductItemReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ProductItemReusable.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./ProductItemReusable.html"));                                                                   // 1
Template.ProductItemReusable.helpers({                                                                                 // 12
  pathforProductStream: function () {                                                                                  // 13
    var product = this;                                                                                                // 14
    var params = {                                                                                                     // 15
      product: product.producttitle                                                                                    // 16
    };                                                                                                                 // 15
    var channel = "product";                                                                                           // 18
    var path = FlowRouter.path(channel, params);                                                                       // 19
    return path;                                                                                                       // 20
  }                                                                                                                    // 21
});                                                                                                                    // 12
Template.ProductItemReusable.onCreated(function () {                                                                   // 25
  var _this = this;                                                                                                    // 25
                                                                                                                       //
  this.getVideoTitle = function () {                                                                                   // 26
    return FlowRouter.getParam('vtitle');                                                                              // 26
  };                                                                                                                   // 26
                                                                                                                       //
  this.autorun(function () {                                                                                           // 27
    _this.subscribe('videoStream', _this.getVideoTitle());                                                             // 28
  });                                                                                                                  // 29
});                                                                                                                    // 30
Template.ProductItemReusable.events({                                                                                  // 37
  'click #buydarkfeed': function (event, template) {                                                                   // 38
    var item = this;                                                                                                   // 39
    Session.set('selectedItem', 'this.title');                                                                         // 40
    Blaze.render(Template.paymentModal, document.body);                                                                // 41
  }                                                                                                                    // 42
});                                                                                                                    // 37
Template.ProductItemReusable.onCreated(function () {                                                                   // 45
  this.autorun(function () {                                                                                           // 46
    new SimpleSchema({                                                                                                 // 47
      productmember: {                                                                                                 // 48
        type: String                                                                                                   // 48
      },                                                                                                               // 48
      producttitle: {                                                                                                  // 49
        type: String                                                                                                   // 49
      },                                                                                                               // 49
      productimage: {                                                                                                  // 50
        type: Mongo.Cursor                                                                                             // 50
      }                                                                                                                // 50
    }).validate(Template.currentData());                                                                               // 47
  });                                                                                                                  // 52
});                                                                                                                    // 53
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProductItemSmart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ProductItemSmart.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./ProductItemSmart.html"));                                                                      // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.ProductItemSmart.helpers({                                                                                  // 14
    productTitleArray: function () {                                                                                   // 15
      var instance = Template.instance();                                                                              // 16
      var productTitle = instance.getProductTitle();                                                                   // 17
      return Products.findOne(productTitle) ? [productTitle] : [];                                                     // 18
    },                                                                                                                 // 19
    productArgs: function (productTitle) {                                                                             // 20
      var instance = Template.instance();                                                                              // 21
      return;                                                                                                          // 22
      Products.findOne(productTitle);                                                                                  // 23
    }                                                                                                                  // 24
  });                                                                                                                  // 14
}                                                                                                                      // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProductStreamReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/ProductStreamReusable.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./ProductStreamReusable.html"));                                                                 // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.ProductStreamReusable.onCreated(function () {                                                               // 14
    function listShowOnCreated() {                                                                                     // 14
      this.autorun(function () {                                                                                       // 15
        new SimpleSchema({                                                                                             // 16
          producttext: {                                                                                               // 17
            type: String                                                                                               // 17
          },                                                                                                           // 17
          producttitle: {                                                                                              // 18
            type: String                                                                                               // 18
          },                                                                                                           // 18
          productmedia: {                                                                                              // 19
            type: Object                                                                                               // 19
          },                                                                                                           // 19
          productmember: {                                                                                             // 20
            type: String                                                                                               // 20
          },                                                                                                           // 20
          productdate: {                                                                                               // 21
            type: Date                                                                                                 // 21
          },                                                                                                           // 21
          productprice: {                                                                                              // 22
            type: String                                                                                               // 22
          },                                                                                                           // 22
          productshipprice: {                                                                                          // 23
            type: String                                                                                               // 23
          },                                                                                                           // 23
          productshiptime: {                                                                                           // 24
            type: String                                                                                               // 24
          }                                                                                                            // 24
        }).validate(Template.currentData());                                                                           // 16
      });                                                                                                              // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return listShowOnCreated;                                                                                          // 14
  }());                                                                                                                // 14
}                                                                                                                      // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"SideMessageReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/SideMessageReusable.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./SideMessageReusable.html"));                                                                   // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 4
  Template.SideMessageReusable.onCreated(function () {                                                                 // 6
    new SimpleSchema({                                                                                                 // 7
      Member: {                                                                                                        // 8
        type: string                                                                                                   // 8
      },                                                                                                               // 8
      Group: {                                                                                                         // 9
        type: string                                                                                                   // 9
      },                                                                                                               // 9
      Message: {                                                                                                       // 10
        type: string                                                                                                   // 10
      }                                                                                                                // 10
    }).validate(Template.currentData());                                                                               // 7
  });                                                                                                                  // 12
}                                                                                                                      // 14
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"StreamVideoReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/StreamVideoReusable.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./StreamVideoReusable.html"));                                                                   // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.StreamVideoReusable.onCreated(function () {                                                                 // 14
    function videoStreamOnCreated() {                                                                                  // 14
      this.autorun(function () {                                                                                       // 15
        new SimpleSchema({                                                                                             // 16
          videotext: {                                                                                                 // 17
            type: String                                                                                               // 17
          },                                                                                                           // 17
          videotitle: {                                                                                                // 18
            type: String                                                                                               // 18
          },                                                                                                           // 18
          videovideo: {                                                                                                // 19
            type: Object                                                                                               // 19
          },                                                                                                           // 19
          videoimage: {                                                                                                // 20
            type: Object                                                                                               // 20
          },                                                                                                           // 20
          videodate: {                                                                                                 // 21
            type: Date                                                                                                 // 21
          }                                                                                                            // 21
        }).validate(Template.currentData());                                                                           // 16
      });                                                                                                              // 23
    }                                                                                                                  // 24
                                                                                                                       //
    return videoStreamOnCreated;                                                                                       // 14
  }());                                                                                                                // 14
}                                                                                                                      // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextItemReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/TextItemReusable.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./TextItemReusable.html"));                                                                      // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.TextItemReusable.helpers({                                                                                  // 15
    pathforTextStream: function () {                                                                                   // 16
      var text = this;                                                                                                 // 17
      var params = {                                                                                                   // 18
        title: text.texttitle                                                                                          // 19
      };                                                                                                               // 18
      var channel = "texts";                                                                                           // 21
      var path = FlowRouter.path(channel, params);                                                                     // 22
      return path;                                                                                                     // 23
    }                                                                                                                  // 24
  });                                                                                                                  // 15
  Template.TextItemReusable.onCreated(function () {                                                                    // 30
    this.autorun(function () {                                                                                         // 31
      new SimpleSchema({                                                                                               // 32
        texttext: {                                                                                                    // 33
          type: String                                                                                                 // 33
        },                                                                                                             // 33
        texttitle: {                                                                                                   // 34
          type: String                                                                                                 // 34
        },                                                                                                             // 34
        textmedia: {                                                                                                   // 35
          type: Object                                                                                                 // 35
        },                                                                                                             // 35
        textdate: {                                                                                                    // 36
          type: Date                                                                                                   // 36
        }                                                                                                              // 36
      }).validate(Template.currentData());                                                                             // 32
    });                                                                                                                // 38
  });                                                                                                                  // 39
}                                                                                                                      // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextItemSmart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/TextItemSmart.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./TextItemSmart.html"));                                                                         // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.TextItemSmart.helpers({                                                                                     // 14
    textTitleArray: function () {                                                                                      // 15
      var instance = Template.instance();                                                                              // 16
      var textTitle = instance.getTextTitle();                                                                         // 17
      return Texts.findOne(textTitle) ? [textTitle] : [];                                                              // 18
    },                                                                                                                 // 19
    textArgs: function (textTitle) {                                                                                   // 20
      var instance = Template.instance();                                                                              // 21
      return;                                                                                                          // 22
      Texts.findOne(textTitle);                                                                                        // 23
    }                                                                                                                  // 25
  });                                                                                                                  // 14
}                                                                                                                      // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextStreamReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/TextStreamReusable.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./TextStreamReusable.html"));                                                                    // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.StreamTextReusable.onCreated(function () {                                                                  // 15
    this.autorun(function () {                                                                                         // 16
      new SimpleSchema({                                                                                               // 17
        texttext: {                                                                                                    // 18
          type: String                                                                                                 // 18
        },                                                                                                             // 18
        texttitle: {                                                                                                   // 19
          type: String                                                                                                 // 19
        },                                                                                                             // 19
        textmedia: {                                                                                                   // 20
          type: Object                                                                                                 // 20
        },                                                                                                             // 20
        textdate: {                                                                                                    // 21
          type: Date                                                                                                   // 21
        }                                                                                                              // 21
      }).validate(Template.currentData());                                                                             // 17
    });                                                                                                                // 23
  });                                                                                                                  // 24
}                                                                                                                      // 26
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserSiteReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/UserSiteReusable.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./UserSiteReusable.html"));                                                                      // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 3
  Template.UserSite.onCreated(function () {                                                                            // 5
    this.state = new ReactiveDict();                                                                                   // 6
    this.state.setDefault({                                                                                            // 7
      editing: false,                                                                                                  // 8
      editingTodo: false                                                                                               // 9
    });                                                                                                                // 7
  });                                                                                                                  // 11
}                                                                                                                      // 13
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoItemReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/VideoItemReusable.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./VideoItemReusable.html"));                                                                     // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.VideoItemReusable.helpers({                                                                                 // 14
    pathforVideoStream: function () {                                                                                  // 15
      var video = this;                                                                                                // 16
      var params = {                                                                                                   // 17
        video: video.videotitle                                                                                        // 18
      };                                                                                                               // 17
      var channel = "videos";                                                                                          // 20
      var path = FlowRouter.path(channel, params);                                                                     // 21
      return path;                                                                                                     // 22
    }                                                                                                                  // 23
  });                                                                                                                  // 14
  Template.VideoItemReusable.onCreated(function () {                                                                   // 26
    this.autorun(function () {                                                                                         // 27
      new SimpleSchema({                                                                                               // 28
        videomember: {                                                                                                 // 29
          type: String                                                                                                 // 29
        },                                                                                                             // 29
        videovideo: {                                                                                                  // 30
          type: String                                                                                                 // 30
        },                                                                                                             // 30
        videotitle: {                                                                                                  // 31
          type: String                                                                                                 // 31
        },                                                                                                             // 31
        videoimage: {                                                                                                  // 32
          type: Mongo.Cursor                                                                                           // 32
        }                                                                                                              // 32
      }).validate(Template.currentData());                                                                             // 28
    });                                                                                                                // 34
  });                                                                                                                  // 35
}                                                                                                                      // 38
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoItemSmart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/VideoItemSmart.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./VideoItemSmart.html"));                                                                        // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 12
  Template.VideoItemSmart.helpers({                                                                                    // 14
    videoTitleArray: function () {                                                                                     // 15
      var instance = Template.instance();                                                                              // 16
      var videoTitle = instance.getVideoTitle();                                                                       // 17
      return Videos.findOne(videoTitle) ? [videoTitle] : [];                                                           // 18
    },                                                                                                                 // 19
    videoArgs: function (videoTitle) {                                                                                 // 20
      var instance = Template.instance();                                                                              // 21
      return;                                                                                                          // 22
      Videos.findOne(videoTitle);                                                                                      // 23
    }                                                                                                                  // 24
  });                                                                                                                  // 14
}                                                                                                                      // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"YouMenuReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/YouMenuReusable.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./YouMenuReusable.html"));                                                                       // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 3
  Template.YouMenu.events({                                                                                            // 5
    "click .closeyou": function (event, template) {                                                                    // 6
      var modal3 = $('.modal-content');                                                                                // 7
      modal3.css('display', 'none');                                                                                   // 8
      Blaze.remove(Template.instance().view);                                                                          // 9
    },                                                                                                                 // 10
    'click #logout2': function (event, template) {                                                                     // 11
      Meteor.logout();                                                                                                 // 12
      Router.go('/sign-in');                                                                                           // 13
    }                                                                                                                  // 14
  });                                                                                                                  // 5
  Template.YouMenu.onRendered(function () {                                                                            // 17
    Meteor.setTimeout(function () {                                                                                    // 18
      var modal511 = $('#myyyModal');                                                                                  // 19
      modal511.css('display', 'block');                                                                                // 20
    }, 500);                                                                                                           // 21
  });                                                                                                                  // 22
  Template.YouMenu.helpers({                                                                                           // 24
    NotLoggedIn: function () {                                                                                         // 25
      if (!Meteor.user() & !Meteor.loggingIn()) {                                                                      // 26
        return false;                                                                                                  // 26
      } else {                                                                                                         // 26
        return true;                                                                                                   // 26
      }                                                                                                                // 26
    }                                                                                                                  // 27
  });                                                                                                                  // 24
}                                                                                                                      // 29
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"YourMessagesReusable.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/components/YourMessagesReusable.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var Tracker = void 0;                                                                                                  // 1
module.watch(require("meteor/tracker"), {                                                                              // 1
  Tracker: function (v) {                                                                                              // 1
    Tracker = v;                                                                                                       // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
module.watch(require("./YourMessagesReusable.html"));                                                                  // 1
module.watch(require("./NewMessageSmart.html"));                                                                       // 1
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 14
  Template.YourMessagesRU.helpers({                                                                                    // 16
    "user": function () {                                                                                              // 17
      return Meteor.userId.username();                                                                                 // 18
    }                                                                                                                  // 19
  });                                                                                                                  // 16
  Template.YourMessagesRU.events({                                                                                     // 22
    "click .close3": function (event, template) {                                                                      // 23
      var modal3 = $('#messageswhole');                                                                                // 24
      modal3.css('display', 'none');                                                                                   // 25
      Blaze.remove(template.view);                                                                                     // 26
    },                                                                                                                 // 27
    'click #calltojoin': function (event, template) {                                                                  // 28
      var modal3 = $('#messageswhole');                                                                                // 29
      modal3.css('display', 'none');                                                                                   // 30
      Blaze.remove(template.view);                                                                                     // 31
    },                                                                                                                 // 32
    'click #addmessages': function (event, template) {                                                                 // 33
      Blaze.render(Template.NewMessage, template.$('#conversation').get(0));                                           // 34
    },                                                                                                                 // 35
    'change #fileInput': function (event, template) {                                                                  // 36
      if (e.currentTarget.files && e.currentTarget.files[0]) {                                                         // 37
        // We upload only one file, in case                                                                            // 38
        // multiple files were selected                                                                                // 39
        var upload = Images.insert({                                                                                   // 40
          file: e.currentTarget.files[0],                                                                              // 41
          streams: 'dynamic',                                                                                          // 42
          chunkSize: 'dynamic'                                                                                         // 43
        }, false);                                                                                                     // 40
        upload.on('start', function () {                                                                               // 46
          template.currentUpload.set(this);                                                                            // 47
        });                                                                                                            // 48
        upload.on('end', function (error, fileObj) {                                                                   // 50
          if (error) {                                                                                                 // 51
            alert('Error during upload: ' + error);                                                                    // 52
          } else {                                                                                                     // 53
            alert('File "' + fileObj.name + '" successfully uploaded');                                                // 54
          }                                                                                                            // 55
                                                                                                                       //
          template.currentUpload.set(false);                                                                           // 56
        });                                                                                                            // 57
        upload.start();                                                                                                // 59
      }                                                                                                                // 60
    }                                                                                                                  // 61
  });                                                                                                                  // 22
  Template.YourMessagesRU.onRendered(function () {                                                                     // 64
    Meteor.setTimeout(function () {                                                                                    // 65
      var modal3 = $('.modal35');                                                                                      // 66
      modal3.css('display', 'block');                                                                                  // 67
    }, 500);                                                                                                           // 68
  });                                                                                                                  // 69
  Template.YourMessagesRU.helpers({                                                                                    // 74
    'messages': function () {                                                                                          // 75
      return Messages.find({});                                                                                        // 76
    }                                                                                                                  // 77
  });                                                                                                                  // 74
  Template.YourMessagesRU.helpers({                                                                                    // 83
    isLoading: function () {                                                                                           // 84
      return Template.instance().loading.get();                                                                        // 85
    },                                                                                                                 // 86
    isDirect: function () {                                                                                            // 87
      return Template.instance().isDirect.get();                                                                       // 88
    },                                                                                                                 // 89
    username: function () {                                                                                            // 90
      return FlowRouter.getParam('channel');                                                                           // 91
    }                                                                                                                  // 92
  });                                                                                                                  // 83
  Template.Sidebar.helpers({                                                                                           // 95
    currentChannel: function (name) {                                                                                  // 96
      var current = FlowRouter.getParam('channel');                                                                    // 97
                                                                                                                       //
      if (current) {                                                                                                   // 98
        return current === name || current === "@" + name ? 'active' : false;                                          // 99
      }                                                                                                                // 100
    },                                                                                                                 // 101
    messages: function (message) {                                                                                     // 102
      return Messages.find({});                                                                                        // 103
    }                                                                                                                  // 104
  });                                                                                                                  // 95
  Template.Sidebar.onCreated(function () {                                                                             // 107
    var template = Template.instance();                                                                                // 108
    template.subscribe('sidebar');                                                                                     // 109
  });                                                                                                                  // 110
  Template.YourMessagesRU.helpers({                                                                                    // 112
    messageArgs: function (channel) {                                                                                  // 113
      return {                                                                                                         // 114
        isLoading: Template.instance().loading.get(),                                                                  // 115
        isDirect: Template.instance().isDirect.get(),                                                                  // 116
        username: FlowRouter.getParam('channel'),                                                                      // 117
        currentChannel: function (name) {                                                                              // 118
          var current = FlowRouter.getParam('channel');                                                                // 119
                                                                                                                       //
          if (current) {                                                                                               // 120
            return current === name || current === "@" + name ? 'active' : false;                                      // 121
          }                                                                                                            // 122
        }                                                                                                              // 122
      };                                                                                                               // 114
    },                                                                                                                 // 122
    messages: function () {                                                                                            // 123
      Messages.find();                                                                                                 // 123
    }                                                                                                                  // 124
  });                                                                                                                  // 112
}                                                                                                                      // 126
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"layouts":{"Appbody.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/Appbody.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.Appbody.js");                                                                     // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Appbody.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/template.Appbody.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Appbody");                                                                                       // 2
Template["Appbody"] = new Template("Template.Appbody", (function() {                                                   // 3
  var view = this;                                                                                                     // 4
  return [ HTML.DIV({                                                                                                  // 5
    class: "top"                                                                                                       // 6
  }, "\n  ", Blaze._TemplateWith(function() {                                                                          // 7
    return {                                                                                                           // 8
      template: Spacebars.call(view.lookup("top"))                                                                     // 9
    };                                                                                                                 // 10
  }, function() {                                                                                                      // 11
    return Spacebars.include(function() {                                                                              // 12
      return Spacebars.call(Template.__dynamic);                                                                       // 13
    });                                                                                                                // 14
  }), "\n"), "\n\n  ", HTML.DIV({                                                                                      // 15
    class: "content"                                                                                                   // 16
  }, "\n  ", Blaze._TemplateWith(function() {                                                                          // 17
    return {                                                                                                           // 18
      template: Spacebars.call(view.lookup("main"))                                                                    // 19
    };                                                                                                                 // 20
  }, function() {                                                                                                      // 21
    return Spacebars.include(function() {                                                                              // 22
      return Spacebars.call(Template.__dynamic);                                                                       // 23
    });                                                                                                                // 24
  }), "\n"), "\n\n  ", HTML.FOOTER("\n  ", Blaze._TemplateWith(function() {                                            // 25
    return {                                                                                                           // 26
      template: Spacebars.call(view.lookup("footer"))                                                                  // 27
    };                                                                                                                 // 28
  }, function() {                                                                                                      // 29
    return Spacebars.include(function() {                                                                              // 30
      return Spacebars.call(Template.__dynamic);                                                                       // 31
    });                                                                                                                // 32
  }), "\n") ];                                                                                                         // 33
}));                                                                                                                   // 34
                                                                                                                       // 35
Template.__checkName("MenuUserSite");                                                                                  // 36
Template["MenuUserSite"] = new Template("Template.MenuUserSite", (function() {                                         // 37
  var view = this;                                                                                                     // 38
  return HTML.DIV({                                                                                                    // 39
    id: "mastermenu"                                                                                                   // 40
  }, "\n    ", HTML.DIV({                                                                                              // 41
    class: "master-navbarusersite"                                                                                     // 42
  }, "\n      ", HTML.NAV({                                                                                            // 43
    id: "usersitemenu"                                                                                                 // 44
  }, "\n    ", HTML.Raw('<a id="siteback" href="/"> &#x21D0; </a>'), "\n      ", HTML.LI({                             // 45
    "data-page": "about",                                                                                              // 46
    id: "mainiconsone",                                                                                                // 47
    role: "presentation"                                                                                               // 48
  }, "\n        ", HTML.SVG({                                                                                          // 49
    version: "1.1",                                                                                                    // 50
    id: "waveiconusersite",                                                                                            // 51
    xmlns: "http://www.w3.org/2000/svg",                                                                               // 52
    href: "/about",                                                                                                    // 53
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                     // 54
    x: "0px",                                                                                                          // 55
    y: "0px",                                                                                                          // 56
    viewBox: "225 225 530 530",                                                                                        // 57
    "enable-background": "new 0 0 1000 1000",                                                                          // 58
    "xml:space": "preserve"                                                                                            // 59
  }, "\n           ", HTML.PATH({                                                                                      // 60
    fill: "#FFFFFF",                                                                                                   // 61
    d: "M654.7,509.8c0.1-2.9,0.3-5.9,0.6-8.8c-0.2,0.1-0.4,0.1-0.6,0.1c-6.2,2.8-12.9,4.4-19.9,4.9\n            c-1,0.2-2,0.3-3.1,0.4c-12,1.4-22.5-2.6-29.6-11c-7-8.4-9.5-20.1-6.8-31.8c0.3-1.8,0.6-3.6,1.1-5.4c0.2-6.8-5.7-9.8-6.4-10.2\n            c-49.1-24.9-77.5,1.3-102.6,24.5c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.3,3,1.8,5.6,4,7.5\n            c1,0,1.9,0.2,2.6,0.6c0.6,0,1.3,0,1.9,0.1c10.2,2.2,21.4-1.8,30.8-5.4c17.6-8,31.4-20.8,44-32.5c12.4-11.5,23.1-21.3,35.3-25.7\n            c7-3.2,14.4-5.3,21.9-7c1-0.3,2.1-0.6,3.1-0.7c0.6-0.2,1.2-0.3,1.8-0.5c1.1-0.4,2.3-0.6,3.4-0.9c0.1,0,0.1,0,0.2,0l0,0\n            c0.5-0.1,1-0.3,1.4-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.5-0.1c1.3-0.3,2.5-0.7,3.8-0.9c0.6-0.1,0.8,0.7,0.4,0.9\n            c0,0,0,0.1-0.1,0.1c-0.5,0.5-0.9,1.1-1.2,1.7c-0.1,0.4-0.3,0.8-0.4,1.2v0.1c0,0.4-0.1,0.7-0.3,1.1c0,0.1,0,0.2,0,0.3\n            c0,0.1-0.1,0.2-0.1,0.3c0,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3-0.1,0.4c0,0.2,0,0.3-0.1,0.5c0,0.2,0,0.3-0.1,0.5\n            c0,0.3,0,0.7-0.1,1s-0.1,0.7-0.2,1c0,0.3-0.1,0.7-0.2,1c0,0.4-0.1,0.7-0.2,1.1l0,0c-2,16.5,2.4,32.9,12.7,45.1\n            c10.6,12.6,25.9,19.4,42.8,19.4c1.9,0,3.8-0.1,5.7-0.3c0.4,0,0.9,0,1.3-0.1c7.8-0.9,15-2.7,21.7-5.3\n            C655.2,519.3,654.6,514.2,654.7,509.8z"
  }), "\n           ", HTML.POLYLINE({                                                                                 // 63
    fill: "#FFFFFF",                                                                                                   // 64
    points: "552.9,438.1 593.4,432.8 593.9,451.4 600.9,441.9 613.9,430.9 606.9,430.9 597.9,430.9\n            572.8,441.2 590.9,452.9 590.9,438.1 "
  }), "\n           ", HTML.PATH({                                                                                     // 66
    fill: "#FFFFFF",                                                                                                   // 67
    d: "M556.9,441.9"                                                                                                  // 68
  }), "\n           ", HTML.PATH({                                                                                     // 69
    fill: "#FFFFFF",                                                                                                   // 70
    d: "M609.8,437.7l4.1-6.8l-6.9,9.2C607.9,439.3,608.8,438.5,609.8,437.7z"                                            // 71
  }), "\n           ", HTML.PATH({                                                                                     // 72
    fill: "#FFFFFF",                                                                                                   // 73
    d: "M599.4,450.3c0.1-0.1,0.1-0.2,0.2-0.3l-3.7,4.9l0.3,4.3C596.9,456.1,597.9,453.1,599.4,450.3z"                    // 74
  }), "\n           ", HTML.PATH({                                                                                     // 75
    fill: "#FFFFFF",                                                                                                   // 76
    d: "M575.8,438.7c-1.1,0.8-2.5,0.7-3.9,0.6c0.5,0.1,0.9-0.1,1.3-0.3c-0.7,0.1-1.3,0.2-2,0.3\n            c0.7-0.1,1.3-0.3,2-0.4c-1.3,0.5-2.7,0.5-4,0.1c2.1,0,4.2,0,6.3,0c-2.1,0-4.2,0-6.3,0c2,0,4,0,6,0c-0.7,0-1.3,0-2,0\n            c0.8,0,1.6,0,2.3,0c-2.8,0-4.3,0.8-7-0.4C571,438.6,573.4,438.6,575.8,438.7z"
  }), "\n           ", HTML.POLYGON({                                                                                  // 78
    fill: "#FFFFFF",                                                                                                   // 79
    points: "565,439.3 556.9,438.1 573.2,438.9 577.5,439.3 "                                                           // 80
  }), "\n           ", HTML.PATH({                                                                                     // 81
    fill: "#FFFFFF",                                                                                                   // 82
    d: "M599.4,450.3c3.1-6,7.4-10.7,12.7-14.3l5.8-8.7l-70,10.8l48.8,19C597.4,454.7,598.3,452.5,599.4,450.3z"           // 83
  }), "\n           ", HTML.PATH({                                                                                     // 84
    fill: "#FFFFFF",                                                                                                   // 85
    d: "M459.4,507.1c0.1-3.6,0.4-7.2,0.8-10.8c-7.2,3.8-15,6.5-23.8,7.5c-12,1.4-22.5-2.6-29.6-11\n            c-2.6-3.1-4.6-6.7-5.9-10.6c-1.2-1.1-2.1-2.6-2.1-4.6c-0.1-3.4,0-6.8,0.3-10.2c0.1-0.8,0.1-1.7,0.3-2.5c-0.3-1.2-0.2-2.6,0.3-4\n            c-0.1-1.2,0.1-2.4,0.6-3.5c0.2-1.1,0.5-2.2,0.8-3.2v-0.1c-0.7-5.7-5.7-8.3-6.3-8.6c-49.1-24.9-77.5,1.3-102.6,24.5\n            c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.7,5.9,5.6,10.3,11.4,10.3c0.4,0,0.9,0,1.3-0.1\n            c31.4-3.4,52.3-22.8,70.7-39.8c12.4-11.5,23.1-21.3,35.3-25.7c7-3.2,14.4-5.3,21.9-7c1-0.3,2.1-0.6,3.1-0.7c0.6-0.2,1.2-0.3,1.8-0.5\n            c1.1-0.4,2.3-0.6,3.4-0.9c0.1,0,0.1,0,0.2,0l0,0c0.5-0.1,1-0.3,1.4-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.5-0.1\n            c1.3-0.3,2.5-0.7,3.8-0.9c0.6-0.1,0.8,0.7,0.4,0.9c0,0,0,0.1-0.1,0.1c-0.5,0.5-0.9,1.1-1.2,1.7c-0.1,0.4-0.3,0.8-0.4,1.2v0.1\n            c0,0.4-0.1,0.7-0.3,1.1c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.3c0,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3-0.1,0.4\n            c0,0.2,0,0.3-0.1,0.5c0,0.2,0,0.3-0.1,0.5c0,0.3,0,0.7-0.1,1s-0.1,0.7-0.2,1c0,0.3-0.1,0.7-0.2,1c0,0.4-0.1,0.7-0.2,1.1l0,0\n            c-2,16.5,2.4,32.9,12.7,45.1c10.6,12.6,25.9,19.4,42.8,19.4c1.9,0,3.8-0.1,5.7-0.3c0.4,0,0.9,0,1.3-0.1c6.8-0.7,13.1-2.2,19-4.3\n            c0.5-0.2,1.1-0.4,1.6-0.6c0.4-0.1,0.7-0.3,1.1-0.4C459.9,516.6,459.2,511.5,459.4,507.1z"
  }), "\n           ", HTML.POLYLINE({                                                                                 // 87
    fill: "#FFFFFF",                                                                                                   // 88
    points: "357.6,435.4 398,430.1 398.6,448.7 405.6,439.3 418.6,428.3 411.6,428.3 402.6,428.3 377.5,438.6\n            395.6,450.3 395.6,435.4 "
  }), "\n           ", HTML.PATH({                                                                                     // 90
    fill: "#FFFFFF",                                                                                                   // 91
    d: "M361.6,439.3"                                                                                                  // 92
  }), "\n           ", HTML.PATH({                                                                                     // 93
    fill: "#FFFFFF",                                                                                                   // 94
    d: "M415.1,433.9l3.4-5.6l-5.8,7.7C413.5,435.3,414.3,434.6,415.1,433.9z"                                            // 95
  }), "\n           ", HTML.PATH({                                                                                     // 96
    fill: "#FFFFFF",                                                                                                   // 97
    d: "M400.9,454.2c0.1-1.3,0.6-2.6,1.5-3.6c0.5-1,1-2,1.7-3l-3.5,4.6l0.2,2.7\n            C400.8,454.6,400.8,454.4,400.9,454.2z"
  }), "\n           ", HTML.PATH({                                                                                     // 99
    fill: "#FFFFFF",                                                                                                   // 100
    d: "M380.4,436c-1.1,0.8-2.5,0.7-3.9,0.6c0.5,0.1,0.9-0.1,1.3-0.3c-0.7,0.1-1.3,0.2-2,0.3c0.7-0.1,1.3-0.3,2-0.4\n            c-1.3,0.5-2.7,0.5-4,0.1c2.1,0,4.2,0,6.3,0c-2.1,0-4.2,0-6.3,0c2,0,4,0,6,0c-0.7,0-1.3,0-2,0c0.8,0,1.6,0,2.3,0\n            c-2.8,0-4.3,0.8-7-0.4C375.6,435.9,378,435.9,380.4,436z"
  }), "\n           ", HTML.POLYGON({                                                                                  // 102
    fill: "#FFFFFF",                                                                                                   // 103
    points: "369.7,436.6 361.6,435.4 377.9,436.2 382.1,436.6 "                                                         // 104
  }), "\n           ", HTML.PATH({                                                                                     // 105
    fill: "#FFFFFF",                                                                                                   // 106
    d: "M402.4,450.5c0.8-1.7,1.9-3.4,3-5c2.5-4.5,5.9-8.6,10-11.8c1.1-1.3,2.3-2.4,3.5-3.6l3.7-5.5l-70,10.8\n            l48.3,18.8C401,452.8,401.5,451.6,402.4,450.5z"
  }), "\n           ", HTML.PATH({                                                                                     // 108
    fill: "#FFFFFF",                                                                                                   // 109
    d: "M661.6,499c-1.9,0.8-4,1.5-6.1,2l0.4,23.1c0,0,0,0,8.9-3.2l0,0l0,0c0,0,0.1,0,0.2-0.1\n            c0.3-0.2,0.5-0.3,0.8-0.4c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.2,0.6-0.4,0.9-0.5c3.7-3.2,5.7-7.6,3.8-13.7C670,500.8,666,499.1,661.6,499\n            z"
  }), "\n           ", HTML.PATH({                                                                                     // 111
    fill: "#FFFFFF",                                                                                                   // 112
    d: "M655.4,501l-1.7,24l5.2-1.9l-3.3-22.1C655.6,500.9,655.5,501,655.4,501z"                                         // 113
  }), "\n           ", HTML.PATH({                                                                                     // 114
    fill: "#FFFFFF",                                                                                                   // 115
    d: "M655,501.1l-4.2,12.9l10-0.9l-4.8-12.3C655.6,500.9,655.3,501,655,501.1z"                                        // 116
  }), "\n           ", HTML.PATH({                                                                                     // 117
    fill: "#FFFFFF",                                                                                                   // 118
    d: "M738.7,465.8c2.2-1.9,4.8-2.8,7.3-4.3c2-1.1,3.9-2.2,5.8-3.2c1.8-1.2,3.7-2.2,5.7-3.2\n            c7.8-6.1,17.4-10.4,27.2-12.6c-1.4-0.5-2.8-0.9-4.1-1.3c-20.6,0.5-41.2,5.5-60.1,13.2c-4.8,3-9.5,5.9-14.4,8.8\n            c-3.6,3.2-7.1,6.4-10.6,9.6c-8.5,7.9-16.8,15.5-25.8,21.5c-0.9,0.7-1.7,1.3-2.7,1.9c-0.1,0.1-0.3,0.2-0.5,0.3\n            c-0.9,0.5-1.8,1.1-2.8,1.5c-7.8,4.4-16.2,7.6-25.9,8.6c-6.3,0.7-10.9,6.4-10.2,12.7c0.7,5.9,5.6,10.3,11.4,10.3c0.4,0,0.9,0,1.3-0.1\n            c24.1-2.6,42-14.6,57.3-27.8c0.3-0.8,0.8-1.6,1.5-2.1c3.8-2.9,7.5-6.1,11.1-9.2c0.2-0.2,0.5-0.4,0.7-0.7c4.3-4,8.3-7.7,12.3-11.1\n            c4.3-4.7,9.5-9.1,15-12.5C738.5,466,738.6,465.9,738.7,465.8z"
  }), "\n           ", HTML.PATH({                                                                                     // 120
    fill: "#FFFFFF",                                                                                                   // 121
    d: "M790.3,446.5C790.3,446.5,790.4,446.5,790.3,446.5c1.2-1.3,2-3,1.9-4.7c-10.3-4.2-19.6-6.2-28.2-6.4\n            c-2.6,0.5-5.2,0.9-7.9,1.5c-2.8,0.6-5.5,1.4-8.3,2.1c-1.9,0.7-3.7,1.3-5.5,2c-7.5,2.6-15,5.3-21.8,9.5c-8.2,5.9-15.6,12.8-22.9,19.5\n            c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.3,3,1.8,5.6,4,7.5c1,0,1.9,0.2,2.6,0.6c0.6,0,1.3,0,1.9,0.1\n            c10.2,2.2,21.4-1.8,30.8-5.4c17.6-8,31.4-20.8,44-32.5c5.8-5.3,11.1-10.3,16.5-14.5c2.7-2.3,5.6-4.5,8.6-6.3\n            c0.1-0.1,0.2-0.2,0.3-0.3c2.2-1.9,4.8-2.8,7.3-4.3c6.3-3.6,12.1-6.8,19.1-8.7c7.2-2,15.2-2,22.2-4.7c0.4-0.2,0.9-0.4,1.4-0.5\n            c0.1-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.4-0.3,0.6-0.4C790.2,446.6,790.3,446.5,790.3,446.5z"
  }), "\n           ", HTML.PATH({                                                                                     // 123
    fill: "#FFFFFF",                                                                                                   // 124
    d: "M790.4,446.5L790.4,446.5c1.9-2.1,2.8-4.9,0.9-7.6c-2.4-3.5-6.6-4.1-10.5-4.4c-3.5-0.2-7.1-0.2-10.6,0\n            l-1.7,0.3l0,0l-2.4,0.4c-0.3,0.1-0.6,0.2-0.9,0.2c-0.1,0-0.2,0-0.2,0l-0.5,0.1c-2.7,0.6-5.5,1-8.2,1.6c-2.8,0.6-5.5,1.4-8.3,2.1\n            c-1,0.4-2,0.7-3,1.1l28.6,11.1c4.7-0.7,9.4-1.4,13.7-3.1c0.4-0.2,0.9-0.3,1.4-0.5c0.1-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.2,0.3-0.3\n            c0.2-0.2,0.4-0.3,0.6-0.4C790.2,446.6,790.3,446.5,790.4,446.5z"
  }), "\n           ", HTML.PATH({                                                                                     // 126
    fill: "#FFFFFF",                                                                                                   // 127
    d: "M717,550.8c0-0.7,0-1.4,0-2.1"                                                                                  // 128
  }), "\n           ", HTML.RECT({                                                                                     // 129
    x: "168",                                                                                                          // 130
    y: "588",                                                                                                          // 131
    fill: "none",                                                                                                      // 132
    width: "1546",                                                                                                     // 133
    height: "356"                                                                                                      // 134
  }), "\n        "), "\n      "), "\n\n    "), "\n  "), HTML.Raw('\n  <div class="master-navbartwousersite"></div>\n'));
}));                                                                                                                   // 136
                                                                                                                       // 137
Template.__checkName("StreamMenu");                                                                                    // 138
Template["StreamMenu"] = new Template("Template.StreamMenu", (function() {                                             // 139
  var view = this;                                                                                                     // 140
  return HTML.DIV({                                                                                                    // 141
    id: "mastermenu"                                                                                                   // 142
  }, "\n    ", HTML.DIV({                                                                                              // 143
    class: "master-navbar"                                                                                             // 144
  }, "\n      ", HTML.NAV("\n      ", HTML.LI({                                                                        // 145
    "data-page": "about",                                                                                              // 146
    id: "mainiconsone",                                                                                                // 147
    role: "presentation"                                                                                               // 148
  }, "\n        ", HTML.SVG({                                                                                          // 149
    version: "1.1",                                                                                                    // 150
    id: "waveicon",                                                                                                    // 151
    xmlns: "http://www.w3.org/2000/svg",                                                                               // 152
    href: "/about",                                                                                                    // 153
    "xmlns:xlink": "http://www.w3.org/1999/xlink",                                                                     // 154
    x: "0px",                                                                                                          // 155
    y: "0px",                                                                                                          // 156
    viewBox: "225 225 530 530",                                                                                        // 157
    "enable-background": "new 0 0 1000 1000",                                                                          // 158
    "xml:space": "preserve"                                                                                            // 159
  }, "\n           ", HTML.PATH({                                                                                      // 160
    fill: "#FFFFFF",                                                                                                   // 161
    d: "M654.7,509.8c0.1-2.9,0.3-5.9,0.6-8.8c-0.2,0.1-0.4,0.1-0.6,0.1c-6.2,2.8-12.9,4.4-19.9,4.9\n            c-1,0.2-2,0.3-3.1,0.4c-12,1.4-22.5-2.6-29.6-11c-7-8.4-9.5-20.1-6.8-31.8c0.3-1.8,0.6-3.6,1.1-5.4c0.2-6.8-5.7-9.8-6.4-10.2\n            c-49.1-24.9-77.5,1.3-102.6,24.5c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.3,3,1.8,5.6,4,7.5\n            c1,0,1.9,0.2,2.6,0.6c0.6,0,1.3,0,1.9,0.1c10.2,2.2,21.4-1.8,30.8-5.4c17.6-8,31.4-20.8,44-32.5c12.4-11.5,23.1-21.3,35.3-25.7\n            c7-3.2,14.4-5.3,21.9-7c1-0.3,2.1-0.6,3.1-0.7c0.6-0.2,1.2-0.3,1.8-0.5c1.1-0.4,2.3-0.6,3.4-0.9c0.1,0,0.1,0,0.2,0l0,0\n            c0.5-0.1,1-0.3,1.4-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.5-0.1c1.3-0.3,2.5-0.7,3.8-0.9c0.6-0.1,0.8,0.7,0.4,0.9\n            c0,0,0,0.1-0.1,0.1c-0.5,0.5-0.9,1.1-1.2,1.7c-0.1,0.4-0.3,0.8-0.4,1.2v0.1c0,0.4-0.1,0.7-0.3,1.1c0,0.1,0,0.2,0,0.3\n            c0,0.1-0.1,0.2-0.1,0.3c0,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3-0.1,0.4c0,0.2,0,0.3-0.1,0.5c0,0.2,0,0.3-0.1,0.5\n            c0,0.3,0,0.7-0.1,1s-0.1,0.7-0.2,1c0,0.3-0.1,0.7-0.2,1c0,0.4-0.1,0.7-0.2,1.1l0,0c-2,16.5,2.4,32.9,12.7,45.1\n            c10.6,12.6,25.9,19.4,42.8,19.4c1.9,0,3.8-0.1,5.7-0.3c0.4,0,0.9,0,1.3-0.1c7.8-0.9,15-2.7,21.7-5.3\n            C655.2,519.3,654.6,514.2,654.7,509.8z"
  }), "\n           ", HTML.POLYLINE({                                                                                 // 163
    fill: "#FFFFFF",                                                                                                   // 164
    points: "552.9,438.1 593.4,432.8 593.9,451.4 600.9,441.9 613.9,430.9 606.9,430.9 597.9,430.9\n            572.8,441.2 590.9,452.9 590.9,438.1 "
  }), "\n           ", HTML.PATH({                                                                                     // 166
    fill: "#FFFFFF",                                                                                                   // 167
    d: "M556.9,441.9"                                                                                                  // 168
  }), "\n           ", HTML.PATH({                                                                                     // 169
    fill: "#FFFFFF",                                                                                                   // 170
    d: "M609.8,437.7l4.1-6.8l-6.9,9.2C607.9,439.3,608.8,438.5,609.8,437.7z"                                            // 171
  }), "\n           ", HTML.PATH({                                                                                     // 172
    fill: "#FFFFFF",                                                                                                   // 173
    d: "M599.4,450.3c0.1-0.1,0.1-0.2,0.2-0.3l-3.7,4.9l0.3,4.3C596.9,456.1,597.9,453.1,599.4,450.3z"                    // 174
  }), "\n           ", HTML.PATH({                                                                                     // 175
    fill: "#FFFFFF",                                                                                                   // 176
    d: "M575.8,438.7c-1.1,0.8-2.5,0.7-3.9,0.6c0.5,0.1,0.9-0.1,1.3-0.3c-0.7,0.1-1.3,0.2-2,0.3\n            c0.7-0.1,1.3-0.3,2-0.4c-1.3,0.5-2.7,0.5-4,0.1c2.1,0,4.2,0,6.3,0c-2.1,0-4.2,0-6.3,0c2,0,4,0,6,0c-0.7,0-1.3,0-2,0\n            c0.8,0,1.6,0,2.3,0c-2.8,0-4.3,0.8-7-0.4C571,438.6,573.4,438.6,575.8,438.7z"
  }), "\n           ", HTML.POLYGON({                                                                                  // 178
    fill: "#FFFFFF",                                                                                                   // 179
    points: "565,439.3 556.9,438.1 573.2,438.9 577.5,439.3 "                                                           // 180
  }), "\n           ", HTML.PATH({                                                                                     // 181
    fill: "#FFFFFF",                                                                                                   // 182
    d: "M599.4,450.3c3.1-6,7.4-10.7,12.7-14.3l5.8-8.7l-70,10.8l48.8,19C597.4,454.7,598.3,452.5,599.4,450.3z"           // 183
  }), "\n           ", HTML.PATH({                                                                                     // 184
    fill: "#FFFFFF",                                                                                                   // 185
    d: "M459.4,507.1c0.1-3.6,0.4-7.2,0.8-10.8c-7.2,3.8-15,6.5-23.8,7.5c-12,1.4-22.5-2.6-29.6-11\n            c-2.6-3.1-4.6-6.7-5.9-10.6c-1.2-1.1-2.1-2.6-2.1-4.6c-0.1-3.4,0-6.8,0.3-10.2c0.1-0.8,0.1-1.7,0.3-2.5c-0.3-1.2-0.2-2.6,0.3-4\n            c-0.1-1.2,0.1-2.4,0.6-3.5c0.2-1.1,0.5-2.2,0.8-3.2v-0.1c-0.7-5.7-5.7-8.3-6.3-8.6c-49.1-24.9-77.5,1.3-102.6,24.5\n            c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.7,5.9,5.6,10.3,11.4,10.3c0.4,0,0.9,0,1.3-0.1\n            c31.4-3.4,52.3-22.8,70.7-39.8c12.4-11.5,23.1-21.3,35.3-25.7c7-3.2,14.4-5.3,21.9-7c1-0.3,2.1-0.6,3.1-0.7c0.6-0.2,1.2-0.3,1.8-0.5\n            c1.1-0.4,2.3-0.6,3.4-0.9c0.1,0,0.1,0,0.2,0l0,0c0.5-0.1,1-0.3,1.4-0.4c0.1,0,0.2,0,0.3,0c0.2,0,0.3-0.1,0.5-0.1\n            c1.3-0.3,2.5-0.7,3.8-0.9c0.6-0.1,0.8,0.7,0.4,0.9c0,0,0,0.1-0.1,0.1c-0.5,0.5-0.9,1.1-1.2,1.7c-0.1,0.4-0.3,0.8-0.4,1.2v0.1\n            c0,0.4-0.1,0.7-0.3,1.1c0,0.1,0,0.2,0,0.3c0,0.1-0.1,0.2-0.1,0.3c0,0.2-0.1,0.5-0.1,0.7c0,0.1,0,0.2-0.1,0.3c0,0.1,0,0.3-0.1,0.4\n            c0,0.2,0,0.3-0.1,0.5c0,0.2,0,0.3-0.1,0.5c0,0.3,0,0.7-0.1,1s-0.1,0.7-0.2,1c0,0.3-0.1,0.7-0.2,1c0,0.4-0.1,0.7-0.2,1.1l0,0\n            c-2,16.5,2.4,32.9,12.7,45.1c10.6,12.6,25.9,19.4,42.8,19.4c1.9,0,3.8-0.1,5.7-0.3c0.4,0,0.9,0,1.3-0.1c6.8-0.7,13.1-2.2,19-4.3\n            c0.5-0.2,1.1-0.4,1.6-0.6c0.4-0.1,0.7-0.3,1.1-0.4C459.9,516.6,459.2,511.5,459.4,507.1z"
  }), "\n           ", HTML.POLYLINE({                                                                                 // 187
    fill: "#FFFFFF",                                                                                                   // 188
    points: "357.6,435.4 398,430.1 398.6,448.7 405.6,439.3 418.6,428.3 411.6,428.3 402.6,428.3 377.5,438.6\n            395.6,450.3 395.6,435.4 "
  }), "\n           ", HTML.PATH({                                                                                     // 190
    fill: "#FFFFFF",                                                                                                   // 191
    d: "M361.6,439.3"                                                                                                  // 192
  }), "\n           ", HTML.PATH({                                                                                     // 193
    fill: "#FFFFFF",                                                                                                   // 194
    d: "M415.1,433.9l3.4-5.6l-5.8,7.7C413.5,435.3,414.3,434.6,415.1,433.9z"                                            // 195
  }), "\n           ", HTML.PATH({                                                                                     // 196
    fill: "#FFFFFF",                                                                                                   // 197
    d: "M400.9,454.2c0.1-1.3,0.6-2.6,1.5-3.6c0.5-1,1-2,1.7-3l-3.5,4.6l0.2,2.7\n            C400.8,454.6,400.8,454.4,400.9,454.2z"
  }), "\n           ", HTML.PATH({                                                                                     // 199
    fill: "#FFFFFF",                                                                                                   // 200
    d: "M380.4,436c-1.1,0.8-2.5,0.7-3.9,0.6c0.5,0.1,0.9-0.1,1.3-0.3c-0.7,0.1-1.3,0.2-2,0.3c0.7-0.1,1.3-0.3,2-0.4\n            c-1.3,0.5-2.7,0.5-4,0.1c2.1,0,4.2,0,6.3,0c-2.1,0-4.2,0-6.3,0c2,0,4,0,6,0c-0.7,0-1.3,0-2,0c0.8,0,1.6,0,2.3,0\n            c-2.8,0-4.3,0.8-7-0.4C375.6,435.9,378,435.9,380.4,436z"
  }), "\n           ", HTML.POLYGON({                                                                                  // 202
    fill: "#FFFFFF",                                                                                                   // 203
    points: "369.7,436.6 361.6,435.4 377.9,436.2 382.1,436.6 "                                                         // 204
  }), "\n           ", HTML.PATH({                                                                                     // 205
    fill: "#FFFFFF",                                                                                                   // 206
    d: "M402.4,450.5c0.8-1.7,1.9-3.4,3-5c2.5-4.5,5.9-8.6,10-11.8c1.1-1.3,2.3-2.4,3.5-3.6l3.7-5.5l-70,10.8\n            l48.3,18.8C401,452.8,401.5,451.6,402.4,450.5z"
  }), "\n           ", HTML.PATH({                                                                                     // 208
    fill: "#FFFFFF",                                                                                                   // 209
    d: "M661.6,499c-1.9,0.8-4,1.5-6.1,2l0.4,23.1c0,0,0,0,8.9-3.2l0,0l0,0c0,0,0.1,0,0.2-0.1\n            c0.3-0.2,0.5-0.3,0.8-0.4c0.3-0.2,0.6-0.4,0.9-0.5c0.3-0.2,0.6-0.4,0.9-0.5c3.7-3.2,5.7-7.6,3.8-13.7C670,500.8,666,499.1,661.6,499\n            z"
  }), "\n           ", HTML.PATH({                                                                                     // 211
    fill: "#FFFFFF",                                                                                                   // 212
    d: "M655.4,501l-1.7,24l5.2-1.9l-3.3-22.1C655.6,500.9,655.5,501,655.4,501z"                                         // 213
  }), "\n           ", HTML.PATH({                                                                                     // 214
    fill: "#FFFFFF",                                                                                                   // 215
    d: "M655,501.1l-4.2,12.9l10-0.9l-4.8-12.3C655.6,500.9,655.3,501,655,501.1z"                                        // 216
  }), "\n           ", HTML.PATH({                                                                                     // 217
    fill: "#FFFFFF",                                                                                                   // 218
    d: "M738.7,465.8c2.2-1.9,4.8-2.8,7.3-4.3c2-1.1,3.9-2.2,5.8-3.2c1.8-1.2,3.7-2.2,5.7-3.2\n            c7.8-6.1,17.4-10.4,27.2-12.6c-1.4-0.5-2.8-0.9-4.1-1.3c-20.6,0.5-41.2,5.5-60.1,13.2c-4.8,3-9.5,5.9-14.4,8.8\n            c-3.6,3.2-7.1,6.4-10.6,9.6c-8.5,7.9-16.8,15.5-25.8,21.5c-0.9,0.7-1.7,1.3-2.7,1.9c-0.1,0.1-0.3,0.2-0.5,0.3\n            c-0.9,0.5-1.8,1.1-2.8,1.5c-7.8,4.4-16.2,7.6-25.9,8.6c-6.3,0.7-10.9,6.4-10.2,12.7c0.7,5.9,5.6,10.3,11.4,10.3c0.4,0,0.9,0,1.3-0.1\n            c24.1-2.6,42-14.6,57.3-27.8c0.3-0.8,0.8-1.6,1.5-2.1c3.8-2.9,7.5-6.1,11.1-9.2c0.2-0.2,0.5-0.4,0.7-0.7c4.3-4,8.3-7.7,12.3-11.1\n            c4.3-4.7,9.5-9.1,15-12.5C738.5,466,738.6,465.9,738.7,465.8z"
  }), "\n           ", HTML.PATH({                                                                                     // 220
    fill: "#FFFFFF",                                                                                                   // 221
    d: "M790.3,446.5C790.3,446.5,790.4,446.5,790.3,446.5c1.2-1.3,2-3,1.9-4.7c-10.3-4.2-19.6-6.2-28.2-6.4\n            c-2.6,0.5-5.2,0.9-7.9,1.5c-2.8,0.6-5.5,1.4-8.3,2.1c-1.9,0.7-3.7,1.3-5.5,2c-7.5,2.6-15,5.3-21.8,9.5c-8.2,5.9-15.6,12.8-22.9,19.5\n            c-17.4,16.1-33.8,31.2-57.6,33.8c-6.3,0.7-10.9,6.4-10.2,12.7c0.3,3,1.8,5.6,4,7.5c1,0,1.9,0.2,2.6,0.6c0.6,0,1.3,0,1.9,0.1\n            c10.2,2.2,21.4-1.8,30.8-5.4c17.6-8,31.4-20.8,44-32.5c5.8-5.3,11.1-10.3,16.5-14.5c2.7-2.3,5.6-4.5,8.6-6.3\n            c0.1-0.1,0.2-0.2,0.3-0.3c2.2-1.9,4.8-2.8,7.3-4.3c6.3-3.6,12.1-6.8,19.1-8.7c7.2-2,15.2-2,22.2-4.7c0.4-0.2,0.9-0.4,1.4-0.5\n            c0.1-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.2,0.3-0.3c0.2-0.2,0.4-0.3,0.6-0.4C790.2,446.6,790.3,446.5,790.3,446.5z"
  }), "\n           ", HTML.PATH({                                                                                     // 223
    fill: "#FFFFFF",                                                                                                   // 224
    d: "M790.4,446.5L790.4,446.5c1.9-2.1,2.8-4.9,0.9-7.6c-2.4-3.5-6.6-4.1-10.5-4.4c-3.5-0.2-7.1-0.2-10.6,0\n            l-1.7,0.3l0,0l-2.4,0.4c-0.3,0.1-0.6,0.2-0.9,0.2c-0.1,0-0.2,0-0.2,0l-0.5,0.1c-2.7,0.6-5.5,1-8.2,1.6c-2.8,0.6-5.5,1.4-8.3,2.1\n            c-1,0.4-2,0.7-3,1.1l28.6,11.1c4.7-0.7,9.4-1.4,13.7-3.1c0.4-0.2,0.9-0.3,1.4-0.5c0.1-0.1,0.3-0.2,0.5-0.3c0.1-0.1,0.2-0.2,0.3-0.3\n            c0.2-0.2,0.4-0.3,0.6-0.4C790.2,446.6,790.3,446.5,790.4,446.5z"
  }), "\n           ", HTML.PATH({                                                                                     // 226
    fill: "#FFFFFF",                                                                                                   // 227
    d: "M717,550.8c0-0.7,0-1.4,0-2.1"                                                                                  // 228
  }), "\n           ", HTML.RECT({                                                                                     // 229
    x: "168",                                                                                                          // 230
    y: "588",                                                                                                          // 231
    fill: "none",                                                                                                      // 232
    width: "1546",                                                                                                     // 233
    height: "356"                                                                                                      // 234
  }), "\n        "), "\n      "), "\n      ", HTML.A({                                                                 // 235
    class: "maintext"                                                                                                  // 236
  }, Blaze.View("lookup:currentitem", function() {                                                                     // 237
    return Spacebars.mustache(view.lookup("currentitem"));                                                             // 238
  })), "\n    "), "\n  "), HTML.Raw('\n  <div class="master-navbartwo"></div>\n  '));                                  // 239
}));                                                                                                                   // 240
                                                                                                                       // 241
Template.__checkName("LowerNavigation");                                                                               // 242
Template["LowerNavigation"] = new Template("Template.LowerNavigation", (function() {                                   // 243
  var view = this;                                                                                                     // 244
  return HTML.DIV({                                                                                                    // 245
    id: "lowerlowerlower"                                                                                              // 246
  }, "\n  ", HTML.NAV({                                                                                                // 247
    id: "lowerideas"                                                                                                   // 248
  }, "\n\n    ", Blaze.If(function() {                                                                                 // 249
    return Spacebars.call(view.lookup("NotLoggedIn"));                                                                 // 250
  }, function() {                                                                                                      // 251
    return [ "\n\n    ", Spacebars.include(view.lookupTemplate("atForm")), "\n", HTML.Comment('\n    <a href="/sign-in" class="maintext3">SIGN IN</a>\n    <a href="/sign-up" class="maintext3">SIGN UP</a>\n'), "\n    " ];
  }, function() {                                                                                                      // 253
    return "\n    ";                                                                                                   // 254
  }), "\n"), "\n");                                                                                                    // 255
}));                                                                                                                   // 256
                                                                                                                       // 257
Template.__checkName("LoginNow");                                                                                      // 258
Template["LoginNow"] = new Template("Template.LoginNow", (function() {                                                 // 259
  var view = this;                                                                                                     // 260
  return HTML.Raw('<span class="close2">x</span>\n  <div class="master-navbartwo1"></div>\n  <div class="master-navbarthree1"></div>\n  <div class="master-navbar"></div>\n  <div class="modal35" id="loginnowModal">\n  <div class="modal-content5">\n  <span class="close7">x</span>\n  <a href="/sign-in" id="loginbutton">LOGIN</a>\n  <a href="/sign-up" id="signupbutton">SIGNUP</a>\n</div>\n</div>');
}));                                                                                                                   // 262
                                                                                                                       // 263
Template.__checkName("LoginNowTwo");                                                                                   // 264
Template["LoginNowTwo"] = new Template("Template.LoginNowTwo", (function() {                                           // 265
  var view = this;                                                                                                     // 266
  return Spacebars.include(view.lookupTemplate("loginButtons"));                                                       // 267
}));                                                                                                                   // 268
                                                                                                                       // 269
Template.__checkName("Register");                                                                                      // 270
Template["Register"] = new Template("Template.Register", (function() {                                                 // 271
  var view = this;                                                                                                     // 272
  return [ HTML.Raw('<a id="UserId">Welcome</a>\n'), HTML.A({                                                          // 273
    id: "UserId"                                                                                                       // 274
  }, Blaze.View("lookup:currentUser.username", function() {                                                            // 275
    return Spacebars.mustache(Spacebars.dot(view.lookup("currentUser"), "username"));                                  // 276
  })), HTML.Raw('\n<form name="userregisterform" id="userregisterform">\n<input id="userimage" type="file" name="userimageone">\n<br>\n<input id="enterlocation" type="text" name="userlocationone">\n<br>\n<input id="enterbio" type="text" name="userbioone">>\n<br>\n<button type="submit" id="userregistrationsubmit"> FINISH </button>\n</form>') ];
}));                                                                                                                   // 278
                                                                                                                       // 279
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Appbody.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/layouts/Appbody.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var ReactiveVar = void 0;                                                                                              // 1
module.watch(require("meteor/reactive-var"), {                                                                         // 1
  ReactiveVar: function (v) {                                                                                          // 1
    ReactiveVar = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var ReactiveDict = void 0;                                                                                             // 1
module.watch(require("meteor/reactive-dict"), {                                                                        // 1
  ReactiveDict: function (v) {                                                                                         // 1
    ReactiveDict = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
var ActiveRoute = void 0;                                                                                              // 1
module.watch(require("meteor/zimme:active-route"), {                                                                   // 1
  ActiveRoute: function (v) {                                                                                          // 1
    ActiveRoute = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
                                                                                                                       //
var _ = void 0;                                                                                                        // 1
                                                                                                                       //
module.watch(require("meteor/underscore"), {                                                                           // 1
  _: function (v) {                                                                                                    // 1
    _ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 6);                                                                                                                 // 1
var $ = void 0;                                                                                                        // 1
module.watch(require("meteor/jquery"), {                                                                               // 1
  $: function (v) {                                                                                                    // 1
    $ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 7);                                                                                                                 // 1
var Videos = void 0;                                                                                                   // 1
module.watch(require("../../../lib/Text.js"), {                                                                        // 1
  Videos: function (v) {                                                                                               // 1
    Videos = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 8);                                                                                                                 // 1
var Texts = void 0;                                                                                                    // 1
module.watch(require("../../../lib/Text.js"), {                                                                        // 1
  Texts: function (v) {                                                                                                // 1
    Texts = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 9);                                                                                                                 // 1
var Audios = void 0;                                                                                                   // 1
module.watch(require("../../../lib/Text.js"), {                                                                        // 1
  Audios: function (v) {                                                                                               // 1
    Audios = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 10);                                                                                                                // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../../lib/Text.js"), {                                                                        // 1
  Images: function (v) {                                                                                               // 1
    Images = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 11);                                                                                                                // 1
var Products = void 0;                                                                                                 // 1
module.watch(require("../../../lib/Text.js"), {                                                                        // 1
  Products: function (v) {                                                                                             // 1
    Products = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 12);                                                                                                                // 1
module.watch(require("./Appbody.html"));                                                                               // 1
Meteor.startup(function () {                                                                                           // 21
  Stripe.setPublishableKey(Meteor.settings.public.stripe);                                                             // 22
});                                                                                                                    // 23
Template.Appbody.onCreated(function () {                                                                               // 26
  function bodyOnCreated() {                                                                                           // 26
    this.state = new ReactiveDict();                                                                                   // 27
    Meteor.subscribe('texts');                                                                                         // 28
  }                                                                                                                    // 29
                                                                                                                       //
  return bodyOnCreated;                                                                                                // 26
}()); /*                                                                                                               // 26
        Template.join2.events({                                                                                        //
          "click .close": function(event, template) {                                                                  //
            var modal = $('#myModal');                                                                                 //
            modal.css('display', 'none');                                                                              //
            Blaze.remove(template.view);                                                                               //
          }                                                                                                            //
        });                                                                                                            //
      */                                                                                                               //
Template.StreamMenu.helpers({                                                                                          // 44
  currentitem: function () {                                                                                           // 45
    return Session.get('selectedItem');                                                                                // 46
  }                                                                                                                    // 47
});                                                                                                                    // 44
Template.LoginNow.events({                                                                                             // 50
  'click #loginbutton': function (event, template) {                                                                   // 51
    var modal35 = $('.modal35');                                                                                       // 52
    modal3.css('display', 'none');                                                                                     // 53
    Blaze.remove(template.view);                                                                                       // 54
  },                                                                                                                   // 55
  'click #signupbutton': function (event, template) {                                                                  // 56
    var modal3 = $('.modal-content');                                                                                  // 57
    modal3.css('display', 'none');                                                                                     // 58
    Blaze.remove(template.view);                                                                                       // 59
  }                                                                                                                    // 60
}); /*                                                                                                                 // 50
     Template.Register.events({                                                                                        //
       'submit #userregisterform': function(event, template) {                                                         //
         event.preventDefault();                                                                                       //
         var memberAccount = {                                                                                         //
              "image": event.target.userimageone.value,                                                                //
              "location": event.target.userlocationone.value,                                                          //
              "bio": event.target.userbioone.value,                                                                    //
            }                                                                                                          //
            Meteor.call('addUserRegister', memberAccount)                                                              //
     }                                                                                                                 //
    });                                                                                                                //
    */                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"pages":{"AudioFeed.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/AudioFeed.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.AudioFeed.js");                                                                   // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.AudioFeed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.AudioFeed.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("AudioFeed");                                                                                     // 2
Template["AudioFeed"] = new Template("Template.AudioFeed", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.UL("\n    ", HTML.DIV({                                                                                  // 5
    id: "music_feed_bg"                                                                                                // 6
  }, "\n        ", HTML.Raw('<audio id="music">\n            <source src="" type="audio/mpeg">\n        </audio>'), "\n        ", Blaze.Each(function() {
    return {                                                                                                           // 8
      _sequence: Spacebars.call(view.lookup("tracks")),                                                                // 9
      _variable: "track"                                                                                               // 10
    };                                                                                                                 // 11
  }, function() {                                                                                                      // 12
    return [ "\n            ", Blaze._TemplateWith(function() {                                                        // 13
      return {                                                                                                         // 14
        track: Spacebars.call(view.lookup("track"))                                                                    // 15
      };                                                                                                               // 16
    }, function() {                                                                                                    // 17
      return Spacebars.include(view.lookupTemplate("AudioItemSmart"));                                                 // 18
    }), "\n        " ];                                                                                                // 19
  }), "\n    "), "\n  ");                                                                                              // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioStream.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/AudioStream.html                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.AudioStream.js");                                                                 // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.AudioStream.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.AudioStream.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("AudioStreamSmart");                                                                              // 2
Template["AudioStreamSmart"] = new Template("Template.AudioStreamSmart", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("audioContext")),                                                          // 7
      _variable: "audioTitle"                                                                                          // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 11
      return Spacebars.dataMustache(view.lookup("audioArgs"), view.lookup("audioTitle"));                              // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("StreamAudioReusable"));                                            // 14
    }), "\n    " ];                                                                                                    // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageFeed.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/ImageFeed.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ImageFeed.js");                                                                   // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ImageFeed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.ImageFeed.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("ImageFeed");                                                                                     // 2
Template["ImageFeed"] = new Template("Template.ImageFeed", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "images_feed_bg"                                                                                               // 6
  }, "\n           ", Blaze.Each(function() {                                                                          // 7
    return {                                                                                                           // 8
      _sequence: Spacebars.call(view.lookup("images")),                                                                // 9
      _variable: "image"                                                                                               // 10
    };                                                                                                                 // 11
  }, function() {                                                                                                      // 12
    return [ "\n           ", Blaze._TemplateWith(function() {                                                         // 13
      return {                                                                                                         // 14
        image: Spacebars.call(view.lookup("image"))                                                                    // 15
      };                                                                                                               // 16
    }, function() {                                                                                                    // 17
      return Spacebars.include(view.lookupTemplate("ImageItemSmart"));                                                 // 18
    }), "\n           " ];                                                                                             // 19
  }), "\n       ");                                                                                                    // 20
}));                                                                                                                   // 21
                                                                                                                       // 22
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageStream.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/ImageStream.html                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.ImageStream.js");                                                                 // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.ImageStream.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.ImageStream.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("StreamImageSmart");                                                                              // 2
Template["StreamImageSmart"] = new Template("Template.StreamImageSmart", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("imageContext")),                                                          // 7
      _variable: "imageTitle"                                                                                          // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 11
      return Spacebars.dataMustache(view.lookup("imageArgs"), view.lookup("imageTitle"));                              // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("StreamImageReusable"));                                            // 14
    }), "\n" ];                                                                                                        // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Market.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Market.html                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.Market.js");                                                                      // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Market.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.Market.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Market");                                                                                        // 2
Template["Market"] = new Template("Template.Market", (function() {                                                     // 3
  var view = this;                                                                                                     // 4
  return HTML.UL("\n  ", Blaze.Each(function() {                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("products")),                                                              // 7
      _variable: "product"                                                                                             // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 11
      return Spacebars.dataMustache(view.lookup("productArgs"), view.lookup("productTitle"));                          // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("ProductItemSmart"));                                               // 14
    }), "\n  " ];                                                                                                      // 15
  }), "\n");                                                                                                           // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Media.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Media.html                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.Media.js");                                                                       // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.Media.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.Media.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Media");                                                                                         // 2
Template["Media"] = new Template("Template.Media", (function() {                                                       // 3
  var view = this;                                                                                                     // 4
  return HTML.UL("\n  ", Blaze.Each(function() {                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("mediaitems")),                                                            // 7
      _variable: "mediaitem"                                                                                           // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 11
      return {                                                                                                         // 12
        mediaitem: Spacebars.call(view.lookup("mediaitem"))                                                            // 13
      };                                                                                                               // 14
    }, function() {                                                                                                    // 15
      return Spacebars.include(view.lookupTemplate("MediaItem"));                                                      // 16
    }), "\n  " ];                                                                                                      // 17
  }), "\n");                                                                                                           // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextStream.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/TextStream.html                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.TextStream.js");                                                                  // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.TextStream.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.TextStream.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("StreamText");                                                                                    // 2
Template["StreamText"] = new Template("Template.StreamText", (function() {                                             // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("textContext")),                                                           // 7
      _variable: "textTitle"                                                                                           // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n  ", Blaze._TemplateWith(function() {                                                                  // 11
      return Spacebars.dataMustache(view.lookup("textArgs"), view.lookup("textTitle"));                                // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("StreamTextReusable"));                                             // 14
    }), "\n   " ];                                                                                                     // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserSiteSmart.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/UserSiteSmart.html                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.UserSiteSmart.js");                                                               // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.UserSiteSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.UserSiteSmart.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("Users_show_page");                                                                               // 2
Template["Users_show_page"] = new Template("Template.Users_show_page", (function() {                                   // 3
  var view = this;                                                                                                     // 4
  return HTML.DIV({                                                                                                    // 5
    id: "usersitecontainer"                                                                                            // 6
  }, HTML.Raw('\n<a id="edit"> EDIT </a>\n'), Blaze.Each(function() {                                                  // 7
    return {                                                                                                           // 8
      _sequence: Spacebars.call(view.lookup("memberNameArray")),                                                       // 9
      _variable: "memberName"                                                                                          // 10
    };                                                                                                                 // 11
  }, function() {                                                                                                      // 12
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 13
      return Spacebars.dataMustache(view.lookup("memberArgs"), view.lookup("memberName"));                             // 14
    }, function() {                                                                                                    // 15
      return Spacebars.include(view.lookupTemplate("UserSite"));                                                       // 16
    }), "\n" ];                                                                                                        // 17
  }), "\n");                                                                                                           // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
Template.__checkName("ProductWebsite");                                                                                // 21
Template["ProductWebsite"] = new Template("Template.ProductWebsite", (function() {                                     // 22
  var view = this;                                                                                                     // 23
  return Blaze.Each(function() {                                                                                       // 24
    return {                                                                                                           // 25
      _sequence: Spacebars.call(view.lookup("productWebs")),                                                           // 26
      _variable: "productWeb"                                                                                          // 27
    };                                                                                                                 // 28
  }, function() {                                                                                                      // 29
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 30
      return Spacebars.dataMustache(view.lookup("productWebArgs"), view.lookup("productWeb"));                         // 31
    }, function() {                                                                                                    // 32
      return Spacebars.include(view.lookupTemplate("MembersProduct"));                                                 // 33
    }), "\n" ];                                                                                                        // 34
  });                                                                                                                  // 35
}));                                                                                                                   // 36
                                                                                                                       // 37
Template.__checkName("AudioWebsite");                                                                                  // 38
Template["AudioWebsite"] = new Template("Template.AudioWebsite", (function() {                                         // 39
  var view = this;                                                                                                     // 40
  return Blaze.Each(function() {                                                                                       // 41
    return {                                                                                                           // 42
      _sequence: Spacebars.call(view.lookup("productWebs")),                                                           // 43
      _variable: "productWeb"                                                                                          // 44
    };                                                                                                                 // 45
  }, function() {                                                                                                      // 46
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 47
      return Spacebars.dataMustache(view.lookup("productWebArgs"), view.lookup("productWeb"));                         // 48
    }, function() {                                                                                                    // 49
      return Spacebars.include(view.lookupTemplate("MembersProduct"));                                                 // 50
    }), "\n" ];                                                                                                        // 51
  });                                                                                                                  // 52
}));                                                                                                                   // 53
                                                                                                                       // 54
Template.__checkName("TextWebsite");                                                                                   // 55
Template["TextWebsite"] = new Template("Template.TextWebsite", (function() {                                           // 56
  var view = this;                                                                                                     // 57
  return Blaze.Each(function() {                                                                                       // 58
    return {                                                                                                           // 59
      _sequence: Spacebars.call(view.lookup("productWebs")),                                                           // 60
      _variable: "productWeb"                                                                                          // 61
    };                                                                                                                 // 62
  }, function() {                                                                                                      // 63
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 64
      return Spacebars.dataMustache(view.lookup("productWebArgs"), view.lookup("productWeb"));                         // 65
    }, function() {                                                                                                    // 66
      return Spacebars.include(view.lookupTemplate("MembersProduct"));                                                 // 67
    }), "\n" ];                                                                                                        // 68
  });                                                                                                                  // 69
}));                                                                                                                   // 70
                                                                                                                       // 71
Template.__checkName("ImageWebsite");                                                                                  // 72
Template["ImageWebsite"] = new Template("Template.ImageWebsite", (function() {                                         // 73
  var view = this;                                                                                                     // 74
  return Blaze.Each(function() {                                                                                       // 75
    return {                                                                                                           // 76
      _sequence: Spacebars.call(view.lookup("productWebs")),                                                           // 77
      _variable: "productWeb"                                                                                          // 78
    };                                                                                                                 // 79
  }, function() {                                                                                                      // 80
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 81
      return Spacebars.dataMustache(view.lookup("productWebArgs"), view.lookup("productWeb"));                         // 82
    }, function() {                                                                                                    // 83
      return Spacebars.include(view.lookupTemplate("MembersProduct"));                                                 // 84
    }), "\n" ];                                                                                                        // 85
  });                                                                                                                  // 86
}));                                                                                                                   // 87
                                                                                                                       // 88
Template.__checkName("VideoWebsite");                                                                                  // 89
Template["VideoWebsite"] = new Template("Template.VideoWebsite", (function() {                                         // 90
  var view = this;                                                                                                     // 91
  return Blaze.Each(function() {                                                                                       // 92
    return {                                                                                                           // 93
      _sequence: Spacebars.call(view.lookup("productWebs")),                                                           // 94
      _variable: "productWeb"                                                                                          // 95
    };                                                                                                                 // 96
  }, function() {                                                                                                      // 97
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 98
      return Spacebars.dataMustache(view.lookup("productWebArgs"), view.lookup("productWeb"));                         // 99
    }, function() {                                                                                                    // 100
      return Spacebars.include(view.lookupTemplate("MembersProduct"));                                                 // 101
    }), "\n" ];                                                                                                        // 102
  });                                                                                                                  // 103
}));                                                                                                                   // 104
                                                                                                                       // 105
Template.__checkName("MembersProduct");                                                                                // 106
Template["MembersProduct"] = new Template("Template.MembersProduct", (function() {                                     // 107
  var view = this;                                                                                                     // 108
  return [ HTML.IMG({                                                                                                  // 109
    id: "productthumb",                                                                                                // 110
    href: function() {                                                                                                 // 111
      return [ "/", Spacebars.mustache(view.lookup("id")) ];                                                           // 112
    },                                                                                                                 // 113
    src: function() {                                                                                                  // 114
      return Spacebars.mustache(view.lookup("Images"));                                                                // 115
    }                                                                                                                  // 116
  }), "\n  ", HTML.DIV({                                                                                               // 117
    id: "sweatshirtinfo"                                                                                               // 118
  }, "\n    ", HTML.A({                                                                                                // 119
    href: function() {                                                                                                 // 120
      return [ "/", Spacebars.mustache(view.lookup("Member")) ];                                                       // 121
    },                                                                                                                 // 122
    id: "account"                                                                                                      // 123
  }, " ", Blaze.View("lookup:members", function() {                                                                    // 124
    return Spacebars.mustache(view.lookup("members"));                                                                 // 125
  }), " "), "\n    ", HTML.A({                                                                                         // 126
    href: function() {                                                                                                 // 127
      return [ "/", Spacebars.mustache(view.lookup("id")) ];                                                           // 128
    },                                                                                                                 // 129
    id: "title"                                                                                                        // 130
  }, " ", Blaze.View("lookup:title", function() {                                                                      // 131
    return Spacebars.mustache(view.lookup("title"));                                                                   // 132
  }), " "), "\n  ") ];                                                                                                 // 133
}));                                                                                                                   // 134
                                                                                                                       // 135
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoFeed.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/VideoFeed.html                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.VideoFeed.js");                                                                   // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.VideoFeed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.VideoFeed.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("VideoFeed");                                                                                     // 2
Template["VideoFeed"] = new Template("Template.VideoFeed", (function() {                                               // 3
  var view = this;                                                                                                     // 4
  return HTML.UL("\n  ", Blaze.Each(function() {                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("videos")),                                                                // 7
      _variable: "video"                                                                                               // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n    ", Blaze._TemplateWith(function() {                                                                // 11
      return {                                                                                                         // 12
        video: Spacebars.call(view.lookup("video"))                                                                    // 13
      };                                                                                                               // 14
    }, function() {                                                                                                    // 15
      return Spacebars.include(view.lookupTemplate("VideoItemSmart"));                                                 // 16
    }), "\n  " ];                                                                                                      // 17
  }), "\n");                                                                                                           // 18
}));                                                                                                                   // 19
                                                                                                                       // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoStream.html":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/VideoStream.html                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("./template.VideoStream.js");                                                                 // 1
                                                                                                                       // 2
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"template.VideoStream.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/template.VideoStream.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__checkName("VideoStreamSmart");                                                                              // 2
Template["VideoStreamSmart"] = new Template("Template.VideoStreamSmart", (function() {                                 // 3
  var view = this;                                                                                                     // 4
  return Blaze.Each(function() {                                                                                       // 5
    return {                                                                                                           // 6
      _sequence: Spacebars.call(view.lookup("videoContext")),                                                          // 7
      _variable: "videoTitle"                                                                                          // 8
    };                                                                                                                 // 9
  }, function() {                                                                                                      // 10
    return [ "\n", Blaze._TemplateWith(function() {                                                                    // 11
      return Spacebars.dataMustache(view.lookup("videoArgs"), view.lookup("videoTitle"));                              // 12
    }, function() {                                                                                                    // 13
      return Spacebars.include(view.lookupTemplate("StreamVideoReusable"));                                            // 14
    }), "\n" ];                                                                                                        // 15
  });                                                                                                                  // 16
}));                                                                                                                   // 17
                                                                                                                       // 18
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioFeed.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/AudioFeed.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 1
  var Template = void 0;                                                                                               // 1
  module.watch(require("meteor/templating"), {                                                                         // 1
    Template: function (v) {                                                                                           // 1
      Template = v;                                                                                                    // 1
    }                                                                                                                  // 1
  }, 0);                                                                                                               // 1
  var FlowRouter = void 0;                                                                                             // 1
  module.watch(require("meteor/kadira:flow-router"), {                                                                 // 1
    FlowRouter: function (v) {                                                                                         // 1
      FlowRouter = v;                                                                                                  // 1
    }                                                                                                                  // 1
  }, 1);                                                                                                               // 1
  module.watch(require("./AudioFeed.html"));                                                                           // 1
  module.watch(require("../../api/Audio/Server/AudioPublications.js"));                                                // 1
  // Components used inside the template                                                                               // 10
  Template.AudioFeed.helpers({                                                                                         // 13
    tracks: function () {                                                                                              // 14
      return Audios.find();                                                                                            // 15
    }                                                                                                                  // 16
  });                                                                                                                  // 13
  Template.AudioFeed.onCreated(function () {                                                                           // 19
    var _this = this;                                                                                                  // 19
                                                                                                                       //
    this.autorun(function () {                                                                                         // 20
      _this.subscribe('audioFeed', _this.getAudioFeed());                                                              // 21
    });                                                                                                                // 22
  });                                                                                                                  // 23
}                                                                                                                      // 25
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"AudioStream.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/AudioStream.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./AudioStream.html"));                                                                           // 1
Template.AudioStreamSmart.onCreated(function () {                                                                      // 4
  var _this = this;                                                                                                    // 4
                                                                                                                       //
  this.getAudioTitle = function () {                                                                                   // 5
    return FlowRouter.getParam('audioTitle');                                                                          // 5
  };                                                                                                                   // 5
                                                                                                                       //
  this.autorun(function () {                                                                                           // 6
    _this.subscribe('audioStream', _this.getAudioTitle());                                                             // 7
  });                                                                                                                  // 8
});                                                                                                                    // 9
Template.AudioStreamSmart.helpers({                                                                                    // 12
  audioContext: function () {                                                                                          // 13
    var instance = Template.instance();                                                                                // 14
    var audioTitle = instance.getAudioTitle();                                                                         // 15
    return Audios.findOne(audioTitle) ? [audioTitle] : [];                                                             // 16
  },                                                                                                                   // 17
  audioArgs: function (audioTitle) {                                                                                   // 18
    return Audios.findOne(audioTitle);                                                                                 // 19
  }                                                                                                                    // 20
});                                                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"CreateSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/CreateSmart.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageFeed.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/ImageFeed.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 1
  var Template = void 0;                                                                                               // 1
  module.watch(require("meteor/templating"), {                                                                         // 1
    Template: function (v) {                                                                                           // 1
      Template = v;                                                                                                    // 1
    }                                                                                                                  // 1
  }, 0);                                                                                                               // 1
  var FlowRouter = void 0;                                                                                             // 1
  module.watch(require("meteor/kadira:flow-router"), {                                                                 // 1
    FlowRouter: function (v) {                                                                                         // 1
      FlowRouter = v;                                                                                                  // 1
    }                                                                                                                  // 1
  }, 1);                                                                                                               // 1
  module.watch(require("./ImageFeed.html"));                                                                           // 1
  module.watch(require("../../api/Image/Server/ImagePublications.js"));                                                // 1
  module.watch(require("../components/ImageItemSmart.js"));                                                            // 1
  module.watch(require("../components/ImageItemSmart.html"));                                                          // 1
  Template.ImageFeed.helpers({                                                                                         // 14
    images: function () {                                                                                              // 15
      return Images.find();                                                                                            // 16
    }                                                                                                                  // 17
  });                                                                                                                  // 14
  Template.ImageFeed.onCreated(function () {                                                                           // 21
    var _this = this;                                                                                                  // 21
                                                                                                                       //
    this.autorun(function () {                                                                                         // 22
      _this.subscribe('imageFeed', _this.getImageFeed());                                                              // 23
    });                                                                                                                // 24
  });                                                                                                                  // 25
}                                                                                                                      // 27
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ImageStream.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/ImageStream.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./ImageStream.html"));                                                                           // 1
Template.StreamImageSmart.onCreated(function () {                                                                      // 4
  var _this = this;                                                                                                    // 4
                                                                                                                       //
  this.getImageTitle = function () {                                                                                   // 5
    return FlowRouter.getParam('imageTitle');                                                                          // 5
  };                                                                                                                   // 5
                                                                                                                       //
  this.autorun(function () {                                                                                           // 6
    _this.subscribe('imageStream', _this.getImageTitle());                                                             // 7
  });                                                                                                                  // 8
});                                                                                                                    // 9
Template.StreamImageSmart.helpers({                                                                                    // 12
  imageContext: function () {                                                                                          // 13
    var instance = Template.instance();                                                                                // 14
    var imageTitle = instance.getImageTitle();                                                                         // 15
    return Images.findOne(imageTitle) ? [imageTitle] : [];                                                             // 16
  },                                                                                                                   // 17
  imageArgs: function (imageTitle) {                                                                                   // 18
    return Images.findOne(imageTitle);                                                                                 // 19
  }                                                                                                                    // 20
});                                                                                                                    // 12
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Market.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Market.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
  Template: function (v) {                                                                                             // 1
    Template = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
module.watch(require("./Market.html"));                                                                                // 1
module.watch(require("../../api/Products/Server/ProductsPublications.js"));                                            // 1
module.watch(require("../components/ProductItemSmart.js"));                                                            // 1
module.watch(require("../components/ProductItemSmart.html"));                                                          // 1
Template.Market.helpers({                                                                                              // 17
  products: function () {                                                                                              // 18
    return Products.find();                                                                                            // 19
  },                                                                                                                   // 20
  productArgs: function (productTitle) {                                                                               // 21
    return Products.findOne(productTitle);                                                                             // 22
  }                                                                                                                    // 23
});                                                                                                                    // 17
Template.Market.onCreated(function () {                                                                                // 27
  this.productpurchased = new ReactiveVar(false);                                                                      // 31
  this.productliked = new ReactiveVar(false);                                                                          // 32
  this.productcommented = new ReactiveVar(false);                                                                      // 33
  this.creatorfollowing = new ReactiveVar(false);                                                                      // 34
});                                                                                                                    // 36
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Media.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Media.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Template = void 0;                                                                                                 // 1
module.watch(require("meteor/templating"), {                                                                           // 1
   Template: function (v) {                                                                                            // 1
      Template = v;                                                                                                    // 1
   }                                                                                                                   // 1
}, 0);                                                                                                                 // 1
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
   FlowRouter: function (v) {                                                                                          // 1
      FlowRouter = v;                                                                                                  // 1
   }                                                                                                                   // 1
}, 1);                                                                                                                 // 1
module.watch(require("./Media.html"));                                                                                 // 1
Template.Media.helpers({                                                                                               // 7
   mediaitems: function () {                                                                                           // 8
      return Products.find();                                                                                          // 9
   }                                                                                                                   // 10
});                                                                                                                    // 7
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ProductStream.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/ProductStream.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 5
Template.StreamProductMain.onCreated(function StreamProductOnCreated() {                                               //
                                                                                                                       //
  this.mainimageconsole = new ReactiveVar( '{{product.imageone}}' );                                                   //
  this.leftarrow = new ReactiveVar( 'slideshowarrowone' );                                                             //
  this.rightarrow = new ReactiveVar( 'slideshowarrowtwo' );                                                            //
  this.productArgue = new ReactiveDict();                                                                              //
  this.productArgue.setDefault({                                                                                       //
    editing: false,                                                                                                    //
    purchased: false,                                                                                                  //
    commented: false                                                                                                   //
  });                                                                                                                  //
                                                                                                                       //
  this.getproductTitle = () => FlowRouter.getParam( 'producttitle' );                                                  //
  const prodTitle = instance.getproductTitle();                                                                        //
                                                                                                                       //
  this.autorun(() => {                                                                                                 //
  this.subscribe( 'productStream' , this.getproductTitle());                                                           //
});                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.StreamProductMain.onCreated(function StreamProductOnCreated(){                                                //
                                                                                                                       //
  this.getTextTitle = () => FlowRouter.getParam('textTitle');                                                          //
                                                                                                                       //
  this.autorun( () => {                                                                                                //
  this.subscribe('textStream', this.getTextTitle());                                                                   //
});                                                                                                                    //
                                                                                                                       //
});                                                                                                                    //
                                                                                                                       //
*/ /*                                                                                                                  //
   Template.StreamProductMain.helpers({                                                                                //
                                                                                                                       //
   productTitleArray(){                                                                                                //
   const instance = Template.instance();                                                                               //
   const prodTitle = instance.getproductTitle();                                                                       //
   return Products.findOne(prodTitle);                                                                                 //
   },                                                                                                                  //
                                                                                                                       //
   prodArgs(prodTitle){                                                                                                //
     const instance = Template.instance();                                                                             //
     const product = Products.findOne(prodTitle);                                                                      //
   }                                                                                                                   //
                                                                                                                       //
   });                                                                                                                 //
   */                                                                                                                  //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Settings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Settings.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
Template.Settings.events({                                                                                             //
'click #updatesettings': function(event,template) {                                                                    //
                                                                                                                       //
  const Membername : event.target.Membername.value;                                                                    //
  const Firstname : event.target.Firstname.value;                                                                      //
  const Lastname : event.target.Lastname.value;                                                                        //
                                                                                                                       //
                                                                                                                       //
  Meteor.call('UpdateSettings', Membername, Firstname, Lastname, function (err,response) {                             //
  if (err) {                                                                                                           //
      alert(err.messsage);                                                                                             //
    } else {                                                                                                           //
      Session.set('rendered', false);                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
}                                                                                                                      //
});                                                                                                                    //
*/                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Talent.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/Talent.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TalentFeed.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/TalentFeed.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
/*                                                                                                                     // 1
                                                                                                                       //
                                                                                                                       //
import './TalentFeed.html';                                                                                            //
                                                                                                                       //
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 //
                                                                                                                       //
  import { Template } from 'meteor/templating';                                                                        //
  import { FlowRouter } from 'meteor/kadira:flow-router';                                                              //
                                                                                                                       //
  import '../../api/Bookings/Server/BookingPublications.js';                                                           //
  import '../../api/Bookings/Bookings.js';                                                                             //
                                                                                                                       //
  // Components used inside the template                                                                               //
                                                                                                                       //
                                                                                                                       //
Template.TalentFeed.helpers({                                                                                          //
                                                                                                                       //
bookingArgs(bookingTitle) {                                                                                            //
                                                                                                                       //
const instance = Template.instance();                                                                                  //
var textTitle = instance.getTextTitle();                                                                               //
   return {                                                                                                            //
     text(){                                                                                                           //
       return Texts.findOne(textTitle);                                                                                //
     }                                                                                                                 //
   }                                                                                                                   //
 },                                                                                                                    //
 eventsArgs(eventsTitle) {                                                                                             //
 const instance = Template.instance();                                                                                 //
 var textTitle = instance.getTextTitle();                                                                              //
    return {                                                                                                           //
      text(){                                                                                                          //
        return Texts.findOne(textTitle);                                                                               //
      }                                                                                                                //
    }                                                                                                                  //
  }                                                                                                                    //
});                                                                                                                    //
                                                                                                                       //
Template.TalentFeed.onCreated( function(){                                                                             //
   this.autorun( () => {                                                                                               //
     this.subscribe('talentFeed', this.getTalentFeed());                                                               //
   });                                                                                                                 //
});                                                                                                                    //
                                                                                                                       //
}                                                                                                                      //
                                                                                                                       //
*/                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"TextStream.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/TextStream.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./TextStream.html"));                                                                            // 1
Template.StreamText.onCreated(function () {                                                                            // 3
  var _this = this;                                                                                                    // 3
                                                                                                                       //
  this.getTextTitle = function () {                                                                                    // 4
    return FlowRouter.getParam('textTitle');                                                                           // 4
  };                                                                                                                   // 4
                                                                                                                       //
  this.autorun(function () {                                                                                           // 5
    _this.subscribe('textStream', _this.getTextTitle());                                                               // 6
  });                                                                                                                  // 7
});                                                                                                                    // 8
Template.StreamText.helpers({                                                                                          // 10
  textContext: function () {                                                                                           // 11
    var instance = Template.instance();                                                                                // 12
    var textTitle = instance.getTextTitle();                                                                           // 13
    return Texts.findOne(textTitle) ? [textTitle] : [];                                                                // 14
  },                                                                                                                   // 15
  textArgs: function (textTitle) {                                                                                     // 16
    return Texts.findOne(textTitle);                                                                                   // 17
  }                                                                                                                    // 18
});                                                                                                                    // 10
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"UserSiteSmart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/UserSiteSmart.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 1
  module.watch(require("./UserSiteSmart.html"));                                                                       // 1
  Template.Users_show_page.onCreated(function () {                                                                     // 5
    var _this = this;                                                                                                  // 5
                                                                                                                       //
    this.getMemberName = function () {                                                                                 // 7
      return FlowRouter.getParam('Membername');                                                                        // 7
    };                                                                                                                 // 7
                                                                                                                       //
    this.autorun(function () {                                                                                         // 9
      _this.subscribe('userdata', {                                                                                    // 10
        Membername: _this.getMemberName()                                                                              // 10
      });                                                                                                              // 10
    });                                                                                                                // 11
    this.userconnection = new ReactiveDict();                                                                          // 13
    this.userconnection.setDefault({                                                                                   // 15
      editing: false,                                                                                                  // 16
      connected: false,                                                                                                // 17
      request: true                                                                                                    // 18
    });                                                                                                                // 15
  });                                                                                                                  // 20
  Template.ProductWebsite.helpers({                                                                                    // 22
    productWebs: function (memberName) {                                                                               // 23
      return Products.find({                                                                                           // 24
        productmember: memberName                                                                                      // 24
      });                                                                                                              // 24
    }                                                                                                                  // 25
  });                                                                                                                  // 22
  Template.Users_show_page.events({                                                                                    // 28
    'click #listproducts': function (event, template) {                                                                // 29
      Template.instance.selling.set('true');                                                                           // 30
    },                                                                                                                 // 31
    'click #messagez': function (event, template) {                                                                    // 32
      Blaze.render(Template.NewMessage, document.body);                                                                // 33
    },                                                                                                                 // 34
    'click #edit': function (event, template) {                                                                        // 35
      template.editing.set(editing, true);                                                                             // 36
    },                                                                                                                 // 37
    'click #connect': function (event, template) {                                                                     // 38
      Meteor.call('addFollowing');                                                                                     // 39
    }                                                                                                                  // 40
  });                                                                                                                  // 28
  Template.Users_show_page.helpers({                                                                                   // 43
    memberNameArray: function () {                                                                                     // 44
      var instance = Template.instance();                                                                              // 45
      var memberName = instance.getMemberName();                                                                       // 46
      return Meteor.users.findOne(memberName);                                                                         // 47
    },                                                                                                                 // 48
    memberArgs: function (memberName) {                                                                                // 49
      return Meteor.users.findOne(memberName);                                                                         // 50
    }                                                                                                                  // 51
  });                                                                                                                  // 43
  Template.ProductWebsite.helpers({                                                                                    // 55
    productWebArgs: function (productWeb) {                                                                            // 56
      return Products.findOne(productWeb);                                                                             // 57
    },                                                                                                                 // 58
    productWebs: function (productWeb) {                                                                               // 59
      return Products.findOne(productWeb);                                                                             // 60
    }                                                                                                                  // 61
  }); /*                                                                                                               // 55
      Template.Users_show_page.helpers({                                                                               //
          editing(memberName) {                                                                                        //
          return Template.instance.state('editing').get();                                                             //
          },                                                                                                           //
          selling(memberName){                                                                                         //
          return Template.instance.selling.get();                                                                      //
          },                                                                                                           //
          request(memberName) {                                                                                        //
          return Template.instance.request.get();                                                                      //
          },                                                                                                           //
          connect(memberName){                                                                                         //
          return Template.instance.connect.get();                                                                      //
          },                                                                                                           //
          memberNameArray() {                                                                                          //
          const instance = Template.instance();                                                                        //
          const memberName = instance.getMemberName();                                                                 //
          return Meteor.users.findOne(memberName) ? [memberName] : [];                                                 //
        },                                                                                                             //
          memberArgs(memberName) {                                                                                     //
          const instance = Template.instance();                                                                        //
          return {                                                                                                     //
            Member,                                                                                                    //
            editing: instance.state.equals('editing', true),                                                           //
            request: instate.state.equals('request', true),                                                            //
            connected: instance.state.equals('connected', true)                                                        //
          };                                                                                                           //
        }                                                                                                              //
      });                                                                                                              //
      */                                                                                                               //
}                                                                                                                      // 93
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoFeed.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/VideoFeed.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (Meteor.isClient) {                                                                                                 // 2
  var Template = void 0;                                                                                               // 1
  module.watch(require("meteor/templating"), {                                                                         // 1
    Template: function (v) {                                                                                           // 1
      Template = v;                                                                                                    // 1
    }                                                                                                                  // 1
  }, 0);                                                                                                               // 1
  var FlowRouter = void 0;                                                                                             // 1
  module.watch(require("meteor/kadira:flow-router"), {                                                                 // 1
    FlowRouter: function (v) {                                                                                         // 1
      FlowRouter = v;                                                                                                  // 1
    }                                                                                                                  // 1
  }, 1);                                                                                                               // 1
  module.watch(require("../../api/Video/Server/VideoPublications.js"));                                                // 1
  module.watch(require("../components/VideoItemSmart.js"));                                                            // 1
  module.watch(require("../components/VideoItemSmart.html"));                                                          // 1
  module.watch(require("../pages/VideoFeed.html"));                                                                    // 1
  Template.VideoFeed.helpers({                                                                                         // 17
    videos: function () {                                                                                              // 18
      return Videos.find();                                                                                            // 19
    }                                                                                                                  // 20
  });                                                                                                                  // 17
  Template.VideoFeed.onCreated(function () {                                                                           // 24
    var _this = this;                                                                                                  // 24
                                                                                                                       //
    this.autorun(function () {                                                                                         // 25
      _this.subscribe('videoFeed', _this.getVideoFeed());                                                              // 26
    });                                                                                                                // 27
  });                                                                                                                  // 28
}                                                                                                                      // 30
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"VideoStream.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/VideoStream.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./VideoStream.html"));                                                                           // 1
Template.VideoStreamSmart.onCreated(function () {                                                                      // 4
  var _this = this;                                                                                                    // 4
                                                                                                                       //
  this.getVideoTitle = function () {                                                                                   // 5
    return FlowRouter.getParam('vtitle');                                                                              // 5
  };                                                                                                                   // 5
                                                                                                                       //
  this.autorun(function () {                                                                                           // 6
    _this.subscribe('videoStream', _this.getVideoTitle());                                                             // 7
  });                                                                                                                  // 8
});                                                                                                                    // 9
Template.VideoStreamSmart.helpers({                                                                                    // 11
  videoContext: function () {                                                                                          // 12
    var instance = Template.instance();                                                                                // 13
    var videoTitle = instance.getVideoTitle();                                                                         // 14
    return Video.findOne(videoTitle) ? [videoTitle] : [];                                                              // 15
  },                                                                                                                   // 16
  videoArgs: function (videoTitle) {                                                                                   // 17
    return Videos.findOne(videoTitle);                                                                                 // 18
  }                                                                                                                    // 19
});                                                                                                                    // 11
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"YourMessagesSmart.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/pages/YourMessagesSmart.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lib":{"errors.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/lib/errors.js                                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  displayError: function () {                                                                                          // 1
    return displayError;                                                                                               // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
                                                                                                                       //
var displayError = function (error) {                                                                                  // 2
  if (error) {                                                                                                         // 3
    // It would be better to not alert the error here but inform the user in some                                      // 4
    // more subtle way                                                                                                 // 5
    alert('aye'); // eslint-disable-line no-alert                                                                      // 6
  }                                                                                                                    // 7
};                                                                                                                     // 8
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"accounts":{"accounts-templates.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/accounts/accounts-templates.js                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"stylesheets":{"create.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/create.css                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  ""                                                                                                                   // 2
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"dashboard.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/dashboard.css                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  ""                                                                                                                   // 2
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"lowernavigation.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/lowernavigation.css                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  ".lowerrow {\n  padding-left: 1%;\n  margin-bottom: 15em;\n}\n\n#network_nav {\n  bottom: 0px;\n    background-color: #000000;\n      width: 100%;\n  height: 10%;\n  position: fixed;\n  font-family: San Francisco Text;\n  bottom: 0px;\n  width: 100%;\n  height: 10%;\n  position: fixed;\n  font-weight: 300;\n  font-size: .7em;\n  letter-spacing: 9px;\n  color: white;\n  font-family: San Francisco Text;\n  z-index: 10000000000000;\n}\n\n\n#network_nav > ul > li {\n  display: inline-block;\n      width: 18%;\n      background-color: rgba(163, 178, 255, 0.14);\n  }\n\n\n#network_nav .nav-pills > li > a {\n  color: white;\n}\n#network_nav .nav-pills > li.active > a, .cloud-modal .nav-pills > li.active > a:hover {\n  background-color: black;\n}\n#network_nav .nav-pills > li > a:hover {\n  background-color: transparent;\n}\n\n#creatid {\n      display: inline-block;\n}\n\n#cloudicon {\n  height: 4em;\n  margin-right: 1em;\n  float: left;\n  border: 1px solid #b8ffc4;\n  padding-left: 10em;\n  padding-right: 10em;\n  margin-top: .4em;\n  margin-left: 1em;\n}\n\n#messages {\n  font-family: \"San Francisco Text\";\n      color: white;\n      height: 4em;\n      margin-right: 1em;\n      float: left;\n      border: 1px solid #e7c0ff;\n      padding-left: 10em;\n      padding-right: 10em;\n      margin-top: .4em;\n}\n\n#addmembbutton {\n  z-index: 10000000000000000000000000;\ncolor: #7b7b7b;\nletter-spacing: 3px;\nborder-radius: 10px;\nfont-size: .7em;\nmargin-left: 5%;\nfont-family: \"San Francisco Text\";\nborder: 1px solid #bbbbbb;\npadding: 1em;\npadding-top: .7em;\npadding-bottom: .7em;\n}\n\n#createicon {\n  display: inline-block;\n  position: relative;\n  height: 3em;\n  width: 7.5em;\n  padding-right: 10em;\n  padding-left: 10em;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  z-index: 10000000000;\n}\n\n#usericon {\n  height: 4em;\n      float: left;\n      border: 1px solid #d5e8ff;\n      padding-left: 10em;\n      padding-right: 10em;\n      margin-top: .4em;\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"messages.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/messages.css                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  "#closecurrent {\n  right: 0px;\n  top: 0px;\n  border: 1px solid black;\n  color: white;\n  position: fixed;\n  padding: 1em;\n  background-color: black;\n  margin-top: 4em;\n}\n\n#backmessage {\npadding: 1em;\nbackground-color: black;\ncolor: white;\n}\n\n#current {\n  color: black;\n  margin-left: 30em;\n}\n\n#Tooo {\n  margin-top: 5.2em;\n  position: fixed;\n  color: black;\n}\n\n\n#calltologin {\n  font-family: \"San Francisco Text\";\n    color: white;\n    margin-top: 18em;\n    position: fixed;\n    background-color: rgba(255, 255, 255, 0.35);\n    width: 10%;\n    text-align: center;\n    padding: 1em;\n    display: inline-block;\n    margin-left: 50%;\n    border-radius: 10px;\n    border: 1px solid white;\n}\n\n#tooo {\n  margin-top: 5em;\n      position: fixed;\n}\n\n#messagenavigator {\n  position: absolute;\n  font-family: \"San Francisco Text\";\n  top: 0px;\n  margin-top: 7em;\n  z-index: 10000000000000000000000000000;\n}\n\n#creategroup {\n  color: #ffffff;\n  margin-top: 4.7em;\n  right: 0px;\n  z-index: 1000000000000000;\n  background-color: rgba(0, 7, 56, 0.98);\n  position: fixed;\n  border: 1px solid rgba(0, 7, 56, 0.98);\n  padding-top: .5em;\n  padding-bottom: .5em;\n  padding-left: .5em;\n  padding-right: .5em;\n}\n\n#messageee {\n  font-family: \"San Francisco Text\";\n    color: black;\n    position: fixed;\n    display: inline-block;\n    z-index: 1000000000000000000000000000000;\n    margin-top: 8.2em;\n    margin-left: -8em;\n    padding-top: 1.8em;\n}\n\n.close3 {\n  color: #ffffff;\n  z-index: 1000000000000000000000000000;\n  border-radius: 2px;\n  float: right;\n  position: fixed;\n  width: 15%;\n  text-align: center;\n  margin-right: 1em;\n  font-size: .8em;\n  background-color: rgb(0, 0, 0);\n  border: rgba(78, 0, 0, 0.42);\n  padding-top: .5em;\n  padding-bottom: .5em;\n  margin-top: 5.39%;\n  right: 0px;\n  margin-left: .1%;\n  font-family: \"San Francisco Text\";\n  letter-spacing: 15px;\n}\n\n.close5{\n  color: #ffffff;\n  z-index: 1000000000000000000000000000;\n  display: block;\n  top: 0px;\n  width: 9.9%;\n  background-color: rgba(8, 154, 179, 0.58);\n  padding-top: .5em;\n  padding-bottom: .5em;\n  margin-top: 5.7%;\n  margin-left: 2.5%;\n  position: fixed;\n  font-family: \"San Francisco Text\";\n  padding-left: 4em;\n  padding-right: 5.5em;\n}\n\n.close4{\n  color: #616161;\n  z-index: 1000000000000000000000000000;\n  width: 12%;\n  float: right;\n  margin-right: 2%;\n  right: 0px;\n  text-align: center;\n  top: 0px;\n  border-radius: 5px;\n  border: 1px solid #888888;\n  background-color: rgba(254, 255, 255, 0.98);\n  margin-top: 6.7%;\n  position: fixed;\n  font-family: \"San Francisco Text\";\n  padding-left: 4em;\n  padding-right: 5.5em;\n  padding-bottom: .4em;\n  padding-top: .4em;\n}\n\n\n#calltosignup {\n  font-family: \"San Francisco Text\";\n    color: white;\n    margin-top: 18em;\n    position: fixed;\n    background-color: rgba(255, 255, 255, 0.35);\n    width: 10%;\n    text-align: center;\n    padding: 1em;\n    display: inline-block;\n    margin-left: 35%;\n    border-radius: 10px;\n    border: 1px solid white;\n}\n\n#createaamessage: hover {\n  background-color: white;\nwidth: 14.9%;\nfont-family: \"San Francisco Text\";\nfont-size: 1em;\ncolor: white;\ndisplay: inline-block;\nposition: absolute;\npadding-right: .4em;\nz-index: 10000000000;\ncolor: black;\nmargin-top: .2em;\npadding-top: .6em;\npadding-bottom: .6em;\nborder: 1px solid white;\nletter-spacing: .3em;\ntext-align: center;\nfont-size: .8em;\nmargin-left: 52%;\n}\n\n#send2{\n  padding-top: 1.2em;\n  padding-bottom: 1.6em;\n  width: 100%;\n  bottom: 0px;\n  border: none;\n  background-color: rgb(0, 82, 48);\n  color: rgb(255, 255, 255);\n  font-family: \"San Francisco Text\";\n  font-size: .8em;\n  right: 0px;\n  position: fixed;\n  z-index: 10000000000000000000000000000;\n  letter-spacing: .4em;\n  margin-bottom: 3.3em;\n}\n\n#addmessages {\n  font-family: \"San Francisco Text\";\n  background-color: rgb(0, 29, 24);\n  padding-top: 1.2em;\n  letter-spacing: 15px;\n  font-size: .85em;\n  margin-bottom: 4.5em;\n  font-weight: 300;\n  border: 1px solid #cecece;\n  color: #fefefe;\n  position: fixed;\n  bottom: 0px;\n  padding-bottom: 1.2em;\n  width: 100%;\n  text-align: center;\n}\n\n#nomessages {\n  font-family: \"San Francisco Text\";\n  margin-top: 12em;\n  color: #000000;\n  text-align: -webkit-center;\n  width: 100%;\n  font-weight: 300;\n  letter-spacing: 1px;\n}\n\n#messageslabel {\n  color: rgb(0, 0, 0);\n  font-family: \"San Francisco Text\";\n  text-transform: uppercase;\n  border: 1px solid rgba(0, 0, 0, 0);\n  top: 0px;\n  width: 100%;\n  text-align: center;\n  margin-top: 4.4em;\n  position: fixed;\n  padding-right: 12em;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  letter-spacing: .3em;\n  display: inline-block;\n  border-radius: 4px;\n  font-size: 1em;\n  z-index: 100000000000000000000000000000;\n}\n\n#newmessagelabel {\n  color: rgb(0, 0, 0);\n  font-family: \"San Francisco Text\";\n  text-transform: uppercase;\n  position: absolute;\n  border: 1px solid rgba(0, 0, 0, 0);\n  padding-left: 12em;\n  margin-left: 40%;\n  padding-right: 12em;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  letter-spacing: .3em;\n  background-color: rgba(0, 0, 0, 0.02);\n  margin-top: .5em;\n  display: inline-block;\n  border-radius: 4px;\n  font-size: .8em;\n  z-index: 10000000000000000000000000000000000;\n}\n\n#newmessage {\n  color: #ffffff;\nz-index: 1000000000000000000000000000;\ndisplay: block;\nposition: fixed;\nwidth: 70%;\nheight: 94%;\nmargin-left: 20%;\ntop: 0px;\nbackground-color: rgb(0, 0, 0);\nmargin-top: 4.5%;\nfont-family: \"San Francisco Text\";\npadding-left: 4em;\npadding-right: 4em;\npadding-bottom: .4em;\npadding-top: .4em;\n}\n\n#tomessage {\n\tpadding-bottom: 1em;\n\tpadding-top: 1em;\n\twidth: 60%;\n\tletter-spacing: .1em;\n\tborder-left: sienna;\n\tborder-right: none;\n\tborder-top: none;\n\tmargin-left: 2em;\n\tborder-bottom: none;\n\tmargin-top: 4.2em;\n\tfont-weight: 300;\n\tposition: fixed;\n\tz-index: 10000000;\n\tmargin-bottom: .3em;\n\tdisplay: inline-block;\n\tbackground-color: rgba(255, 255, 255, 0.73);\n\tcolor: rgb(0, 0, 0);\n\tfont-size: 1em;\n\tfont-family: \"San Francisco Text\";\n}\n\n#tooo{\n  margin-top: 5em;\nposition: fixed;\ncolor: black;\n}\n\n#attach {\n  padding-top: 1.2em;\n  padding-bottom: 1.2em;\n  width: 22.8%;\n  bottom: 0px;\n  border: none;\n  background-color: rgb(0, 4, 56);\n  color: rgb(255, 255, 255);\n  font-family: \"San Francisco Text\";\n  font-size: .8em;\n  position: fixed;\n  left: 0px;\n  margin-left: 22.4%;\n  z-index: 10000000000000000000000000000;\n  letter-spacing: .4em;\n  text-align: center;\n}\n\n#newmessaging {\n\twidth: 60%;\n\tborder-bottom: none;\n\tborder-left: none;\n\tborder-top: none;\n\tletter-spacing: .05em;\n\tborder-right: none;\n\tpadding-top: .4em;\n\tposition: fixed;\n\tpadding-bottom: .3em;\n\tmargin-top: 5em;\n\tz-index: 1000000000;\n\tfont-weight: 300;\n\tdisplay: block;\n\tcolor: rgb(0, 0, 0);\n\tbackground-color: rgb(255, 255, 255);\n\tfont-size: 1.6em;\n\tfont-family: \"San Francisco Text\";\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"paymentModal.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/paymentModal.css                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  "\n\n.modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\n  background-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -webkit-linear-gradient(left, rgb(186, 203, 210) 30%, rgb(156, 173, 160) 100%);\n  background-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: linear-gradient(to left, #002310 0% #061833 100%);\n  z-index: 10000000000000;\n}\n\n\n\n\n.close2 {\n  font-family: \"San Francisco Text\";\n      border: 1px solid #f7f7f7;\n      padding-top: .3em;\n      background-color: rgba(0, 0, 0, 0);\n      color: white;\n      display: inline-block;\n      width: 1%;\n      font-weight: 300;\n      margin-top: .3em;\n      margin-left: .3em;\n      padding-right: .8em;\n      padding-left: .8em;\n      padding-bottom: .3em;\n      border-radius: 5px;\n}\n\n\n/* Modal Content/Box */\n\n\n\n\n/* The Close Button */\n.close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"products.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/products.css                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  "#commentbutton {\n  font-family: \"San Francisco Text\";\n  padding-left: 5em;\n  padding-right: 5em;\n  right: 0px;\n  margin-left: 39%;\n  float: left;\n  display: inline-block;\n  color: rgb(255, 255, 255);\n  background-color: rgb(71, 88, 75);\n  border: none;\n  font-size: .8em;\n  text-transform: uppercase;\n  letter-spacing: .4em;\n  bottom: 0em;\n  padding-top: 1.1em;\n  padding-bottom: 1.1em;\n}\n\n#lovebutton {\nfont-family: \"San Francisco Text\";\npadding-left: 5em;\npadding-right: 5em;\nright: 0px;\nmargin-left: 20%;\nfloat: left;\ndisplay: inline-block;\ncolor: rgb(255, 255, 255);\nbackground-color: rgb(71, 88, 75);\nborder: none;\nfont-size: .8em;\ntext-transform: uppercase;\nletter-spacing: .4em;\nbottom: 0em;\npadding-top: 1.1em;\npadding-bottom: 1.1em;\n}\n\n#sharebutton {\n  font-family: \"San Francisco Text\";\n  padding-left: 5em;\n  padding-right: 5em;\n  right: 0px;\n  margin-left: 30%;\n  float: left;\n  display: inline-block;\n  color: rgb(255, 255, 255);\n  background-color: rgb(71, 88, 75);\n  border: none;\n  font-size: .8em;\n  text-transform: uppercase;\n  letter-spacing: .4em;\n  bottom: 0em;\n  padding-top: 1.1em;\n  padding-bottom: 1.1em;\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"settings.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/settings.css                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  "\n#Settings {\n  margin-top: 5em;\n    position: fixed;\n    font-family: \"San Francisco Text\";\n    z-index: 10000000000000;\n    font-size: 2em;\n    color: black;\n    float: right;\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"talent.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/talent.css                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  "/*****************************************************************************/\n\n\n/* Directory: Style */\n\n\n/*****************************************************************************/\n\n\n\n\n#fieldsearch {\n  border-radius: 50px;\n  width: 18%;\n}\n\n\n#posnopp {\n   border-radius: 50px;\n  margin-left: 20em;\n  margin-top: 1em;\n  width: 18%;\n}\n\n#locnopp {\n   border-radius: 50px;\n  width: 18%;\n}\n\n#searchopp {\n  border-radius: 50px;\n}\n\n#posopp:hover {\n color: black;\n border-color: black;\n}\n\n#locopp:hover {\ncolor: black;\nborder-color: black;\n}\n\n#searchopp:hover {\ncolor: black;\nborder-color: black;\n}\n\n\n\n\n.directory {\n  background-color: #19222D;\n}\ntable, th, td {\n  text-align: center;\n}\n\n/* td {\n    height: 170px;\n} */\n\ntable, tr, th, td {\n  border-collapse: collapse;\n}\n.directory_profile_files {\n  display: block;\n  min-height: 230px;\n  margin: 0 auto;\n  text-align: left;\n}\n.directory_profile_files > * {\n  display: inline;\n  height: 200px;\n  width: 200px;\n  margin: 15px 7.5px;\n}\n.directory_profile_files audio, .directory_profile_files video {\n  width: 200px;\n}\n.directory_profile_info {\n  display: block;\n}\n.directory_profile_info .propic {\n  margin-right: 65px;\n}\n.directory_profile_info h2 {\n  color: black;\n  text-align: left;\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: bold;\n}\n.directory_profile_info img {\n  border-radius: 50%;\n  border: thin solid black;\n  margin-left: 25px;\n}\n.directory_profile_info p {\n  text-align: right;\n  width: 200px;\n  margin-right: 100px;\n  margin-top: 10px;\n  color: #737373;\n}\n.directory_tags {\n  height: 50px;\n  background-color: #dae5e8;\n  box-shadow: 0px 0px 24px rgba(188, 188, 188, 1) inset;\n}\n.directory_table td {\n  border: none;\n}\n.sidebar {\n  position: absolute;\n  background-color: black;\n  left: 0px;\n  top: 3.5em;\n  width: 10em;\n  height: 100%;\n  color: white;\n}\n.sidebar .list-group-item {\n  background-color: black;\n  color: white;\n  border-radius: 0px;\n}\n.sidebarContent {\n  position: fixed;\n  width: 10em;\n}\n.main_container {\n  overflow: hidden;\n  position: relative;\n}\n.main_container .tab-content {\n  min-height: 50em;\n}\n.network_main {\n  overflow: auto;\n}\n#book, #subscribe {\n  height: 100px;\n  width: 100px;\n  border: none;\n}\n#invitationtext {\n  width: 250px;\n  height: 100px;\n}\n#browseopp>tr, #browseopp>table, #browsespace>tr, #browsespace>table {\n  width: 100%;\n}\n#browseopp>td, #browsespace>td {\n  width: 33%;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n}\n.carousel-inner > .item > img, .carousel-inner > .item > a > img {\n  width: 10em;\n  height: 10em;\n  max-height: 10em;\n  margin: auto;\n  padding-top: 1em;\n  padding-bottom: 1em;\n}\n#network_nav {\nbackground-color: #000000;\n}\n#network_nav .nav-pills > li > a {\n  color: white;\n}\n#network_nav .nav-pills > li.active > a, .cloud-modal .nav-pills > li.active > a:hover {\n  background-color: black;\n}\n#network_nav .nav-pills > li > a:hover {\n  background-color: transparent;\n}\n#searchForm .searchInput {\n  display: inline;\n  float: left;\n  position: absolute;\n  left: 28.4em;\n  top: 59.3em;\n}\n.header {\n  position: relative;\n  width: 100%;\n  background-color: white;\n  height: 55em;\n}\n.header img {\n  width: 100%;\n  height: 50em;\n  display: block;\n}\n#searchForm .suggestions {\n  position: absolute;\n  left: 28.5em;\n  top:61.5em;\n}\n#submitSearch {\n  position: absolute;\n  left: 42em;\n  top: 59.3em;\n  height: 2.3em;\n}\n#fade {\n  height: 75em;\n  width: 100%;\n  position: absolute;\n  bottom:5em;\n  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&0+0,0+35,0+66,0.26+78,0.52+87,0.77+92,1+100 */\n  background: -moz-linear-gradient(top, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 35%, rgba(255,255,255,0) 66%, rgba(255,255,255,0.26) 78%, rgba(255,255,255,0.52) 87%, rgba(255,255,255,0.77) 92%, rgba(255,255,255,1) 100%); /* FF3.6+ */\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(35%,rgba(255,255,255,0)), color-stop(66%,rgba(255,255,255,0)), color-stop(78%,rgba(255,255,255,0.26)), color-stop(87%,rgba(255,255,255,0.52)), color-stop(92%,rgba(255,255,255,0.77)), color-stop(100%,rgba(255,255,255,1))); /* Chrome,Safari4+ */\n  background: -webkit-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 35%,rgba(255,255,255,0) 66%,rgba(255,255,255,0.26) 78%,rgba(255,255,255,0.52) 87%,rgba(255,255,255,0.77) 92%,rgba(255,255,255,1) 100%); /* Chrome10+,Safari5.1+ */\n  background: -o-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 35%,rgba(255,255,255,0) 66%,rgba(255,255,255,0.26) 78%,rgba(255,255,255,0.52) 87%,rgba(255,255,255,0.77) 92%,rgba(255,255,255,1) 100%); /* Opera 11.10+ */\n  background: -ms-linear-gradient(top, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 35%,rgba(255,255,255,0) 66%,rgba(255,255,255,0.26) 78%,rgba(255,255,255,0.52) 87%,rgba(255,255,255,0.77) 92%,rgba(255,255,255,1) 100%); /* IE10+ */\n  background: linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 35%,rgba(255,255,255,0) 66%,rgba(255,255,255,0.26) 78%,rgba(255,255,255,0.52) 87%,rgba(255,255,255,0.77) 92%,rgba(255,255,255,1) 100%); /* W3C */\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 ); /* IE6-9 */\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"yoursite.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/yoursite.css                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  "#messagez {\n  border: 3px solid #000000;\ntext-align: center;\nmargin-top: 23em;\nfont-size: .7em;\nfont-family: \"San-Francisco\";\nletter-spacing: .5em;\npadding-top: 1em;\nfont-weight: 600;\npadding-bottom: 1em;\ncolor: #000000;\npadding-left: 3em;\npadding-right: 3em;\nposition: absolute;\ndisplay: '{{messaging}}';\nfloat: right;\nmargin-left: 5%;\n}\n\n#edit {\n  border: 1px solid black;\nz-index: 1000000000000000000000000;\nposition: fixed;\ncolor: black;\npadding-top: .5em;\npadding-bottom: .5em;\npadding-left: 1em;\npadding-right: 1em;\nfont-family: \"San Francisco Text\";\nletter-spacing: 3px;\nborder-radius: 5px;\nright: 0px;\nmargin-right: 2em;\nmargin-top: 1em;\n}\n\n\n#connect {\n  border: 3px solid #000000;\n  text-align: center;\n  display: '{{connect}}';\n  margin-top: 23em;\n  font-size: .7em;\n  font-family: \"San-Francisco\";\n  letter-spacing: .5em;\n  padding-top: 1em;\n  font-weight: 600;\n  padding-bottom: 1em;\n  color: #000000;\n  padding-left: 3em;\n  padding-right: 3em;\n  position: absolute;\n  float: right;\n  margin-left: 20%;\n}\n\n#userimagemain {\n  height: 30em;\n  width: 50%;\n  float: left;\n  background-color: black;\n  margin-top: 5%;\n  border: 1px solid white;\n}\n\n#usersitecontainer {\n  background-color: rgb(255, 255, 255);\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 100000000;\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.css":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/ui/stylesheets/main.css                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.exports = require("meteor/modules").addStyles(                                                                  // 1
  "/* CSS declarations go here */\n\n@font-face {\n\tfont-family:'Roboto';\n\tsrc: url('/fonts/Roboto-Bold.ttf');\n\tfont-weight: bold;\n}\n\n@font-face {\n\tfont-family:'Roboto';\n\tsrc: url('/fonts/Roboto-Black.ttf');\n}\n\n\n@font-face {\n\tfont-family: 'San Francisco Text';\n\tsrc: url('../fonts/System San Francisco Display Regular.ttf') format('truetype')\n;\n}\n\n@font-face {\n  font-family: 'San Francisco Text';\n  font-weight: 600;\n  src: url('/fonts/System San Francisco Display Regular.ttf') format('truetype')\n;\n}\n\n@font-face {\n  font-family: 'San Francisco Text';\n  font-weight: 400;\n  src: url('/fonts/System San Francisco Text Medium.ttf') format('truetype')\n;\n}\n\n@font-face {\n  font-family: 'San Francisco Text';\n  font-weight: 300;\n  src: url('/fonts/System San Francisco Display Thin.ttf') format('truetype')\n;\n}\n@font-face {\n  font-family: 'San Francisco Text';\n  font-weight: 200;\n  src: url('/fonts/System San Francisco Display Ultralight.ttf') format('truetype'),\n;\n}\n\n@font-face {\n  font-family: 'Coutoure';\n  src: url('/fonts/couture-bld.otf');\n}\n\n@font-face {\n  font-family: 'Coutoure';\n  font-weight: 'bold';\n  src: url('/fonts/couture-bldit.otf');\n}\n\n@font-face {\n\tfont-family: 'Bebas';\n\tsrc: url('/BEBAS.TTF')\n}\n\n@font-face {\n\tfont-family: \"Proxima\";\n\tsrc: url('/fonts/Proxima.otf')\n}\n\nul {\n  padding-left: 1%;\n  margin-bottom: 15em;\n}\n\nbody {\n   margin: 0;\n   padding: 0;\n}\n\nhtml {\n   margin: 0;\n   padding: 0;\n}\n\n\n/* CSS declarations go here */\n\n@font-face {\n\tfont-family:'Roboto';\n\tsrc: url('/fonts/Roboto-Bold.ttf');\n\tfont-weight: bold;\n}\n\n@font-face {\n\tfont-family:'Roboto';\n\tsrc: url('/fonts/Roboto-Black.ttf');\n}\n\n\n@font-face {\n\tfont-family: 'San-Francisco';\n\tsrc: url('../fonts/System San Francisco Display Regular.ttf') format('truetype')\n}\n\n@font-face {\n  font-family: 'San-Francisco';\n  font-weight: 400;\n  src: url('/fonts/System San Francisco Display Regular.ttf')  format('truetype')\n\n}\n@font-face {\n  font-family: 'San-Francisco';\n  font-weight: 300;\n  src: url('/fonts/System San Francisco Display Thin.ttf') format('truetype')\n}\n@font-face {\n  font-family: 'San-Francisco';\n  font-weight: 200;\n  src: url('/fonts/System San Francisco Display Ultralight.ttf') format('truetype')\n}\n\n.master-navbartwo1 {\n    background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\n    background-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n    background-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n    background-image: -webkit-linear-gradient(left, rgb(0, 25, 13) 30%, rgb(0, 3, 35) 100%);\n    background-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n    background-image: linear-gradient(to left, #002310 0% #061833 100%);\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    z-index: 500;\n    top: 0px;\n    right: 0px;\n}\n\n.master-navbarthree1 {\n    height: 100%;\n    top: 0px;\n    left: 0;\n    width: 100%;\n    z-index: 550;\n    position: fixed;\n    opacity: .95;\n    background-color: rgba(255, 255, 255, 0.39);\n}\n\n#login-buttons {\n    display: inline-block;\n    margin-right: 0.2px;\n    line-height: 1;\n    margin-top: 10em;\n    position: fixed;\n    z-index: 100000000000000000000000000000;\n}\n\n#creatordescription {\n  font-family: \"San Francisco Text\";\n  font-weight: 600;\n  color: black;\n  display: block;\n  margin-left: 10%;\n  width: 75%;\n  margin-top: 22em;\n  z-index: 100000000000000000000000000000000;\n  position: fixed;\n  letter-spacing: .3em;\n  border-left: 3px dashed #FFFFFF;\n  padding-left: 3%;\n}\n\n  #creatornetwork {\n    font-family: \"San Francisco Text\";\n    color: black;\n    z-index: 100000000000;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: .5em;\n    margin-top: 10em;\n    display: block;\n    margin-left: 10%;\n    padding-bottom: 1em;\n    border-bottom: 3px dashed rgb(255, 255, 255);\n    position: fixed;\n}\n\n\n\n\n\n\n.maintext2{\n  display: inline-block;\n      text-align: center;\n      z-index: 1001;\n      -webkit-transition: all 150ms ease;\n      -moz-transition: all 150ms ease;\n      -o-transition: all 150ms ease;\n      transition: all 150ms ease;\n      color: #716969;\n      font-family: \"San Francisco Text\";\n      padding-right: 1.7em;\n      padding-left: .3em;\n      color: rgb(255, 255, 255);\n      border-bottom: none;\n      border-top: none;\n      letter-spacing: 2px;\n      font-weight: 600;\n      font-size: .8em;\n      border-right: none;\n      border-left: none;\n      text-decoration: none;\n      margin-top: 3.4em;\n}\n\n#joingemail {\n  background-color: rgba(0, 0, 0, 0.5);\nborder: none;\nwidth: 60%;\nheight: 5em;\nborder-radius: 5px;\npadding-left: 5em;\nfont-size: 1.2em;\nletter-spacing: .4em;\ntext-transform: uppercase;\ncolor:white;\nposition: absolute;\n}\n\n#launchtag {\n  z-index: 100000000000000000000000;\n  display: block;\n  width: 100%;\n  position: absolute;\n  bottom: 0px;\n  top: 6em;\n  background-image: -webkit-linear-gradient(left, rgb(187, 187, 187) 30%, rgb(109, 109, 109) 100%);\n}\n\n#signupform {\n  width: 80%;\n      display: block;\n      z-index: 1000000000000000000000000;\n      position: relative;\n      margin-left: auto;\n      margin-right: auto;\n      margin-top: 8em;\n}\n\n\n#joingemail:hover {\nbackground-color: rgba(0, 0, 0, 0.5);\nborder: 1px solid turquoise;\nwidth: 60%;\nheight: 5em;\nborder-radius: 5px;\npadding-left: 5em;\nfont-size: 1.2em;\nletter-spacing: .4em;\ntext-transform: uppercase;\n}\n\n#sizes {\nmargin-bottom: 1em;\ndisplay: block;\n}\n\n#signup{\n\tfont-size: 1.2em;\n\tposition: absolute;\n\tborder: 1px solid white;\n\tcolor: rgb(255, 255, 255);\n\tletter-spacing: .4em;\n\tfont-family: \"San Francisco Text\";\n\tpadding-left: 1.8em;\n\tpadding-right: 1.8em;\n\theight: 5em;\n\tmargin-top: 10em;\n\twidth: 70%;\n\tbackground-color: black;\n\tborder-radius: 5px;\n}\n\n#login{\n\tfont-size: 1.2em;\n\tposition: absolute;\n\tborder: 1px solid white;\n\tcolor: rgb(255, 255, 255);\n\tletter-spacing: .4em;\n\tfont-family: \"San Francisco Text\";\n\tpadding-left: 1.8em;\n\tpadding-right: 1.8em;\n\theight: 5em;\n\tmargin-top: 15em;\n\twidth: 70%;\n\tbackground-color: black;\n\tborder-radius: 5px;\n}\n\n#signup:hover{\n  height: 5em;\n  font-size: 1.2em;\n  border: 1px solid white;\n  color: rgb(255, 255, 255);\n  letter-spacing: .4em;\n  font-family: \"San Francisco Text\";\n  padding-left: 1.8em;\n  padding-right: 1.8em;\n  background-color: rgba(255, 255, 255, 0.18);\n  border-radius: 5px;\n}\n\n#successmessage {\nposition: fixed;\ncolor: white;\nfont-family: \"San Francisco Text\";\nmargin-top: 5em;\ndisplay: block;\nz-index: 100000000000000000000000000000;\n}\n\n#idsent {\n  background-color: rgba(66, 66, 66, 0.31);\npadding-bottom: .4em;\npadding-top: .4em;\nmargin-left: 40em;\n}\n\n.modal3 {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\n  background-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -webkit-linear-gradient(left, rgb(186, 203, 210) 30%, rgb(156, 173, 160) 100%);\n  background-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: linear-gradient(to left, #002310 0% #061833 100%);\n  z-index: 10000000000000;\n}\n\n.at-title {\n  font-family: \"San Francisco Text\";\ncolor: white;\ntext-transform: uppercase;\ntext-align: center;\nmargin-top: 4em;\nletter-spacing: 3px;\n}\n\n#at-pwd-form {\n  text-align: center;\ncolor: white;\nfont-family: \"San Francisco Text\";\nfont-weight: 300;\nletter-spacing: 3px;\n}\n\n#at-field-email{\n\tfont-family: \"San Francisco Text\";\n\t    text-transform: uppercase;\n\t    color: white;\n\t    font-weight: 300;\n\t    letter-spacing: 5px;\n\t    font-size: 1em;\n\t    background-color: black;\n}\n\n\n\n.at-form{\n    background-image: -webkit-linear-gradient(left, rgb(0, 33, 31) 30%, rgb(0, 14, 51) 100%);\n      height: 100%;\n      width: 100%;\n      left: 0px;\n      position: fixed;\n          margin-top: 2.9em;\n}\n\n.signintitle {\n  align-items: center;\n    margin-top: 4em;\n    font-family: \"San Francisco Text\";\n    text-transform: uppercase;\n    margin-left: 40%;\n    letter-spacing: .5em;\n    font-weight: 100;\n    color: white;\n}\n\n#container {\n  margin-left: 26%;\n    margin-top: 4em;\n}\n\n.at-input {\n  color: white;\n  font-weight: 300;\n  font-family: \"San Francisco Text\";\n  letter-spacing: 5px;\n    text-transform: uppercase;\n    color: white;\nfont-weight: 300;\nletter-spacing: 5px;\n}\n\n.at-email {\n  text-transform: uppercase;\n    letter-spacing: .4em;\n    color: white;\n}\n\n.at-field-email {\n  width: 25%;\n  height: 4em;\n  width: 25%;\nheight: 4em;\n}\n\n.at-password {\n  text-transform: uppercase;\n    letter-spacing: .4em;\n    color: white;\n}\n\n#at-btn submit {\nwidth: 30%;\nbackground-color: black;\ncolor: white;\nheight: 5em;\n}\n\n#at-field-password {\n\theight: 4em;\n\twidth: 25%;\n\tfont-size: 1em;\n\tbackground-color: black;\n}\n\n.at-btn-submit {\n  font-size: .7em;\n  padding-left: 5em;\n  padding-right: 5em;\n  padding-top: 1em;\n  background-color: rgba(77, 144, 104, 0.7);\n  padding-bottom: 1em;\n  border: none;\n  color: white;\n  font-family: \"San Francisco Text\";\n  text-transform: uppercase;\n  letter-spacing: 5px;\n}\n\n#submitregistration {\n  padding-left: 5em;\n  padding-right: 5em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  border-radius: 2px;\n  text-align:center;\n  letter-spacing: 7px;\n  border: none;\n  background-color: #608e60;\n  color: white;\n}\n\n#userregisterform {\n      text-align: center;\n}\n\n.content {\n  height: 100%;\n  width: 100%;\n  background-color: white;\n  color: white;\n}\n\n.at-signup-link {\n  font-family: \"San Francisco Text\";\n  margin-top: 4em;\n  font-weight: 100;\n  letter-spacing: .4em;\n  font-size: .7em;\n  color: white;\n  text-align: center;\n}\n\n#userimage {\n  border: 1px solid white;\npadding: 2em;\nborder-radius: 10px;\n}\n\n#at-signUp {\n  text-transform: uppercase;\n  color: #ffffff;\n  border: 1px solid white;\n  padding: .3em;\n  border-radius: 2px;\n  margin-top: 2em;\n  font-weight: 400;\n}\n\n#navstyling {\n\tborder-bottom: none;\nbackground-color: black;\n}\n\n\n#mainiconstwo {\n\tdisplay: inline-block;\n}\n\n\n#messagingicon {\n  display: inline-block;\n  position: relative;\n  height: 2.5em;\n  width: 2.5em;\n  padding-right: .5em;\n  padding-left: .5em;\n  padding-top: .5em;\n  padding-bottom: .5em;\n  border-radius: 100px;\n  background-color: rgba(255, 255, 255, 0.87);\n  margin-top: .3em;\n  float: right;\n  margin-right: 5em;\n  z-index: 10000000000;\n  border: 1px solid rgba(122, 153, 154, 0.96);\n}\n\n#productqty {\n  width: 6%;\n  height: 3em;\n  border: 1px solid rgb(234, 234, 234);\n  margin-top: 2em;\n}\n\n#shareproduct {\n\tbackground-color: rgb(2, 0, 33);\n\tpadding-right: 55%;\n\tborder: none;\n\tcolor: #ffffff;\n\tletter-spacing: 1em;\n\ttext-transform: uppercase;\n\tpadding-left: 40%;\n\tpadding-top: 1em;\n\tpadding-bottom: 1em;\n\tbottom: 0px;\n\tfont-size: .8em;\n\theight: 6em;\n\tposition: fixed;\n\tfont-family: \"San Francisco Text\";\n}\n\n#price {\n  font-family: \"San Francisco Text\";\n  font-size: .9em;\n  margin-right: 1.3em;\n  float: right;\n  padding-left: 2em;\n  padding-top: .1em;\n  font-weight: 600;\n}\n\n#saleprice {\n  width: 10%;\n  border: 1px solid rgb(234, 234, 234);\n  height: 3em;\n}\n\n#passwordregister {\n  margin-left: 5em;\nheight: 2em;\nborder: none;\npadding-left: 1em;\nbackground-color: rgba(255, 255, 255, 0.39);\nbackground-color: rgba(255, 255, 255, 0.05);\nborder: none;\npadding-left: 1em;\nborder-radius: 9px;\nmargin-top: 5em;\npadding-top: 1.6em;\nposition: absolute;\npadding-bottom: 1.qem;\npadding-right: 1.6em;\nmargin-left: 10em;\nfont-size: 1.7em;\nborder: 1px solid rgba(210, 210, 210, 0.11);\n}\n\n#at-sep {\n  margin-left: 27em;\nmargin-right: 27em;\nletter-spacing: 1em;\nborder: 1px solid white;\n}\n\n#errorlogin {\n  width: 20%;\nmargin-left: auto;\nmargin-right: auto;\n}\n\n#emailregister {\n  margin-left: 5em;\nheight: 2em;\nborder: none;\npadding-left: 1em;\nbackground-color: rgba(255, 255, 255, 0.39);\nbackground-color: rgba(255, 255, 255, 0.05);\nborder: none;\npadding-left: 1em;\nmargin-top: 3em;\npadding-top: 1.6em;\nposition: absolute;\npadding-bottom: 1em;\npadding-right: 1.6em;\nmargin-left: 10em;\nfont-size: 1.7em;\nborder: 1px solid rgba(210, 210, 210, 0.12);\n}\n\n#usernameregister {\n  margin-left: 5em;\n    height: 2em;\n    border: none;\n    padding-left: 1em;\n    background-color: rgba(255, 255, 255, 0.39);\n    background-color: rgba(255, 255, 255, 0.05);\n    border: none;\n    padding-left: 1em;\n    border-radius: 9px;\n    margin-top: 5em;\n    padding-top: 1.6em;\n    position: absolute;\n    padding-bottom: 1.qem;\n    padding-right: 1.6em;\n    margin-left: 10em;\n    font-size: 1.7em;\n    border: 1px solid rgba(210, 210, 210, 0.11);\n}\n\n#at-forgotPwd {\n  font-size: 1.4em;\n    color: #66a9a7;\n    border: 1px solid rgba(255, 255, 255, 0.11);\n    padding-top: .5em;\n    padding-bottom: .5em;\n    padding-left: 1.4em;\n    padding-right: .9em;\n    margin-top: 11em;\n    margin-left: 22em;\n    position: absolute;\n}\n\n\n#monetize {\n  font-family: \"San Francisco Text\";\n  margin-left: auto;\n  font-size: .9em;\n  margin-right: auto;\n  width: 60%;\n  border: none;\n  margin-top: 11em;\n}\n\n\n#basics {\n  font-family: \"San Francisco Text\";\n  margin-left: auto;\n  font-size: .9em;\n  margin-right: auto;\n  width: 60%;\n  border: none;\n  margin-top: 11em;\n  display: block;\n}\n\n#active {\n  border: 2px solid #010186;\ncolor: #010186;\nfont-family: \"San Francisco Text\";\npadding-right: .5em;\npadding-left: 1em;\npadding-top: .4em;\npadding-bottom: .4em;\nborder-radius: 10px;\n}\n\n#private {\n  border: 2px solid #333a65;\ncolor: #333a65;\nfont-family: \"San Francisco Text\";\npadding-right: .5em;\npadding-left: 1em;\npadding-top: .4em;\npadding-bottom: .4em;\nborder-radius: 10px;\n}\n\n#productImg {\n  height: 35em;\n      width: 35em;\n      background-color: black;\n      color: white;\n      margin-left: 30em;\n      position: absolute;\n      margin-top: 12em;\n}\n\n\n#create {\n  font-family: \"San-Francisco\";\n  letter-spacing: .3em;\n  font-size: .7em;\n  font-weight: bold;\n  border: 3px solid rgb(0, 37, 43);\n  padding-bottom: .8em;\n  padding-top: .8em;\n  background-color: rgba(0, 0, 0, 0.14);\n  border-radius: 2px;\n  padding-left: 1.9em;\n  padding-right: 1.9em;\n  text-transform: uppercase;\n  position: fixed;\n  margin-left: 6em;\n  z-index: 100000000000000000000000;\n  color: rgba(0, 0, 0, 0.97);\n}\n\n#home {\n  font-family: \"San-Francisco\";\n  letter-spacing: .3em;\n  font-size: .7em;\n  font-weight: bold;\n  border: 3px solid rgb(0, 37, 43);\n  padding-bottom: .8em;\n  padding-top: .8em;\n  background-color: rgba(0, 0, 0, 0.14);\n  border-radius: 2px;\n  padding-left: 1.9em;\n  padding-right: 1.9em;\n  text-transform: uppercase;\n  position: fixed;\n  z-index: 100000000000000000000000;\n  color: rgba(0, 0, 0, 0.97);\n}\n\n\n\n\n#loginbutton{\n  margin-top: 14em;\n  display: block;\n  width: 30%;\n  margin-left: 36%;\n  z-index: 10000000000000000000000000000;\n  position: fixed;\n  text-align: center;\n  padding: 1em;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  font-family: \"San-Francisco\";\n  color: rgb(255, 255, 255);\n  letter-spacing: .4em;\n  font-weight: 300;\n  border: 1px solid rgba(255, 255, 255, 0.03);\n}\n\n.modal-content5 {\n  background-color: rgba(255, 255, 255, 0);\nborder: 1px solid black;\nbottom: 0;\nheight: 100%;\nwidth: 100%;\nposition: fixed;\n}\n\n#signupbutton {\n  margin-top: 18em;\n  display: block;\n  width: 30%;\n  margin-left: 36%;\n  text-align: center;\n  padding: 1em;\n  border-radius: 2px;\n  background-color: rgba(255, 255, 255, 0.26);\n  font-family: \"San-Francisco\";\n  color: rgb(255, 255, 255);\n  letter-spacing: .4em;\n  position: fixed;\n  font-weight: 300;\n  border: 1px solid rgba(255, 255, 255, 0.03);\n}\n\n\n\n.market {\nwidth: 20em;\nheight: 20em;\nbackground-color: gray;\nborder: 1px solid black;\n}\n\n#title {\n  font-family: \"San-Francisco\";\n  font-size: 1.7em;\n  font-weight: 300;\n  padding-top: .2em;\n  color: black;\n  float: right;\n  margin-right: 8em;\n  letter-spacing: .15em;\n}\n\n#sizecreate select {\n\tbackground: rgb(255, 255, 255);\n\twidth: 268px;\n\tpadding: 5px;\n\tfont-size: 16px;\n\tfont-family: \"San Francisco Text\";\n\n}\n\n.modal3 {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-image: background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\n  background-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -webkit-linear-gradient(left, rgb(255, 255, 255) 30%, rgb(250, 255, 241) 100%);\n  background-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: linear-gradient(to left, #002310 0% #061833 100%);\n  z-index: 10000000000000;\n}\n\n.modal35 {\n  position: fixed;\n      z-index: 10000000000000000;\n      left: 0;\n      top: 0;\n      width: 100%;\n      height: 100%;\n      overflow: auto;\n}\n\n.modal2345 {\n  display: block;\n  position: fixed;\n  z-index: 1000000000000000000000000;\n  float: left;\n  margin-top: 4em;\n  height: 90%;\n  top: 0;\n  overflow: auto;\n  background-image: background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\n  background-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 30%, rgb(255, 255, 255) 100%);\n  background-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: linear-gradient(to left, #002310 0% #061833 100%);\n}\n\nmodal-contentyou0 {\n  background-color: rgb(0, 0, 0);\n  height: 90%;\n  width: 30%;\n  margin-top: 4em;\n  position: fixed;\n  left: 0;\n  display: block;\n}\n\n.closeyou1 {\n\tfont-family: \"San Francisco Text\";\n\tletter-spacing: 5px;\n\tpadding-top: 1.8em;\n\tfont-size: .8em;\n\tcolor: black;\n\tbackground-color: rgba(255, 255, 255, 0.11);\n\tdisplay: block;\n\tpadding-left: 18em;\n\tpadding-bottom: 1.8em;\n}\n\n#wread2 {\n  font-family: \"Helvetica\";\n  font-style: italic;\n}\n\n#about {\n  display: block;\n  color: #193834;\n  letter-spacing: 2px;\n  padding-right: 5em;\n  margin-top: 1em;\n  font-size: 1em;\n  padding-left: 5em;\n  padding-top: .8em;\n  padding-bottom: .8em;\n  margin-left: 4%;\n}\n\n#termsandconditions {\n  display: block;\n  font-size: .85em;\n  margin-left: 5%;\n  border: 5px solid black;\n  color: black;\n  letter-spacing: 1px;\n  margin-right: 10%;\n  padding-right: 5em;\n  padding-left: 5em;\n  padding-top: .8em;\n  padding-bottom: .8em;\n}\n\n#advertise {\n  margin-bottom: 1.5em;\n  display: block;\n  color: white;\n  letter-spacing: 5px;\n  padding-right: 5em;\n  margin-top: 4em;\n  padding-left: 5em;\n  padding-top: .8em;\n  padding-bottom: .8em;\n  margin-left: 4%;\n}\n\n#investors {\n  display: block;\n  color: black;\n  font-size: .8em;\n  letter-spacing: 5px;\n  padding-right: 5em;\n  padding-left: 5em;\n  padding-top: .8em;\n  padding-bottom: .8em;\n}\n\n#careers {\n  margin-bottom: 1.5em;\n  display: block;\n  color: black;\n  letter-spacing: 5px;\n  font-size: .8em;\n  padding-right: 5em;\n  padding-left: 5em;\n  padding-top: .8em;\n  padding-bottom: .8em;\n}\n\n#allmesslist {\n  color: black;\n  font-family: \"San Francisco Text\";\n  text-transform: uppercase;\n  font-size: .7em;\n  letter-spacing: .5em;\n  margin-left: 20%;\n}\n\n#recentmess {\n\twidth: 21.3%;\n\tbackground-color: rgb(0, 0, 0);\n\theight: 85%;\n\tmargin-top: 3.7em;\n\ttop: 0px;\n\tz-index: 100000000000000000000000000000000000000;\n\tfloat: left;\n\tposition: absolute;\n}\n\n.conversation {\n  width: 55%;\n  border: 5px solid rgba(113, 113, 113, 0.03);\n  background-color: #ffffff;\n  margin-left: 26%;\n  height: 63%;\n  margin-top: 4.3%;\n}\n\n.modal4 {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  margin-top: 5.2%;\n  height: 100%;\n    background-image: -webkit-linear-gradient(left, rgb(210, 201, 201) 30%, rgb(48, 82, 64) 100%);\n\t\tbackground-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: -webkit-linear-gradient(left, rgb(255, 255, 255) 30%, rgb(245, 245, 245) 100%);\n  background-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n  background-image: linear-gradient(to left, #002310 0% #061833 100%);\n  z-index: 1000000;\n}\n\n#createnewmessage {\n  left: 0px;\n      position: fixed;\n      z-index: 10000;\n}\n\n.message-input {\n  position: fixed;\n  width: 90%;\n  border: cyan;\n  bottom: 0;\n}\n\n#addmessage {\n  width: 61%;\n  height: 4em;\n  border: 3px solid #fdfdfd;\n  padding-bottom: 2em;\n}\n\n#createaamessage {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  background-color: rgba(68, 68, 68, 0.88);\n  margin-left: auto;\n  display: block;\n  margin-right: auto;\n  position: absolute;\n}\n\n#greybackground {\n  height: 80%;\n  position: absolute;\n  width: 100%;\n  margin-top: 4em;\n}\n\n\n\n.close {\n\tcolor: #ffffff;\n\tborder-radius: 2px;\n\tfloat: right;\n\tz-index: 100000000000000000000000000000;\n\tposition: fixed;\n\twidth: 15%;\n\ttext-align: center;\n\tfont-size: .8em;\n\tbackground-color: rgb(0, 0, 0);\n\tborder: rgba(78, 0, 0, 0.42);\n\tpadding-top: .5em;\n\tpadding-bottom: .5em;\n\tright: 0px;\n\theight: 3em;\n\tmargin-left: .1%;\n\tfont-family: \"San Francisco Text\";\n\tletter-spacing: 15px;\n}\n\n\n\n#featured {\n  background-color: rgb(177, 191, 184);\n  letter-spacing: .4em;\n  padding-left: 1em;\n  border: 1px solid rgba(0, 255, 243, 0);\n  font-size: .45em;\n  border-radius: 2px;\n  padding-right: 1em;\n  padding-top: .6em;\n  width: 8%;\n  margin-left: 19%;\n  position: absolute;\n  margin-top: 5.9%;\n  display: block;\n  visibility: hidden;\n  padding-bottom: .45em;\n  font-weight: 300;\n  color: rgb(255, 255, 255);\n  font-family: \"San Francisco Text\";\n  font-style: italic;\n}\n\n#featured:hover {\n  background-color: rgba(25, 30, 35, 0.8);\n  letter-spacing: .4em;\n  padding-left: 1em;\n  border: 1px solid rgba(0, 255, 243, 0);\n  font-size: .45em;\n  border-radius: 2px;\n  padding-right: 1em;\n  padding-top: .6em;\n  width: 8%;\n  margin-left: 18%;\n  position: absolute;\n  margin-top: 5.9%;\n  display: block;\n  padding-bottom: .45em;\n  font-weight: 300;\n  color: rgb(255, 255, 255);\n  font-family: \"San Francisco Text\";\n  font-style: italic;\n}\n\n#youmenu {\n  display:hidden;\n  font-family: \"San Francisco Text\";\n}\n\n#send {\n  display: block;\n  margin-left: auto;\n  padding-left: 12em;\n  padding-right: 12em;\n  padding-top: .7em;\n  padding-bottom: .8em;\n  border-radius: 2px;\n  border-top: none;\n  margin-top: 1em;\n  border-bottom: 3px solid rgb(255, 255, 255);\n  border-left: none;\n  border-right: none;\n  margin-right: auto;\n  background-color: rgba(255, 0, 0, 0.34);\n  color: rgba(255, 255, 255, 0.54);\n  font-family: \"San Francisco Text\";\n  font-size: .8em;\n  letter-spacing: .4em;\n}\n\n#ProductSelection6 {\n\tfont-family: \"San-Francisco\";\n\tcolor: rgba(0, 0, 0, 0.87);\n\tletter-spacing: .3em;\n\tdisplay: inline-block;\n\tfont-size: 1em;\n\tmargin-left: 40%;\n\tposition: fixed;\n\twidth: 15em;\n\tz-index: 1000000000000000000000000000;\n\ttext-transform: uppercase;\n\tpadding-bottom: 1em;\n\tfloat: right;\n}\n\n\n\n\n#ProductSelection3 {\n  font-family: \"San Francisco Text\";\n      padding-left: 4em;\n      padding-right: 4em;\n      padding-top: 1em;\n      border-bottom: 1px solid black;\n      border: none;\n      position: absolute;\n      margin-left: 28em;\n      margin-top: 1em;\n}\n\n#productcreate {\n  position: fixed;\n  top: 60px;\n  margin-left: 18em;\n}\n\n.modal2{\n\tdisplay: block;\n\tposition: fixed;\n\tz-index: 1;\n\tleft: 0;\n\tbottom: 0px;\n\twidth: 100%;\n\theight: 90%;\n\toverflow: auto;\n\tbackground-image: background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\n\tbackground-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n\tbackground-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n\tbackground-image: -webkit-linear-gradient(left, rgb(1, 18, 35) 30%, rgb(0, 27, 13) 100%);\n\tbackground-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n\tbackground-image: linear-gradient(to left, #002310 0% #061833 100%);\n\tz-index: 10000000000000;\n}\n\n.modal-content {\n\theight: 70%;\n\tmargin-left: 3%;\n\tposition: fixed;\n\tmargin-top: 15em;\n\tdisplay: block;\n\tflex-direction: row;\n}\n\n.closeyou {\n  font-family: \"San Francisco Text\";\n  letter-spacing: 5px;\n  padding-top: 1.8em;\n  font-size: .8em;\n  color: gainsboro;\n  background-color: rgba(255, 255, 255, 0.11);\n  display: block;\n  padding-left: 18em;\n  padding-bottom: 1.8em;\n}\n\n\n\n.site15 {\n\tdisplay: block;\n\tcolor: white;\n\tletter-spacing: 5px;\n\tpadding-top: inherit;\n\tmargin-bottom: 1em;\n\t    margin-top: 4.4em;\n}\n\n#settings2 {\n\tdisplay: block;\n\tcolor: black;\n\tletter-spacing: 5px;\n\tfont-weight: 600;\n\tdisplay: block;\n\tletter-spacing: 5px;\n\tpadding-top: inherit;\n\tmargin-bottom: 1em;\n\ttext-align: center;\n\twidth: 100%;\n\tfont-weight: 600;\n\tmargin-bottom: 1em;\n}\n\n#logout2 {\n\tdisplay: block;\n\t    border-left: none;\n\t    border-right: none;\n\t    color: black;\n\t    font-weight: 600;\n\t    letter-spacing: 5px;\n\t    padding-bottom: 1.1em;\n\t    display: block;\n\t    color: black;\n\t    letter-spacing: 5px;\n\t    font-weight: 600;\n\t    display: block;\n\t    letter-spacing: 5px;\n\t    padding-top: inherit;\n\t    margin-bottom: 1em;\n\t    text-align: center;\n\t    width: 100%;\n\t    font-weight: 600;\n\t    margin-bottom: 1em;\n}\n\n.modal234 {\n  display: block;\n    position: fixed;\n    z-index: 1;\n    top: 0;\n    overflow: auto;\n    background-image: background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\n    background-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\n    background-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\n    background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 30%, rgba(255, 255, 255, 0) 100%);\n    background-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\n    background-image: linear-gradient(to left, #002310 0% #061833 100%);\n    z-index: 10000000000000;\n}\n\n.modal-contentyou{\n\theight: 76%;\n\tborder: 1px solid rgba(255, 255, 255, 0.12);\n\twidth: 100%;\n\tmargin-top: 5em;\n\tposition: fixed;\n\tfont-weight: 100;\n\tdisplay: block;\n\tcolor: #0a0000;\n\tfont-weight: 600;\n\tbackground-image: -webkit-linear-gradient(left, rgb(212, 206, 222) 20%, rgb(245, 247, 234) 100%);\n}\n\n\n.at-form{\n\n}\n\n.atform {\n  margin-top: 10%;\ndisplay: block;\nleft: 0;\ntop: 0;\nwidth: 60%;\nheight: 60%;\nmargin-left: auto;\nmargin-right: auto;\noverflow: auto;\nbackground-image: background-image: -webkit-gradient( linear, right bottom, left bottom, color-stop(0, #0B917F), color-stop(1, #34396E) );\nbackground-image: -o-linear-gradient(left, #0B917F 0%, #34396E 100%);\nbackground-image: -moz-linear-gradient(left, #0B917F 0%, #34396E 100%);\nbackground-image: -webkit-linear-gradient(left, rgb(253, 254, 255) 30%, rgb(255, 255, 246) 100%);\nbackground-image: -ms-linear-gradient(left, #0B917F 0%, #34396E 100%);\nbackground-image: linear-gradient(to left, #002310 0% #061833 100%);\nz-index: 10000000000000;\n}\n\n.formnext {\n  padding-right: 6em;\n      background-color: #00aaff;\n      padding-left: 16em;\n      padding-top: 1em;\n      padding-bottom: 1em;\n      margin-left: 3em;\n      letter-spacing: .2em;\n      position: fixed;\n      font-size: .8em;\n      border: 2px solid #00aaff;\n      bottom: 0px;\n      color: white;\n}\n\n.formback {\n  background-color: #00aaff;\n  padding-left: 6em;\n  padding-right: 3em;\n  padding-top: 1em;\n  padding-bottom: 1em;\n  letter-spacing: .2em;\n  font-size: .8em;\n  left: 0px;\n  position: fixed;\n  margin-left: 23em;\n  bottom: 0px;\n  color: white;\n}\n\n#lowerlowernav {\n  font-family: \"San Francisco Text\";\n    position: fixed;\n    margin-left: 30em;\n    margin-top: 1.5em;\n}\n\n#productcreate li {\n  display: table-cell;\n  text-align: center;\n  width: 04%;\n  background-color: rgba(212, 212, 212, 0.29);\n  padding-bottom: 1em;\n  border-right: 1px solid #e2e2e2;\n  margin-right: 5em;\n  padding-right: .5em;\n  color: black;\n  padding-left: .5em;\n  padding-top: 1em;\n  letter-spacing: .1em;\n  z-index: 10000;\n  font-family: \"San-Francisco\";\n  font-size: .8em;\n}\n\n#UserId {\nfont-family: \"San Francisco Text\";\nfont-style: italic;\nletter-spacing: 5px;\nfont-size: 4em;\nmargin-left: 36.5%;\n}\n\n#aboutaccountimage3 {\nheight: 2em;\nborder-radius: 100px;\n}\n\n#userimage {\n\tborder: 1px solid white;\n\tpadding: 2em;\n\tbackground-color: black;\n}\n\n#streamproductcontainer {\nheight: 100%;\ntop: 0px;\nbackground-color: black;\nposition: absolute;\nbottom: 0px;\n}\n\n#enterbio {\n  background-color: rgba(255, 255, 255, 0.13);\nheight: 8em;\nmargin-top: 1.5em;\nwidth: 30%;\n}\n\n#enterlocation {\n  background-color: rgba(255, 255, 255, 0.13);\n      height: 4em;\n      width: 30%;\n      margin-top: 2em;\n}\n\n#userregistrationsubmit {\n\tpadding-left: 9em;\n\tpadding-right: 9em;\n\tbackground-color: #547754;\n\tborder: none;\n\tpadding-top: 1.5em;\n\tcolor: white;\n\tletter-spacing: 7px;\n\tpadding-bottom: 1.5em;\n\tmargin-top: 2em;\n\tbottom: 0;\n\tposition: fixed;\n\twidth: 100%;\n\tleft: 0px;\n}\n\n#account {\nfont-family: \"San-Francisco\";\nfont-size: 1.7em;\nfont-weight: 600;\ncolor: #000000;\nletter-spacing: .15em;\ndisplay: block;\nposition: absolute;\nmargin-left: 15%;\n}\n\n\n\n/* Stream Styles */\n#accountstream {\n  font-family: \"San Francisco Text\";\n  font-weight: 600;\n  margin-left: 15%;\n  display: inline-block;\n  margin-top: 3em;\n  font-size: 3em;\n  color: rgb(255, 255, 255);\n}\n\n#joincall2 {\n  font-family: \"San Francisco Text\";\n  text-transform: uppercase;\n  margin-top: 1.4em;\n  font-style: italic;\n  font-size: 8em;\n  margin-left: 12%;\n  border-radius: 10px;\n  color: #060606;\n  border: none;\n  position: fixed;\n  font-weight: 600;\n  z-index: 1000000000000000000000000000000000;\n}\n\n#titlestream {\n  font-family: \"San Francisco Text\";\n  font-weight: 300;\n  padding-left: 1em;\n  display: block;\n  margin-left: 8%;\n  color: white;\n  font-size: 3em;\n}\n\n#buydarkfeed {\n  font-family: \"Open Sans\";\n  padding-left: 3.5em;\n  float: right;\n  padding-right: 3.5em;\n  display: inline-block;\n  color: rgb(255, 255, 255);\n  border: none;\n  background-color: rgb(0, 0, 0);\n  font-size: .9em;\n  font-weight: 600;\n  margin-right: 17%;\n  letter-spacing: .4em;\n  bottom: 0em;\n  padding-top: .9em;\n  padding-bottom: .9em;\n}\n\n#MainFeed {\n    margin-bottom: 10em;\n}\n\n#wavyrealities {\n    height: 10em;\n    width: 10em;\n    padding-top: 3em;\n    padding-bottom: 3em;\n    margin-top: 6em;\n    padding-right: 3em;\n    padding-left: 3em;\n    margin-left: 39%;\n    margin-right: auto;\n    z-index: 100000000000000000000000000000000000;\n    display: block;\n    position: fixed;\n    border-radius: 100%;\n}\n\n#mainimages {\n  width: 60%;\n      margin-top: 3.5em;\n      display: block;\n      margin-bottom: 10em;\n}\n\n\n#buyprocess {\n\tvisibility: hidden;\n}\n\n#sharedark {\n\tfont-family: \"San Francisco Text\";\n\t    color: black;\n\t    border: 7px solid rgb(0, 0, 0);\n\t    background-color: rgb(255, 255, 255);\n\t    font-size: 1em;\n\t    padding-left: 2em;\n\t    padding-top: 2em;\n\t    padding-right: 2em;\n\t    padding-bottom: 2em;\n\t    font-weight: 600;\n\t    letter-spacing: .4em;\n\t    width: 2em;\n\t    -webkit-transition: all 150ms ease;\n\t    -moz-transition: all 150ms ease;\n\t    -o-transition: all 150ms ease;\n\t    transition: all 150ms ease;\n}\n\n#price:hover {\n\tcolor: turquoise;\n}\n\n\n#sharedark:hover {\n\tfont-family: \"San Francisco Text\";\n\t    color: black;\n\t    border: 2px solid rgb(0, 0, 0);\n\t    background-color: rgb(255, 255, 255);\n\t    font-size: 1em;\n\t    padding-left: 1.1em;\n\t    padding-top: 3.5em;\n\t    padding-right: 5em;\n\t    padding-bottom: 1.4em;\n\t    font-weight: 600;\n\t    letter-spacing: .4em;\n\t    width: 2em;\n\t    -webkit-transition: all 150ms ease;\n\t    -moz-transition: all 150ms ease;\n\t    -o-transition: all 150ms ease;\n\t    transition: all 150ms ease;\n}\n\n#buydarkfeed:hover {\n  font-family: \"San Francisco Text\";\n  color: rgb(255, 255, 255);\n  border: none;\n  background-color: rgba(0, 80, 58, 0.99);\n  font-size: .8em;\n  margin-top: 1.1%;\n  font-weight: 600;\n  letter-spacing: .2em;\n  width: 20%;\n  bottom: 0em;\n  padding-top: .7em;\n  float: right;\n  margin-right: 15%;\n  padding-bottom: .7em;\n}\n\n#shareicon {\n\theight: 3.5em;\n\twidth: 3.5em;\n\tpadding-left: .7em;\n\tpadding-top: 1.4em;\n}\n\n#leftarrowicon {\n\tmargin-top: 20em;\n\t    height: 1em;\n\t    margin-left: .3em;\n\t    padding-top: 1em;\n\t    padding-bottom: 1em;\n\t    padding-left: 1em;\n\t    padding-right: 1em;\n\t\t\tbackground-color: rgba(223, 244, 255, 0.26);\n\t    border-radius: 100px;\n\t    border: 2px solid rgba(255, 255, 255, 0.52);\n}\n\n#leftarrowicon:hover {\n\tmargin-top: 20em;\n\theight: 1em;\n\tmargin-left: .3em;\n\tpadding-top: 1em;\n\tpadding-bottom: 1em;\n\tpadding-left: 1em;\n\tpadding-right: 1em;\n\tborder-radius: 100px;\n}\n\n\n#successful {\n\tborder: 1px solid white;\n    margin-top: 2em;\n    position: absolute;\n    height: 20em;\n    font-weight: 300;\n    top: 0;\n    margin-left: 27%;\n    font-style: italic;\n}\n\n#successmessage {\n\tposition: fixed;\n\tcolor: white;\n\tfont-family: \"San Francisco Text\";\n\tmargin-top: 9em;\n\tdisplay: block;\n\tz-index: 100000000000000000000000000000;\n}\n\n#rightarrowicon {\n\tmargin-top: 20em;\n\t    height: 1em;\n\t    padding-top: 1em;\n\t    padding-bottom: 1em;\n\t    padding-left: 1em;\n\t\t\tbackground-color: rgba(223, 244, 255, 0.26);\n\t    padding-right: 1em;\n\t    border-radius: 100px;\n\t    border: 2px solid rgba(255, 255, 255, 0.52);\n}\n\n#rightarrowicon:hover {\n\tmargin-top: 20em;\n\theight: 1em;\n\tpadding-top: 1em;\n\tpadding-bottom: 1em;\n\tpadding-left: 1em;\n\tpadding-right: 1em;\n\tborder-radius: 100px;\n}\n\n#leftarrowstyle {\n  height: 100%;\n      width: 4.5em;\n      float: left;\n      position: fixed;\n      top: 0;\n      left: 0;\n}\n\n#leftarrowstyle:hover {\n\theight: 100%;\n\twidth: 4.5em;\n\tfloat: left;\n\ttop: 0;\n\tleft: 0;\n\tposition: fixed;\n\tbackground-color: #F9F9F9;\n}\n\n#rightarrowstyle {\n  width: 4.5em;\n  top: 0;\n  margin-left: 45%;\n  height: 100%;\n  position: fixed;\n}\n\n#rightarrowstyle:hover {\n\theight: 100%;\n\tborder: 1px solid rgb(253, 253, 253);\n\twidth: 4.5em;\n\tfloat: right;\n\tright: 0;\n\ttop:0;\n\tposition: fixed;\n\tbackground-color: #F9F9F9;\n}\n\n#accountid {\n\tmargin-top: 10em;\n\ttext-transform: uppercase;\n\tfont-family: \"San Francisco Text\";\n\tfont-weight: 600;\n\tcolor: gray;\n}\n\n#accounttextid{\n\tfont-family: \"San Francisco Text\";\n\tfont-weight: 200;\n\tdisplay: inline;\n}\n\n#aboutaccountimage {\n\theight: 2.7em;\ndisplay: inline;\n}\n\n#aboutaccomuntimage2{\nheight: 2em;\nborder-radius: 100px;\ndisplay:inline;\n}\n\n#aboutaccountimage3 {\n\theight: 2em;\n\tborder-radius: 100px;\n\tdisplay:inline;\n}\n\n#aboutaccountimage4{\n\theight: 2em;\n\tborder-radius: 100px;\n\tdisplay:inline;\n}\n\n#shippingid {\nfont-family: \"San Francisco Text\";\nfont-weight: 600;\ntext-transform: uppercase;\ncolor: gray;\n}\n\n#shippingtextid {\nfont-family: \"San Francisco Text\";\nfont-weight: 200;\n}\n\n#termsid {\n\tfont-family: \"San Francisco Text\";\nfont-weight: 600;\ntext-transform: uppercase;\ncolor: #434FFF;\nborder: 1px solid;\nborder-radius: 10px;\npadding-left: 11em;\npadding-top: .6em;\npadding-bottom: .6em;\n}\n\n#textid {\nfont-family: \"San Francisco Text\";\ntext-transform: uppercase;\ncolor: gray;\nfont-weight: 600;\n}\n\n#texttextid {\nfont-family: \"San Francisco Text\";\nmargin-bottom: 5em;\n}\n\na:link {\n\tcolor:inherit;\n\ttext-decoration:none;\n}\n\na:visited {\n\tcolor: inherit;\n\ttext-decoration:none;\n}\n\n#aboutcontainer {\nwidth: 50%;\nmargin-left: 20em;\ncolor: white;\n}\n\n#payment-form{\n\tdisplay: block;\n\t    margin-left: auto;\n\t    margin-right: auto;\n\t    padding: 2em;\n\t    background-color: rgba(255, 255, 255, 0.11);\n\t    width: 75%;\n\t    border: 3px solid black;\n\t    border-radius: 10px;\n}\n\n#payment-id {\n\tdisplay: block;\nwidth: 60%;\nmargin-left: auto;\nmargin-right: auto;\n}\n\n\n#successmain {\n\tfont-size: 8em;\n    color: white;\n    font-weight: 600;\n    z-index: 1000000000000000000000;\n    position: fixed;\n    font-family: \"San Francisco Text\";\n}\n\n\n\t.paymenttext {\n\t\ttext-transform: uppercase;\n\t\t    font-size: .9em;\n\t\t    color: #000000;\n\t\t    font-weight: 600;\n\t\t    margin-left: auto;\n\t\t    margin-right: auto;\n\t\t    display: block;\n\t\t    padding: 6px;\n\t\t    border: none;\n\t\t    border-left: none;\n\t\t    border-right: none;\n\t\t    border-bottom: none;\n\t\t    letter-spacing: .3em;\n\t\t    font-family: \"San Francisco Text\";\n}\n\n#cardnumber {\n\n\tpadding: 1px 0px 4px 29px;\n\theight: 2em;\n\tmargin-top: .1em;\n\twidth: 60%;\n\tfont-size: .9em;\n\tfont-weight: 600;\n\ttext-transform: uppercase;\ncolor: white;\n\tborder-bottom: none;\n\tborder-left: none;\n\tborder-top: none;\n\tborder-right: none;\n\tbackground-color: black;\n\tletter-spacing: .3em;\n\tfont-family: \"San Francisco Text\";\n}\n\n#addresslabel {\n\ttext-transform: uppercase;\n\tfont-size: .9em;\n\tcolor: #000000;\n\tfont-weight: 600;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tdisplay: block;\n\tpadding: 6px;\n\tborder: none;\n\tborder-left: none;\n\tborder-right: none;\n\tborder-bottom: none;\n\tletter-spacing: .3em;\n\tfont-family: \"San Francisco Text\";\n}\n#paymentbuy {\n\tfont-family: \"San Francisco Text\";\ncolor: white;\nbackground-color: #475D54;\nborder-radius: 4px;\npadding-left: 5em;\nletter-spacing: .6em;\nmargin-top: 1em;\npadding-top: .7em;\nborder: none;\nfont-size: .8em;\npadding-right: 5em;\nfloat: right;\npadding-bottom: .7em;\ndisplay: block;\ntext-transform: uppercase;\n}\n\n#paymentz {\n\tpadding-left: 40%;\n\tpadding-right: 40%;\n\tmargin-top: 3em;\n\tborder-radius: 5px;\n\twidth: 100%;\n\tpadding-top: 1em;\n\tborder: 1px solid rgba(5, 241, 255, 0.74);\n\tletter-spacing: .2em;\n\tcolor: #FFFFFF;\n\theight: 5em;\n\tfont-weight: 600;\n\tpadding-bottom: 1em;\n\ttext-transform: uppercase;\n\tbackground-color: rgba(0, 45, 103, 0.65);\n\tfont-size: .9em;\n\tmargin-right: auto;\n\tmargin-left: auto;\n}\n\n#paymentbuy:hover {\n\tfont-family: \"San Francisco Text\";\n\tborder: 1px solid #FFE400;\n\tbackground-color: #475D54;\n\tcolor: #FFE400;\n\tborder-radius: 4px;\n\tpadding-left: 5em;\n\tletter-spacing: .6em;\n\tmargin-top: 1em;\n\tpadding-top: .7em;\n\tborder: none;\n\tfont-size: .8em;\n\tpadding-right: 5em;\n\tfloat: right;\n\tpadding-bottom: .7em;\n\tdisplay: block;\n\ttext-transform: uppercase;\n}\n\n\n#prelaunch {\n\tfont-family: San Francisco Text;\n\t    font-size: .7em;\n\t    font-weight: 100;\n\t    color: #AFAFAF;\n\t    margin-left: auto;\n\t    text-transform: uppercase;\n\t    letter-spacing: .2em;\n\t    display: none;\n}\n\n.maintext2 {\n\tdisplay: inline-block;\n    text-align: center;\n    z-index: 1001;\n    -webkit-transition: all 150ms ease;\n    -moz-transition: all 150ms ease;\n    -o-transition: all 150ms ease;\n    transition: all 150ms ease;\n    color: #716969;\n    font-family: \"San Francisco Text\";\n    padding-right: 1.7em;\n    padding-left: .3em;\n    color: rgb(51, 51, 51);\n    letter-spacing: 2px;\n    font-weight: 600;\n    font-size: .8em;\n    text-decoration: none;\n    margin-top: 3.4em;\n}\n\n#cardcvc {\n\tpadding: 1px 0px 4px 29px;\n\theight: 2em;\n\tcolor: black;\ncolor: white;\n\twidth: 15%;\n\n\tfont-size: .9em;\n\n\n\tborder-bottom: 1px dashed black;\n\tborder-left: none;\n\tborder-top: none;\n\tborder-right: none;\n\tbackground-color: black;\n\tletter-spacing: .3em;\n\t\tfont-weight: 600;\n\tfont-family: \"San Francisco Text\";\n}\n\n#cardmonth {\n\n    padding: 1px 0px 4px 29px;\n    height: 2em;\n\n    margin-top: .1em;\n    width: 15%;\n    font-size: .9em;\ncolor: white;\n\tfont-weight: 600;\n\t\tborder-bottom: 1px dashed black;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t\tborder-right: none;\n\t\tbackground-color: black;\n\t\tletter-spacing: .3em;\n\t\tfont-family: \"San Francisco Text\";\n}\n\n#cardyear {\n    padding: 1px 0px 4px 29px;\n    height: 2em;\ncolor: white;\n    width: 15%;\n\n    font-size: .9em;\n\n\tfont-weight: 600;\n\t\tborder-bottom: 1px dashed black;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t\tborder-right: none;\n\t\tbackground-color: black;\n\t\tletter-spacing: .3em;\n\t\tfont-family: \"San Francisco Text\";\n}\n\n#streetaddress {\n    padding: 1px 0px 4px 29px;\n    margin-top: .1em;\n    height: 2em;\n    text-transform: uppercase;\n    width: 50%;\n    font-size: .9em;\n    margin-left: auto;\n    margin-right: auto;\n\n\tfont-weight: 600;\n\t\tborder-bottom: none;\n\t\tborder-left: none;\n\t\tborder-top: none;\n\t\tborder-right: none;\n\t\tbackground-color: black;\n\t\tletter-spacing: .3em;\n\t\tfont-family: \"San Francisco Text\";\n}\n\n\n\n#streetaddress1 {\ncolor: white;\n\tpadding: 1px 0px 4px 29px;\n\tmargin-top: .1em;\n\theight: 2em;\n\ttext-transform: uppercase;\n\twidth: 70%;\n\tfont-size: .9em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\tborder: none;\n\tbackground-color: black;\n\tletter-spacing: .3em;\n\tfont-family: \"San Francisco Text\";\n}\n\n#streetaddress2 {\n\n\tpadding: 1px 0px 4px 29px;\n\tmargin-top: .1em;\n\theight: 2em;\n\ttext-transform: uppercase;\n\twidth: 45%;\n\tfont-weight: 600;\n\tfont-size: .9em;\n\tmargin-left: auto;\n\tmargin-right: auto;\n\n\n\tborder: 1px dashed black;\n\tbackground-color: black;\n\tletter-spacing: .3em;\n\tfont-family: \"San Francisco Text\";\n}\n\n\n\t#fullname {\n\t\tpadding: 1px 0px 4px 29px;\n    margin-top: .1em;\n    height: 2em;\n    width: 35%;\n    font-size: .9em;\n    text-transform: uppercase;\n    font-weight: 600;\n    border: none;\n    background-color: black;\n    color: white;\n    letter-spacing: .3em;\n    font-family: \"San Francisco Text\";\n\t}\n\n#fullnameone {\n\n\tpadding: 1px 0px 4px 29px;\n\tmargin-top: .1em;\n\theight: 2em;\n\twidth: 35%;\n\tfont-weight: 600;\n\tfont-size: .9em;\n\ttext-transform: uppercase;\n  color: white;\n\tborder-bottom: 1px dashed black;\n\tborder-left: none;\n\tborder-top: none;\n\tborder-right: none;\n\tbackground-color: black;\n\tletter-spacing: .3em;\n\tfont-family: \"San Francisco Text\";\n}\n\n\t#e-mail {\n\t    border: none;\n\t    background-color: black;\n\t    padding: 1px 0px 4px 29px;\n\t    margin-top: .1em;\n\t    height: 2em;\n\t    width: 40%;\n\t    font-size: .9em;\n\t\t\tcolor: white;\n\t    text-transform: uppercase;\n\t    letter-spacing: .2em;\n\t    font-family: \"San Francisco Text\";\n\t}\n\n\n#zipcode {\n    border: none;\n\tcolor: white;\n    background-color: black;\n    padding: 1px 0px 4px 29px;\n    margin-top: .1em;\n    height: 2em;\n    width: 15%;\n    font-size: .9em;\n    text-transform: uppercase;\n    letter-spacing: .2em;\n    font-family: \"San Francisco Text\";\n}\n\n#mainiconsthree{\n  position: fixed;\n  right: 0;\n  font-size: .8em;\n  color: rgb(255, 255, 255);\n  font-family: \"San Francisco Text\";\n  padding-left: 20em;\n  padding-right: 15em;\n  padding-top: 1.3em;\n  padding-bottom: .9em;\n  background-color: rgba(0, 0, 0, 0.9);\n  letter-spacing: .5em;\n  margin-right: .3em;\n  border: 1px solid rgba(217, 255, 248, 0.09);\n  margin-left: 30%;\n}\n\n#mainiconsfour{\n  display: inline-block;\n  z-index: 10000000000000000000000;\n  color: rgb(255, 255, 255);\n  float: right;\n  margin-top: 1em;\n  margin-right: 5%;\n}\n\n#city {\n\tpadding: 1px 0px 4px 29px;\n\t    background-color: black;\n\t    height: 2em;\n\tcolor: white;\n\t    text-transform: uppercase;\n\t    width: 37%;\n\t    letter-spacing: .2em;\n\t    font-size: .9em;\n\t    margin-left: auto;\n\t    margin-right: auto;\n\t    margin-top: .1em;\n\t    border: 1px solid black;\n\t    font-family: \"San Francisco Text\";\n}\n\n#state {\n\t\t\tborder: none;\n\t\tcolor: white;\n\t    background-color: black;\n\t    padding: 1px 0px 4px 29px;\n\t    height: 2em;\n\t    width: 28%;\n\t    font-size: .9em;\n\t    letter-spacing: .2em;\n\t    text-transform: uppercase;\n\t    margin-left: auto;\n\t    margin-right: auto;\n\t    margin-top: .1em;\n\t    font-family: \"San Francisco Text\";\n}\n\n.buybuttonnavigator {\n  position: fixed;\n      margin-top: 30em;\n      margin-left: 3%;\n      border: 3px solid white;\n      padding-left: 5em;\n      font-family: \"San Francisco Text\";\n}\n\n\n#pricey {\n  color: white;\n  letter-spacing: .6em;\n  padding-left: 5em;\n  padding-right: 5em;\n  padding-top: .4em;\n  padding-bottom: .4em;\n  border-right: none;\n  border-left: none;\n  background-color: rgba(255, 255, 255, 0);\n}\n\n#mediatab {\n  font-family: \"San Francisco Text\";\n      font-weight: 600;\n      margin-left: 15%;\n      font-size: .9em;\n      margin-top: 3.2em;\n      display: inline-block;\n}\n\n\n\n#abouttab {\n  display: inline-block;\n      margin-left: 14%;\n      font-family: \"San Francisco Text\";\n      font-weight: 600;\n      font-size: .9em;\n      position: fixed;\n      margin-top: 3.2em;\n}\n\n#buyicon {\nheight: 2em;\nwidth: 2em;\npadding-left: 1em;\npadding-top: 1em;\n}\n\n#streamnavigatorone {\n  position: fixed;\n  right: 0px;\n  height: 100%;\n  width: 40%;\n  border-left: none;\n  border-right: none;\n  border-top: 1px solid rgba(210, 210, 210, 0.2);\n  background-color: black;\n}\n\n#streamnavigatorthree {\n\tbottom: 0;\n\theight: 3em;\n\tposition: fixed;\n\tfloat: right;\n\tborder-left: none;\n\tborder-right: none;\n\tbackground-color: rgba(251, 251, 251, 0);\n\tdisplay: inline-block;\n\twidth: 100%;\n}\n\n\n#accounts {\n\twidth: 55%;\n\tmargin-top: 1em;\n}\n\n#sweatshirtinfo {\n  margin-top: .3em;\n  z-index: 1000000000;\n  width: 100%;\n  height: 5em;\n}\n\n#iconsinfothree {\n\tmargin-top: 29em;\n\tmargin-left: 26.5em;\n\tbackground-color: white;\n\n}\n\n.master-navbar {\ntop: 0;\nmargin-top: 2em;\nz-index: 100000000;\nposition: fixed;\n}\n\n#lowerlowerlower {\n  bottom: 0px;\n  position: fixed;\n  height: 3em;\n  width: 100%;\n  background-image: -webkit-linear-gradient(bottom, rgb(0, 8, 23) 10%, rgb(0, 10, 25) 80%);\n}\n\n#waveicon {\n  display: inline-block;\n      position: relative;\n      float: left;\n      margin-left: 5%;\n      margin-top: 1.3%;\n      height: 1.6em;\n      border: 2px solid rgba(255, 255, 255, 0.3);\n      padding-right: .1em;\n      border-radius: 100px;\n      padding-left: .2em;\n      padding-top: .2em;\n      padding-bottom: .2em;\n      background-color: rgba(255, 255, 255, 0);\n      z-index: 10000000000;\n}\n\n\n\n\n#imagesquareone {\n\theight: 25em;\n\twidth: 25em;\n\tmargin-top: 8em;\n\tbackground-color: red;\n\tfloat: left;\n\tdisplay: inline;\n\tmargin-left: 9em;\n}\n\n\n#imagesquaretwo {\n\theight: 25em;\n\twidth: 25em;\n\tbackground-color: #949494;\n\tfloat: right;\n\tdisplay: inline;\n\tmargin-right: 9em;\n\tmargin-top: 8em;\n}\n\n#waveicon:hover {\n\tborder: 3px dotted rgb(189, 255, 231);\n\t-webkit-transition: all 800ms ease;\n\t-moz-transition: all 800ms ease;\n\t-o-transition: all 800ms ease;\n\ttransition: all 800ms ease;\n\tmargin-top: .14em;\n}\n\n\n#mainabout {\nmargin-top: 4.5em;\nmargin-left: 2.5em;\nfont-family: \"San Francisco Text\";\nfont-size: 2.5em;\ntext-transform: uppercase;\ncolor: #C3C3C3;\nfont-weight: 600;\nfont-style: Italic;\n}\n\n.master-navbar>nav {\n\theight: 4em;\n\tlist-style-type: none;\n\tmargin: 0 auto;\n\tposition: fixed;\n\twidth: 100%;\n\ttop: 0;\n\topacity: 1;\n\tleft: 0;\n\tright: 0;\n\tz-index: 1000000000000000000000000000000000;\n}\n\n\n.master-navbarusersite{\n  top: 0;\nmargin-top: 2em;\nz-index: 100000000;\nposition: fixed;\n}\n\n\n  .master-navbarusersite>nav a, .master-navbar>nav a,  .master-navbar>nav a:link{\n\t\t-webkit-transition: all 150ms ease;\n    -moz-transition: all 150ms ease;\n    -o-transition: all 150ms ease;\n    transition: all 150ms ease;\n    font-family: \"San Francisco Text\";\n    color: rgb(0, 0, 0);\n    padding-top: .8em;\n    padding-bottom: 1em;\n    font-size: .72em;\n    margin-left: 18%;\n    margin-top: 1.5%;\n    z-index: 1001;\n    font-weight: 600;\n    letter-spacing: 6px;\n    float: left;\n    display: inline-block;\n    }\n\n\n\n\n#siteback {\n  background-color: rgba(0, 49, 51, 0.03);\n      position: absolute;\n      padding-left: 1em;\n      margin-top: .1em;\n      padding-right: 4.2em;\n      border: 1px solid rgba(0, 29, 29, 0.01);\n      display: inline-block;\n      float: left;\n      color: black;\n}\n\n.master-navbarusersite>nav li {\n  display: inline-block;\nfont-family: 'San-Francisco';\ntext-align: center;\ncolor: white;\nmargin-left: .5em;\nz-index: 1001;\n-webkit-transition: all 150ms ease;\n-moz-transition: all 150ms ease;\n-o-transition: all 150ms ease;\ntransition: all 150ms ease;\n}\n\n#waveiconusersite {\n  display: inline-block;\n  position: relative;\n  height: 1.6em;\n  margin-left: 2.4em;\n  border: 1px solid rgba(0, 255, 161, 0.85);\n  padding-right: .1em;\n  border-radius: 100px;\n  padding-left: .2em;\n  padding-top: .2em;\n  padding-bottom: .2em;\n  background-color: rgba(0, 11, 35, 0.47);\n  z-index: 10000000000;\n}\n\n\n\n\n\n\n.nav: hover {\n  width: 100%;\nbackground-color: #EFEFEF;\nbottom: 0px;\nborder: none;\nmargin-top: 40em;\nposition: fixed;\npadding-top: .5em;\npadding-bottom: .63em;\npadding-left: .4em;\n}\n\n\n\n.maintext3 {\n  margin-right: 1.1%;\n  font-size: .4em;\n  background-color: rgba(255, 255, 255, 0.22);\n  float: right;\n  color: rgb(255, 255, 255);\n  letter-spacing: .4em;\n  border: 1px solid white;\n  padding-left: 1.2em;\n  padding-right: 1.2em;\n  margin-top: 1.05em;\n  box-shadow: inset 2px 0px 20px 1px rgba(109, 255, 221, 0.24);\n  text-shadow: 1px 3px 1px rgba(1, 0, 68, 0.3);\n}\n\n#Images {\n\tmargin-top: 10em;\n\t    z-index: 1000000000000000000;\n}\n\n\n#lowerideas {\n      width: 100%;\n          display: table;\n}\n\n#lowerideas li {\n  display: table-cell;\n}\n\n#mainiconsone {\n  margin-top: .3em;\n    float: left;\n}\n\n#mainiconsfive {\n  position: fixed;\n  width: 15%;\n  text-align: center;\n  font-size: .8em;\n  color: rgb(255, 255, 255);\n  font-family: \"San Francisco Text\";\n  padding-top: .7em;\n  padding-bottom: .7em;\n  background-color: rgb(72, 72, 72);\n  letter-spacing: .5em;\n  margin-right: .3em;\n  margin-top: .9em;\n  margin-left: 27%;\n  border: 1px solid rgba(0, 208, 255, 0.07);\n  font-weight: 300;\n}\n\n\n.master-navbartwo {\n\tbackground-image: -webkit-linear-gradient(left, rgb(255, 255, 255) 1%, rgb(251, 252, 255) 70%);\n\theight: 4em;\n\twidth: 100%;\n\tcolor: black;\n\tposition: fixed;\n\ttop: 0px;\n\tright: 0px;\n\tz-index: 1000000;\n\topacity: 1;\n}\n\n.master-navbartwousersite {\n  background-image: -webkit-linear-gradient(bottom, rgba(0, 0, 0, 0.88) 1%, rgb(0, 9, 43) 30%);\n  box-shadow: inset 20px 20px 20px 60px rgb(0, 0, 0);\n  height: 4em;\n  width: 100%;\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  z-index: 1000000;\n  opacity: 1;\n}\n\n\n.master-navbarfour {\n  top: 0px;\n  left: 0;\n  width: 100%;\n  position: fixed;\n  z-index: 1000000000000000550;\n}\n\n.master-navbar>nav ul {\n  padding: 0;\n}\n\n#usersitemenu {\n  position: fixed;\n    top: 0px;\n}\n\n#calltojoin {\n  font-family: \"San Francisco Text\";\n    font-size: 1.4em;\n    color: white;\n    margin-top: 10em;\n    position: fixed;\n    text-align: center;\n    width: 100%;\n}\n\n.master-navbar>nav li {\n  display: inline-block;\n  font-family: 'San-Francisco';\n  text-align: center;\n  color: white;\n  width: 24.5%;\n  z-index: 1001;\n  -webkit-transition: all 150ms ease;\n  -moz-transition: all 150ms ease;\n  -o-transition: all 150ms ease;\n  transition: all 150ms ease;\n}\n\n\n#paymentz {\n  padding-left: 40%;\n      padding-right: 40%;\n      margin-top: 3em;\n      border-radius: 5px;\n      display: block;\n      width: 100%;\n      padding-top: 1em;\n      border: 4px solid rgba(128, 128, 128, 0.25);\n      letter-spacing: .2em;\n      color: #FFFFFF;\n      padding-bottom: 1em;\n      text-transform: uppercase;\n      background-color: rgba(20, 231, 255, 0.44);\n      font-size: .9em;\n      margin-right: auto;\n      margin-left: auto;\n}\n\n#paymentz:hover {\n  padding-left: 40%;\n      padding-right: 40%;\n      margin-top: 3em;\n      border-radius: 5px;\n      display: block;\n      width: 100%;\n      padding-top: 1em;\n      border: 4px solid rgba(128, 128, 128, 0.25);\n      letter-spacing: .2em;\n      color: #FFFFFF;\n      padding-bottom: 1em;\n      text-transform: uppercase;\n      background-color: rgba(20, 231, 255, 0.75);\n      font-size: .9em;\n      margin-right: auto;\n      margin-left: auto;\n}\n\n.payment-errors {\nbackground-color: #AF4F4F;\nheight: 2.4em;\ncolor: white;\nfont-family: \"San Francisco Text\";\nfont-weight: 100;\npadding-left: 10em;\npadding-top: 1em;\ntext-transform: uppercase;\n}\n\n.ordertotaling{\n\tcolor: black;\n\tfont-family: \"San Francisco Text\";\n\tfont-weight: 300;\n\tborder-left: 1px solid black;\n\tpadding-left: 2em;\n}\n\n#ordertotaling2{\n\tfont-family: \"San Francisco Text\";\n\t    color: black;\n\t    width: 10%;\n\t    font-weight: 100;\n\t    font-size: .9em;\n\t    border: 1px solid #6F6F6F;\n\t    padding-left: 2em;\n\t    padding-right: 2em;\n\t    border-top: none;\n\t    border-bottom: none;\n\t    padding-top: 1em;\n\t    margin-top: 1em;\n\t    padding-bottom: 1em;\n}\n\n.home {\n  margin-left: 20%;\n}\n\n#streamnavigatortwo {\n  height: 6em;\n      right: 0px;\n      position: fixed;\n      background-color: rgb(4, 0, 0);\n      display: inline-block;\n      width: 40%;\n      top: 2em;\n      color: white;\n      border-bottom: 1px solid #212121;\n}\n\n#imagehover {\nwidth: 70%;\nmargin-right: auto;\nmargin-left: auto;\ndisplay: block;\n}\n\n#picture {\n    width: 70%;\n\t\tmargin-right: auto;\n\tmargin-left: auto;\n\tdisplay: block;\n}\n\n\n@media only screen and (max-width: 1149px) {\n\n\t#mainimages {\n    margin-left: auto;\n    margin-right: auto;\n    width: 55%;\n    margin-top: 9em;\n    display: block;\n    margin-bottom: 10em;\n}\n\n\n}\n\n\n@media only screen and (max-width: 1041px) {\n\n#rightarrowicon {\n\t    margin-top: 30em;\n}\n\n#leftarrowicon {\n\t    margin-top: 30em;\n}\n\n\n\n\t#pricey {\n\t    color: white;\n\t    letter-spacing: .6em;\n\t    padding-left: 5em;\n\t    padding-right: 12em;\n\t\t\t    margin-left: 25%;\n\t    padding-top: .4em;\n\t    padding-bottom: .4em;\n\t    border-right: none;\n\t    border-left: none;\n\t    background-color: rgba(255, 255, 255, 0);\n\t    border-top: 1px solid rgba(177, 255, 181, 0.21);\n\t    border-bottom: 1px solid rgba(0, 253, 255, 0.21);\n\t}\n\n\n\t#accountstream {\n    font-family: \"San Francisco Text\";\n    font-weight: 600;\n    margin-left: 12%;\n    display: inline-block;\n    margin-top: 1em;\n}\n\n#abouttab {\n\tdisplay: inline-block;\n\t    margin-left: 15%;\n\t    font-family: \"San Francisco Text\";\n\t    font-weight: 600;\n\t    font-size: .9em;\n\t    position: fixed;\n\t    margin-top: 1.2em;\n}\n\n\t#mainimages {\n    margin-left: auto;\n    margin-right: auto;\n    width: 75%;\n    margin-top: 9.5em;\n    display: block;\n    margin-bottom: 10em;\n}\n\n.buybuttonnavigator {\n\tpadding-top: .6em;\n\tpadding-bottom: .6em;\n\tpadding-right: 10em;\n\tpadding-left: 10em;\n\tfont-family: \"San Francisco Text\";\n\tbackground-color: #000000;\n\tcolor: #FFFFFF;\n\tdisplay: inline-block;\n\tmargin-top: .8em;\n\tfont-size: 85%;\n\tborder-radius: 2%;\n\tmargin-left: 14%;\n\twidth: 30%;\n}\n}\n\n\n@media only screen and (max-width: 824px) {\n\n\t#aboutcontainer {\n    width: 70%;\n    margin-left: 1em;\n    color: white;\n}\n\n\t#mainimages {\n\t    width: 80%;\n\t    margin-left: auto;\n\t    margin-right: auto;\n\t    margin-top: 10em;\n\t    display: block;\n\t    margin-bottom: 10em;\n\t}\n}\n\n@media only screen and (max-width: 780px) {\n\n#successmain {\n\tmargin-top: 1em;\n\tfont-size: 4em;\n\tcolor: white;\n\tfont-weight: 600;\n\tz-index: 1000000000000000000000;\n\tposition: fixed;\n\tfont-family: \"San Francisco Text\";\n}\n\n\t#rightarrowicon {\n\t\t    margin-top: 30em;\n\t}\n\n\t#leftarrowicon {\n\t\t    margin-top: 30em;\n\t}\n\n\t#joincall2 {\n\t    font-family: \"San Francisco Text\";\n\t    text-transform: uppercase;\n\t    margin-top: 8em;\n\t    font-style: italic;\n\t    font-size: 2em;\n\t    margin-left: 14%;\n\t    border-radius: 10px;\n\t    color: #060606;\n\t    border: none;\n\t    position: fixed;\n\t    font-weight: 600;\n\t    z-index: 1000000000000000000000000000000000;\n\t}\n\n#fullnameone {\n\twidth: 80%;\n}\n\n#e-mail {\n\twidth: 80%;\n}\n\n#fullname {\n\twidth: 80%;\n}\n\n#cardnumber {\n\twidth: 80%;\n}\n\n#cardcvc {\nwidth: 80%;\n}\n\n#cardmonth {\n\twidth: 80%;\n}\n\n#cardyear {\nwidth: 80%;\n}\n\n#streetaddress1{\n\twidth: 80%;\n}\n\n#city{\n\twidth: 80%;\n}\n\n#state{\n\twidth: 80%;\n}\n\n#zipcode{\nwidth: 80%;\n}\n\n\n\t#sweatshirtinfo {\n\t    margin-top: .3em;\n\t    margin-left: 3.5em;\n\t    z-index: 1000000000;\n\t}\n\n\t#mainimages {\n\t    width: 90%;\n\t    margin-left: auto;\n\t    margin-right: auto;\n\t    margin-top: 10em;\n\t    margin-bottom: 10em;\n\t    display: block;\n\t}\n\n\n#titlestream {\n    font-family: \"San Francisco Text\";\n    margin-left: 1%;\n    font-weight: 300;\n    padding-top: 1em;\n    padding-bottom: 1em;\n    padding-left: 1em;\n    border-left: 1px solid #F9F9F9;\n}\n\n.buybuttonnavigator {\n\tpadding-top: .6em;\n\tpadding-bottom: .6em;\n\tpadding-right: 2em;\n\tpadding-left: 3em;\n\tmargin-left: 5%;\n\twidth: 80%;\n\tfont-size: .8em;\n\tfont-family: \"San Francisco Text\";\n\tbackground-color: #000000;\n\tcolor: #FFFFFF;\n\tborder: 1px solid black;\n\tdisplay: inline-block;\n\tmargin-top: .8em;\n}\n\n#mediatab {\n  font-family: \"San Francisco Text\";\n  font-weight: 600;\n  margin-left: 15%;\n  font-size: .9em;\n  margin-top: 3.2em;\n  display: inline-block;\n}\n\n\n#abouttab {\n\tfont-family: \"San Francisco Text\";\n\tdisplay: inline-block;\n\tfont-size: .9em;\n\tmargin-left: 35%;\n\tposition: fixed;\n\tmargin-top: 1.2em;\n}\n\n\n#streamnavigatorone {\n    bottom: 0;\n    position: fixed;\n    height: 6em;\n    width: 100%;\n    border-left: none;\n    border-right: none;\n    border-top: 1px solid rgba(210, 210, 210, 0.2);\n    background-color: white;\n}\n\n#streamnavigatortwo {\n\tbottom: 0;\n\theight: 6em;\n\tposition: fixed;\n\tfloat: right;\n\tborder-left: none;\n\tborder-right: none;\n\tborder-top: 1px solid rgba(210, 210, 210, 0.2);\n\tbackground-color: rgba(251, 251, 251, 0);\n\tmargin-left: 40%;\n\tdisplay: inline-block;\n\twidth: 60%;\n}\n\n#ItemListing {\n\tfont-family: \"San Francisco Text\";\n\tdisplay: block;\n}\n\n#title {\n  font-family: \"San-Francisco\";\n  font-size: 1.7em;\n  font-weight: 300;\n  padding-top: .2em;\n  color: black;\n  margin-top: .4em;\n  float: right;\n  margin-right: 6em;\n  letter-spacing: .15em;\n}\n\n\n\n\t#buydarkfeed {\n    font-family: \"Open Sans\";\n        padding-left: 3em;\n        margin-left: 64%;\n        float: right;\n        padding-right: 3em;\n        color: rgb(58, 97, 70);\n        border: 4px solid rgb(58, 97, 70);\n        background-color: rgba(58, 97, 70, 0);\n        font-size: .9em;\n        border-radius: 3px;\n        font-weight: 600;\n        letter-spacing: .3em;\n        bottom: 0em;\n        padding-top: .8em;\n        margin-right: 4%;\n        padding-bottom: .8em;\n}\n\n#accountstream {\n    font-family: \"San Francisco Text\";\n    font-weight: 600;\n    margin-left: 4%;\n    display: inline-block;\n    margin-top: 1em;\n}\n\n\t}\n\n\t@media only screen and (max-width:670px) {\n\n\n\n\n\t#mainimages {\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 10.5em;\n    margin-bottom: 10em;\n    display: block;\n}\n\n}\n\n@media only screen and (max-width:650px) {\n\t#accountstream {\n\t\tfont-family: \"San Francisco Text\";\n\t\t    font-weight: 600;\n\t\t    margin-left: 16%;\n\t\t    display: inline-block;\n\t\t    margin-top: 1em;\n\t}\n\n\t#titlestream {\n\t\t\tfont-family: \"San Francisco Text\";\n\t\t\tmargin-left: 1%;\n\t\t\tfont-weight: 300;\n\t\t\tpadding-top: 1em;\n\t\t\tpadding-bottom: 1em;\n\t\t\tpadding-left: 1em;\n\t\t\tborder-left: 1px solid #F9F9F9;\n\t}\n\n\t#mediatab {\n\t\tfont-family: \"San Francisco Text\";\n    font-weight: 600;\n    margin-left: 10%;\n    font-size: .9em;\n}\n\n#abouttab {\n\tfont-family: \"San Francisco Text\";\n\t    display: inline-block;\n\t    font-size: .9em;\n\t    margin-top: .6em;\n\t    margin-left: 65%;\n\t    font-weight: 600;\n\t    position: fixed;\n}\n\n\t.buybuttonnavigator {\n\tpadding-top: .6em;\n\tpadding-bottom: .6em;\n\tpadding-right: 2em;\n\tpadding-left: 2em;\n\tmargin-left: 1%;\n\twidth: 80%;\n\tfont-size: .8em;\n\tfont-family: \"San Francisco Text\";\n\tbackground-color: #000000;\n\tcolor: #FFFFFF;\n\tborder: 1px solid black;\n\tdisplay: inline-block;\n\tmargin-top: .5em;\n}\n\n#streamnavigatortwo {\n\tbottom: 0;\n\t    height: 5em;\n\t    position: fixed;\n\t    float: right;\n\t    border-left: none;\n\t    border-right: none;\n\t    border-top: 1px solid rgba(210, 210, 210, 0.2);\n\t    background-color: rgba(251, 251, 251, 0);\n\t    display: inline-block;\n\t    width: 100%;\n\t    margin-left: 2%\n}\n\n#streamnavigatorone {\n    bottom: 0;\n    position: fixed;\n    height: 7.5em;\n    width: 100%;\n    border-left: none;\n    border-right: none;\n    border-top: 1px solid rgba(210, 210, 210, 0.2);\n    background-color: white;\n}\n\n\n}\n\n@media only screen and (max-width: 500px) {\n\n\t#pricey {\n\t    color: white;\n\t    margin-left: 1%;\n\t    letter-spacing: .6em;\n\t    padding-left: 8em;\n\t    padding-right: 8em;\n\t    padding-top: .4em;\n\t    padding-bottom: .4em;\n\t    border-right: none;\n\t    border-left: none;\n\t    background-color: rgba(255, 255, 255, 0);\n\t    border-top: 1px solid rgba(177, 255, 181, 0.21);\n\t    border-bottom: 1px solid rgba(0, 253, 255, 0.21);\n\t}\n\n\n\t\t#title {\n\t\t\tfont-family: \"San-Francisco\";\nfont-size: 1.2em;\nfont-weight: 300;\nfloat: left;\npadding-top: .000005em;\nmargin-left: 2%;\n\t}\n\n\n\n\n\n\t\t#picture {\n    width: 100%;\n\t\tmargin-right: auto;\n\t\tmargin-left: auto;\n\t\tdisplay: block;\n}\n\n#account {\n\tfont-family: \"San-Francisco\";\n\tfont-size: 1em;\n\tfont-weight: 600;\n\tcolor: #000000;\n\tmargin-left: 8%;\n}\n\n#price {\n    font-family: \"San Francisco Text\";\n    font-size: .6em;\n    margin-right: 1em;\n    float: right;\n    font-weight: 600;\n}\n\n#buydarkfeed {\n    font-family: \"San Francisco Text\";\n    color: white;\n    border: 1px solid rgb(0, 0, 0);\n    margin-top: .000005em;\n    background-color: black;\n    font-size: .6em;\n    font-weight: 600;\n    letter-spacing: .2em;\n    padding-bottom: .7em;\n    bottom: 0em;\n    padding-top: .7em;\n    float: right;\n\t\tmargin-right: 5%;\n\t\twidth: 30%;\n}\n\n#sweatshirtinfo {\n    margin-top: .3%;\n    margin-left: 3%;\n    z-index: 1000000000;\n}\n\n#images {\n\tmargin-left: .1em;\n}\n\n#mainimages {\n    width: 90%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 9em;\n    display: block;\n    margin-bottom: 10em;\n}\n}\n\n\n@media only screen and (max-width: 350px) {\n\n}\n"
);                                                                                                                     // 3
                                                                                                                       // 4
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"api":{"Audio":{"Server":{"AudioPublications.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Audio/Server/AudioPublications.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Audios = void 0;                                                                                                   // 1
module.watch(require("../../../../lib/Audio.js"), {                                                                    // 1
  Audios: function (v) {                                                                                               // 1
    Audios = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 6
  Meteor.publish('audioStream', function (audioTitle) {                                                                // 8
    if (!this.userId) {                                                                                                // 9
      return this.ready();                                                                                             // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return Audios.findOne({                                                                                            // 13
      audioTitle: audioTitle                                                                                           // 13
    }, {                                                                                                               // 13
      fields: {                                                                                                        // 14
        audiomember: 1,                                                                                                // 15
        audiomembers: 1,                                                                                               // 16
        audiotitle: 1,                                                                                                 // 17
        audiodate: 1,                                                                                                  // 18
        audiotext: 1                                                                                                   // 19
      }                                                                                                                // 14
    });                                                                                                                // 13
  });                                                                                                                  // 22
  Meteor.publish('audioFeed', function (audioTitle) {                                                                  // 25
    if (!this.userId) {                                                                                                // 26
      return this.ready();                                                                                             // 27
    }                                                                                                                  // 28
                                                                                                                       //
    return Audios.findOne({                                                                                            // 30
      audioTitle: audioTitle                                                                                           // 30
    }, {                                                                                                               // 30
      fields: {                                                                                                        // 31
        audiomember: 1,                                                                                                // 32
        audiomembers: 1,                                                                                               // 33
        audiotitle: 1,                                                                                                 // 34
        audiodate: 1,                                                                                                  // 35
        audiotext: 1                                                                                                   // 36
      }                                                                                                                // 31
    });                                                                                                                // 30
  });                                                                                                                  // 39
}                                                                                                                      // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"AudioMethods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Audio/AudioMethods.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Audioinsert: function () {                                                                                           // 1
    return Audioinsert;                                                                                                // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var ValidatedMethod = void 0;                                                                                          // 1
module.watch(require("meteor/mdg:validated-method"), {                                                                 // 1
  ValidatedMethod: function (v) {                                                                                      // 1
    ValidatedMethod = v;                                                                                               // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var DDPRateLimiter = void 0;                                                                                           // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                                     // 1
  DDPRateLimiter: function (v) {                                                                                       // 1
    DDPRateLimiter = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
                                                                                                                       //
var _ = void 0;                                                                                                        // 1
                                                                                                                       //
module.watch(require("meteor/underscore"), {                                                                           // 1
  _: function (v) {                                                                                                    // 1
    _ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var Audios = void 0;                                                                                                   // 1
module.watch(require("../../../lib/Audio.js"), {                                                                       // 1
  Audios: function (v) {                                                                                               // 1
    Audios = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var Audioinsert = new ValidatedMethod({                                                                                // 9
  name: 'Audio.methods.insert',                                                                                        // 10
  validate: new SimpleSchema({                                                                                         // 11
    audiotitle: {                                                                                                      // 12
      type: String                                                                                                     // 12
    },                                                                                                                 // 12
    audiotext: {                                                                                                       // 13
      type: String                                                                                                     // 13
    }                                                                                                                  // 13
  }).validator(),                                                                                                      // 11
  run: function (_ref) {                                                                                               // 15
    var audiotitle = _ref.audiotitle,                                                                                  // 15
        audiotext = _ref.audiotext;                                                                                    // 15
    Audios.insert({                                                                                                    // 16
      titleaudio: audiotitle,                                                                                          // 17
      textaudio: audiotext                                                                                             // 18
    });                                                                                                                // 16
  }                                                                                                                    // 20
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Image":{"Server":{"ImagePublications.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Image/Server/ImagePublications.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../../../lib/Image.js"), {                                                                    // 1
  Images: function (v) {                                                                                               // 1
    Images = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 6
  Meteor.publish('imageStream', function (imageTitle) {                                                                // 8
    if (!this.userId) {                                                                                                // 9
      return this.ready();                                                                                             // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return Images.findOne({                                                                                            // 13
      imageTitle: imageTitle                                                                                           // 13
    }, {                                                                                                               // 13
      fields: {                                                                                                        // 14
        imagemember: 1,                                                                                                // 15
        imagemembers: 1,                                                                                               // 16
        imagetitle: 1,                                                                                                 // 17
        imagedate: 1,                                                                                                  // 18
        imagetext: 1                                                                                                   // 19
      }                                                                                                                // 14
    });                                                                                                                // 13
  });                                                                                                                  // 22
  Meteor.publish('imageFeed', function (imageTitle) {                                                                  // 24
    if (!this.userId) {                                                                                                // 25
      return this.ready();                                                                                             // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return Images.findOne({                                                                                            // 29
      imageTitle: imageTitle                                                                                           // 29
    }, {                                                                                                               // 29
      fields: {                                                                                                        // 30
        imagemember: 1,                                                                                                // 31
        imagemembers: 1,                                                                                               // 32
        imagetitle: 1,                                                                                                 // 33
        imagedate: 1,                                                                                                  // 34
        imagetext: 1                                                                                                   // 35
      }                                                                                                                // 30
    });                                                                                                                // 29
  });                                                                                                                  // 38
}                                                                                                                      // 40
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ImageMethods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Image/ImageMethods.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Imagesinsert: function () {                                                                                          // 1
    return Imagesinsert;                                                                                               // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var ValidatedMethod = void 0;                                                                                          // 1
module.watch(require("meteor/mdg:validated-method"), {                                                                 // 1
  ValidatedMethod: function (v) {                                                                                      // 1
    ValidatedMethod = v;                                                                                               // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var DDPRateLimiter = void 0;                                                                                           // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                                     // 1
  DDPRateLimiter: function (v) {                                                                                       // 1
    DDPRateLimiter = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
                                                                                                                       //
var _ = void 0;                                                                                                        // 1
                                                                                                                       //
module.watch(require("meteor/underscore"), {                                                                           // 1
  _: function (v) {                                                                                                    // 1
    _ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var Images = void 0;                                                                                                   // 1
module.watch(require("../../../lib/Image.js"), {                                                                       // 1
  Images: function (v) {                                                                                               // 1
    Images = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var Imagesinsert = new ValidatedMethod({                                                                               // 9
  name: 'Imagesinsert',                                                                                                // 10
  validate: new SimpleSchema({                                                                                         // 11
    imagetext: {                                                                                                       // 12
      type: String                                                                                                     // 12
    },                                                                                                                 // 12
    imagetitle: {                                                                                                      // 13
      type: String                                                                                                     // 13
    },                                                                                                                 // 13
    imageimage: {                                                                                                      // 14
      type: Object                                                                                                     // 14
    }                                                                                                                  // 14
  }).validator(),                                                                                                      // 11
  run: function (_ref) {                                                                                               // 17
    var imagetext = _ref.imagetext,                                                                                    // 17
        imagetitle = _ref.imagetitle,                                                                                  // 17
        imageimage = _ref.imageimage;                                                                                  // 17
    Images.insert({                                                                                                    // 19
      textimage: imagetext,                                                                                            // 20
      titleimage: imagetitle,                                                                                          // 21
      imageimage: imageimage                                                                                           // 22
    });                                                                                                                // 19
  }                                                                                                                    // 24
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Products":{"Server":{"ProductsPublications.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Products/Server/ProductsPublications.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Products = void 0;                                                                                                 // 1
module.watch(require("../../../../lib/Products.js"), {                                                                 // 1
  Products: function (v) {                                                                                             // 1
    Products = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 6
  Meteor.publish('productStream', function (productTitle) {                                                            // 8
    if (!this.userId) {                                                                                                // 9
      return this.ready();                                                                                             // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return Products.findOne({                                                                                          // 13
      productTitle: productTitle                                                                                       // 13
    }, {                                                                                                               // 13
      fields: {                                                                                                        // 14
        productmember: 1,                                                                                              // 15
        productmembers: 1,                                                                                             // 16
        producttitle: 1,                                                                                               // 17
        productdate: 1,                                                                                                // 18
        producttext: 1                                                                                                 // 19
      }                                                                                                                // 14
    });                                                                                                                // 13
  });                                                                                                                  // 22
  Meteor.publish('productFeed', function (productTitle) {                                                              // 24
    if (!this.userId) {                                                                                                // 25
      return this.ready();                                                                                             // 26
    }                                                                                                                  // 27
                                                                                                                       //
    return Products.findOne({                                                                                          // 29
      productTitle: productTitle                                                                                       // 29
    }, {                                                                                                               // 29
      fields: {                                                                                                        // 30
        productmember: 1,                                                                                              // 31
        producttitle: 1,                                                                                               // 32
        textdate: 1,                                                                                                   // 33
        texttext: 1                                                                                                    // 34
      }                                                                                                                // 30
    });                                                                                                                // 29
  });                                                                                                                  // 37
}                                                                                                                      // 39
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ProductMethods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Products/ProductMethods.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Productsinsert: function () {                                                                                        // 1
    return Productsinsert;                                                                                             // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var ValidatedMethod = void 0;                                                                                          // 1
module.watch(require("meteor/mdg:validated-method"), {                                                                 // 1
  ValidatedMethod: function (v) {                                                                                      // 1
    ValidatedMethod = v;                                                                                               // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var DDPRateLimiter = void 0;                                                                                           // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                                     // 1
  DDPRateLimiter: function (v) {                                                                                       // 1
    DDPRateLimiter = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
                                                                                                                       //
var _ = void 0;                                                                                                        // 1
                                                                                                                       //
module.watch(require("meteor/underscore"), {                                                                           // 1
  _: function (v) {                                                                                                    // 1
    _ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var Products = void 0;                                                                                                 // 1
module.watch(require("../../../lib/Products.js"), {                                                                    // 1
  Products: function (v) {                                                                                             // 1
    Products = v;                                                                                                      // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var Productsinsert = new ValidatedMethod({                                                                             // 9
  name: 'Products.methods.insert',                                                                                     // 10
  validate: new SimpleSchema({                                                                                         // 11
    productmedia: {                                                                                                    // 12
      type: Object                                                                                                     // 12
    },                                                                                                                 // 12
    producttitle: {                                                                                                    // 13
      type: String                                                                                                     // 13
    },                                                                                                                 // 13
    producttext: {                                                                                                     // 14
      type: String                                                                                                     // 14
    },                                                                                                                 // 14
    productdate: {                                                                                                     // 15
      type: Date                                                                                                       // 15
    },                                                                                                                 // 15
    productshiptime: {                                                                                                 // 16
      type: String                                                                                                     // 16
    },                                                                                                                 // 16
    productshipprice: {                                                                                                // 17
      type: String                                                                                                     // 17
    }                                                                                                                  // 17
  }).validator(),                                                                                                      // 11
  run: function (_ref) {                                                                                               // 19
    var productmedia = _ref.productmedia,                                                                              // 19
        producttitle = _ref.producttitle,                                                                              // 19
        producttext = _ref.producttext,                                                                                // 19
        productdate = _ref.productdate,                                                                                // 19
        productshiptime = _ref.productshiptime,                                                                        // 19
        productshipprice = _ref.productshipprice;                                                                      // 19
    Products.insert({                                                                                                  // 20
      mediaproduct: productmedia,                                                                                      // 21
      titleproduct: producttitle,                                                                                      // 22
      textproduct: producttext,                                                                                        // 23
      dateproduct: productdate,                                                                                        // 24
      shiptimeproduct: productshiptime,                                                                                // 25
      shippriceproduct: productshipprice                                                                               // 26
    });                                                                                                                // 20
  }                                                                                                                    // 28
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Video":{"Server":{"VideoPublications.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Video/Server/VideoPublications.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Videos = void 0;                                                                                                   // 1
module.watch(require("../../../../lib/Video.js"), {                                                                    // 1
  Videos: function (v) {                                                                                               // 1
    Videos = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
                                                                                                                       //
if (Meteor.isServer) {                                                                                                 // 6
  Meteor.publish('videoStream', function (videoTitle) {                                                                // 8
    if (!this.userId) {                                                                                                // 9
      return this.ready();                                                                                             // 10
    }                                                                                                                  // 11
                                                                                                                       //
    return Videos.findOne({                                                                                            // 13
      videoTitle: videoTitle                                                                                           // 13
    }, {                                                                                                               // 13
      fields: {                                                                                                        // 14
        videomember: 1,                                                                                                // 15
        videomembers: 1,                                                                                               // 16
        videotitle: 1,                                                                                                 // 17
        videodate: 1,                                                                                                  // 18
        videotext: 1                                                                                                   // 19
      }                                                                                                                // 14
    });                                                                                                                // 13
  });                                                                                                                  // 22
  Meteor.publish('videoFeed', function (imageTitle) {                                                                  // 25
    if (!this.userId) {                                                                                                // 26
      return this.ready();                                                                                             // 27
    }                                                                                                                  // 28
                                                                                                                       //
    return Videos.findOne({                                                                                            // 30
      imageTitle: imageTitle                                                                                           // 30
    }, {                                                                                                               // 30
      fields: {                                                                                                        // 31
        imagemember: 1,                                                                                                // 32
        imagemembers: 1,                                                                                               // 33
        imagetitle: 1,                                                                                                 // 34
        imagedate: 1,                                                                                                  // 35
        imagetext: 1                                                                                                   // 36
      }                                                                                                                // 31
    });                                                                                                                // 30
  });                                                                                                                  // 39
}                                                                                                                      // 41
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"VideoMethods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Video/VideoMethods.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectDestructuringEmpty2 = require("babel-runtime/helpers/objectDestructuringEmpty");                            //
                                                                                                                       //
var _objectDestructuringEmpty3 = _interopRequireDefault(_objectDestructuringEmpty2);                                   //
                                                                                                                       //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }                      //
                                                                                                                       //
module.export({                                                                                                        // 1
  Videosinsert: function () {                                                                                          // 1
    return Videosinsert;                                                                                               // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var ValidatedMethod = void 0;                                                                                          // 1
module.watch(require("meteor/mdg:validated-method"), {                                                                 // 1
  ValidatedMethod: function (v) {                                                                                      // 1
    ValidatedMethod = v;                                                                                               // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var DDPRateLimiter = void 0;                                                                                           // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                                     // 1
  DDPRateLimiter: function (v) {                                                                                       // 1
    DDPRateLimiter = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
                                                                                                                       //
var _ = void 0;                                                                                                        // 1
                                                                                                                       //
module.watch(require("meteor/underscore"), {                                                                           // 1
  _: function (v) {                                                                                                    // 1
    _ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var Videos = void 0;                                                                                                   // 1
module.watch(require("../../../lib/Video.js"), {                                                                       // 1
  Videos: function (v) {                                                                                               // 1
    Videos = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var Videosinsert = new ValidatedMethod({                                                                               // 9
  name: 'Videos.methods.insert',                                                                                       // 10
  validate: new SimpleSchema({                                                                                         // 11
    videotitle: {                                                                                                      // 12
      type: String                                                                                                     // 12
    },                                                                                                                 // 12
    videotext: {                                                                                                       // 13
      type: String                                                                                                     // 13
    },                                                                                                                 // 13
    videovideo: {                                                                                                      // 14
      type: Object                                                                                                     // 14
    },                                                                                                                 // 14
    videoimage: {                                                                                                      // 15
      type: Object                                                                                                     // 15
    },                                                                                                                 // 15
    videodate: {                                                                                                       // 16
      type: Date                                                                                                       // 16
    }                                                                                                                  // 16
  }).validator(),                                                                                                      // 11
  run: function (_ref) {                                                                                               // 18
    (0, _objectDestructuringEmpty3.default)(_ref);                                                                     // 18
    Videos.insert({                                                                                                    // 19
      titlevideo: videotitle,                                                                                          // 20
      textvideo: videotext,                                                                                            // 21
      videovideotwo: videovideo,                                                                                       // 22
      imagevideo: videoimage,                                                                                          // 23
      datevideo: videodate                                                                                             // 24
    });                                                                                                                // 19
  }                                                                                                                    // 26
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"Text":{"TextMethods.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/api/Text/TextMethods.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Textsinsert: function () {                                                                                           // 1
    return Textsinsert;                                                                                                // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Meteor = void 0;                                                                                                   // 1
module.watch(require("meteor/meteor"), {                                                                               // 1
  Meteor: function (v) {                                                                                               // 1
    Meteor = v;                                                                                                        // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var ValidatedMethod = void 0;                                                                                          // 1
module.watch(require("meteor/mdg:validated-method"), {                                                                 // 1
  ValidatedMethod: function (v) {                                                                                      // 1
    ValidatedMethod = v;                                                                                               // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
var DDPRateLimiter = void 0;                                                                                           // 1
module.watch(require("meteor/ddp-rate-limiter"), {                                                                     // 1
  DDPRateLimiter: function (v) {                                                                                       // 1
    DDPRateLimiter = v;                                                                                                // 1
  }                                                                                                                    // 1
}, 3);                                                                                                                 // 1
                                                                                                                       //
var _ = void 0;                                                                                                        // 1
                                                                                                                       //
module.watch(require("meteor/underscore"), {                                                                           // 1
  _: function (v) {                                                                                                    // 1
    _ = v;                                                                                                             // 1
  }                                                                                                                    // 1
}, 4);                                                                                                                 // 1
var Texts = void 0;                                                                                                    // 1
module.watch(require("../../../lib/Text.js"), {                                                                        // 1
  Texts: function (v) {                                                                                                // 1
    Texts = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 5);                                                                                                                 // 1
var Textsinsert = new ValidatedMethod({                                                                                // 9
  name: 'Texts.methods.insert',                                                                                        // 10
  validate: new SimpleSchema({                                                                                         // 11
    texttitle: {                                                                                                       // 12
      type: String                                                                                                     // 12
    },                                                                                                                 // 12
    texttext: {                                                                                                        // 13
      type: String                                                                                                     // 13
    }                                                                                                                  // 13
  }).validator(),                                                                                                      // 11
  run: function (_ref) {                                                                                               // 16
    var texttitle = _ref.texttitle,                                                                                    // 16
        texttext = _ref.texttext,                                                                                      // 16
        textmember = _ref.textmember,                                                                                  // 16
        textmedia = _ref.textmedia;                                                                                    // 16
    Texts.insert({                                                                                                     // 18
      titletext: texttitle,                                                                                            // 19
      texttexttwo: texttext                                                                                            // 20
    });                                                                                                                // 18
  }                                                                                                                    // 22
});                                                                                                                    // 9
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"startup":{"both":{"index.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/both/index.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"index.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/index.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("./routes.js"));                                                                                  // 1
module.watch(require("./useraccounts-configuration.js"));                                                              // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/routes.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var FlowRouter = void 0;                                                                                               // 1
module.watch(require("meteor/kadira:flow-router"), {                                                                   // 1
  FlowRouter: function (v) {                                                                                           // 1
    FlowRouter = v;                                                                                                    // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var BlazeLayout = void 0;                                                                                              // 1
module.watch(require("meteor/kadira:blaze-layout"), {                                                                  // 1
  BlazeLayout: function (v) {                                                                                          // 1
    BlazeLayout = v;                                                                                                   // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var AccountsTemplates = void 0;                                                                                        // 1
module.watch(require("meteor/useraccounts:core"), {                                                                    // 1
  AccountsTemplates: function (v) {                                                                                    // 1
    AccountsTemplates = v;                                                                                             // 1
  }                                                                                                                    // 1
}, 2);                                                                                                                 // 1
module.watch(require("../../ui/stylesheets/create.css"));                                                              // 1
module.watch(require("../../ui/stylesheets/dashboard.css"));                                                           // 1
module.watch(require("../../ui/stylesheets/lowernavigation.css"));                                                     // 1
module.watch(require("../../ui/stylesheets/main.css"));                                                                // 1
module.watch(require("../../ui/stylesheets/messages.css"));                                                            // 1
module.watch(require("../../ui/stylesheets/paymentModal.css"));                                                        // 1
module.watch(require("../../ui/stylesheets/products.css"));                                                            // 1
module.watch(require("../../ui/stylesheets/settings.css"));                                                            // 1
module.watch(require("../../ui/stylesheets/talent.css"));                                                              // 1
module.watch(require("../../ui/stylesheets/yoursite.css"));                                                            // 1
module.watch(require("../../ui/layouts/Appbody.js"));                                                                  // 1
module.watch(require("../../ui/components/Menu.js"));                                                                  // 1
module.watch(require("../../ui/pages/ProductStream.js"));                                                              // 1
module.watch(require("../../ui/pages/Talent.js"));                                                                     // 1
module.watch(require("../../ui/pages/Settings.js"));                                                                   // 1
module.watch(require("../../ui/pages/CreateSmart.js"));                                                                // 1
module.watch(require("../../ui/pages/Market.js"));                                                                     // 1
module.watch(require("../../ui/pages/YourMessagesSmart.js"));                                                          // 1
module.watch(require("../../ui/components/AboutReusable.js"));                                                         // 1
module.watch(require("../../ui/components/AudioItemReusable.js"));                                                     // 1
module.watch(require("../../ui/components/AudioItemSmart.js"));                                                        // 1
module.watch(require("../../ui/components/AudioStreamReusable.js"));                                                   // 1
module.watch(require("../../ui/components/ImageItemReusable.js"));                                                     // 1
module.watch(require("../../ui/components/ImageItemSmart.js"));                                                        // 1
module.watch(require("../../ui/components/ImageStreamReusable.js"));                                                   // 1
module.watch(require("../../ui/components/LowerNavigator.js"));                                                        // 1
module.watch(require("../../ui/components/Message.js"));                                                               // 1
module.watch(require("../../ui/components/NewMessageSmart.js"));                                                       // 1
module.watch(require("../../ui/components/PaymentModalReusable.js"));                                                  // 1
module.watch(require("../../ui/components/ProductItemReusable.js"));                                                   // 1
module.watch(require("../../ui/components/ProductItemSmart.js"));                                                      // 1
module.watch(require("../../ui/components/ProductStreamReusable.js"));                                                 // 1
module.watch(require("../../ui/components/SideMessageReusable.js"));                                                   // 1
module.watch(require("../../ui/components/StreamVideoReusable.js"));                                                   // 1
module.watch(require("../../ui/components/TextItemSmart.js"));                                                         // 1
module.watch(require("../../ui/components/TextItemReusable.js"));                                                      // 1
module.watch(require("../../ui/components/TextStreamReusable.js"));                                                    // 1
module.watch(require("../../ui/components/UserSiteReusable.js"));                                                      // 1
module.watch(require("../../ui/components/VideoItemReusable.js"));                                                     // 1
module.watch(require("../../ui/components/VideoItemSmart.js"));                                                        // 1
module.watch(require("../../ui/components/YouMenuReusable.js"));                                                       // 1
module.watch(require("../../ui/components/NewMessageReusable.js"));                                                    // 1
module.watch(require("../../ui/components/YourMessagesReusable.js"));                                                  // 1
module.watch(require("../../ui/pages/AudioFeed.js"));                                                                  // 1
module.watch(require("../../ui/pages/AudioStream.js"));                                                                // 1
module.watch(require("../../ui/pages/CreateSmart.js"));                                                                // 1
module.watch(require("../../ui/pages/ImageFeed.js"));                                                                  // 1
module.watch(require("../../ui/pages/ImageStream.js"));                                                                // 1
module.watch(require("../../ui/components/Create.js"));                                                                // 1
module.watch(require("../../ui/pages/Market.js"));                                                                     // 1
module.watch(require("../../ui/pages/Media.js"));                                                                      // 1
module.watch(require("../../ui/pages/ProductStream.js"));                                                              // 1
module.watch(require("../../ui/pages/Settings.js"));                                                                   // 1
module.watch(require("../../ui/pages/Talent.js"));                                                                     // 1
module.watch(require("../../ui/pages/TalentFeed.js"));                                                                 // 1
module.watch(require("../../ui/pages/TextStream.js"));                                                                 // 1
module.watch(require("../../ui/pages/UserSiteSmart.js"));                                                              // 1
module.watch(require("../../ui/pages/VideoFeed.js"));                                                                  // 1
module.watch(require("../../ui/pages/VideoStream.js"));                                                                // 1
module.watch(require("../../ui/pages/YourMessagesSmart.js"));                                                          // 1
module.watch(require("../../ui/accounts/accounts-templates.js"));                                                      // 1
FlowRouter.route('/', {                                                                                                // 71
  name: 'Home',                                                                                                        // 72
  action: function () {                                                                                                // 73
    BlazeLayout.render('Appbody', {                                                                                    // 74
      top: 'Menu',                                                                                                     // 74
      main: 'Market',                                                                                                  // 74
      footer: 'LowerNavigator'                                                                                         // 74
    });                                                                                                                // 74
  }                                                                                                                    // 75
});                                                                                                                    // 71
FlowRouter.route('/messages', {                                                                                        // 79
  action: function () {                                                                                                // 80
    BlazeLayout.render('Appbody', {                                                                                    // 81
      top: 'Menu',                                                                                                     // 81
      main: 'YourMessagesRU',                                                                                          // 81
      footer: 'LowerNavigator'                                                                                         // 81
    });                                                                                                                // 81
  }                                                                                                                    // 82
});                                                                                                                    // 79
FlowRouter.route('/welcome', {                                                                                         // 86
  action: function () {                                                                                                // 87
    BlazeLayout.render('Appbody', {                                                                                    // 88
      top: "Menu"                                                                                                      // 88
    });                                                                                                                // 88
  }                                                                                                                    // 89
});                                                                                                                    // 86
FlowRouter.route('/create', {                                                                                          // 92
  action: function () {                                                                                                // 93
    BlazeLayout.render('Appbody', {                                                                                    // 94
      top: "Menu",                                                                                                     // 94
      main: 'Create',                                                                                                  // 94
      footer: 'LowerNavigator'                                                                                         // 94
    });                                                                                                                // 94
  }                                                                                                                    // 95
});                                                                                                                    // 92
FlowRouter.route('/cloud', {                                                                                           // 99
  action: function () {                                                                                                // 100
    BlazeLayout.render('Appbody', {                                                                                    // 101
      top: "Menu",                                                                                                     // 101
      main: 'Cloud',                                                                                                   // 101
      footer: 'LowerNavigator'                                                                                         // 101
    });                                                                                                                // 101
  }                                                                                                                    // 102
});                                                                                                                    // 99
FlowRouter.route('/home', {                                                                                            // 105
  action: function () {                                                                                                // 106
    BlazeLayout.render('Appbody', {                                                                                    // 107
      top: "Menu",                                                                                                     // 107
      footer: 'LowerNavigator'                                                                                         // 107
    });                                                                                                                // 107
  }                                                                                                                    // 108
});                                                                                                                    // 105
FlowRouter.route('/media', {                                                                                           // 111
  action: function () {                                                                                                // 112
    BlazeLayout.render('Appbody', {                                                                                    // 113
      top: "Menu",                                                                                                     // 113
      footer: 'LowerNavigator'                                                                                         // 113
    });                                                                                                                // 113
  }                                                                                                                    // 114
});                                                                                                                    // 111
FlowRouter.route('/about', {                                                                                           // 118
  action: function () {                                                                                                // 119
    BlazeLayout.render('Appbody', {                                                                                    // 120
      top: 'Menu',                                                                                                     // 120
      main: 'About',                                                                                                   // 120
      footer: 'LowerNavigator'                                                                                         // 120
    });                                                                                                                // 120
  }                                                                                                                    // 121
});                                                                                                                    // 118
FlowRouter.route('/market', {                                                                                          // 124
  action: function () {                                                                                                // 125
    BlazeLayout.render('Appbody', {                                                                                    // 126
      top: 'Menu',                                                                                                     // 126
      main: 'Market',                                                                                                  // 126
      footer: 'LowerNavigator'                                                                                         // 126
    });                                                                                                                // 126
  }                                                                                                                    // 127
});                                                                                                                    // 124
FlowRouter.route('/newmessage', {                                                                                      // 130
  action: function () {                                                                                                // 131
    BlazeLayout.render('Appbody', {                                                                                    // 132
      top: 'Menu',                                                                                                     // 132
      main: 'NewMessage',                                                                                              // 132
      footer: 'LowerNavigator'                                                                                         // 132
    });                                                                                                                // 132
  }                                                                                                                    // 133
});                                                                                                                    // 130
FlowRouter.route('/talent', {                                                                                          // 137
  action: function () {                                                                                                // 138
    BlazeLayout.render('Appbody', {                                                                                    // 139
      top: 'Menu',                                                                                                     // 139
      main: 'Talent',                                                                                                  // 139
      footer: 'LowerNavigator'                                                                                         // 139
    });                                                                                                                // 139
  }                                                                                                                    // 140
});                                                                                                                    // 137
FlowRouter.route('/register', {                                                                                        // 143
  action: function () {                                                                                                // 144
    BlazeLayout.render('Appbody', {                                                                                    // 145
      main: 'Register'                                                                                                 // 145
    });                                                                                                                // 145
  }                                                                                                                    // 146
});                                                                                                                    // 143
FlowRouter.route('/settings', {                                                                                        // 149
  action: function () {                                                                                                // 150
    BlazeLayout.render('Appbody', {                                                                                    // 151
      top: 'Menu',                                                                                                     // 151
      main: 'Settings',                                                                                                // 151
      footer: 'LowerNavigator'                                                                                         // 151
    });                                                                                                                // 151
  }                                                                                                                    // 152
});                                                                                                                    // 149
FlowRouter.route('/mysite', {                                                                                          // 155
  action: function () {                                                                                                // 156
    BlazeLayout.render('Appbody', {                                                                                    // 157
      main: 'Mysite'                                                                                                   // 157
    });                                                                                                                // 157
  }                                                                                                                    // 158
});                                                                                                                    // 155
FlowRouter.route('/createproduct', {                                                                                   // 161
  action: function () {                                                                                                // 162
    BlazeLayout.render('Appbody', {                                                                                    // 163
      main: 'CreateProduct'                                                                                            // 163
    });                                                                                                                // 163
  }                                                                                                                    // 164
});                                                                                                                    // 161
FlowRouter.route('/createaudio', {                                                                                     // 167
  action: function () {                                                                                                // 168
    BlazeLayout.render('Appbody', {                                                                                    // 169
      main: 'CreateAudio'                                                                                              // 169
    });                                                                                                                // 169
  }                                                                                                                    // 170
});                                                                                                                    // 167
FlowRouter.route('/createtext', {                                                                                      // 173
  action: function () {                                                                                                // 174
    BlazeLayout.render('Appbody', {                                                                                    // 175
      main: 'CreateText'                                                                                               // 175
    });                                                                                                                // 175
  }                                                                                                                    // 176
});                                                                                                                    // 173
FlowRouter.route('/createvideo', {                                                                                     // 179
  action: function () {                                                                                                // 180
    BlazeLayout.render('Appbody', {                                                                                    // 181
      main: 'CreateVideo'                                                                                              // 181
    });                                                                                                                // 181
  }                                                                                                                    // 182
});                                                                                                                    // 179
FlowRouter.route('/createimage', {                                                                                     // 185
  action: function () {                                                                                                // 186
    BlazeLayout.render('Appbody', {                                                                                    // 187
      main: 'CreateImage'                                                                                              // 187
    });                                                                                                                // 187
  }                                                                                                                    // 188
});                                                                                                                    // 185
FlowRouter.route('/createbooking', {                                                                                   // 191
  action: function () {                                                                                                // 192
    BlazeLayout.render('Appbody', {                                                                                    // 193
      main: 'CreateBooking'                                                                                            // 193
    });                                                                                                                // 193
  }                                                                                                                    // 194
});                                                                                                                    // 191
FlowRouter.route('/products/:ProductTitle', {                                                                          // 198
  name: 'StreamProduct',                                                                                               // 199
  action: function (params) {                                                                                          // 200
    BlazeLayout.render('Appbody', {                                                                                    // 201
      top: 'Menu',                                                                                                     // 201
      main: 'StreamProductMain'                                                                                        // 201
    });                                                                                                                // 201
  }                                                                                                                    // 202
});                                                                                                                    // 198
FlowRouter.route('/videos/:video', {                                                                                   // 206
  name: 'StreamVideo',                                                                                                 // 207
  action: function (params) {                                                                                          // 208
    BlazeLayout.render('Appbody', {                                                                                    // 209
      top: 'Menu',                                                                                                     // 209
      main: 'StreamProductMain'                                                                                        // 209
    });                                                                                                                // 209
  }                                                                                                                    // 210
});                                                                                                                    // 206
FlowRouter.route('/texts/:text', {                                                                                     // 213
  name: 'StreamText',                                                                                                  // 214
  action: function (params) {                                                                                          // 215
    BlazeLayout.render('Appbody', {                                                                                    // 216
      top: 'Menu',                                                                                                     // 216
      main: 'StreamProductMain'                                                                                        // 216
    });                                                                                                                // 216
  }                                                                                                                    // 217
});                                                                                                                    // 213
FlowRouter.route('/images/:image', {                                                                                   // 220
  name: 'StreamImage',                                                                                                 // 221
  action: function (params) {                                                                                          // 222
    BlazeLayout.render('Appbody', {                                                                                    // 223
      top: 'Menu',                                                                                                     // 223
      main: 'StreamProductMain'                                                                                        // 223
    });                                                                                                                // 223
  }                                                                                                                    // 224
});                                                                                                                    // 220
FlowRouter.route('/requests/:request', {                                                                               // 227
  name: 'StreamRequest',                                                                                               // 228
  action: function (params) {                                                                                          // 229
    BlazeLayout.render('Appbody', {                                                                                    // 230
      top: 'Menu',                                                                                                     // 230
      main: 'StreamProductMain'                                                                                        // 230
    });                                                                                                                // 230
  }                                                                                                                    // 231
});                                                                                                                    // 227
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"useraccounts-configuration.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// imports/startup/client/useraccounts-configuration.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
AccountsTemplates.configure({                                                                                          // 2
  defaultLayout: 'Appbody',                                                                                            // 3
  defaultLayoutRegions: {                                                                                              // 4
    nav: 'top',                                                                                                        // 5
    footer: 'footer'                                                                                                   // 6
  },                                                                                                                   // 4
  defaultContentRegion: 'main',                                                                                        // 8
  confirmPassword: true,                                                                                               // 9
  enablePasswordChange: true,                                                                                          // 10
  showForgotPasswordLink: true,                                                                                        // 11
  enablePasswordChange: true,                                                                                          // 12
  sendVerificationEmail: true,                                                                                         // 13
  confirmPassword: true,                                                                                               // 14
  forbidClientAccountCreation: false,                                                                                  // 15
  showPlaceholders: true,                                                                                              // 16
  continuousValidation: true,                                                                                          // 17
  negativeValidation: true                                                                                             // 18
});                                                                                                                    // 2
AccountsTemplates.configureRoute('signIn', {                                                                           // 22
  name: 'signin',                                                                                                      // 23
  path: '/signin',                                                                                                     // 24
  layoutType: 'blaze',                                                                                                 // 25
  defaultLayoutRegions: {                                                                                              // 26
    nav: 'top',                                                                                                        // 26
    footer: 'footer'                                                                                                   // 27
  },                                                                                                                   // 26
  contentRegion: 'main',                                                                                               // 28
  layoutTemplate: 'Appbody',                                                                                           // 29
  redirect: '/register'                                                                                                // 30
});                                                                                                                    // 22
AccountsTemplates.configureRoute('signUp', {                                                                           // 33
  name: 'join',                                                                                                        // 34
  path: '/join',                                                                                                       // 35
  defaultLayoutRegions: {                                                                                              // 36
    nav: 'top',                                                                                                        // 36
    footer: 'footer'                                                                                                   // 37
  },                                                                                                                   // 36
  layoutType: 'blaze',                                                                                                 // 38
  contentRegion: 'main',                                                                                               // 39
  layoutTemplate: 'Appbody'                                                                                            // 40
});                                                                                                                    // 33
AccountsTemplates.configureRoute('forgotPwd', {                                                                        // 43
  name: 'forgotPwd',                                                                                                   // 44
  path: '/forgot-password',                                                                                            // 45
  defaultLayoutRegions: {},                                                                                            // 46
  layoutType: 'blaze',                                                                                                 // 47
  contentRegion: 'main',                                                                                               // 48
  layoutTemplate: 'AppBody'                                                                                            // 49
});                                                                                                                    // 43
AccountsTemplates.configureRoute('resetPwd', {                                                                         // 52
  name: 'resetPwd',                                                                                                    // 53
  path: '/reset-password',                                                                                             // 54
  defaultLayoutRegions: {},                                                                                            // 55
  layoutType: 'blaze',                                                                                                 // 56
  contentRegion: 'main',                                                                                               // 57
  layoutTemplate: 'AppBody'                                                                                            // 58
}); /*                                                                                                                 // 52
    var mysignUpFlow = function (error) {                                                                              //
      if (!error) {                                                                                                    //
     Router.go('/register');                                                                                           //
     }                                                                                                                 //
    };                                                                                                                 //
    */                                                                                                                 //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}},"lib":{"Audio.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Audio.js                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Audios = new Mongo.Collection('audio');                                                                            // 4
Audios.deny({                                                                                                          // 6
  insert: function () {                                                                                                // 7
    return true;                                                                                                       // 7
  },                                                                                                                   // 7
  update: function () {                                                                                                // 8
    return true;                                                                                                       // 8
  },                                                                                                                   // 8
  remove: function () {                                                                                                // 9
    return true;                                                                                                       // 9
  }                                                                                                                    // 9
});                                                                                                                    // 6
Audios.schema = new SimpleSchema({                                                                                     // 12
  audioaudioblz: {                                                                                                     // 13
    type: [Object]                                                                                                     // 13
  },                                                                                                                   // 13
  audiomediablz: {                                                                                                     // 14
    type: [Object]                                                                                                     // 14
  },                                                                                                                   // 14
  audiotitleblz: {                                                                                                     // 15
    type: String                                                                                                       // 15
  },                                                                                                                   // 15
  audiotextblz: {                                                                                                      // 16
    type: String                                                                                                       // 16
  }                                                                                                                    // 16
});                                                                                                                    // 12
Audios.attachSchema(Audios.schema);                                                                                    // 19
module.exportDefault(Audios);                                                                                          // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Bookings.js":function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Bookings.js                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Image.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Image.js                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Images = new Mongo.Collection('images');                                                                           // 4
Images.deny({                                                                                                          // 7
  insert: function () {                                                                                                // 8
    return true;                                                                                                       // 8
  },                                                                                                                   // 8
  update: function () {                                                                                                // 9
    return true;                                                                                                       // 9
  },                                                                                                                   // 9
  remove: function () {                                                                                                // 10
    return true;                                                                                                       // 10
  }                                                                                                                    // 10
});                                                                                                                    // 7
Images.schema = new SimpleSchema({                                                                                     // 13
  imagetext: {                                                                                                         // 14
    type: String                                                                                                       // 14
  },                                                                                                                   // 14
  imagetitle: {                                                                                                        // 15
    type: String                                                                                                       // 15
  },                                                                                                                   // 15
  imageimage: {                                                                                                        // 16
    type: Object                                                                                                       // 16
  },                                                                                                                   // 16
  imagedate: {                                                                                                         // 17
    type: Date                                                                                                         // 17
  }                                                                                                                    // 17
});                                                                                                                    // 13
Images.attachSchema(Images.schema);                                                                                    // 20
module.exportDefault(Images);                                                                                          // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Products.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Products.js                                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Products: function () {                                                                                              // 1
    return Products;                                                                                                   // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Products = new Mongo.Collection('products');                                                                       // 1
Products.deny({                                                                                                        // 3
  insert: function () {                                                                                                // 4
    return true;                                                                                                       // 4
  },                                                                                                                   // 4
  update: function () {                                                                                                // 5
    return true;                                                                                                       // 5
  },                                                                                                                   // 5
  remove: function () {                                                                                                // 6
    return true;                                                                                                       // 6
  }                                                                                                                    // 6
});                                                                                                                    // 3
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Text.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Text.js                                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Texts: function () {                                                                                                 // 1
    return Texts;                                                                                                      // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Texts = new Mongo.Collection('texts');                                                                             // 6
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"Video.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/Video.js                                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({                                                                                                        // 1
  Videos: function () {                                                                                                // 1
    return Videos;                                                                                                     // 1
  }                                                                                                                    // 1
});                                                                                                                    // 1
var Mongo = void 0;                                                                                                    // 1
module.watch(require("meteor/mongo"), {                                                                                // 1
  Mongo: function (v) {                                                                                                // 1
    Mongo = v;                                                                                                         // 1
  }                                                                                                                    // 1
}, 0);                                                                                                                 // 1
var SimpleSchema = void 0;                                                                                             // 1
module.watch(require("meteor/aldeed:simple-schema"), {                                                                 // 1
  SimpleSchema: function (v) {                                                                                         // 1
    SimpleSchema = v;                                                                                                  // 1
  }                                                                                                                    // 1
}, 1);                                                                                                                 // 1
var Videos = new Mongo.Collection('videos');                                                                           // 4
Videos.deny({                                                                                                          // 6
  insert: function () {                                                                                                // 7
    return true;                                                                                                       // 7
  },                                                                                                                   // 7
  update: function () {                                                                                                // 8
    return true;                                                                                                       // 8
  },                                                                                                                   // 8
  remove: function () {                                                                                                // 9
    return true;                                                                                                       // 9
  }                                                                                                                    // 9
});                                                                                                                    // 6
Videos.schema = new SimpleSchema({                                                                                     // 12
  videotitle: {                                                                                                        // 13
    type: String                                                                                                       // 13
  },                                                                                                                   // 13
  videotext: {                                                                                                         // 14
    type: String                                                                                                       // 14
  },                                                                                                                   // 14
  videovideo: {                                                                                                        // 15
    type: Object                                                                                                       // 15
  },                                                                                                                   // 15
  videoimage: {                                                                                                        // 16
    type: Object                                                                                                       // 16
  },                                                                                                                   // 16
  videodate: {                                                                                                         // 17
    type: String                                                                                                       // 17
  }                                                                                                                    // 17
});                                                                                                                    // 12
Videos.attachSchema(Videos.schema);                                                                                    // 20
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/main.js                                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.watch(require("../imports/startup/client"));                                                                    // 1
module.watch(require("../imports/startup/both"));                                                                      // 1
module.watch(require("../imports/startup/client/routes.js"));                                                          // 1
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("./lib/Audio.js");
require("./lib/Bookings.js");
require("./lib/Image.js");
require("./lib/Products.js");
require("./lib/Text.js");
require("./lib/Video.js");
require("./client/main.js");