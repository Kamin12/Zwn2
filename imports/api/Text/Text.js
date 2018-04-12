import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Texts = new Mongo.Collection('texts');

Texts.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Texts.schema = new SimpleSchema({
texttitle : {type: String} ,
texttext : {type: String},
textmedia : {type: Object},
textdate : {type: Date}
});

Texts.attachSchema(Texts.schema);
