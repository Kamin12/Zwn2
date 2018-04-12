import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Videos = new Mongo.Collection('videos');

Videos.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Videos.schema = new SimpleSchema({
  videotitle: {type: String},
  videotext: {type: String},
  videovideo: {type: Object },
  videoimage: {type: Object},
  videodate: {type: String}
});

Videos.attachSchema(Videos.schema);
