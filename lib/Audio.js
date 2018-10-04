import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

 const Audios = new Mongo.Collection('audio');

Audios.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Audios.schema = new SimpleSchema({
audioaudioblz: {type: [Object]},
audiomediablz: {type: [Object]},
audiotitleblz: {type: String},
audiotextblz: {type: String}
});

Audios.attachSchema(Audios.schema);

export default Audios
