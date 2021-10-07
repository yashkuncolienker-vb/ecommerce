const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'ecommerce';
const client = new MongoClient(url);

module.exports = {
  create: async function (dataToInsert) {
    await this.errorHandling(async (categories) => {
      if (Array.isArray(dataToInsert)) {
        await categories.insertMany(dataToInsert);
      } else {
        await categories.insertOne(dataToInsert);
      }
      console.log('Successfully written role');
    });
  },
  read: async function (query) {
    await this.errorHandling(async (categories) => {
      const res = await categories.find(query).toArray();
      console.log('Successfully found categories');
      console.log(res);
    });
  },
  update: async function (fromData, toData) {
    await this.errorHandling(async (categories) => {
      await categories.updateMany(fromData, { $set: toData });
      console.log('Successfully updated categories');
    });
  },
  delete: async function (dataToDelete) {
    await this.errorHandling(async (categories) => {
      await categories.deleteMany(dataToDelete);
      console.log('Successfully deleted categories');
    });
  },
  errorHandling: async function (execFunc) {
    try {
      await client.connect();
      const database = client.db(dbName);
      const categories = database.collection('categories');
      await execFunc(categories);
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
