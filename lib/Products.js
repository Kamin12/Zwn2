export const Products = new Mongo.Collection('products');

Products.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
