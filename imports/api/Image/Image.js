import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema'

const Images = new Mongo.Collection('images');


Images.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

Images.schema = new SimpleSchema({
imagetext : {type: String},
imagetitle: {type: String},
imageimage : {type: Object},
imagedate : {type: Date}
});

Images.attachSchema(Images.schema);

export default Images
