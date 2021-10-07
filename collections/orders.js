const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
const client = new MongoClient(url);

module.exports = {
  create: async function (dataToInsert) {
    await this.errorHandling(async (orders) => {
      if (Array.isArray(dataToInsert)) {
        await orders.insertMany(dataToInsert);
      } else {
        await orders.insertOne(dataToInsert);
      }
      console.log('Successfully written orders');
    });
  },
  read: async function (query) {
    await this.errorHandling(async (orders) => {
      const res = await orders.find(query).toArray();
      console.log('Successfully found orders');
      console.log(res);
    });
  },
  update: async function (fromData, toData) {
    await this.errorHandling(async (orders) => {
      await orders.updateMany(fromData, { $set: toData });
      console.log('Successfully updated orders');
    });
  },
  delete: async function (dataToDelete) {
    await this.errorHandling(async (orders) => {
      await orders.deleteMany(dataToDelete);
      console.log('Successfully deleted orders');
    });
  },
  errorHandling: async function (execFunc) {
    try {
      await client.connect();
      const database = client.db(dbName);
      const orders = database.collection('orders');
      await execFunc(orders);
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
