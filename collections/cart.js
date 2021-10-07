const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
const client = new MongoClient(url);

module.exports = {
  create: async function (dataToInsert) {
    await this.errorHandling(async (cart) => {
      if (Array.isArray(dataToInsert)) {
        await cart.insertMany(dataToInsert);
      } else {
        await cart.insertOne(dataToInsert);
      }
      console.log('Successfully written cart');
    });
  },
  read: async function (query) {
    await this.errorHandling(async (cart) => {
      const res = await cart.find(query).toArray();
      console.log('Successfully found cart');
      console.log(res);
    });
  },
  update: async function (fromData, toData) {
    await this.errorHandling(async (cart) => {
      await cart.updateMany(fromData, { $set: toData });
      console.log('Successfully updated cart');
    });
  },
  delete: async function (dataToDelete) {
    await this.errorHandling(async (cart) => {
      await cart.deleteMany(dataToDelete);
      console.log('Successfully deleted cart');
    });
  },
  errorHandling: async function (execFunc) {
    try {
      await client.connect();
      const database = client.db(dbName);
      const cart = database.collection('cart');
      await execFunc(cart);
    } catch (e) {
      console.log('An Error Occured');
      console.log(e);
    } finally {
      console.log('Closing Connection');
      console.log('================================');
      await client.close();
    }
  },
};
