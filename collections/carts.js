const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
const client = new MongoClient(url);

module.exports = {
  create: async function (dataToInsert) {
    await this.errorHandling(async (carts) => {
      if (Array.isArray(dataToInsert)) {
        await carts.insertMany(dataToInsert);
      } else {
        await carts.insertOne(dataToInsert);
      }
      console.log('Successfully written carts');
    });
  },
  read: async function (query) {
    await this.errorHandling(async (carts) => {
      const res = await carts.find(query).toArray();
      console.log('Successfully found carts');
      console.log(res);
    });
  },
  update: async function (fromData, toData) {
    await this.errorHandling(async (carts) => {
      await carts.updateMany(fromData, { $set: toData });
      console.log('Successfully updated carts');
    });
  },
  delete: async function (dataToDelete) {
    await this.errorHandling(async (carts) => {
      await carts.deleteMany(dataToDelete);
      console.log('Successfully deleted carts');
    });
  },
  errorHandling: async function (execFunc) {
    try {
      await client.connect();
      const database = client.db(dbName);
      const carts = database.collection('carts');
      await execFunc(carts);
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
